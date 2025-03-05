export interface WasteItem {
  item: string;
  quantity: number;
  weight: number;
  totalWaste: number;
}

export interface DrugOption {
  name: string;
  doses: {
    dose: string;
    forms: {
      form: string;
      methods: string[];
    }[];
  }[];
}

interface WeightData {
  [key: string]: number;
}

async function loadWeights(): Promise<WeightData> {
  try {
    const response = await fetch('./data/weights-and-notes.csv');
    const csvText = await response.text();
    
    const rows = csvText.split('\n').map(row => 
      row.split(',').map(cell => cell.trim())
    );
    
    // Skip header row and create weight mapping
    const weights: WeightData = {};
    for (let i = 1; i < rows.length; i++) {
      const [item, weight] = rows[i];
      if (item && weight) {
        weights[item] = Number(weight);
      }
    }
    
    return weights;
  } catch (error) {
    console.error('Error loading weights:', error);
    return {};
  }
}

export async function getAvailableDrugs(): Promise<DrugOption[]> {
  try {
    const response = await fetch('./data/abx-waste-master-list.csv');
    const csvText = await response.text();
    
    const rows = csvText.split('\n').map(row => 
      row.split(',').map(cell => cell.trim())
    );
    
    // Skip header row
    const drugMap = new Map<string, Map<string, Map<string, Set<string>>>>();
    
    // Start from row 1 to skip header
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const drug = row[0]?.trim();
      const dose = row[1]?.trim();
      const minDose = row[3]?.trim();
      const maxDose = row[4]?.trim();
      const form = row[5]?.trim();
      const method = row[6]?.trim();
      
      // Only process fixed dose entries (empty min/max dose)
      if (drug && dose && form && method) {
        // Skip if both min and max dose are filled
        if (minDose && maxDose) continue;
        
        // Initialize drug if not exists
        if (!drugMap.has(drug)) {
          drugMap.set(drug, new Map());
        }
        
        const doseMap = drugMap.get(drug)!;
        
        // Initialize dose if not exists
        if (!doseMap.has(dose)) {
          doseMap.set(dose, new Map());
        }
        
        const formMap = doseMap.get(dose)!;
        
        // Initialize form if not exists
        if (!formMap.has(form)) {
          formMap.set(form, new Set());
        }
        
        // Add method to form
        formMap.get(form)!.add(method);
      }
    }
    
    // Convert the nested maps to DrugOption array
    const drugs: DrugOption[] = [];
    
    for (const [drugName, doseMap] of drugMap) {
      const doses = [];
      
      for (const [dose, formMap] of doseMap) {
        const forms = [];
        
        for (const [form, methods] of formMap) {
          forms.push({
            form,
            methods: Array.from(methods).sort()
          });
        }
        
        doses.push({
          dose,
          forms: forms.sort((a, b) => a.form.localeCompare(b.form))
        });
      }
      
      drugs.push({
        name: drugName,
        doses: doses.sort((a, b) => {
          // Extract numeric part for comparison
          const numA = parseFloat(a.dose.split('/')[0]);
          const numB = parseFloat(b.dose.split('/')[0]);
          return numA - numB;
        })
      });
    }
    
    return drugs.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error('Error loading available drugs:', error);
    return [];
  }
}

export async function getWasteItems(drug: string, dose: string, method: string): Promise<WasteItem[]> {
  try {
    // Load both data sources
    const [response, weights] = await Promise.all([
      fetch('./data/abx-waste-master-list.csv'),
      loadWeights()
    ]);
    
    const csvText = await response.text();
    
    // Parse CSV
    const rows = csvText.split('\n').map(row => 
      row.split(',').map(cell => cell.trim())
    );
    
    // Get headers (waste item names)
    const headers = rows[0];
    
    // Find matching row for the drug
    const matchingRows = rows.filter(row => 
      row[0]?.trim() === drug && 
      row[1]?.trim() === dose &&  // Fixed Dose column
      row[6]?.trim() === method   // How supplied column
    );
    
    if (!matchingRows.length) {
      throw new Error(`Data not found for ${drug} ${dose}mg with method: ${method}`);
    }

    const selectedRow = matchingRows[0];
    const wasteItems: WasteItem[] = [];
    
    // Start from column 7 (index 7) which is "Wrapping (Premix)"
    // Go through all waste items
    for (let i = 7; i < headers.length; i++) {
      const itemName = headers[i];
      const quantity = Number(selectedRow[i]) || 0;
      const weight = weights[itemName] || 0;
      
      // Include items that either have a quantity or a defined weight
      if (quantity > 0 || weight > 0) {
        wasteItems.push({
          item: itemName,
          quantity,
          weight,
          totalWaste: quantity * weight
        });
      }
    }

    return wasteItems;
  } catch (error) {
    console.error('Error calculating waste:', error);
    throw error;
  }
} 
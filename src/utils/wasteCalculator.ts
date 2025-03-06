export interface WasteItem {
  item: string;
  quantity: number;
  weight: number;
  totalWaste: number;
}

export interface DrugDoseRange {
  minDose: number;
  maxDose: number;
  form: string;
  methods: string[];
}

export interface DrugOption {
  name: string;
  doses: {
    dose: string | null;  // null for variable doses
    doseRanges?: DrugDoseRange[];  // present for variable doses, now an array of ranges
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
        weights[item.toLowerCase()] = Number(weight);
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
    const drugMap = new Map<string, Map<string | null, Map<string, Set<string>>>>();
    
    // Start from row 1 to skip header
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const drug = row[0]?.trim();
      const fixedDose = row[1]?.trim();
      const minDose = row[2]?.trim();
      const maxDose = row[3]?.trim();
      const form = row[5]?.trim();
      const method = row[6]?.trim();
      
      if (drug && form && method) {
        // Initialize drug if not exists
        if (!drugMap.has(drug)) {
          drugMap.set(drug, new Map());
        }
        
        const doseMap = drugMap.get(drug)!;
        
        // Handle fixed dose case
        if (fixedDose && !(minDose && maxDose)) {
          if (!doseMap.has(fixedDose)) {
            doseMap.set(fixedDose, new Map());
          }
          const formMap = doseMap.get(fixedDose)!;
          if (!formMap.has(form)) {
            formMap.set(form, new Set());
          }
          formMap.get(form)!.add(method);
        }
        // Handle variable dose case
        else if (minDose && maxDose) {
          const doseKey = null; // Use null to represent variable dose
          if (!doseMap.has(doseKey)) {
            doseMap.set(doseKey, new Map());
          }
          const formMap = doseMap.get(doseKey)!;
          if (!formMap.has(form)) {
            formMap.set(form, new Set());
          }
          formMap.get(form)!.add(method);
        }
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
        
        // If dose is null, find all distinct dose ranges from the CSV
        if (dose === null) {
          const drugRows = rows.filter(row => 
            row[0]?.trim() === drugName && 
            row[2]?.trim() &&
            row[3]?.trim()
          );
          
          if (drugRows.length > 0) {
            // Group rows by form
            const formGroups = new Map<string, { minDose: number, maxDose: number, methods: Set<string> }[]>();
            
            for (const row of drugRows) {
              const form = row[5]?.trim() || '';
              const minDoseStr = row[2]?.trim() || '0';
              const maxDoseStr = row[3]?.trim() || '0';
              const method = row[6]?.trim() || '';
              
              // Parse doses as numbers and validate
              const minDose = parseFloat(minDoseStr);
              const maxDose = parseFloat(maxDoseStr);
              
              // Skip invalid rows or rows with NaN values
              if (isNaN(minDose) || isNaN(maxDose) || !form || !method) continue;
              
              if (!formGroups.has(form)) {
                formGroups.set(form, []);
              }
              
              const ranges = formGroups.get(form)!;
              let found = false;
              
              // Try to find an existing range that matches
              for (const range of ranges) {
                if (range.minDose === minDose && range.maxDose === maxDose) {
                  range.methods.add(method);
                  found = true;
                  break;
                }
              }
              
              // If no matching range found, create a new one
              if (!found) {
                ranges.push({
                  minDose,
                  maxDose,
                  methods: new Set([method])
                });
              }
            }
            
            // Convert the ranges to the final format
            const doseRanges: DrugDoseRange[] = [];
            
            for (const [form, ranges] of formGroups) {
              // Sort ranges by minDose
              ranges.sort((a, b) => a.minDose - b.minDose);
              
              // Convert each range directly without merging
              for (const range of ranges) {
                doseRanges.push({
                  minDose: range.minDose,
                  maxDose: range.maxDose,
                  form,
                  methods: Array.from(range.methods).sort()
                });
              }
            }
            
            // Sort all ranges by minDose
            doseRanges.sort((a, b) => a.minDose - b.minDose);
            
            doses.push({
              dose: null,
              doseRanges,
              forms: forms.sort((a, b) => a.form.localeCompare(b.form))
            });
          }
        } else {
          doses.push({
            dose,
            forms: forms.sort((a, b) => a.form.localeCompare(b.form))
          });
        }
      }
      
      // Sort doses: fixed doses first (numerically), then variable dose
      drugs.push({
        name: drugName,
        doses: doses.sort((a, b) => {
          if (a.dose === null) return 1;
          if (b.dose === null) return -1;
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

export async function getWasteItems(drug: string, dose: string | number, method: string): Promise<WasteItem[]> {
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
    const matchingRows = rows.filter(row => {
      const drugMatch = row[0]?.trim() === drug;
      const methodMatch = row[6]?.trim() === method;
      
      // For fixed doses, match exactly
      if (typeof dose === 'string') {
        return drugMatch && row[1]?.trim() === dose && methodMatch;
      }
      
      // For variable doses, check if within min/max range
      const minDose = parseFloat(row[2]?.trim() || '0');
      const maxDose = parseFloat(row[3]?.trim() || '0');
      return drugMatch && dose >= minDose && dose <= maxDose && methodMatch;
    });
    
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
      const weight = weights[itemName.toLowerCase()] || 0;
      
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
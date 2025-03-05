import { read, utils } from 'xlsx';

export interface WasteItem {
  item: string;
  quantity: number;
  weight: number;
  totalWaste: number;
}

export async function getAmpicillinWaste(): Promise<WasteItem[]> {
  try {
    const response = await fetch('/data/antibiotic-data.xlsx');
    const arrayBuffer = await response.arrayBuffer();
    const workbook = read(arrayBuffer);

    // Get main sheet and weights sheet
    const mainSheet = workbook.Sheets[workbook.SheetNames[0]];
    const weightsSheet = workbook.Sheets['Weights and Notes'];

    // Get row 21 (Ampicillin)
    const data = utils.sheet_to_json(mainSheet, { header: 'A' });
    const ampicillinRow = data[20]; // 0-based index

    // Get weights data
    const weightsData = utils.sheet_to_json(weightsSheet);

    // Map column letters to their corresponding waste items
    const columnMapping = {
      'H': 'Wrapping (Premix)',
      'I': 'Wrapping (50mL Duplex)',
      'J': 'Vial',
      'K': 'Vial Cap',
      'L': 'Syringe',
      'M': 'Needle',
      'N': 'Needle Cap',
      'O': 'Needle Hub',
      'P': '5-micron filter',
      'Q': '50mL IVPB',
      'R': '100mL IVPB',
      'S': '150mL IVPB',
      'T': '200mL',
      'U': '250mL IVPB',
      'V': '300mL IVPB',
      'W': '500mL IVPB',
      'X': '1000mL IVPB',
      'Y': 'IV Tubing',
      'Z': 'Flush',
      'AA': 'Admin Cup',
      'AB': 'Bulk Bottle Qty (tabs)',
      'AC': 'Bulk Bottle Qty (Cap)',
      'AD': 'Bag Label',
      'AE': 'Unit Dose Ziploc',
      'AF': 'Blister Card',
      'AG': 'Oral Syringe',
      'AH': 'Syringe cap',
      'AI': 'Suspension Bottle (Stock)'
    };

    // Process each column
    const wasteItems: WasteItem[] = [];
    for (const [col, itemName] of Object.entries(columnMapping)) {
      const quantity = Number(ampicillinRow[col]) || 0;
      const weightInfo = weightsData.find(w => w.Item === itemName);
      const weight = weightInfo ? Number(weightInfo.Weight) || 0 : 0;
      
      // Include items with quantity > 0 or if they exist in the weights table
      if (quantity > 0 || weightInfo) {
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
    console.error('Error reading Excel file:', error);
    return [];
  }
} 
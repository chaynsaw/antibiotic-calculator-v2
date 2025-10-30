import { ChevronDown, Trash2, Edit, Fuel, Factory, Smartphone } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface EnvImpactCalculatorProps {
  onBackToHome: () => void;
}

interface DrugOption {
  name: string;
}

interface EnvironmentalImpact {
  co2ePerDose: number;
  co2ePerDOT: number;
  weightPerDose: number;
  weightPerDOT: number;
  waste: number;
  co2e: number;
  distance: number;
  gas: number;
  coal: number;
  phones: number;
  distanceComparison: string;
}

interface SavedRegimen {
  id: number;
  drug: string;
  method: string;
  disposalMethod: string;
  dose: string;
  form: string;
  days: number;
  frequency: string;
  environmentalImpact: EnvironmentalImpact;
}

export function EnvImpactCalculator({ onBackToHome: _ }: EnvImpactCalculatorProps) {
  const [drugs, setDrugs] = useState<DrugOption[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDrug, setSelectedDrug] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [selectedMethod, setSelectedMethod] = useState("IV");
  const [selectedDisposalMethod, setSelectedDisposalMethod] = useState("Landfill");
  const [selectedDose, setSelectedDose] = useState("");
  const [availableDoses, setAvailableDoses] = useState<string[]>([]);
  const [selectedForm, setSelectedForm] = useState("");
  const [availableForms, setAvailableForms] = useState<string[]>([]);
  const [days, setDays] = useState<number>(1);
  const [selectedFrequency, setSelectedFrequency] = useState<string>("");
  const [environmentalImpact, setEnvironmentalImpact] = useState<EnvironmentalImpact | null>(null);
  const [savedRegimens, setSavedRegimens] = useState<SavedRegimen[]>([]);
  const [editingRegimenId, setEditingRegimenId] = useState<number | null>(null);
  
  // Clear all form fields
  const clearAllFields = () => {
    setSelectedDrug("");
    setSearchTerm("");
    setSelectedDose("");
    setAvailableDoses([]);
    setSelectedForm("");
    setAvailableForms([]);
    setDays(1);
    setSelectedFrequency("");
    setSelectedDisposalMethod("Landfill");
    setEnvironmentalImpact(null);
  };

  // Save current regimen
  const saveCurrentRegimen = () => {
    if (!environmentalImpact || !selectedDrug) return;

    const regimen: SavedRegimen = {
      id: Date.now(),
      drug: selectedDrug,
      method: selectedMethod,
      disposalMethod: selectedDisposalMethod,
      dose: selectedDose,
      form: selectedForm,
      days,
      frequency: selectedFrequency,
      environmentalImpact: { ...environmentalImpact },
    };

    setSavedRegimens((prev) => [...prev, regimen]);
    clearAllFields();
  };

  // Delete a saved regimen
  const deleteRegimen = (id: number) => {
    setSavedRegimens((prev) => prev.filter((r) => r.id !== id));
  };

  // Start editing a saved regimen
  const startEditing = (regimenId: number) => {
    setEditingRegimenId(regimenId);
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingRegimenId(null);
  };

  // Update a saved regimen
  const updateRegimen = (regimenId: number, updatedFields: Partial<SavedRegimen>) => {
    setSavedRegimens((prev) =>
      prev.map((regimen) =>
        regimen.id === regimenId ? { ...regimen, ...updatedFields } : regimen
      )
    );
    setEditingRegimenId(null);
  };

  // Start over - clear all saved regimens
  const startOver = () => {
    setSavedRegimens([]);
    clearAllFields();
  };

  // Calculate number of doses
  const calculateDoses = (days: number, frequency: string) => {
    if (!frequency) return days;
    const freqValue = parseFloat(frequency);
    if (!freqValue) return days;
    return Math.ceil(days * freqValue);
  };

  // Get frequency label
  const getFrequencyLabel = (value: string) => {
    const option = frequencyOptions.find((opt) => opt.value === value);
    return option?.label || "";
  };

  const [csvData, setCsvData] = useState<string[][]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isAutoSelectingDose = useRef<boolean>(false);

  // Frequency options with conversion values
  const frequencyOptions = [
    { label: "Every 4 hours (q4h)", value: "6" },
    { label: "Every 6 hours (q6h)", value: "4" },
    { label: "Every 8 hours (q8h)", value: "3" },
    { label: "Every 12 hours (q12h)", value: "2" },
    { label: "Every 24 hours (q24h)", value: "1" },
    { label: "Every 48 hours (q48h)", value: "0.5" }
  ];

  // Disposal method options
  const disposalMethodOptions = [
    { label: "Landfill", value: "Landfill" },
    { label: "Incinerate", value: "Incinerate" }
  ];

  // Load drug names from CSV
  useEffect(() => {
    const fetchDrugNames = async () => {
      try {
        const response = await fetch('./data/env_impact_lookup_tables.csv');
        const csvText = await response.text();
        
        // Parse CSV
        const rows = csvText.split('\n').map(row => 
          row.split(',').map(cell => cell.trim().replace(/"/g, ''))
        );
        
        // Store the full CSV data for lookups
        setCsvData(rows);
        
        // Start from row 6 (index 5) and extract drug names from column A
        const drugNames: DrugOption[] = [];
        const drugNamesSet = new Set<string>();
        for (let i = 5; i < rows.length; i++) {
          const drugName = rows[i][0]; // Column A
          if (drugName && drugName.trim() !== '' && !drugNamesSet.has(drugName)) {
            drugNames.push({ name: drugName });
            drugNamesSet.add(drugName);
          }
        }
        
        setDrugs(drugNames);
      } catch (error) {
        console.error('Error loading drug names:', error);
      }
    };

    fetchDrugNames();
  }, []);

  // Filter drugs based on search term
  const filteredDrugs = drugs.filter(drug =>
    drug.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Load available doses for selected drug from second lookup table
  const loadAvailableDoses = (drugName: string) => {
    if (!csvData.length || !drugName) {
      setAvailableDoses([]);
      setSelectedDose("");
      return;
    }

    const doses: string[] = [];
    
    // Use second lookup table (column L)
    for (let i = 5; i < csvData.length; i++) {
      const row = csvData[i];
      const rowDrugName = row[8]; // Column I
      const dose = row[11]; // Column L
      
      if (rowDrugName === drugName && dose && dose.trim() !== '' && selectedDisposalMethod === row[10]) {
        doses.push(dose);
      }
    }
    
    setAvailableDoses(doses);
    setSelectedDose(""); // Reset selected dose when drug changes
  };

  // Load available forms for selected drug and dose from third lookup table
  const loadAvailableForms = (drugName: string, dose?: string, preserveFormSelection: boolean = false) => {
    if (!csvData.length || !drugName) {
      setAvailableForms([]);
      setSelectedForm("");
      return;
    }

    const forms: string[] = [];
    
    if (dose && dose.trim() !== '') {
      // If dose is selected, filter forms by both drug and dose
      for (let i = 5; i < csvData.length; i++) {
        const row = csvData[i];
        const rowDrugName = row[17]; // Column R
        const rowDose = row[20]; // Column U
        const form = row[21]; // Column V
        const rowDisposalMethod = row[19]; // Column T
        
        if (rowDrugName === drugName && rowDose === dose && rowDisposalMethod === selectedDisposalMethod&& form && form.trim() !== '') {
          forms.push(form);
        }
      }
    } else {
      // If no dose selected, show all forms for the drug
      for (let i = 5; i < csvData.length; i++) {
        const row = csvData[i];
        const rowDrugName = row[17]; // Column R
        const rowDisposalMethod = row[19]; // Column T
        const form = row[21]; // Column V
        
        if (rowDrugName === drugName && rowDisposalMethod === selectedDisposalMethod && form && form.trim() !== '') {
          forms.push(form);
        }
      }
    }
    
    // Remove duplicates and sort
    const uniqueForms = [...new Set(forms)].sort();
    setAvailableForms(uniqueForms);
    
    // Only reset form selection if not preserving it
    if (!preserveFormSelection) {
      setSelectedForm("");
    }
  };

  // Lookup distance comparison based on calculated distance
  const lookupDistanceComparison = (distance: number) => {
    if (!csvData.length) return "Unknown";
    
    // Look through the distance comparison data (columns AB, AC, AD)
    for (let i = 5; i < csvData.length; i++) {
      const row = csvData[i];
      const lowerRange = parseFloat(row[30]) || 0; // Column AE (Distance Lower Range)
      const upperRange = parseFloat(row[31]) || 0; // Column AF (Distance Upper Range)
      const comparison = row[32]; // Column AG (Comparable Distance)
      
      if (distance >= lowerRange && distance <= upperRange && comparison && comparison.trim() !== '') {
        return comparison;
      }
    }
    
    return "Distance exceeds comparison range";
  };


  // Lookup environmental impact data
  const lookupEnvironmentalImpact = (drugName: string, method: string, dose?: string, form?: string, disposalMethod?: string, daysParam?: number, frequencyParam?: string) => {
    if (!csvData.length) return null;

    let baseData = null;

    // If both form and dose are selected, use third table (columns T, U, V, W)
    if (form && form.trim() !== '' && dose && dose.trim() !== '') {
      for (let i = 5; i < csvData.length; i++) {
        const row = csvData[i];
        const rowDrugName = row[17]; // Column R
        const rowMethod = row[18]; // Column S
        const rowDose = row[20]; // Column U
        const rowForm = row[21]; // Column V
        const rowDisposalMethod = row[19]; // Column T
        
        if (rowDrugName === drugName && rowMethod === method && rowDose === dose && rowForm === form && rowDisposalMethod === disposalMethod) {
          baseData = {
            co2ePerDose: parseFloat(row[22]) || 0, // Column W
            co2ePerDOT: parseFloat(row[23]) || 0,  // Column X
            weightPerDose: parseFloat(row[24]) || 0, // Column Y
            weightPerDOT: parseFloat(row[25]) || 0   // Column Z
          };
          break;
        }
      }
    }
    // If only dose is selected, use second table (columns K, L, M, N)
    else if (dose && dose.trim() !== '') {
      for (let i = 5; i < csvData.length; i++) {
        const row = csvData[i];
        const rowDrugName = row[8]; // Column I
        const rowDisposalMethod = row[10]; // Column K
        const rowDose = row[11]; // Column L
        
        if (rowDrugName === drugName && rowDisposalMethod === disposalMethod && rowDose === dose) {
          baseData = {
            co2ePerDose: parseFloat(row[12]) || 0, // Column M
            co2ePerDOT: parseFloat(row[13]) || 0,  // Column N
            weightPerDose: parseFloat(row[14]) || 0, // Column O
            weightPerDOT: parseFloat(row[15]) || 0   // Column P
          };
          break;
        }
      }
    } else {
      // If no dose selected, use first table (columns C, D, E, F)
      for (let i = 5; i < csvData.length; i++) {
        const row = csvData[i];
        const rowDrugName = row[0]; // Column A
        const rowMethod = row[1]; // Column B
        const rowDisposalMethod = row[2]; // Column C
        
        if (rowDrugName === drugName && rowMethod === method && rowDisposalMethod === selectedDisposalMethod) {
          baseData = {
            co2ePerDose: parseFloat(row[3]) || 0, // Column C
            co2ePerDOT: parseFloat(row[4]) || 0,  // Column D
            weightPerDose: parseFloat(row[5]) || 0, // Column E
            weightPerDOT: parseFloat(row[6]) || 0   // Column F
          };
          break;
        }
      }
    }
    
    if (!baseData) return null;

    // Calculate additional values for basic case (when Dose, Form, and Frequency are empty)
    // Get frequency multiplier (1 if no frequency selected)
    const activeFrequency = frequencyParam !== undefined ? frequencyParam : selectedFrequency;
    const frequencyMultiplier = activeFrequency && activeFrequency.trim() !== '' ? parseFloat(activeFrequency) : 0;
    
    // Use effective days (minimum 1 for calculations)
    const effectiveDays = Math.max(daysParam !== undefined ? daysParam : days, 1);
    
    let waste, co2e;
    
    if (frequencyMultiplier !== 0) {
      waste = effectiveDays * baseData.weightPerDose * frequencyMultiplier; // Days x Column E value x Frequency
      co2e = effectiveDays * baseData.co2ePerDose * frequencyMultiplier; // Days x Column C x Frequency
    } else {
      waste = effectiveDays * baseData.weightPerDOT; // Days x Column F value x Frequency
      co2e = effectiveDays * baseData.co2ePerDOT; // Days x Column D x Frequency
    }
    const distance = (co2e) / 0.000391; // (Days x Column D) / 0.000391 (distance based on base CO2e)
    // Convert CO2e to equivalent gasoline consumed in liters.
    // EPA factor ~8.887e-3 metric tons CO2 per gallon gasoline burned.
    // First compute gallons, then convert to liters.
    const gas = (co2e / 0.00887) * 3.78541;
    const coal = co2e / 0.000907; // (Days * Column D * Frequency) / 0.000907
    const phones = co2e / 0.0000151; // (Days * Column D * Frequency) / 0.0000151
    const distanceComparison = lookupDistanceComparison(distance);

    return {
      ...baseData,
      waste: waste / 1000, // Convert grams to kilograms
      co2e,
      distance,
      gas,
      coal,
      phones,
      distanceComparison
    };
  };

  // Load doses and forms when drug is selected
  useEffect(() => {
    if (selectedDrug && csvData.length > 0) {
      loadAvailableDoses(selectedDrug);
      loadAvailableForms(selectedDrug, selectedDose);
    } else {
      setAvailableDoses([]);
      setSelectedDose("");
      setAvailableForms([]);
      setSelectedForm("");
    }
  }, [selectedDrug, selectedDisposalMethod, csvData]);

  // Load forms when dose changes (but not when auto-selecting from form)
  useEffect(() => {
    if (selectedDrug && csvData.length > 0 && !isAutoSelectingDose.current) {
      // If dose is emptied, clear the form as well
      if (!selectedDose || selectedDose.trim() === '') {
        setSelectedForm("");
        loadAvailableForms(selectedDrug, selectedDose);
        return;
      }
      
      // If there's an existing form selection, check if it's compatible with the new dose
      if (selectedForm && selectedForm.trim() !== '') {
        // Check if the current form is compatible with the new dose
        let isCompatible = false;
        for (let i = 5; i < csvData.length; i++) {
          const row = csvData[i];
          const rowDrugName = row[15]; // Column P
          const rowDose = row[17]; // Column R
          const rowForm = row[18]; // Column S
          
          if (rowDrugName === selectedDrug && rowDose === selectedDose && rowForm === selectedForm) {
            isCompatible = true;
            break;
          }
        }
        
        if (isCompatible) {
          // Form is compatible with the new dose, just reload forms
          loadAvailableForms(selectedDrug, selectedDose, true);
        } else {
          // Form is not compatible, try to find a dose that works with the current form
          let foundCompatibleDose = false;
          for (let i = 5; i < csvData.length; i++) {
            const row = csvData[i];
            const rowDrugName = row[15]; // Column P
            const rowDose = row[17]; // Column R
            const rowForm = row[18]; // Column S
            
            if (rowDrugName === selectedDrug && rowForm === selectedForm && rowDose && rowDose.trim() !== '') {
              // Found a compatible dose for the current form
              isAutoSelectingDose.current = true;
              setSelectedDose(rowDose);
              loadAvailableForms(selectedDrug, rowDose, true);
              foundCompatibleDose = true;
              setTimeout(() => {
                isAutoSelectingDose.current = false;
              }, 100);
              break;
            }
          }
          
          if (!foundCompatibleDose) {
            // No compatible dose found, clear the form
            loadAvailableForms(selectedDrug, selectedDose);
          }
        }
      } else {
        // No existing form, just reload normally
        loadAvailableForms(selectedDrug, selectedDose);
      }
    }
  }, [selectedDose, csvData]);

  // Auto-select dose when form is selected (if no dose is currently selected)
  useEffect(() => {
    if (selectedForm && selectedForm.trim() !== '' && selectedDrug && (!selectedDose || selectedDose.trim() === '') && csvData.length > 0) {
      isAutoSelectingDose.current = true;
      
      // Find the first available dose for this drug-form combination
      for (let i = 5; i < csvData.length; i++) {
        const row = csvData[i];
        const rowDrugName = row[15]; // Column P
        const rowForm = row[18]; // Column S
        const rowDose = row[17]; // Column R
        
        if (rowDrugName === selectedDrug && rowForm === selectedForm && rowDose && rowDose.trim() !== '') {
          setSelectedDose(rowDose);
          // Reload forms with the new dose but preserve the form selection
          loadAvailableForms(selectedDrug, rowDose, true);
          break;
        }
      }
      
      // Reset the flag after a short delay
      setTimeout(() => {
        isAutoSelectingDose.current = false;
      }, 100);
    }
  }, [selectedForm, selectedDrug, selectedDose, csvData]);

  // Perform lookup when drug, method, dose, form, days, or frequency changes
  useEffect(() => {
    if (selectedDrug && selectedMethod && csvData.length > 0) {
      const impact = lookupEnvironmentalImpact(selectedDrug, selectedMethod, selectedDose, selectedForm, selectedDisposalMethod);
      setEnvironmentalImpact(impact);
    } else {
      setEnvironmentalImpact(null);
    }
  }, [selectedDrug, selectedMethod, selectedDose, selectedForm, selectedDisposalMethod, days, selectedFrequency, csvData]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Calculate aggregated environmental impact from saved regimens and current calculation
  let totalWaste = 0;
  let totalCO2e = 0;
  let totalDistance = 0;
  let totalGas = 0;
  let totalCoal = 0;
  let totalPhones = 0;
  
  // Add impact from saved regimens
  savedRegimens.forEach((regimen) => {
    totalWaste += regimen.environmentalImpact.waste;
    totalCO2e += regimen.environmentalImpact.co2e;
    totalDistance += regimen.environmentalImpact.distance;
    totalGas += regimen.environmentalImpact.gas;
    totalCoal += regimen.environmentalImpact.coal;
    totalPhones += regimen.environmentalImpact.phones;
  });
  
  // Add current impact if it exists
  if (environmentalImpact) {
    totalWaste += environmentalImpact.waste;
    totalCO2e += environmentalImpact.co2e;
    totalDistance += environmentalImpact.distance;
    totalGas += environmentalImpact.gas;
    totalCoal += environmentalImpact.coal;
    totalPhones += environmentalImpact.phones;
  }
  
  const aggregatedImpact = {
    waste: totalWaste,
    co2e: totalCO2e,
    distance: totalDistance,
    gas: totalGas,
    coal: totalCoal,
    phones: totalPhones,
    distanceComparison: lookupDistanceComparison(totalDistance)
  };

  // Map distance comparison labels to illustrative image URLs
  const comparisonImageMap: Record<string, string> = {
    // Use a single image for any football-field comparisons for now
    football: './data/images/picture1.png',
  };

  const getComparisonImageUrl = (comparisonLabel?: string): string | null => {
    if (!comparisonLabel) return null;
    const normalized = comparisonLabel.toLowerCase();
    // If label references football fields, return picture1
    if (normalized.includes('football')) return comparisonImageMap.football;
    return null;
  };

  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-900 min-h-screen text-white">
      <main className="px-6 md:px-12 pb-16">
        <div className="max-w-4xl mx-auto">
          <header className="pt-8 pb-4">
            <div className="flex items-center space-x-2 mb-2">
              <h1 className="text-4xl font-bold tracking-tight">
                Environmental Impact Calculator
              </h1>
            </div>
            <p className="text-slate-300 text-lg max-w-4xl">
              A tool to help you calculate and compare environmental impact of antibiotic regimens.
            </p>
          </header>
          <div className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-slate-600">
            <div className="space-y-4 mb-8">
              {/* First row: Antibiotic, Disposal Method */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Antibiotic
                  </label>
                <div className="relative space-y-2">
                  <div className="relative" ref={dropdownRef}>
                    <div className="relative">
                      <input
                        type="text"
                        id="drug"
                        value={searchTerm}
                        onChange={(e) => {
                          setSearchTerm(e.target.value);
                          setIsDropdownOpen(true);
                          setHighlightedIndex(0);
                        }}
                        onFocus={() => {
                          setIsDropdownOpen(true);
                          setHighlightedIndex(0);
                        }}
                        onBlur={() => {
                          // Add small delay to allow click events to process first
                          setTimeout(() => {
                            setIsDropdownOpen(false);
                          }, 150);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "ArrowDown") {
                            e.preventDefault();
                            setHighlightedIndex((prev) =>
                              Math.min(prev + 1, filteredDrugs.length - 1)
                            );
                          } else if (e.key === "ArrowUp") {
                            e.preventDefault();
                            setHighlightedIndex((prev) =>
                              Math.max(prev - 1, 0)
                            );
                          } else if (e.key === "Enter") {
                            if (filteredDrugs.length > 0 && filteredDrugs[highlightedIndex]) {
                              const drug = filteredDrugs[highlightedIndex];
                              setSelectedDrug(drug.name);
                              setSearchTerm(drug.name);
                              setIsDropdownOpen(false);
                            }
                          }
                        }}
                        className="appearance-none bg-slate-800 border border-slate-600 text-white py-3 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search or select antibiotic..."
                        autoComplete="off"
                        spellCheck={false}
                      />
                      {searchTerm && (
                        <button
                          type="button"
                          onClick={() => {
                            setSearchTerm("");
                            setSelectedDrug("");
                          }}
                          className="absolute inset-y-0 right-8 flex items-center px-2 focus:outline-none text-gray-400 hover:text-white"
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
                      >
                        <ChevronDown className="h-4 w-4 text-gray-400" aria-hidden="true" />
                      </button>
          </div>
          
                    {isDropdownOpen && (
                      <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {filteredDrugs.length === 0 ? (
                          <div className="relative cursor-default select-none py-2 px-3 text-gray-500">
                            No antibiotics found
                          </div>
                        ) : (
                          filteredDrugs.map((drug, idx) => (
                            <div
                              key={drug.name}
                              className={`relative cursor-pointer select-none py-2 pl-3 pr-9 ${
                                idx === highlightedIndex
                                  ? "bg-blue-600 text-white"
                                  : "text-gray-900 hover:bg-blue-50"
                              }`}
                              onClick={() => {
                                setSelectedDrug(drug.name);
                                setSearchTerm(drug.name);
                                setIsDropdownOpen(false);
                                setHighlightedIndex(0);
                              }}
                            >
                              {drug.name}
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                </div>
        </div>

              <div className="relative">
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Disposal Method
                </label>
                <div className="relative">
                  <select
                    value={selectedDisposalMethod}
                    onChange={(e) => setSelectedDisposalMethod(e.target.value)}
                    className="appearance-none bg-slate-800 border border-slate-600 text-white py-3 px-4 pr-8 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {disposalMethodOptions.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <ChevronDown size={18} className="text-slate-400" />
                  </div>
                </div>
              </div>
          </div>
          
              {/* Second row: Dose (optional), Administration Method */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Dose (optional)
                  </label>
                  <div className="relative">
                    <select
                      value={selectedDose}
                      onChange={(e) => setSelectedDose(e.target.value)}
                      disabled={availableDoses.length === 0}
                      className="appearance-none bg-slate-800 border border-slate-600 text-white py-3 px-4 pr-8 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Select dose...</option>
                      {availableDoses.map((dose, index) => (
                        <option key={index} value={dose}>
                          {dose}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <ChevronDown size={18} className="text-slate-400" />
                    </div>
                  </div>
            </div>
            
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Administration Method
                  </label>
                  <div className="relative">
                    <select
                      value={selectedMethod}
                      onChange={(e) => setSelectedMethod(e.target.value)}
                      className="appearance-none bg-slate-800 border border-slate-600 text-white py-3 px-4 pr-8 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="IV">IV</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <ChevronDown size={18} className="text-slate-400" />
                    </div>
                  </div>
            </div>
            </div>
            
              {/* Third row: Form (Optional), Days */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Form (optional)
                  </label>
                  <div className="relative">
                    <select
                      value={selectedForm}
                      onChange={(e) => setSelectedForm(e.target.value)}
                      disabled={availableForms.length === 0}
                      className="appearance-none bg-slate-800 border border-slate-600 text-white py-3 px-4 pr-8 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Select form...</option>
                      {availableForms.map((form, index) => (
                        <option key={index} value={form}>
                          {form}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <ChevronDown size={18} className="text-slate-400" />
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Days
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={days}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === '') {
                        setDays(0); // Allow empty value temporarily
                      } else {
                        const numValue = parseInt(value);
                        setDays(numValue || 0);
                      }
                    }}
                    onBlur={(e) => {
                      const value = parseInt(e.target.value);
                      if (!value || value < 1) {
                        setDays(1);
                      }
                    }}
                    className="bg-slate-800 border border-slate-600 text-white py-3 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="1"
                  />
                </div>
            </div>
            
            {/* Fourth row: Frequency (Optional) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Frequency (optional)
                </label>
                <div className="relative">
                  <select
                    value={selectedFrequency}
                    onChange={(e) => setSelectedFrequency(e.target.value)}
                    className="appearance-none bg-slate-800 border border-slate-600 text-white py-3 px-4 pr-8 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select frequency...</option>
                    {frequencyOptions.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <ChevronDown size={18} className="text-slate-400" />
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          
          {/* Clear Sheet and Save Regimen Buttons */}
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={clearAllFields}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors duration-200 font-medium"
            >
              Clear Sheet
            </button>
            <button
              onClick={saveCurrentRegimen}
              disabled={!selectedDrug || !environmentalImpact}
              className="px-6 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-md transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Save Regimen
            </button>
          </div>

          {/* Saved Regimens Display */}
          {savedRegimens.length > 0 && (
            <div className="mt-8 bg-slate-700/50 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-slate-600">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-white">Saved Regimens</h2>
                <button
                  onClick={startOver}
                  className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors duration-200 font-medium"
                >
                  Start over
                </button>
              </div>
              
              <div className="space-y-3">
                {savedRegimens.map((regimen, index) => {
                  const isEditing = editingRegimenId === regimen.id;
                  const doses = calculateDoses(regimen.days, regimen.frequency);
                  const frequencyLabel = getFrequencyLabel(regimen.frequency);
                  
                  // Format the dose/form display
                  let doseFormDisplay = "";
                  if (regimen.dose && regimen.form) {
                    doseFormDisplay = ` (${regimen.dose}/${regimen.form})`;
                  } else if (regimen.dose) {
                    doseFormDisplay = ` (${regimen.dose})`;
                  } else if (regimen.form) {
                    doseFormDisplay = ` (${regimen.form})`;
                  }
                  
                  return (
                    <div key={regimen.id}>
                      {/* Regimen Row */}
                      <div
                        className="bg-slate-800/80 rounded-lg p-4 flex items-center justify-between hover:bg-slate-750/80 transition-colors duration-150"
                      >
                        <div className="flex-1">
                          <p className="text-white font-medium">
                            {index + 1}. {regimen.method} {regimen.drug}
                            {regimen.frequency && ` ${frequencyLabel}`}
                            {doseFormDisplay} x {doses} doses
                          </p>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => isEditing ? cancelEditing() : startEditing(regimen.id)}
                            className="text-blue-500 hover:text-blue-600 p-2 transition-colors duration-150"
                            aria-label="Edit regimen"
                          >
                            <Edit size={20} />
                          </button>
                          <button
                            onClick={() => deleteRegimen(regimen.id)}
                            className="text-orange-500 hover:text-orange-600 p-2 transition-colors duration-150"
                            aria-label="Delete regimen"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>
                      
                      {/* Editable Form (Dropdown) */}
                      {isEditing && (
                        <RegimenEditForm
                          regimen={regimen}
                          drugs={drugs}
                          frequencyOptions={frequencyOptions}
                          disposalMethodOptions={disposalMethodOptions}
                          csvData={csvData}
                          onUpdate={(updatedFields) => updateRegimen(regimen.id, updatedFields)}
                          onCancel={cancelEditing}
                          lookupEnvironmentalImpact={lookupEnvironmentalImpact}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          {/* Environmental Impact Results */}
          {(savedRegimens.length > 0 || environmentalImpact) && (
            <div className="mt-8 bg-slate-800/80 rounded-lg p-6 border border-slate-700">
              <h2 className="text-xl font-semibold mb-4 text-white">
                Environmental Impact Results
                {(savedRegimens.length > 0 && environmentalImpact) && (
                  <span className="text-base font-normal text-slate-400 ml-2">
                    (Aggregated from {savedRegimens.length + 1} {savedRegimens.length === 0 ? 'regimen' : 'regimens'})
                  </span>
                )}
                {savedRegimens.length > 0 && !environmentalImpact && (
                  <span className="text-base font-normal text-slate-400 ml-2">
                    (From {savedRegimens.length} saved {savedRegimens.length === 1 ? 'regimen' : 'regimens'})
                  </span>
                )}
              </h2>
              {selectedDrug && environmentalImpact && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-slate-300 mb-3">Base Values</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-slate-300 mb-2">CO2e per Dose</h4>
                      <p className="text-xl font-bold text-white">
                        {environmentalImpact.co2ePerDose.toExponential(3)} t
                      </p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-slate-300 mb-2">CO2e per DOT</h4>
                      <p className="text-xl font-bold text-white">
                        {environmentalImpact.co2ePerDOT.toExponential(3)} t
                      </p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-slate-300 mb-2">Weight per Dose</h4>
                      <p className="text-xl font-bold text-white">
                        {environmentalImpact.weightPerDose.toFixed(3)} g
                      </p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-slate-300 mb-2">Weight per DOT</h4>
                      <p className="text-xl font-bold text-white">
                        {environmentalImpact.weightPerDOT.toFixed(3)} g
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Calculated Values */
              }
              <div>
                <h3 className="text-lg font-medium text-slate-300 mb-3">
                  Total Calculated Impact
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-slate-300 mb-2">Total Waste Generated</h4>
                    <p className="text-xl font-bold text-white">
                      {aggregatedImpact.waste.toFixed(3)} kg
                    </p>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-slate-300 mb-2">Total CO2 Equivalent Emissions</h4>
                    <p className="text-xl font-bold text-white">
                      {aggregatedImpact.co2e.toExponential(3)} t
                    </p>
                  </div>
                </div>
              </div>

              {/* Equivalencies */}
              <div className="mt-6">
                <h3 className="text-lg font-medium text-slate-300 mb-3">
                  <a
                    href="https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator-calculations-and-references"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Equivalent to Emissions from:
                  </a>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-slate-300 mb-2">Gas Consumed</h4>
                        <p className="text-xl font-bold text-white">
                          {aggregatedImpact.gas.toFixed(2)} L
                        </p>
                      </div>
                      <Fuel size={40} className="text-slate-400" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-slate-300 mb-2">Coal Burned</h4>
                        <p className="text-xl font-bold text-white">
                          {aggregatedImpact.coal.toFixed(3)} kg
                        </p>
                      </div>
                      <Factory size={40} className="text-slate-400" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-slate-300 mb-2">Number of Phones Charged</h4>
                        <p className="text-xl font-bold text-white">
                          {aggregatedImpact.phones.toFixed(0)}
                        </p>
                      </div>
                      <Smartphone size={40} className="text-slate-400" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Distance Comparison */}
              <div className="mt-6">
                <h3 className="text-lg font-medium text-slate-300 mb-3">
                  <a
                    href="https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator-calculations-and-references"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Equivalent to Emissions from Distance Driven:
                  </a>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-slate-300 mb-2">Distance Driven</h4>
                    <p className="text-xl font-bold text-white">
                      {aggregatedImpact.distance.toFixed(1)} mi
                    </p>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4 md:col-span-2">
                    <h4 className="text-sm font-medium text-slate-300 mb-2">Comparable Distance</h4>
                    <p className="text-xl font-bold text-white">
                      {aggregatedImpact.distanceComparison}
                    </p>
                    <p className="text-sm text-slate-400 mt-1">
                      Based on {aggregatedImpact.distance.toFixed(1)} mi total distance
                    </p>
                    {(() => {
                      const imgUrl = getComparisonImageUrl(aggregatedImpact.distanceComparison);
                      return imgUrl ? (
                        <img
                          src={imgUrl}
                          alt="Illustration of comparable distance"
                          className="mt-3 w-full max-h-48 object-contain rounded"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            if (target.src.indexOf('/images/Picture1.png') === -1) {
                              target.src = '/images/Picture1.png';
                            }
                          }}
                        />
                      ) : null;
                    })()}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

// Component for editing a saved regimen
interface RegimenEditFormProps {
  regimen: SavedRegimen;
  drugs: DrugOption[];
  frequencyOptions: Array<{ label: string; value: string }>;
  disposalMethodOptions: Array<{ label: string; value: string }>;
  csvData: string[][];
  onUpdate: (updatedFields: Partial<SavedRegimen>) => void;
  onCancel: () => void;
  lookupEnvironmentalImpact: (drugName: string, method: string, dose?: string, form?: string, disposalMethod?: string, days?: number, frequency?: string) => EnvironmentalImpact | null;
}

function RegimenEditForm({
  regimen,
  drugs,
  frequencyOptions,
  disposalMethodOptions,
  csvData,
  onUpdate,
  onCancel,
  lookupEnvironmentalImpact,
}: RegimenEditFormProps) {
  const [editedDrug, setEditedDrug] = useState(regimen.drug);
  const [editedMethod, setEditedMethod] = useState(regimen.method);
  const [editedDisposalMethod, setEditedDisposalMethod] = useState(regimen.disposalMethod);
  const [editedDose, setEditedDose] = useState(regimen.dose);
  const [editedForm, setEditedForm] = useState(regimen.form);
  const [editedDays, setEditedDays] = useState(regimen.days);
  const [editedFrequency, setEditedFrequency] = useState(regimen.frequency);

  // Get available doses and forms for the selected drug
  const getAvailableDosesForDrug = (drugName: string) => {
    const doses: string[] = [];
    for (let i = 5; i < csvData.length; i++) {
      const row = csvData[i];
      const rowDrugName = row[8];
      const dose = row[11];
      if (rowDrugName === drugName && dose && dose.trim() !== '' && editedDisposalMethod === row[10]) {
        doses.push(dose);
      }
    }
    return doses;
  };

  const getAvailableFormsForDrug = (drugName: string, dose?: string) => {
    const forms: string[] = [];
    if (dose && dose.trim() !== '') {
      for (let i = 5; i < csvData.length; i++) {
        const row = csvData[i];
        const rowDrugName = row[17];
        const rowDose = row[20];
        const form = row[21];
        const rowDisposalMethod = row[19];
        if (rowDrugName === drugName && rowDose === dose && rowDisposalMethod === editedDisposalMethod && form && form.trim() !== '') {
          forms.push(form);
        }
      }
    }
    return [...new Set(forms)].sort();
  };

  const availableDoses = getAvailableDosesForDrug(editedDrug);
  const availableForms = getAvailableFormsForDrug(editedDrug, editedDose);

  const handleSave = () => {
    // Recalculate environmental impact based on edited fields
    const newEnvironmentalImpact = lookupEnvironmentalImpact(
      editedDrug,
      editedMethod,
      editedDose,
      editedForm,
      editedDisposalMethod,
      editedDays,
      editedFrequency
    );
    
    const updatedRegimen: Partial<SavedRegimen> = {
      drug: editedDrug,
      method: editedMethod,
      disposalMethod: editedDisposalMethod,
      dose: editedDose,
      form: editedForm,
      days: editedDays,
      frequency: editedFrequency,
      environmentalImpact: newEnvironmentalImpact || regimen.environmentalImpact,
    };
    onUpdate(updatedRegimen);
  };

  return (
    <div className="mt-3 bg-slate-700/50 rounded-lg p-4 border border-slate-600">
      <h3 className="text-lg font-semibold text-white mb-4">Edit Regimen</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Drug</label>
          <select
            value={editedDrug}
            onChange={(e) => setEditedDrug(e.target.value)}
            className="appearance-none bg-slate-800 border border-slate-600 text-white py-2 px-3 rounded-md w-full"
          >
            {drugs.map((drug) => (
              <option key={drug.name} value={drug.name}>
                {drug.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Disposal Method</label>
          <select
            value={editedDisposalMethod}
            onChange={(e) => setEditedDisposalMethod(e.target.value)}
            className="appearance-none bg-slate-800 border border-slate-600 text-white py-2 px-3 rounded-md w-full"
          >
            {disposalMethodOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Method</label>
          <select
            value={editedMethod}
            onChange={(e) => setEditedMethod(e.target.value)}
            className="appearance-none bg-slate-800 border border-slate-600 text-white py-2 px-3 rounded-md w-full"
          >
            <option value="IV">IV</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Dose (optional)</label>
          <select
            value={editedDose}
            onChange={(e) => setEditedDose(e.target.value)}
            disabled={availableDoses.length === 0}
            className="appearance-none bg-slate-800 border border-slate-600 text-white py-2 px-3 rounded-md w-full disabled:opacity-50"
          >
            <option value="">Select dose...</option>
            {availableDoses.map((dose) => (
              <option key={dose} value={dose}>
                {dose}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Form (optional)</label>
          <select
            value={editedForm}
            onChange={(e) => setEditedForm(e.target.value)}
            disabled={availableForms.length === 0}
            className="appearance-none bg-slate-800 border border-slate-600 text-white py-2 px-3 rounded-md w-full disabled:opacity-50"
          >
            <option value="">Select form...</option>
            {availableForms.map((form) => (
              <option key={form} value={form}>
                {form}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Days</label>
          <input
            type="number"
            min="1"
            value={editedDays}
            onChange={(e) => setEditedDays(parseInt(e.target.value) || 1)}
            className="bg-slate-800 border border-slate-600 text-white py-2 px-3 rounded-md w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Frequency (optional)</label>
          <select
            value={editedFrequency}
            onChange={(e) => setEditedFrequency(e.target.value)}
            className="appearance-none bg-slate-800 border border-slate-600 text-white py-2 px-3 rounded-md w-full"
          >
            <option value="">Select frequency...</option>
            {frequencyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-md transition-colors duration-200"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
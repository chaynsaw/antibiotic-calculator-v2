import { ChevronDown } from "lucide-react";
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

export function EnvImpactCalculator({ onBackToHome: _ }: EnvImpactCalculatorProps) {
  const [drugs, setDrugs] = useState<DrugOption[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDrug, setSelectedDrug] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [selectedMethod, setSelectedMethod] = useState("IV");
  const [selectedDose, setSelectedDose] = useState("");
  const [availableDoses, setAvailableDoses] = useState<string[]>([]);
  const [selectedForm, setSelectedForm] = useState("");
  const [availableForms, setAvailableForms] = useState<string[]>([]);
  const [days, setDays] = useState<number>(1);
  const [selectedFrequency, setSelectedFrequency] = useState<string>("");
  const [environmentalImpact, setEnvironmentalImpact] = useState<EnvironmentalImpact | null>(null);
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
        for (let i = 5; i < rows.length; i++) {
          const drugName = rows[i][0]; // Column A
          if (drugName && drugName.trim() !== '') {
            drugNames.push({ name: drugName });
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
    
    // Use second lookup table (column J)
    for (let i = 5; i < csvData.length; i++) {
      const row = csvData[i];
      const rowDrugName = row[7]; // Column H
      const dose = row[9]; // Column J
      
      if (rowDrugName === drugName && dose && dose.trim() !== '') {
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
        const rowDrugName = row[15]; // Column P
        const rowDose = row[17]; // Column R
        const form = row[18]; // Column S
        
        if (rowDrugName === drugName && rowDose === dose && form && form.trim() !== '') {
          forms.push(form);
        }
      }
    } else {
      // If no dose selected, show all forms for the drug
      for (let i = 5; i < csvData.length; i++) {
        const row = csvData[i];
        const rowDrugName = row[15]; // Column P
        const form = row[18]; // Column S
        
        if (rowDrugName === drugName && form && form.trim() !== '') {
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
      const lowerRange = parseFloat(row[27]) || 0; // Column AB (Distance Lower Range)
      const upperRange = parseFloat(row[28]) || 0; // Column AC (Distance Upper Range)
      const comparison = row[29]; // Column AD (Comparable Distance)
      
      if (distance >= lowerRange && distance <= upperRange && comparison && comparison.trim() !== '') {
        return comparison;
      }
    }
    
    return "Distance exceeds comparison range";
  };

  // Lookup environmental impact data
  const lookupEnvironmentalImpact = (drugName: string, method: string, dose?: string, form?: string) => {
    if (!csvData.length) return null;

    let baseData = null;

    // If both form and dose are selected, use third table (columns T, U, V, W)
    if (form && form.trim() !== '' && dose && dose.trim() !== '') {
      for (let i = 5; i < csvData.length; i++) {
        const row = csvData[i];
        const rowDrugName = row[15]; // Column P
        const rowMethod = row[16]; // Column Q
        const rowDose = row[17]; // Column R
        const rowForm = row[18]; // Column S
        
        if (rowDrugName === drugName && rowMethod === method && rowDose === dose && rowForm === form) {
          baseData = {
            co2ePerDose: parseFloat(row[19]) || 0, // Column T
            co2ePerDOT: parseFloat(row[20]) || 0,  // Column U
            weightPerDose: parseFloat(row[21]) || 0, // Column V
            weightPerDOT: parseFloat(row[22]) || 0   // Column W
          };
          break;
        }
      }
    }
    // If only dose is selected, use second table (columns K, L, M, N)
    else if (dose && dose.trim() !== '') {
      for (let i = 5; i < csvData.length; i++) {
        const row = csvData[i];
        const rowDrugName = row[7]; // Column H
        const rowMethod = row[8]; // Column I
        const rowDose = row[9]; // Column J
        
        if (rowDrugName === drugName && rowMethod === method && rowDose === dose) {
          baseData = {
            co2ePerDose: parseFloat(row[10]) || 0, // Column K
            co2ePerDOT: parseFloat(row[11]) || 0,  // Column L
            weightPerDose: parseFloat(row[12]) || 0, // Column M
            weightPerDOT: parseFloat(row[13]) || 0   // Column N
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
        
        if (rowDrugName === drugName && rowMethod === method) {
          baseData = {
            co2ePerDose: parseFloat(row[2]) || 0, // Column C
            co2ePerDOT: parseFloat(row[3]) || 0,  // Column D
            weightPerDose: parseFloat(row[4]) || 0, // Column E
            weightPerDOT: parseFloat(row[5]) || 0   // Column F
          };
          break;
        }
      }
    }
    
    if (!baseData) return null;

    // Calculate additional values for basic case (when Dose, Form, and Frequency are empty)
    // Get frequency multiplier (1 if no frequency selected)
    const frequencyMultiplier = selectedFrequency && selectedFrequency.trim() !== '' ? parseFloat(selectedFrequency) : 0;
    
    // Use effective days (minimum 1 for calculations)
    const effectiveDays = Math.max(days, 1);
    
    let waste, co2e;
    
    if (frequencyMultiplier !== 0) {
      waste = effectiveDays * baseData.weightPerDose * frequencyMultiplier; // Days x Column E value x Frequency
      co2e = effectiveDays * baseData.co2ePerDose * frequencyMultiplier; // Days x Column C x Frequency
    } else {
      waste = effectiveDays * baseData.weightPerDOT; // Days x Column F value x Frequency
      co2e = effectiveDays * baseData.co2ePerDOT; // Days x Column D x Frequency
    }
    const distance = (co2e) / 0.000391; // (Days x Column D) / 0.000391 (distance based on base CO2e)
    const gas = co2e / 0.00887; // (Days * Column D * Frequency) / 0.00887
    const coal = co2e / 0.000907; // (Days * Column D * Frequency) / 0.000907
    const phones = co2e / 0.0000151; // (Days * Column D * Frequency) / 0.0000151
    const distanceComparison = lookupDistanceComparison(distance);

    return {
      ...baseData,
      waste: waste * .1, // Convert grams to kilograms
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
  }, [selectedDrug, csvData]);

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
      const impact = lookupEnvironmentalImpact(selectedDrug, selectedMethod, selectedDose, selectedForm);
      setEnvironmentalImpact(impact);
    } else {
      setEnvironmentalImpact(null);
    }
  }, [selectedDrug, selectedMethod, selectedDose, selectedForm, days, selectedFrequency, csvData]);

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
          </div>
          
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>
            
            {/* Days and Frequency fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          
          {/* Environmental Impact Results */}
          {environmentalImpact && (
            <div className="mt-8 bg-slate-800/80 rounded-lg p-6 border border-slate-700">
              <h2 className="text-xl font-semibold mb-4 text-white">Environmental Impact Results</h2>
              
              {/* Basic Lookup Values */}
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

              {/* Calculated Values */}
              <div>
                <h3 className="text-lg font-medium text-slate-300 mb-3">
                  Calculated Impact ({Math.max(days, 1)} day{Math.max(days, 1) !== 1 ? 's' : ''}
                  {selectedFrequency && selectedFrequency.trim() !== '' && (
                    <span> × {frequencyOptions.find(opt => opt.value === selectedFrequency)?.label}</span>
                  )})
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-slate-300 mb-2">Total Waste Generated</h4>
                    <p className="text-xl font-bold text-white">
                      {environmentalImpact.waste.toFixed(3)} kg
                    </p>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-slate-300 mb-2">Total CO2 Equivalent Emissions</h4>
                    <p className="text-xl font-bold text-white">
                      {environmentalImpact.co2e.toExponential(3)} t
                    </p>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-slate-300 mb-2">Distance Driven
                    </h4>
                    <p className="text-xl font-bold text-white">
                      {environmentalImpact.distance.toFixed(1)} miles
                    </p>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-slate-300 mb-2">Gas Consumed</h4>
                    <p className="text-xl font-bold text-white">
                      {environmentalImpact.gas.toFixed(2)} L
                    </p>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-slate-300 mb-2">Coal Burned</h4>
                    <p className="text-xl font-bold text-white">
                      {environmentalImpact.coal.toFixed(3)} kg
                    </p>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-slate-300 mb-2">Number of Phones Charged</h4>
                    <p className="text-xl font-bold text-white">
                      {environmentalImpact.phones.toFixed(0)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Distance Comparison */}
              <div className="mt-6">
                <h3 className="text-lg font-medium text-slate-300 mb-3">Distance Comparison</h3>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-slate-300 mb-2">Comparable Distance</h4>
                  <p className="text-xl font-bold text-white">
                    {environmentalImpact.distanceComparison}
                  </p>
                  <p className="text-sm text-slate-400 mt-1">
                    Based on {environmentalImpact.distance.toFixed(1)} km total distance
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
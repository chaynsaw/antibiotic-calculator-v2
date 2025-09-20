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
  const [environmentalImpact, setEnvironmentalImpact] = useState<EnvironmentalImpact | null>(null);
  const [csvData, setCsvData] = useState<string[][]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Load available doses for selected drug and form
  const loadAvailableDoses = (drugName: string, form?: string) => {
    if (!csvData.length || !drugName) {
      setAvailableDoses([]);
      setSelectedDose("");
      return;
    }

    const doses: string[] = [];
    
    if (form && form.trim() !== '') {
      // If form is selected, use third lookup table (column R)
      for (let i = 5; i < csvData.length; i++) {
        const row = csvData[i];
        const rowDrugName = row[15]; // Column P
        const rowForm = row[18]; // Column S
        const dose = row[17]; // Column R
        
        if (rowDrugName === drugName && rowForm === form && dose && dose.trim() !== '') {
          doses.push(dose);
        }
      }
    } else {
      // If no form selected, use second lookup table (column J)
      for (let i = 5; i < csvData.length; i++) {
        const row = csvData[i];
        const rowDrugName = row[7]; // Column H
        const dose = row[9]; // Column J
        
        if (rowDrugName === drugName && dose && dose.trim() !== '') {
          doses.push(dose);
        }
      }
    }
    
    setAvailableDoses(doses);
    
    // Auto-select first dose if form is selected
    if (form && form.trim() !== '' && doses.length > 0) {
      setSelectedDose(doses[0]);
    } else {
      setSelectedDose(""); // Reset selected dose when drug or form changes
    }
  };

  // Load available forms for selected drug from third lookup table
  const loadAvailableForms = (drugName: string) => {
    if (!csvData.length || !drugName) {
      setAvailableForms([]);
      setSelectedForm("");
      return;
    }

    const forms: string[] = [];
    
    // Look through the third lookup table (starting from column P, index 15)
    for (let i = 5; i < csvData.length; i++) {
      const row = csvData[i];
      const rowDrugName = row[15]; // Column P
      const form = row[18]; // Column S
      
      if (rowDrugName === drugName && form && form.trim() !== '') {
        forms.push(form);
      }
    }
    
    // Remove duplicates and sort
    const uniqueForms = [...new Set(forms)].sort();
    setAvailableForms(uniqueForms);
    setSelectedForm(""); // Reset selected form when drug changes
  };

  // Lookup environmental impact data
  const lookupEnvironmentalImpact = (drugName: string, method: string, dose?: string, form?: string) => {
    if (!csvData.length) return null;

    // If both form and dose are selected, use third table (columns T, U, V, W)
    if (form && form.trim() !== '' && dose && dose.trim() !== '') {
      for (let i = 5; i < csvData.length; i++) {
        const row = csvData[i];
        const rowDrugName = row[15]; // Column P
        const rowMethod = row[16]; // Column Q
        const rowDose = row[17]; // Column R
        const rowForm = row[18]; // Column S
        
        if (rowDrugName === drugName && rowMethod === method && rowDose === dose && rowForm === form) {
          return {
            co2ePerDose: parseFloat(row[19]) || 0, // Column T
            co2ePerDOT: parseFloat(row[20]) || 0,  // Column U
            weightPerDose: parseFloat(row[21]) || 0, // Column V
            weightPerDOT: parseFloat(row[22]) || 0   // Column W
          };
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
          return {
            co2ePerDose: parseFloat(row[10]) || 0, // Column K
            co2ePerDOT: parseFloat(row[11]) || 0,  // Column L
            weightPerDose: parseFloat(row[12]) || 0, // Column M
            weightPerDOT: parseFloat(row[13]) || 0   // Column N
          };
        }
      }
    } else {
      // If no dose selected, use first table (columns C, D, E, F)
      for (let i = 5; i < csvData.length; i++) {
        const row = csvData[i];
        const rowDrugName = row[0]; // Column A
        const rowMethod = row[1]; // Column B
        
        if (rowDrugName === drugName && rowMethod === method) {
          return {
            co2ePerDose: parseFloat(row[2]) || 0, // Column C
            co2ePerDOT: parseFloat(row[3]) || 0,  // Column D
            weightPerDose: parseFloat(row[4]) || 0, // Column E
            weightPerDOT: parseFloat(row[5]) || 0   // Column F
          };
        }
      }
    }
    return null;
  };

  // Load doses and forms when drug is selected
  useEffect(() => {
    if (selectedDrug && csvData.length > 0) {
      loadAvailableDoses(selectedDrug, selectedForm);
      loadAvailableForms(selectedDrug);
    } else {
      setAvailableDoses([]);
      setSelectedDose("");
      setAvailableForms([]);
      setSelectedForm("");
    }
  }, [selectedDrug, csvData]);

  // Load doses when form changes
  useEffect(() => {
    if (selectedDrug && csvData.length > 0) {
      loadAvailableDoses(selectedDrug, selectedForm);
    }
  }, [selectedForm, csvData]);

  // Clear form when dose is cleared
  useEffect(() => {
    if (selectedDose === "" && selectedForm !== "") {
      setSelectedForm("");
    }
  }, [selectedDose]);

  // Perform lookup when drug, method, dose, or form changes
  useEffect(() => {
    if (selectedDrug && selectedMethod && csvData.length > 0) {
      const impact = lookupEnvironmentalImpact(selectedDrug, selectedMethod, selectedDose, selectedForm);
      setEnvironmentalImpact(impact);
    } else {
      setEnvironmentalImpact(null);
    }
  }, [selectedDrug, selectedMethod, selectedDose, selectedForm, csvData]);

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
                    Form
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
            </div>
          </div>
          
          {/* Environmental Impact Results */}
          {environmentalImpact && (
            <div className="mt-8 bg-slate-800/80 rounded-lg p-6 border border-slate-700">
              <h2 className="text-xl font-semibold mb-4 text-white">Environmental Impact Data</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-slate-300 mb-2">Total CO2e per Dose</h3>
                  <p className="text-2xl font-bold text-white">
                    {environmentalImpact.co2ePerDose.toExponential(3)}
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-slate-300 mb-2">Total CO2e per DOT</h3>
                  <p className="text-2xl font-bold text-white">
                    {environmentalImpact.co2ePerDOT.toExponential(3)}
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-slate-300 mb-2">Total Weight per Dose</h3>
                  <p className="text-2xl font-bold text-white">
                    {environmentalImpact.weightPerDose.toFixed(3)} g
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-slate-300 mb-2">Total Weight per DOT</h3>
                  <p className="text-2xl font-bold text-white">
                    {environmentalImpact.weightPerDOT.toFixed(3)} g
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
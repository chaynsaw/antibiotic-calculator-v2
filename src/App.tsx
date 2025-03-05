import { useState, useEffect } from "react";
import { ChevronDown, Leaf, Pill, Droplet, LineChart, Loader } from "lucide-react";
import { getWasteItems, getAvailableDrugs, type WasteItem, type DrugOption } from "./utils/wasteCalculator";

export function App() {
  const [drugs, setDrugs] = useState<DrugOption[]>([]);
  const [selectedDrug, setSelectedDrug] = useState<string>("");
  const [selectedDose, setSelectedDose] = useState<string>("");
  const [customDose, setCustomDose] = useState<string>("");
  const [doseError, setDoseError] = useState<string>("");
  const [selectedForm, setSelectedForm] = useState<string>("");
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [wasteItems, setWasteItems] = useState<WasteItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load available drugs on mount
  useEffect(() => {
    async function loadDrugs() {
      try {
        const availableDrugs = await getAvailableDrugs();
        setDrugs(availableDrugs);
        
        if (availableDrugs.length > 0) {
          const firstDrug = availableDrugs[0];
          setSelectedDrug(firstDrug.name);
          
          if (firstDrug.doses.length > 0) {
            const firstDose = firstDrug.doses[0];
            if (firstDose.dose !== null) {
              setSelectedDose(firstDose.dose);
              setCustomDose("");
            } else {
              setSelectedDose("custom");
              setCustomDose("");
            }
            
            if (firstDose.forms.length > 0) {
              setSelectedForm(firstDose.forms[0].form);
              setSelectedMethod(firstDose.forms[0].methods[0]);
            }
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load drugs');
      } finally {
        setLoading(false);
      }
    }

    loadDrugs();
  }, []);

  // Calculate total waste
  const totalWaste = wasteItems.reduce((total, item) => total + item.totalWaste, 0);

  // Function to handle calculation
  const handleCalculate = async () => {
    if (!selectedDrug || !selectedMethod) return;
    if (selectedDose === "custom" && !customDose) return;
    if (doseError) return;
    
    try {
      setLoading(true);
      setError(null);
      setWasteItems([]); // Clear previous results while loading
      
      // Add artificial delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const dose = selectedDose === "custom" ? parseFloat(customDose) : selectedDose;
      const items = await getWasteItems(selectedDrug, dose, selectedMethod);
      setWasteItems(items);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load waste data');
    } finally {
      setLoading(false);
    }
  };

  // Get current drug data
  const currentDrug = drugs.find(d => d.name === selectedDrug);
  
  // Get available doses for selected drug
  const availableDoses = currentDrug?.doses || [];
  
  // Get current dose option
  const currentDose = availableDoses.find(d => 
    d.dose === (selectedDose === "custom" ? null : selectedDose)
  );
  
  // Get available forms and methods based on the current dose value
  const { availableForms, availableMethods } = (() => {
    if (selectedDose === "custom" && customDose) {
      const numValue = parseFloat(customDose);
      const matchingRange = currentDose?.doseRanges?.find(range => 
        numValue >= range.minDose && 
        numValue <= range.maxDose
      );
      
      if (matchingRange) {
        return {
          availableForms: [{ form: matchingRange.form, methods: matchingRange.methods }],
          availableMethods: matchingRange.form === selectedForm ? matchingRange.methods : []
        };
      }
      return { availableForms: [], availableMethods: [] };
    }
    
    const forms = currentDose?.forms || [];
    return {
      availableForms: forms,
      availableMethods: forms.find(f => f.form === selectedForm)?.methods || []
    };
  })();

  // Handle custom dose change
  const handleCustomDoseChange = (value: string) => {
    setCustomDose(value);
    
    if (!value) {
      setDoseError("Dose is required");
      return;
    }
    
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      setDoseError("Please enter a valid number");
      return;
    }
    
    // Find the appropriate range for this dose
    const doseRanges = currentDose?.doseRanges || [];
    const matchingRange = doseRanges.find(range => 
      numValue >= range.minDose && numValue <= range.maxDose
    );
    
    if (!matchingRange) {
      // Show all available ranges
      if (doseRanges.length > 0) {
        const rangesText = doseRanges
          .map(r => `${r.minDose}-${r.maxDose}`)
          .join(', ');
        setDoseError(`Dose must be in one of these ranges: ${rangesText} mg`);
      } else {
        setDoseError("Invalid dose");
      }
      return;
    }
    
    // Update form and method based on the matching range
    setSelectedForm(matchingRange.form);
    setSelectedMethod(matchingRange.methods[0]);
    setDoseError("");
  };

  // Get placeholder text for custom dose input
  const getDosePlaceholder = () => {
    return "Enter dose";
  };

  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-900 min-h-screen text-white">
      <header className="pt-8 pb-4 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-2 mb-2">
            <Leaf className="text-green-400" size={28} />
            <h1 className="text-4xl font-bold tracking-tight">
              Antibiotic Waste Calculator
            </h1>
          </div>
          <p className="text-slate-300 text-lg max-w-4xl">
            A tool to help doctors calculate the amount of plastic waste created
            by an antibiotic regimen.
          </p>
        </div>
      </header>
      <main className="px-6 md:px-12 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-slate-600">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="relative">
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Antibiotic
                </label>
                <div className="relative">
                  <select
                    value={selectedDrug}
                    onChange={(e) => {
                      const newDrug = drugs.find(d => d.name === e.target.value);
                      setSelectedDrug(e.target.value);
                      if (newDrug && newDrug.doses.length > 0) {
                        const firstDose = newDrug.doses[0];
                        if (firstDose.dose !== null) {
                          setSelectedDose(firstDose.dose);
                          setCustomDose("");
                        } else {
                          setSelectedDose("custom");
                          setCustomDose("");
                        }
                        
                        if (firstDose.forms.length > 0) {
                          setSelectedForm(firstDose.forms[0].form);
                          setSelectedMethod(firstDose.forms[0].methods[0]);
                        }
                      } else {
                        setSelectedDose("");
                        setCustomDose("");
                        setSelectedForm("");
                        setSelectedMethod("");
                      }
                    }}
                    className="appearance-none bg-slate-800 border border-slate-600 text-white py-3 px-4 pr-8 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {drugs.map(drug => (
                      <option key={drug.name} value={drug.name}>{drug.name}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <ChevronDown size={18} className="text-slate-400" />
                  </div>
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Dose
                </label>
                <div className="relative space-y-2">
                  {availableDoses.some(d => d.dose === null) ? (
                    <>
                      <input
                        type="number"
                        value={customDose}
                        onChange={(e) => handleCustomDoseChange(e.target.value)}
                        placeholder={getDosePlaceholder()}
                        className="appearance-none bg-slate-800 border border-slate-600 text-white py-3 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      {doseError && (
                        <p className="text-red-400 text-sm">{doseError}</p>
                      )}
                    </>
                  ) : (
                    <div className="relative">
                      <select
                        value={selectedDose}
                        onChange={(e) => {
                          setSelectedDose(e.target.value);
                          setCustomDose("");
                          const newDose = availableDoses.find(d => d.dose === e.target.value);
                          if (newDose && newDose.forms.length > 0) {
                            setSelectedForm(newDose.forms[0].form);
                            setSelectedMethod(newDose.forms[0].methods[0]);
                          } else {
                            setSelectedForm("");
                            setSelectedMethod("");
                          }
                        }}
                        disabled={!availableDoses.length}
                        className="appearance-none bg-slate-800 border border-slate-600 text-white py-3 px-4 pr-8 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {availableDoses.map(d => (
                          <option key={d.dose ?? 'custom'} value={d.dose ?? 'custom'}>{d.dose ? `${d.dose} mg` : 'Custom dose'}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <ChevronDown size={18} className="text-slate-400" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Form
                </label>
                <div className="relative">
                  <select
                    value={selectedForm}
                    onChange={(e) => {
                      setSelectedForm(e.target.value);
                      const newMethods = availableForms
                        .find(f => f.form === e.target.value)?.methods || [];
                      if (newMethods.length > 0) {
                        setSelectedMethod(newMethods[0]);
                      } else {
                        setSelectedMethod("");
                      }
                    }}
                    disabled={!availableForms.length}
                    className="appearance-none bg-slate-800 border border-slate-600 text-white py-3 px-4 pr-8 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {availableForms.map(f => (
                      <option key={f.form} value={f.form}>{f.form}</option>
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
                    disabled={!availableMethods.length}
                    className="appearance-none bg-slate-800 border border-slate-600 text-white py-3 px-4 pr-8 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {availableMethods.map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <ChevronDown size={18} className="text-slate-400" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button
                onClick={handleCalculate}
                disabled={!selectedDrug || !selectedMethod || (selectedDose === "custom" && !customDose) || !!doseError || loading}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    <span>Calculating...</span>
                  </>
                ) : (
                  <>
                    <LineChart size={20} />
                    <span>Calculate Waste</span>
                  </>
                )}
              </button>
            </div>
            <div className="mt-8">
              <div className="flex items-center space-x-2 mb-4">
                <LineChart className="text-blue-400" size={20} />
                <h2 className="text-xl font-semibold">Results</h2>
              </div>
              {loading ? (
                <div className="text-center py-8 text-slate-300">Loading waste data...</div>
              ) : error ? (
                <div className="text-center py-8 text-red-400">{error}</div>
              ) : (
                <>
                  <div className="bg-slate-800/80 rounded-lg p-5 border border-slate-700 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">
                        Total plastic waste per dose:
                      </span>
                      <span className="text-2xl font-bold text-white">
                        {totalWaste.toFixed(1)} g
                      </span>
                    </div>
                    <div className="mt-2 w-full bg-slate-700 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-green-500 to-blue-500 h-2.5 rounded-full"
                        style={{
                          width: `${Math.min((totalWaste / 500) * 100, 100)}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="bg-slate-800/80 rounded-lg border border-slate-700">
                    <ul className="divide-y divide-slate-700">
                      {wasteItems.map((item, index) => (
                        <li
                          key={index}
                          className="px-5 py-3 flex justify-between items-center"
                        >
                          <div className="flex items-center">
                            {index % 2 === 0 ? (
                              <Pill className="text-blue-400 mr-3" size={16} />
                            ) : (
                              <Droplet className="text-green-400 mr-3" size={16} />
                            )}
                            <span className="text-slate-300">{item.item}:</span>
                          </div>
                          <span className="font-medium">
                            {item.quantity} × {item.weight.toFixed(1)} g = {item.totalWaste.toFixed(1)} g
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <footer className="py-4 px-6 text-center text-sm text-slate-400">
        <p>
          © 2025 Antibiotic Waste Calculator • Helping reduce environmental
          impact in healthcare
        </p>
      </footer>
    </div>
  );
}

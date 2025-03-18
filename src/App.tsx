import { useState, useEffect } from "react";
import { ChevronDown, Leaf, Pill, Droplet, LineChart, Loader, Plus } from "lucide-react";
import { getWasteItems, getAvailableDrugs, type WasteItem, type DrugOption } from "./utils/wasteCalculator";

// Define types for regimen management
interface Regimen {
  id: number;
  drug: string;
  dose: string;
  customDose: string;
  form: string;
  method: string;
  frequency: string;
  duration: string;
  wasteItems: WasteItem[];
  showDetails: boolean;
}

export function App() {
  // Add title effect
  useEffect(() => {
    if (window.location.hostname === 'localhost') {
      document.title = '(LOCAL) Antibiotic Waste Calculator';
    }
  }, []);

  const [drugs, setDrugs] = useState<DrugOption[]>([]);
  const [selectedDrug, setSelectedDrug] = useState<string>("");
  const [selectedDose, setSelectedDose] = useState<string>("");
  const [customDose, setCustomDose] = useState<string>("");
  const [doseError, setDoseError] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [durationError, setDurationError] = useState<string>("");
  const [frequency, setFrequency] = useState<string>("q24h");
  const [selectedForm, setSelectedForm] = useState<string>("");
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [wasteItems, setWasteItems] = useState<WasteItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  // Track regimens
  const [regimens, setRegimens] = useState<Regimen[]>([]);

  // Collapsible state for each regimen
  const [collapsedRegimens, setCollapsedRegimens] = useState<{[key: number]: boolean}>({});

  // Frequency options with their hour values
  const frequencyOptions = [
    { label: "Every 48 hours (q48h)", value: "q48h", hours: 48 },
    { label: "Every 24 hours (q24h)", value: "q24h", hours: 24 },
    { label: "Every 12 hours (q12h)", value: "q12h", hours: 12 },
    { label: "Every 8 hours (q8h)", value: "q8h", hours: 8 },
    { label: "Every 6 hours (q6h)", value: "q6h", hours: 6 },
    { label: "Every 4 hours (q4h)", value: "q4h", hours: 4 },
  ];

  // Calculate doses per day based on frequency
  const getDosesForDuration = (durationDays: number, frequencyHours: number) => {
    const totalHours = durationDays * 24;
    return Math.ceil(totalHours / frequencyHours);
  };

  // Calculate IV tubing changes for the duration
  const getIVTubingChanges = (durationDays: number) => {
    return Math.ceil(durationDays / 4); // IV tubing is changed every 4 days
  };

  // Calculate total waste with special handling for IV tubing
  const calculateTotalWasteForItem = (item: WasteItem, totalDoses: number, durationDays: number) => {
    // Special case for IV tubing
    if (item.item.toLowerCase().includes('iv tubing')) {
      const tubingChanges = getIVTubingChanges(durationDays);
      return item.quantity * item.weight * tubingChanges;
    }
    // Normal case for all other items
    return item.quantity * item.weight * totalDoses;
  };

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

  // Handle duration change
  const handleDurationChange = (value: string) => {
    setDuration(value);
    
    if (!value) {
      setDurationError("Duration is required");
      return;
    }
    
    const numValue = parseFloat(value);
    if (isNaN(numValue) || numValue <= 0 || !Number.isInteger(numValue)) {
      setDurationError("Please enter a valid whole number greater than 0");
      return;
    }
    
    setDurationError("");
  };

  // Calculate waste totals
  const perDoseWaste = wasteItems.reduce((total, item) => {
    // For per-dose waste, we don't apply the special IV tubing rule
    return total + item.totalWaste;
  }, 0);

  const selectedFrequency = frequencyOptions.find(f => f.value === frequency)!;
  const totalDoses = getDosesForDuration(parseInt(duration) || 0, selectedFrequency.hours);
  const durationDays = parseInt(duration) || 0;

  const totalWaste = wasteItems.reduce((total, item) => {
    return total + calculateTotalWasteForItem(item, totalDoses, durationDays);
  }, 0);

  // Function to handle calculation
  const handleCalculate = async () => {
    // Show validation messages if fields are invalid
    let isValid = true;

    // Check dose validity
    if (selectedDose === "custom") {
      if (!customDose) {
        setDoseError("Dose is required");
        isValid = false;
      } else {
        const numValue = parseFloat(customDose);
        if (isNaN(numValue)) {
          setDoseError("Please enter a valid number");
          isValid = false;
        } else {
          // Find the appropriate range for this dose
          const doseRanges = currentDose?.doseRanges || [];
          const matchingRange = doseRanges.find(range => 
            numValue >= range.minDose && numValue <= range.maxDose
          );
          
          if (!matchingRange) {
            if (doseRanges.length > 0) {
              const rangesText = doseRanges
                .map(r => `${r.minDose}-${r.maxDose}`)
                .join(', ');
              setDoseError(`Dose must be in one of these ranges: ${rangesText} mg`);
              isValid = false;
            } else {
              setDoseError("Invalid dose");
              isValid = false;
            }
          }
        }
      }
    }

    // Check duration validity
    if (!duration) {
      setDurationError("Duration is required");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    // Clear any existing errors if validation passes
    setDoseError("");
    setDurationError("");
    
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
    return "Enter dose (mg)";
  };

  // Function to format regimen title
  const getRegimenTitle = () => {
    if (!selectedDrug || !selectedDose || !selectedMethod || !duration || !frequency) return "";
    const freq = frequencyOptions.find(f => f.value === frequency)?.value || frequency;
    return `${selectedDrug} ${selectedDose}mg ${selectedForm} (${selectedMethod}) ${freq} for ${duration} days: ${totalWaste.toFixed(1)}g`;
  };

  // Function to toggle collapse state for a regimen
  const toggleRegimenCollapse = (id: number) => {
    setCollapsedRegimens(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Function to save current regimen
  const saveCurrentRegimen = () => {
    if (!wasteItems.length) return;

    const newRegimen: Regimen = {
      id: Date.now(),
      drug: selectedDrug,
      dose: selectedDose === "custom" ? customDose : selectedDose,
      customDose,
      form: selectedForm,
      method: selectedMethod,
      frequency,
      duration,
      wasteItems,
      showDetails: false,
    };

    setRegimens(prev => [...prev, newRegimen]);
    setCollapsedRegimens(prev => ({
      ...prev,
      [newRegimen.id]: true // Start collapsed
    }));

    // Reset form
    resetForm();
  };

  // Function to reset form
  const resetForm = () => {
    const firstDrug = drugs[0];
    if (firstDrug) {
      setSelectedDrug(firstDrug.name);
      
      const firstDose = firstDrug.doses[0];
      if (firstDose) {
        if (firstDose.dose !== null) {
          setSelectedDose(firstDose.dose);
          setCustomDose("");
        } else {
          setSelectedDose("custom");
          setCustomDose("");
        }
        
        if (firstDose.forms.length > 0) {
          setSelectedForm(firstDose.forms[0].form);
          if (firstDose.forms[0].methods.length > 0) {
            setSelectedMethod(firstDose.forms[0].methods[0]);
          }
        }
      }
    }
    
    setFrequency("q24h");
    setDuration("");
    setWasteItems([]);
    setShowDetails(false);
  };

  // Regimen Result Component
  const RegimenResult = ({ regimen }: { regimen: Regimen }) => {
    const isCollapsed = collapsedRegimens[regimen.id];
    const freq = frequencyOptions.find(f => f.value === regimen.frequency)!;
    const doses = getDosesForDuration(parseInt(regimen.duration), freq.hours);
    const days = parseInt(regimen.duration);
    const perDoseWaste = regimen.wasteItems.reduce((total, item) => total + item.totalWaste, 0);
    const totalWaste = regimen.wasteItems.reduce((total, item) => {
      return total + calculateTotalWasteForItem(item, doses, days);
    }, 0);

    // Check if this is the most eco-friendly regimen
    const isLowestWaste = regimens.length >= 2 && regimens.every(r => {
      if (r.id === regimen.id) return true;
      const rFreq = frequencyOptions.find(f => f.value === r.frequency)!;
      const rDoses = getDosesForDuration(parseInt(r.duration), rFreq.hours);
      const rDays = parseInt(r.duration);
      const rTotalWaste = r.wasteItems.reduce((total, item) => 
        total + calculateTotalWasteForItem(item, rDoses, rDays), 0
      );
      return totalWaste <= rTotalWaste;
    });

    return (
      <div className="mb-4">
        <button
          onClick={() => toggleRegimenCollapse(regimen.id)}
          className={`w-full p-3 md:p-4 rounded-t-xl border flex flex-col transition-colors duration-150 ${
            isLowestWaste 
              ? "bg-green-900/40 border-green-700/50 hover:bg-green-800/40" 
              : "bg-slate-800/90 border-slate-700/50 hover:bg-slate-700/50"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
            <div className="flex flex-col items-start mb-2 md:mb-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base md:text-lg font-semibold text-white">
                  {regimen.drug} • {regimen.form} • {regimen.dose}mg
                </h3>
                {isLowestWaste && (
                  <div className="flex items-center space-x-1 text-green-400">
                    <Leaf size={14} className="shrink-0" />
                    <span className="text-xs md:text-sm font-medium">Most eco-friendly</span>
                  </div>
                )}
              </div>
              <p className="text-sm md:text-base text-slate-300 mt-1">
                {freq.label} for {regimen.duration} days
              </p>
            </div>
            <div className="flex items-center justify-between md:justify-end w-full md:w-auto">
              <p className="text-lg md:text-xl font-bold text-white">
                {totalWaste.toFixed(1)}g waste
              </p>
              <ChevronDown
                size={18}
                className={`text-slate-400 transition-transform duration-200 ml-3 ${
                  !isCollapsed ? "transform rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </button>
        {!isCollapsed && (
          <div className="bg-slate-800/80 rounded-b-xl border-x border-b border-slate-700/50">
            <div className="p-3 md:p-5">
              <div className="flex flex-col space-y-3 md:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm md:text-base text-slate-300">
                    Plastic waste per dose:
                  </span>
                  <span className="text-lg md:text-xl font-bold text-white">
                    {perDoseWaste.toFixed(1)} g
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm md:text-base text-slate-300">
                    Total doses ({regimen.duration} days):
                  </span>
                  <span className="text-base md:text-lg font-medium text-white">
                    {doses} doses
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm md:text-base text-slate-300">
                    Total plastic waste:
                  </span>
                  <span className="text-xl md:text-2xl font-bold text-white">
                    {totalWaste.toFixed(1)} g
                  </span>
                </div>
              </div>
              <div className="mt-2 w-full bg-slate-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                  style={{
                    width: `${Math.min((totalWaste / 500) * 100, 100)}%`,
                  }}
                ></div>
              </div>
              <div className="mt-4 md:mt-6">
                <div className="border-t border-slate-700">
                  <h3 className="text-base md:text-lg font-semibold text-white pt-3 md:pt-4 pb-2">Detailed Breakdown</h3>
                  <ul className="divide-y divide-slate-700">
                    {regimen.wasteItems.map((item, index) => {
                      const isIVTubing = item.item.toLowerCase().includes('iv tubing');
                      const itemTotalWaste = calculateTotalWasteForItem(item, doses, days);
                      
                      return (
                        <li
                          key={index}
                          className="py-3 md:py-4 flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-4"
                        >
                          <div className="flex items-center space-x-2">
                            {index % 2 === 0 ? (
                              <Pill className="text-blue-400 shrink-0" size={16} />
                            ) : (
                              <Droplet className="text-green-400 shrink-0" size={16} />
                            )}
                            <span className="text-sm md:text-base text-white font-medium">{item.item}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm md:text-base text-white font-medium">
                              {item.quantity} × {item.weight.toFixed(1)} g = {item.totalWaste.toFixed(1)} g per {isIVTubing ? '4 days' : 'dose'}
                            </div>
                            <div className="text-xs md:text-sm text-slate-400 mt-1">
                              {isIVTubing ? 
                                `Changed every 4 days (${getIVTubingChanges(days)} changes) - ` : 
                                `${doses} doses - `}
                              Total: {itemTotalWaste.toFixed(1)} g
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
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
                  Administration Method
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
                  Form
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
              <div className="relative">
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Frequency
                </label>
                <div className="relative">
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="appearance-none bg-slate-800 border border-slate-600 text-white py-3 px-4 pr-8 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {frequencyOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
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
                  Duration (Days)
                </label>
                <div className="relative space-y-2">
                  <input
                    type="number"
                    value={duration}
                    onChange={(e) => handleDurationChange(e.target.value)}
                    placeholder="Enter number of days"
                    min="1"
                    step="1"
                    className="appearance-none bg-slate-800 border border-slate-600 text-white py-3 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {durationError && (
                    <p className="text-red-400 text-sm">{durationError}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button
                onClick={handleCalculate}
                disabled={loading}
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
              ) : wasteItems.length > 0 ? (
                <>
                  {/* Show current calculation */}
                  <div className="bg-slate-800/80 rounded-lg p-5 border border-slate-700 mb-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300">
                          Plastic waste per dose:
                        </span>
                        <span className="text-xl font-bold text-white">
                          {perDoseWaste.toFixed(1)} g
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300">
                          Total doses ({duration} days, {selectedFrequency.label}):
                        </span>
                        <span className="text-lg font-medium text-white">
                          {totalDoses} doses
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300">
                          Total plastic waste:
                        </span>
                        <span className="text-2xl font-bold text-white">
                          {totalWaste.toFixed(1)} g
                        </span>
                      </div>
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
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    <button
                      onClick={saveCurrentRegimen}
                      className="bg-[#4477FF] hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition-colors duration-200 text-lg"
                    >
                      Save regimen
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-8 text-slate-300">
                  Enter antibiotic details and click Calculate Waste to see results
                </div>
              )}
            </div>
          </div>

          {/* Show saved regimens in a separate card below the form */}
          {regimens.length > 0 && (
            <div className="mt-8 bg-slate-700/50 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-slate-600">
              <h3 className="text-xl font-semibold mb-6">Saved Regimens</h3>
              {regimens.map(regimen => (
                <RegimenResult key={regimen.id} regimen={regimen} />
              ))}
            </div>
          )}
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

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Leaf, Pill, Droplet, LineChart, Loader } from "lucide-react";
import { getWasteItems, getAvailableDrugs, type WasteItem, type DrugOption } from "./utils/wasteCalculator";
import { Navbar } from "./Navbar";

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
  const [activePage, setActivePage] = useState<"calculator" | "about">("calculator");

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
              const unit = (selectedDrug === "Penicillin G Potassium" || selectedDrug === "Penicillin G Sodium") ? 'MU' : 'mg';
              setDoseError(`Dose must be in one of these ranges: ${rangesText} ${unit}`);
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
      const items = await getWasteItems(selectedDrug, dose, selectedMethod, selectedForm);
      setWasteItems(items);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load waste data');
    } finally {
      setLoading(false);
    }
  };

  // Get current drug data
  const currentDrug = drugs.find(d => d.name === selectedDrug);

  // Separate fixed and variable doses
  const fixedDoses = currentDrug?.doses.filter(d => d.dose !== null) || [];
  const variableDoses = currentDrug?.doses.filter(d => d.dose === null) || [];

  // Get current dose option
  const currentDose = selectedDose === "custom" 
    ? variableDoses[0] 
    : fixedDoses.find(d => d.dose === selectedDose) || null;

  // Get available forms and methods based on the current dose value
  const { availableForms, availableMethods } = (() => {
    if (selectedDose === "custom" && customDose) {
      const numValue = parseFloat(customDose);
      const matchingRange = currentDose?.doseRanges?.find(range =>
        numValue >= range.minDose && numValue <= range.maxDose
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
    setDoseError("");
    
    if (!value) {
      setDoseError("Dose is required");
      return;
    }
    
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      setDoseError("Please enter a valid number");
      return;
    }
    
    const matchingRange = currentDose?.doseRanges?.find(range =>
      numValue >= range.minDose && numValue <= range.maxDose
    );
    
    if (!matchingRange) {
      const rangesText = currentDose?.doseRanges
        ?.map(r => `${r.minDose}-${r.maxDose}`)
        .join(', ') || '';
      const unit = (selectedDrug === "Penicillin G Potassium" || selectedDrug === "Penicillin G Sodium") ? 'MU' : 'mg';
      setDoseError(`Dose must be in one of these ranges: ${rangesText} ${unit}`);
      return;
    }
    
    setSelectedForm(matchingRange.form);
    setSelectedMethod(matchingRange.methods[0]);
  };

  // Handle dose selection change
  const handleDoseChange = (value: string) => {
    setSelectedDose(value);
    setCustomDose("");
    setDoseError("");
    
    if (value === "custom") {
      return;
    }
    
    const newDose = fixedDoses.find(d => d.dose === value);
    if (newDose?.forms.length) {
      setSelectedForm(newDose.forms[0].form);
      setSelectedMethod(newDose.forms[0].methods[0]);
    } else {
      setSelectedForm("");
      setSelectedMethod("");
    }
  };

  // Get placeholder text for custom dose input
  const getDosePlaceholder = () => {
    if (selectedDrug === "Penicillin G Potassium" || selectedDrug === "Penicillin G Sodium") {
      return "Enter dose (MU)";
    }
    const ranges = currentDose?.doseRanges
      ?.map(r => `${r.minDose}-${r.maxDose}`)
      .join(', ');
    return ranges ? `Enter dose (${ranges} mg)` : "Enter dose (mg)";
  };

  // Function to toggle collapse state for a regimen
  const toggleRegimenCollapse = (id: number) => {
    setCollapsedRegimens(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Function to reset form to default values
  const resetForm = () => {
    // Clear all fields
    setSelectedDrug("");
    setSearchTerm(""); // Clear the search input
    setSelectedDose("");
    setCustomDose("");
    setSelectedForm("");
    setSelectedMethod("");
    setFrequency("q24h");
    setDuration("");
    setWasteItems([]);
    setDoseError("");
    setDurationError("");
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

    // Reset form after saving
    resetForm();
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
                  {regimen.drug} • {regimen.form} • {regimen.dose}{
                    (regimen.drug === "Penicillin G Potassium" || regimen.drug === "Penicillin G Sodium") ? 'MU' : 'mg'
                  } • {regimen.method}
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
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm md:text-base text-slate-300">
                      Total plastic waste:
                    </span>
                    <span className="text-xl md:text-2xl font-bold text-white">
                      {totalWaste.toFixed(1)} g
                    </span>
                  </div>
                  <p className="text-base text-slate-400 text-right">For reference: a standard plastic water bottle weighs ~10g</p>
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

  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  // Filter drugs based on search term
  const filteredDrugs = drugs.filter(drug =>
    drug.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Add this state near the other state declarations at the top of the component
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-900 min-h-screen text-white">
      <Navbar active={activePage} onSelect={setActivePage} />
      {activePage === "calculator" && (
        <main className="px-6 md:px-12 pb-16">
          <div className="max-w-4xl mx-auto">
            <header className="pt-8 pb-4">
              <div className="flex items-center space-x-2 mb-2">
                <h1 className="text-4xl font-bold tracking-tight">
                  Calculator
                </h1>
              </div>
              <p className="text-slate-300 text-lg max-w-4xl">
                A tool to help you calculate and compare waste from antibiotic regimens.
              </p>
            </header>
            <div className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-slate-600">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
                            // On blur, auto-select the topmost filtered option if not already selected
                            if (filteredDrugs.length > 0 && selectedDrug !== filteredDrugs[highlightedIndex]?.name) {
                              const drug = filteredDrugs[highlightedIndex];
                              setSelectedDrug(drug.name);
                              setSearchTerm(drug.name);
                              // Set initial values for the selected drug
                              if (drug.doses.length > 0) {
                                const firstDose = drug.doses[0];
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
                              if (filteredDrugs.length > 0) {
                                const drug = filteredDrugs[highlightedIndex];
                                setSelectedDrug(drug.name);
                                setSearchTerm(drug.name);
                                setIsDropdownOpen(false);
                                // Set initial values for the selected drug
                                if (drug.doses.length > 0) {
                                  const firstDose = drug.doses[0];
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
                              setSelectedDose("");
                              setCustomDose("");
                              setSelectedForm("");
                              setSelectedMethod("");
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
                                  // Set initial values for the selected drug
                                  if (drug.doses.length > 0) {
                                    const firstDose = drug.doses[0];
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
                    Dose
                  </label>
                  <div className="relative space-y-2">
                    {variableDoses.length > 0 ? (
                      <div className="relative">
                        <select
                          value={selectedDose}
                          onChange={(e) => handleDoseChange(e.target.value)}
                          className="appearance-none bg-slate-800 border border-slate-600 text-white py-3 px-4 pr-8 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          {fixedDoses.map(d => (
                            <option key={d.dose!} value={d.dose!}>{d.dose} mg</option>
                          ))}
                          <option value="custom">Custom dose</option>
                        </select>
                        {selectedDose === "custom" && (
                          <input
                            type="number"
                            value={customDose}
                            onChange={(e) => handleCustomDoseChange(e.target.value)}
                            placeholder={getDosePlaceholder()}
                            className="appearance-none bg-slate-800 border border-slate-600 text-white py-3 px-4 rounded-md w-full mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        )}
                        {doseError && (
                          <p className="text-red-400 text-sm">{doseError}</p>
                        )}
                        {selectedDose !== "custom" && (
                          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <ChevronDown size={18} className="text-slate-400" />
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="relative">
                        <select
                          value={selectedDose}
                          onChange={(e) => handleDoseChange(e.target.value)}
                          className="appearance-none bg-slate-800 border border-slate-600 text-white py-3 px-4 pr-8 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          {fixedDoses.map(d => (
                            <option key={d.dose!} value={d.dose!}>{d.dose} mg</option>
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
                        <div className="flex flex-col space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-slate-300">
                              Total plastic waste:
                            </span>
                            <span className="text-2xl font-bold text-white">
                              {totalWaste.toFixed(1)} g
                            </span>
                          </div>
                          <p className="text-base text-slate-400 text-right">For reference: a standard plastic water bottle weighs ~10g</p>
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

                    {/* Add Detailed Breakdown section */}
                    <div className="mb-6">
                      <button
                        onClick={() => setShowDetails(prev => !prev)}
                        className="w-full bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold py-3 px-6 rounded-lg border border-slate-700 transition-colors duration-200 flex items-center justify-between"
                      >
                        <span className="flex items-center space-x-2">
                          <LineChart size={20} className="text-blue-400" />
                          <span className="text-lg">Detailed Breakdown</span>
                        </span>
                        <ChevronDown
                          size={18}
                          className={`text-slate-400 transition-transform duration-200 ${
                            showDetails ? "transform rotate-180" : ""
                          }`}
                        />
                      </button>
                      {showDetails && (
                        <div className="mt-4 bg-slate-800/80 rounded-lg p-5 border border-slate-700">
                          <ul className="divide-y divide-slate-700">
                            {wasteItems.map((item, index) => {
                              const isIVTubing = item.item.toLowerCase().includes('iv tubing');
                              const itemTotalWaste = calculateTotalWasteForItem(item, totalDoses, durationDays);
                              
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
                                        `Changed every 4 days (${getIVTubingChanges(durationDays)} changes) - ` : 
                                        `${totalDoses} doses - `}
                                      Total: {itemTotalWaste.toFixed(1)} g
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
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
                    {regimens.length > 0 
                      ? <span dangerouslySetInnerHTML={{ __html: 'Enter details for another regimen above, then Calculate Waste and <span class="font-bold">Save Regimen</span> to compare' }} />
                      : "Enter antibiotic details and click Calculate Waste to see results"
                    }
                  </div>
                )}
              </div>
            </div>

            {/* Show saved regimens in a separate card below the form */}
            {regimens.length > 0 && (
              <div className="mt-8 bg-slate-700/50 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-slate-600">
                <h3 className="text-xl font-semibold mb-2">Saved Regimens</h3>
                {regimens.map(regimen => (
                  <RegimenResult key={regimen.id} regimen={regimen} />
                ))}
              </div>
            )}
          </div>
        </main>
      )}
      {activePage === "about" && (
        <div className="max-w-2xl mx-auto py-10 px-4">
          <img
            src="https://i.imgflip.com/9s3qe2.jpg"
            alt="Three people in pink outfits, recreation (not actual photo)"
            className="mx-auto mb-8 rounded-lg shadow-lg"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <h1 className="text-2xl font-bold text-center underline mb-8">OUR TEAM</h1>
          <div className="mb-6">
            <span className="font-bold underline">CONCEPTION / DESIGN:</span>
            <span> Pam Lee, Hugh Gordon, Chaynor Hsiao, Gary Fong, Emily Spivak, Leila Hojat</span>
          </div>
          <div className="mb-6">
            <span className="font-bold underline">DATA COLLECTION:</span>
            <span> Gary Fong, Misty Vu, Tien Dinh, Marina Nguyen, Pam Lee, Sean Oh, Grace Lee</span>
          </div>
          <div className="mb-6">
            <span className="font-bold underline">CODING STUFF:</span>
            <span> Hugh Gordon, Herbert Lee, Chaynor Hsiao</span>
          </div>

          <h2 className="text-xl font-bold underline text-center mt-12 mb-6 tracking-widest">ABOUT ECORXCHOICE</h2>

          <div className="mb-6">
            <span className="font-bold underline">Background</span>
            <p className="mt-2">
              EcoRxChoice was developed by Pam Lee, Hugh Gordon, and Gary Fong to connect the fields of antimicrobial stewardship and healthcare sustainability. They want to provide clinicians with a simple way of calculating the plastic waste associated with an antimicrobial regimen, and to compare waste among different regimens.<br /><br />
              Mounting evidence suggests that the sequela of plastic waste are associated with significant <a href="https://www.nature.com/articles/s41591-024-03453-1" target="_blank" rel="noopener noreferrer" className="underline text-blue-400 hover:text-blue-600">health</a> <a href="https://www.nejm.org/doi/10.1056/NEJMoa2309822" target="_blank" rel="noopener noreferrer" className="underline text-blue-400 hover:text-blue-600">impacts</a>. The US healthcare sector produces approximately <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7068768/" target="_blank" rel="noopener noreferrer" className="underline text-blue-400 hover:text-blue-600">1.7 million tons</a> of plastic waste each year. Evidence-based and patient-centered strategies such as favoring oral antimicrobials when clinically appropriate and providing durations of therapy can reduce plastic waste from pharmaceuticals. EcoRxChoice seeks to make quantification of such waste easy and accessible for anyone interested.
            </p>
          </div>

          <div className="mb-6">
            <span className="font-bold underline">Bios</span>
            <div className="mt-2 space-y-6">
              <div>
                <span className="font-bold underline">Pam Lee, MD:</span>
                <span> Pam is an infectious disease specialist at Harbor-UCLA Medical Center. Much of her medical training took place in LA County's Department of Health Services, and as such she is deeply committed to providing healthcare for LA's safety-net populations. Pam's overarching academic interest is the intersection of healthcare delivery and environmental sustainability, with specific focuses on infection prevention and control and antimicrobial stewardship. Her passion for climate work stems from knowing that patients like hers bear the brunt of the adverse effects of climate change and pollution, such as escalated health risks, economic challenges, and social disparities. During her free time she plays board games (boo Kyle), hikes, and cares for her many houseplants with varying levels of success.</span>
              </div>
              <div>
                <span className="font-bold underline">Gary Fong, PharmD:</span>
                <span> Gary is an infectious diseases pharmacist at Harbor-UCLA Medical Center and an Assistant Professor at Chapman University School of Pharmacy. He completed his post-graduate training at UCSF Medical Center in San Francisco and Baylor St. Luke's Medical Center in Houston. His research interests revolve around better understanding and improving the manage of candidemia, especially in the context of increasing antifungal resistance. In his time in LA County's Department of Health Services, he has become increasingly interested in finding practical therapeutic solutions for patients that are efficacious, safe, and convenient. Gary also serves as a member on IDSA's Antimicrobial Stewardship Curriculum Subcommittee. His hobbies include recipe-less cooking, exploring the craft beer world, being a dachshund dad, and spending quality time with his wife and wild toddler.</span>
              </div>
              <div>
                <span className="font-bold underline">Hugh Gordon, MD:</span>
                <span> Hugh is Chief Medical Information Officer at LA General Medical Center in Los Angeles County. Passionate about combining medicine and technology, Hugh is both an internal medicine physician and a seasoned entrepreneur and technologist with expertise in digital security, compliance, enterprise information technology management and software engineering. Prior to his clinical career, Hugh was Co-Founder and Chief Technology Officer of Akido Labs, a Y Combinator backed care delivery platform dedicated to ensuring our most vulnerable communities thrive. Hugh started his career as a Site Reliability engineer and technical lead at Google. He holds a Bachelor of Science in Computer Engineering from Columbia University and an MD from the University of Southern California's Keck School of Medicine. His hobbies include backpacking and cooking complicated meals with his wife and young daughters.</span>
              </div>
              <div>
                <span className="font-bold underline">Emily Spivak, MD:</span>
                <span> Emily is a Professor of Medicine in the Division of Infectious Diseases at University of Utah School of Medicine. She serves as Medical Director of the Antimicrobial Stewardship Programs at University of Utah Health and the Salt Lake City Veterans Affairs Healthcare System. Dr. Spivak's research interests focus on understanding patterns and drivers of antimicrobial use, development and evaluation of methods to improve antimicrobial use. Dr. Spivak has developed an interest in the intersection of climate change and healthcare and led efforts to estimate greenhouse gas emissions from unnecessary antibiotic prescriptions and advocated for more sustainable practices with infectious diseases diagnosis and antimicrobial prescribing. She is a Fellow of the Infectious Diseases Society of America (IDSA) and a Fellow of the Society for Hospital Epidemiology of America.</span>
              </div>
              <div>
                <span className="font-bold underline">Leila Hojat, MD:</span>
                <span> Leila is an Associate Professor of Medicine in the Division of Infectious Diseases at Emory University and Director of Antimicrobial Stewardship at Emory University Hospital Midtown. She serves on both the Antimicrobial Stewardship Committee and the Research Committee of the Society for Healthcare Epidemiology of America (SHEA) and has collaborated with multiple organizations to develop guidance on community-acquired pneumonia and to advance infectious diseases medical education. Her interests include clinical decision support and healthcare sustainability, and she endeavors to apply One Health principles across all aspects of clinical practice, research, and antimicrobial stewardship.</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <span className="font-bold">Questions or Feedback?</span> Reach out to <a href="mailto:hello@ecorxchoice.com" className="underline text-blue-400 hover:text-blue-600">hello@ecorxchoice.com</a>
          </div>
        </div>
      )}
      <footer className="py-4 px-6 text-center text-sm text-slate-400">
        <p>
          © 2025 Antibiotic Waste Calculator • Helping reduce environmental
          impact in healthcare
        </p>
      </footer>
    </div>
  );
}

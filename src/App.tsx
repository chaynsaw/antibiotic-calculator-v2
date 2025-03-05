import React, { useState } from "react";
import { ChevronDown, Leaf, Pill, Droplet, LineChart } from "lucide-react";
export function App() {
  const [antibiotic, setAntibiotic] = useState("Antibiotic A");
  const [method, setMethod] = useState("IV");
  const [form, setForm] = useState("Liquid");
  const [dosage, setDosage] = useState("500 mg");
  const totalWaste = 110;
  const wasteBreakdown = [
    {
      item: "Antibiotic wrappings",
      amount: 10,
      units: 1,
    },
    {
      item: "Antibiotic vials",
      amount: 20,
      units: 1,
    },
    {
      item: "Antibiotic vial caps",
      amount: 5,
      units: 1,
    },
    {
      item: "Syringes",
      amount: 15,
      units: 1,
    },
    {
      item: "Needles",
      amount: 5,
      units: 1,
    },
    {
      item: "Needle caps",
      amount: 2,
      units: 1,
    },
    {
      item: "Needle hubs",
      amount: 3,
      units: 1,
    },
    {
      item: "IV bags",
      amount: 50,
      units: 1,
    },
  ];
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
          <p className="text-slate-300 text-lg max-w-2xl">
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
                  Antibiotic Type
                </label>
                <div className="relative">
                  <select
                    value={antibiotic}
                    onChange={(e) => setAntibiotic(e.target.value)}
                    className="appearance-none bg-slate-800 border border-slate-600 text-white py-3 px-4 pr-8 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>Antibiotic A</option>
                    <option>Antibiotic B</option>
                    <option>Antibiotic C</option>
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
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                    className="appearance-none bg-slate-800 border border-slate-600 text-white py-3 px-4 pr-8 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>IV</option>
                    <option>Oral</option>
                    <option>Topical</option>
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
                    value={form}
                    onChange={(e) => setForm(e.target.value)}
                    className="appearance-none bg-slate-800 border border-slate-600 text-white py-3 px-4 pr-8 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>Liquid</option>
                    <option>Tablet</option>
                    <option>Capsule</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <ChevronDown size={18} className="text-slate-400" />
                  </div>
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Dosage
                </label>
                <div className="relative">
                  <select
                    value={dosage}
                    onChange={(e) => setDosage(e.target.value)}
                    className="appearance-none bg-slate-800 border border-slate-600 text-white py-3 px-4 pr-8 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>250 mg</option>
                    <option>500 mg</option>
                    <option>750 mg</option>
                    <option>1000 mg</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <ChevronDown size={18} className="text-slate-400" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex items-center space-x-2 mb-4">
                <LineChart className="text-blue-400" size={20} />
                <h2 className="text-xl font-semibold">Results</h2>
              </div>
              <div className="bg-slate-800/80 rounded-lg p-5 border border-slate-700 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">
                    Total plastic waste per dose:
                  </span>
                  <span className="text-2xl font-bold text-white">
                    {totalWaste} mg
                  </span>
                </div>
                <div className="mt-2 w-full bg-slate-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-2.5 rounded-full"
                    style={{
                      width: `${Math.min(totalWaste / 2, 100)}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="bg-slate-800/80 rounded-lg border border-slate-700">
                <ul className="divide-y divide-slate-700">
                  {wasteBreakdown.map((item, index) => (
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
                        {item.amount} mg × {item.units} units ={" "}
                        {item.amount * item.units} mg
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-4 px-6 text-center text-sm text-slate-400">
        <p>
          © 2023 Antibiotic Waste Calculator • Helping reduce environmental
          impact in healthcare
        </p>
      </footer>
    </div>
  );
}

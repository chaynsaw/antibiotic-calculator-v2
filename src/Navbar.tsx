import { Leaf } from "lucide-react";

interface NavbarProps {
  active: "landing" | "calculator" | "about" | "envImpact";
  onSelect: (page: "landing" | "calculator" | "about" | "envImpact") => void;
}

export function Navbar({ active, onSelect }: NavbarProps) {
  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4">
          <div className="flex items-center justify-center md:justify-start">
            <button
              onClick={() => onSelect("landing")}
              className="flex items-center hover:opacity-80 transition-opacity duration-200"
            >
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-white text-2xl font-bold whitespace-nowrap">
                Antibiotic Waste Calculator
              </span>
            </button>
          </div>
          <div className="flex mt-4 md:mt-0 justify-center md:justify-end space-x-0 md:space-x-4 md:ml-8">
            <button
              onClick={() => onSelect("calculator")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                active === "calculator"
                  ? "bg-gray-800 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Calculate Plastic Waste
            </button>
            <button
              onClick={() => onSelect("envImpact")}
              className={`ml-2 md:ml-4 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                active === "envImpact"
                  ? "bg-gray-800 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Calculate Environmental Impact
            </button>
            <button
              onClick={() => onSelect("about")}
              className={`ml-2 md:ml-4 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                active === "about"
                  ? "bg-gray-800 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 
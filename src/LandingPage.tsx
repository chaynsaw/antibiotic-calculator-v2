import { Leaf, Calculator, Users, ArrowRight, BarChart3 } from "lucide-react";

interface LandingPageProps {
  onGetStarted: () => void;
  onEnvImpact: () => void;
}

export function LandingPage({ onGetStarted, onEnvImpact }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="bg-green-500/20 p-4 rounded-full">
              <Leaf className="h-16 w-16 text-green-400" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Calculate Antibiotic
            <span className="block text-green-400">Waste Impact</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Make informed decisions about antibiotic regimens by understanding their environmental impact. 
            Compare plastic waste between different treatment options.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <button
              onClick={onGetStarted}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-8 rounded-xl text-lg shadow-lg transition-all duration-200 transform hover:scale-105 flex flex-col items-center justify-center space-y-3 min-h-[200px]"
            >
              <div className="bg-green-400/20 p-3 rounded-full">
                <Calculator className="h-8 w-8 text-green-300" />
              </div>
              <span className="text-center leading-tight">
                Compare two or more<br />
                antibiotic regimens<br />
                to see which make the least<br />
                plastic waste
              </span>
            </button>
            
            <button
              onClick={onEnvImpact}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-6 px-8 rounded-xl text-lg shadow-lg transition-all duration-200 transform hover:scale-105 flex flex-col items-center justify-center space-y-3 min-h-[200px]"
            >
              <div className="bg-blue-400/20 p-3 rounded-full">
                <BarChart3 className="h-8 w-8 text-blue-300" />
              </div>
              <span className="text-center leading-tight">
                Quantify the<br />
                environmental impact<br />
                of a stewardship<br />
                intervention using<br />
                days of therapy
              </span>
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-green-500/50 transition-all duration-300">
            <div className="bg-green-500/20 p-3 rounded-lg w-fit mb-4">
              <Calculator className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Smart Calculations</h3>
            <p className="text-slate-300">
              Automatically calculate plastic waste for any antibiotic regimen with our comprehensive database.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-green-500/50 transition-all duration-300">
            <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-4">
              <Leaf className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Environmental Impact</h3>
            <p className="text-slate-300">
              Understand the environmental consequences of healthcare decisions and make sustainable choices.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-green-500/50 transition-all duration-300">
            <div className="bg-purple-500/20 p-3 rounded-lg w-fit mb-4">
              <Users className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Healthcare Professionals</h3>
            <p className="text-slate-300">
              Designed for clinicians, pharmacists, and healthcare administrators to improve sustainability.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Why This Matters</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">1.7M</div>
              <p className="text-slate-300">Tons of plastic waste produced by US healthcare annually</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <p className="text-slate-300">Hours healthcare facilities operate, generating continuous waste</p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-300 mb-6">
            Ready to make a difference in healthcare sustainability?
          </p>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Choose one of the tools above to get started with your environmental impact analysis.
          </p>
        </div>
      </div>
    </div>
  );
}

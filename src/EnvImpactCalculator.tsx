import { Leaf, BarChart3, Calendar, TrendingUp } from "lucide-react";

interface EnvImpactCalculatorProps {
  onBackToHome: () => void;
}

export function EnvImpactCalculator({ onBackToHome }: EnvImpactCalculatorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-blue-500/20 p-4 rounded-full">
              <BarChart3 className="h-16 w-16 text-blue-400" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Environmental Impact
            <span className="block text-blue-400">Calculator</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Quantify the environmental impact of antimicrobial stewardship interventions 
            using days of therapy and other sustainability metrics.
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-12 border border-slate-700 text-center mb-16">
          <div className="bg-blue-500/20 p-6 rounded-full w-fit mx-auto mb-6">
            <TrendingUp className="h-20 w-20 text-blue-400" />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            We're building tools to help you measure the environmental impact of your 
            antimicrobial stewardship programs. This calculator will allow you to:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-700/50 rounded-lg p-6">
              <Calendar className="h-12 w-12 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Days of Therapy</h3>
              <p className="text-slate-300 text-sm">
                Calculate total days of therapy and their environmental footprint
              </p>
            </div>
            
            <div className="bg-slate-700/50 rounded-lg p-6">
              <BarChart3 className="h-12 w-12 text-green-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Impact Metrics</h3>
              <p className="text-slate-300 text-sm">
                Measure the sustainability impact of stewardship interventions
              </p>
            </div>
            
            <div className="bg-slate-700/50 rounded-lg p-6">
              <Leaf className="h-12 w-12 text-green-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Sustainability Goals</h3>
              <p className="text-slate-300 text-sm">
                Track progress toward environmental sustainability targets
              </p>
            </div>
          </div>
          
          <p className="text-slate-400 text-sm">
            This feature is currently under development. Check back soon for updates!
          </p>
        </div>

        {/* Back to Home Button */}
        <div className="text-center">
          <button
            onClick={onBackToHome}
            className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}


import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const RunningHero = () => {
  return (
    <section className="relative min-h-screen bg-gearup-dark flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Running and marathon training" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Master Your
              <span className="text-gearup-red block mt-2 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Running Journey
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              From beginner training plans to marathon preparation - discover comprehensive running guides, 
              gear reviews, and expert tips to elevate your performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gearup-red to-red-700 hover:from-red-600 hover:to-red-800 text-white px-12 py-6 text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="#running-categories" className="flex items-center gap-3">
                  <Zap className="w-6 h-6" />
                  Explore Running Guides
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunningHero;

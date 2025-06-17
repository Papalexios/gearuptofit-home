
import { Button } from "@/components/ui/button";
import { Play, ArrowDown, Zap, Users, Award } from "lucide-react";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <>
      <Navigation />
      <section className="relative min-h-screen bg-gearup-dark flex items-center overflow-hidden pt-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Dynamic fitness transformation - person working out with determination and energy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight drop-shadow-lg px-2">
              Upgrade Your Fitness.
              <span className="text-gearup-red block mt-2 sm:mt-4">Transform Your Life.</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md font-light px-4">
              Your ultimate hub for fitness, nutrition, and performance. 
              <span className="block mt-2 text-base sm:text-lg md:text-xl lg:text-2xl text-red-200">
                Expert guidance • Proven strategies • Real results
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gearup-red hover:bg-red-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 border-2 border-red-600"
              >
                <a href="/start-free" className="flex items-center gap-3">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                  Start Free Today
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gearup-dark px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-xl bg-black/30 backdrop-blur-sm shadow-xl"
              >
                <a href="https://gearuptofit.com/running/top-6-benefits-of-running/" className="flex items-center gap-3">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                  Watch Success Stories
                </a>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto px-4">
              <div className="flex flex-col items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-sm px-4 sm:px-6 py-4 sm:py-6 rounded-2xl border border-white/20">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-gearup-red" />
                <span className="text-2xl sm:text-3xl font-bold text-white">500K+</span>
                <span className="text-sm sm:text-base text-gray-300 font-medium text-center">Lives Transformed</span>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-sm px-4 sm:px-6 py-4 sm:py-6 rounded-2xl border border-white/20">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-gearup-red" />
                <span className="text-2xl sm:text-3xl font-bold text-white">4.9★</span>
                <span className="text-sm sm:text-base text-gray-300 font-medium text-center">Expert Rating</span>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-sm px-4 sm:px-6 py-4 sm:py-6 rounded-2xl border border-white/20">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-gearup-red" />
                <span className="text-2xl sm:text-3xl font-bold text-white">15+</span>
                <span className="text-sm sm:text-base text-gray-300 font-medium text-center">Years Expertise</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator - Hidden on mobile for cleaner look */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-white drop-shadow-lg" />
        </div>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-4 left-4 right-4 z-50 sm:hidden">
          <Button 
            className="w-full bg-gearup-red hover:bg-red-700 text-white py-4 text-lg font-bold shadow-2xl rounded-xl"
            asChild
          >
            <a href="/start-free">
              Start Free Today
            </a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Hero;

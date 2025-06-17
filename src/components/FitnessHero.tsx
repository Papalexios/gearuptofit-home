
import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Target } from "lucide-react";
import Navigation from "./Navigation";

const FitnessHero = () => {
  return (
    <>
      <Navigation />
      <section className="relative min-h-screen bg-gearup-dark flex items-center overflow-hidden pt-16">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Diverse group of people working out in modern gym"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg px-2">
              Transform Your Body,
              <span className="text-gearup-red block mt-1 sm:mt-2">Unlock Your Best Self</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md px-4">
              From beginner-friendly workouts to advanced training programs - discover science-backed 
              fitness strategies, expert nutrition guidance, and the tools you need to achieve lasting results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gearup-red hover:bg-red-700 text-white px-8 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <a href="https://gearuptofit.com/fitness/how-to-start-training-and-not-quit/" className="flex items-center gap-3">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                  Start Your Fitness Journey
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gearup-dark px-8 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-lg bg-black/30 backdrop-blur-sm"
              >
                <a href="https://gearuptofit.com/fitness/the-ultimate-guide-to-hiit-workout/" className="flex items-center gap-3">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                  Watch Free Workouts
                </a>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 text-white px-4">
              <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-lg min-w-[200px] justify-center">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-gearup-red flex-shrink-0" />
                <div className="text-center">
                  <span className="text-xl sm:text-2xl font-bold text-gearup-red block">1M+</span>
                  <span className="text-xs sm:text-sm drop-shadow-md">Workouts Completed</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-lg min-w-[200px] justify-center">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-gearup-red flex-shrink-0" />
                <div className="text-center">
                  <span className="text-xl sm:text-2xl font-bold text-gearup-red block">97%</span>
                  <span className="text-xs sm:text-sm drop-shadow-md">Success Rate</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-lg min-w-[200px] justify-center">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-gearup-red flex-shrink-0" />
                <div className="text-center">
                  <span className="text-xl sm:text-2xl font-bold text-gearup-red block">Free</span>
                  <span className="text-xs sm:text-sm drop-shadow-md">Expert Content</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-4 left-4 right-4 z-50 sm:hidden">
          <Button 
            className="w-full bg-gearup-red hover:bg-red-700 text-white py-4 text-lg font-bold shadow-2xl rounded-xl"
            asChild
          >
            <a href="https://gearuptofit.com/fitness/how-to-start-training-and-not-quit/">
              Start Your Journey
            </a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default FitnessHero;

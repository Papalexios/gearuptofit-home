
import { Button } from "@/components/ui/button";
import { Play, TrendingDown, Target } from "lucide-react";
import Navigation from "./Navigation";

const WeightLossHero = () => {
  return (
    <>
      <Navigation />
      <section className="relative min-h-screen bg-gearup-dark flex items-center overflow-hidden pt-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Inspiring weight loss transformation - fit person celebrating success with measuring tape and healthy lifestyle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Unlock Your Best Self,
              <span className="text-gearup-red block mt-2">Transform Your Body Today</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Discover science-backed weight loss strategies, personalized meal plans, fat-burning workouts, 
              and expert guidance to achieve lasting results and build the healthy lifestyle you deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gearup-red hover:bg-red-700 text-white px-10 py-6 text-xl font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <a href="https://gearuptofit.com/weight-loss/easy-diet-plan-for-successful-weight-loss/" className="flex items-center gap-3">
                  <Target className="w-6 h-6" />
                  Start Your Weight Loss Journey
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-gearup-dark px-10 py-6 text-xl font-bold rounded-lg flex items-center gap-3 bg-black/30 backdrop-blur-sm"
              >
                <Play className="w-6 h-6" />
                <a href="https://gearuptofit.com/weight-loss/science-backed-tips-for-effective-weight-loss/" className="flex items-center gap-3">
                  Watch Success Stories
                </a>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-white">
              <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-lg">
                <TrendingDown className="w-6 h-6 text-gearup-red" />
                <div>
                  <span className="text-2xl font-bold text-gearup-red block">2M+</span>
                  <span className="text-sm drop-shadow-md">Pounds Lost</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-lg">
                <Target className="w-6 h-6 text-gearup-red" />
                <div>
                  <span className="text-2xl font-bold text-gearup-red block">95%</span>
                  <span className="text-sm drop-shadow-md">Success Rate</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-lg">
                <Play className="w-6 h-6 text-gearup-red" />
                <div>
                  <span className="text-2xl font-bold text-gearup-red block">Free</span>
                  <span className="text-sm drop-shadow-md">Expert Plans</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeightLossHero;

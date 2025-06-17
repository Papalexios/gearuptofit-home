
import { Button } from "@/components/ui/button";
import { Apple, Calculator } from "lucide-react";

const NutritionHero = () => {
  return (
    <section className="relative min-h-screen bg-gearup-dark flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Healthy nutrition and meal prep" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Master Your
            <span className="text-gearup-red block mt-2">Nutrition Game</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Discover evidence-based nutrition strategies, meal planning guides, and healthy recipes 
            to fuel your fitness goals and optimize your health.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button size="lg" className="bg-gearup-red hover:bg-red-700 text-white px-8 py-4 text-lg">
              <Apple className="w-5 h-5 mr-2" />
              Explore Nutrition Guides
            </Button>
            
            <Button variant="outline" size="lg" className="border-white text-white hover:text-gearup-dark px-8 py-4 text-lg bg-red-600 hover:bg-red-500">
              <Calculator className="w-5 h-5 mr-2" />
              Try AI Recipe Generator
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionHero;

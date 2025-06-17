
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Activity, Target, Zap } from "lucide-react";

const InteractiveTools = () => {
  const tools = [
    {
      icon: <Calculator className="w-8 h-8 text-gearup-red" />,
      title: "Running Distance Calculator",
      description: "Plan your routes and track distances with precision",
      link: "https://gearuptofit.com/running/running-distance-calculator/",
      cta: "Calculate Distance"
    },
    {
      icon: <Activity className="w-8 h-8 text-gearup-red" />,
      title: "Calories Burned Calculator",
      description: "See exactly how many calories you burn during your runs",
      link: "https://gearuptofit.com/fitness-and-health-calculators/calculate-your-calorie-burn-today/",
      cta: "Calculate Calories"
    },
    {
      icon: <Target className="w-8 h-8 text-gearup-red" />,
      title: "BMI & Body Fat Calculator",
      description: "Track your body composition changes as you progress",
      link: "https://gearuptofit.com/fitness-and-health-calculators/body-fat-percentage-for-men-and-women/",
      cta: "Check BMI"
    },
    {
      icon: <Zap className="w-8 h-8 text-gearup-red" />,
      title: "TDEE Calculator",
      description: "Calculate your daily energy needs for optimal performance",
      link: "https://gearuptofit.com/fitness-and-health-calculators/total-daily-energy-expenditure-calculation-tool/",
      cta: "Calculate TDEE"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gearup-black mb-4">
            Free Interactive Tools
          </h2>
          <p className="text-xl text-gearup-medium-gray max-w-2xl mx-auto">
            Take the guesswork out of your training with our precision calculators
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tools.map((tool, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-gearup-red hover:scale-105">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {tool.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-gearup-black">
                  {tool.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gearup-medium-gray mb-4">
                  {tool.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-gearup-red text-gearup-red hover:bg-gray-50"
                >
                  <a href={tool.link} className="w-full">
                    {tool.cta}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Nutrition Tools */}
        <div className="bg-gearup-light-gray rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Nutrition & Meal Planning Tools
            </h3>
            <p className="text-lg text-gray-200">
              Fuel your runs properly with our comprehensive nutrition calculators
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-white mb-2">Macro Calculator</h4>
              <p className="text-gray-300 mb-3">Perfect macronutrient ratios for runners</p>
              <Button variant="outline" size="sm" className="border-gearup-red text-gearup-red bg-white hover:bg-gray-50">
                <a href="https://gearuptofit.com/fitness-and-health-calculators/macro-calculator/">
                  Calculate Macros
                </a>
              </Button>
            </div>
            
            <div className="text-center">
              <h4 className="font-semibold text-white mb-2">Meal Calorie Calculator</h4>
              <p className="text-gray-300 mb-3">Plan meals around your training schedule</p>
              <Button variant="outline" size="sm" className="border-gearup-red text-gearup-red bg-white hover:bg-gray-50">
                <a href="https://gearuptofit.com/fitness-and-health-calculators/meal-calorie-calculator/">
                  Plan Meals
                </a>
              </Button>
            </div>
            
            <div className="text-center">
              <h4 className="font-semibold text-white mb-2">BMR Calculator</h4>
              <p className="text-gray-300 mb-3">Understand your baseline metabolic rate</p>
              <Button variant="outline" size="sm" className="border-gearup-red text-gearup-red bg-white hover:bg-gray-50">
                <a href="https://gearuptofit.com/fitness-and-health-calculators/basal-metabolic-rate-calculation-tool/">
                  Calculate BMR
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTools;

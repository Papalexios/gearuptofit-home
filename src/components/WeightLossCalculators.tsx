
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Target, Activity, Utensils } from "lucide-react";

const WeightLossCalculators = () => {
  const calculators = [
    {
      icon: <Calculator className="w-8 h-8 text-gearup-red" />,
      title: "BMI & Body Metrics",
      description: "Calculate your BMI, BMR, and waist-to-hip ratio",
      link: "https://gearuptofit.com/fitness-and-health-calculators/calculate-bmi-bmr-and-whr-now/"
    },
    {
      icon: <Activity className="w-8 h-8 text-gearup-red" />,
      title: "Calorie Burn Calculator",
      description: "Track calories burned during different activities",
      link: "https://gearuptofit.com/fitness-and-health-calculators/calculate-your-calorie-burn-today/"
    },
    {
      icon: <Target className="w-8 h-8 text-gearup-red" />,
      title: "Weight Loss Calculator",
      description: "Plan your weight loss timeline and goals",
      link: "https://gearuptofit.com/fitness-and-health-calculators/weight-loss-calculation-tool/"
    },
    {
      icon: <Utensils className="w-8 h-8 text-gearup-red" />,
      title: "Macro Calculator",
      description: "Determine your ideal protein, carb, and fat intake",
      link: "https://gearuptofit.com/fitness-and-health-calculators/macro-calculator/"
    }
  ];

  const additionalTools = [
    {
      title: "Total Daily Energy Expenditure",
      description: "Calculate your complete daily calorie needs",
      link: "https://gearuptofit.com/fitness-and-health-calculators/total-daily-energy-expenditure-calculation-tool/"
    },
    {
      title: "Meal Calorie Calculator",
      description: "Track calories in your meals and snacks",
      link: "https://gearuptofit.com/fitness-and-health-calculators/meal-calorie-calculator/"
    }
  ];

  return (
    <section className="py-20 bg-gearup-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Weight Loss Tools & Calculators
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Use our free, science-based calculators to create your personalized weight loss plan 
            and track your progress with precision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {calculators.map((calc, index) => (
            <Card key={index} className="bg-gearup-light-gray border-2 border-gearup-medium-gray hover:border-gearup-red transition-all duration-300 group text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-gearup-red/20 rounded-full p-4 group-hover:bg-gearup-red/30 transition-colors">
                    {calc.icon}
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-white mb-2">
                  {calc.title}
                </CardTitle>
                <CardDescription className="text-gray-300 text-sm">
                  {calc.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-gearup-red hover:bg-red-700 text-white"
                  size="sm"
                >
                  <a href={calc.link}>
                    Calculate Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Tools */}
        <div className="bg-gearup-light-gray rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Additional Weight Loss Tools
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalTools.map((tool, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-semibold text-white mb-2">{tool.title}</h4>
                <p className="text-gray-300 mb-4 text-sm">{tool.description}</p>
                <a 
                  href={tool.link}
                  className="text-gearup-red hover:text-red-300 font-medium hover:underline"
                >
                  Try It Free →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeightLossCalculators;


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Target, TrendingUp, Activity, Scale, Utensils } from "lucide-react";

const FitnessCalculators = () => {
  const calculators = [
    {
      icon: <Activity className="w-8 h-8 text-gearup-red" />,
      title: "TDEE Calculator",
      description: "Calculate your Total Daily Energy Expenditure for optimal nutrition planning",
      link: "https://gearuptofit.com/fitness-and-health-calculators/total-daily-energy-expenditure-calculation-tool/",
      cta: "Calculate TDEE",
      popular: true
    },
    {
      icon: <Target className="w-8 h-8 text-gearup-red" />,
      title: "Calorie Burn Calculator",
      description: "Discover exactly how many calories you burn during any activity",
      link: "https://gearuptofit.com/fitness-and-health-calculators/calculate-your-calorie-burn-today/",
      cta: "Calculate Calories",
      popular: true
    },
    {
      icon: <Scale className="w-8 h-8 text-gearup-red" />,
      title: "BMI, BMR & WHR Calculator",
      description: "Complete body composition analysis with multiple health metrics",
      link: "https://gearuptofit.com/fitness-and-health-calculators/calculate-bmi-bmr-and-whr-now/",
      cta: "Calculate BMI",
      popular: false
    },
    {
      icon: <Utensils className="w-8 h-8 text-gearup-red" />,
      title: "Macro Calculator",
      description: "Get your perfect macronutrient breakdown for your fitness goals",
      link: "https://gearuptofit.com/fitness-and-health-calculators/macro-calculator/",
      cta: "Calculate Macros",
      popular: true
    },
    {
      icon: <Calculator className="w-8 h-8 text-gearup-red" />,
      title: "Meal Calorie Calculator",
      description: "Plan and track your meals with precision calorie counting",
      link: "https://gearuptofit.com/fitness-and-health-calculators/meal-calorie-calculator/",
      cta: "Plan Meals",
      popular: false
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-gearup-red" />,
      title: "Weight Loss Calculator",
      description: "Set realistic weight loss goals with science-based predictions",
      link: "https://gearuptofit.com/fitness-and-health-calculators/weight-loss-calculation-tool/",
      cta: "Calculate Loss",
      popular: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gearup-black mb-6">
            Free Fitness Calculators & Tools
          </h2>
          <p className="text-xl text-gearup-medium-gray max-w-3xl mx-auto">
            Take the guesswork out of your fitness journey with our precision calculators. 
            Get personalized data to optimize your workouts, nutrition, and results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {calculators.map((calc, index) => (
            <Card key={index} className="relative text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-gearup-red hover:scale-105">
              {calc.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gearup-red text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <div className="bg-gearup-red/10 p-4 rounded-full">
                    {calc.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gearup-black">
                  {calc.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gearup-medium-gray mb-6 text-base">
                  {calc.description}
                </CardDescription>
                <Button 
                  className="w-full bg-gearup-red hover:bg-red-700 text-white font-semibold"
                >
                  <a href={calc.link} className="w-full">
                    {calc.cta}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions Section */}
        <div className="bg-gearup-light-gray rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Start Tracking Your Progress Today
            </h3>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Combine our calculators with expert guidance to create a complete fitness transformation plan
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h4 className="font-bold text-white mb-2 text-lg">Step 1: Calculate</h4>
              <p className="text-gray-300 mb-4">Use our TDEE calculator to find your daily calorie needs</p>
              <Button variant="outline" className="border-gearup-red text-gearup-red bg-white hover:bg-gray-50">
                <a href="https://gearuptofit.com/fitness-and-health-calculators/total-daily-energy-expenditure-calculation-tool/">
                  Start Here
                </a>
              </Button>
            </div>
            
            <div className="text-center">
              <h4 className="font-bold text-white mb-2 text-lg">Step 2: Plan</h4>
              <p className="text-gray-300 mb-4">Set your macros and plan your meals for success</p>
              <Button variant="outline" className="border-gearup-red text-gearup-red bg-white hover:bg-gray-50">
                <a href="https://gearuptofit.com/fitness-and-health-calculators/macro-calculator/">
                  Plan Nutrition
                </a>
              </Button>
            </div>
            
            <div className="text-center">
              <h4 className="font-bold text-white mb-2 text-lg">Step 3: Train</h4>
              <p className="text-gray-300 mb-4">Choose workouts that match your fitness level</p>
              <Button variant="outline" className="border-gearup-red text-gearup-red bg-white hover:bg-gray-50">
                <a href="https://gearuptofit.com/fitness/how-to-start-training-and-not-quit/">
                  Start Training
                </a>
              </Button>
            </div>
            
            <div className="text-center">
              <h4 className="font-bold text-white mb-2 text-lg">Step 4: Track</h4>
              <p className="text-gray-300 mb-4">Monitor calories burned and adjust as needed</p>
              <Button variant="outline" className="border-gearup-red text-gearup-red bg-white hover:bg-gray-50">
                <a href="https://gearuptofit.com/fitness-and-health-calculators/calculate-your-calorie-burn-today/">
                  Track Progress
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitnessCalculators;

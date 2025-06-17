
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Coffee, Apple, Droplets } from "lucide-react";

const WeightLossNutrition = () => {
  const nutritionCategories = [
    {
      icon: <Utensils className="w-8 h-8 text-gearup-red" />,
      title: "Meal Plans & Recipes",
      links: [
        { text: "Healthy Recipes for Weight Loss", url: "https://gearuptofit.com/weight-loss/healthy-recipes-for-weight-loss/" },
        { text: "Meal Replacement Plans for Weight Loss", url: "https://gearuptofit.com/weight-loss/meal-replacement-plans-for-weight-loss/" },
        { text: "Meal Plan for Weight Loss and Muscle Gain for Males", url: "https://gearuptofit.com/weight-loss/meal-plan-for-weight-loss-and-muscle-gain-for-males/" },
        { text: "Best Meal Plan for Losing Belly Fat", url: "https://gearuptofit.com/weight-loss/best-meal-plan-for-losing-belly-fat/" }
      ]
    },
    {
      icon: <Coffee className="w-8 h-8 text-gearup-red" />,
      title: "Smoothies & Shakes",
      links: [
        { text: "Protein Shake Recipes for Weight Loss", url: "https://gearuptofit.com/weight-loss/protein-shake-recipes-for-weight-loss/" },
        { text: "13 Tasty Smoothies to Lose Belly Fat Fast", url: "https://gearuptofit.com/weight-loss/13-tasty-smoothies-to-lose-belly-fat-fast/" },
        { text: "How to Lose Weight by Replacing Meals with Smoothies", url: "https://gearuptofit.com/weight-loss/how-to-lose-weight-by-replacing-meals-with-smoothies/" }
      ]
    },
    {
      icon: <Apple className="w-8 h-8 text-gearup-red" />,
      title: "Foods & Nutrition",
      links: [
        { text: "Weight Loss Foods", url: "https://gearuptofit.com/weight-loss/weight-loss-foods/" },
        { text: "What is the Best Method to Burn Fat?", url: "https://gearuptofit.com/weight-loss/what-is-the-best-method-to-burn-fat/" },
        { text: "How to Lose Belly Fat Overnight", url: "https://gearuptofit.com/weight-loss/how-to-lose-belly-fat-overnight/" }
      ]
    },
    {
      icon: <Droplets className="w-8 h-8 text-gearup-red" />,
      title: "Specialized Nutrition",
      links: [
        { text: "Carnivore Diet Meal Plan", url: "https://gearuptofit.com/weight-loss/carnivore-diet-meal-plan/" },
        { text: "Vegan Diet for Weight Loss", url: "https://gearuptofit.com/weight-loss/vegan-diet-for-weight-loss/" },
        { text: "The Volumetrics Diet Plan", url: "https://gearuptofit.com/weight-loss/the-volumetrics-diet-plan/" },
        { text: "24-Hour Fast", url: "https://gearuptofit.com/weight-loss/24-hour-fast/" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gearup-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Nutrition & Meal Planning
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Master the nutrition side of weight loss with our comprehensive meal plans, 
            healthy recipes, and expert dietary guidance for sustainable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {nutritionCategories.map((category, index) => (
            <Card key={index} className="bg-gearup-charcoal border-2 border-gearup-light-gray hover:border-gearup-red transition-all duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-gearup-red/20 rounded-full p-4">
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-white">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.links.map((link, idx) => (
                    <a 
                      key={idx}
                      href={link.url}
                      className="block text-gray-300 hover:text-gearup-red text-sm leading-relaxed hover:underline transition-colors"
                    >
                      → {link.text}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Nutrition Guides */}
        <div className="bg-gearup-charcoal rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Essential Nutrition Guides
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-3">Calorie Management</h4>
              <div className="space-y-2">
                <a href="https://gearuptofit.com/weight-loss/recommended-calories-per-day-to-lose-weight/" className="block text-gearup-red hover:text-red-300 text-sm hover:underline">
                  → Recommended Calories per Day to Lose Weight
                </a>
                <a href="https://gearuptofit.com/weight-loss/how-to-lose-weight-in-2-weeks/" className="block text-gearup-red hover:text-red-300 text-sm hover:underline">
                  → How to Lose Weight in 2 Weeks
                </a>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-3">Diet Strategies</h4>
              <div className="space-y-2">
                <a href="https://gearuptofit.com/weight-loss/how-to-lose-weight-without-diet-or-exercise/" className="block text-gearup-red hover:text-red-300 text-sm hover:underline">
                  → How to Lose Weight Without Diet or Exercise
                </a>
                <a href="https://gearuptofit.com/weight-loss/maximum-weight-loss-in-a-month/" className="block text-gearup-red hover:text-red-300 text-sm hover:underline">
                  → Maximum Weight Loss in a Month
                </a>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-3">Special Diets</h4>
              <div className="space-y-2">
                <a href="https://gearuptofit.com/weight-loss/top-5-trending-diets/" className="block text-gearup-red hover:text-red-300 text-sm hover:underline">
                  → Top 5 Trending Diets
                </a>
                <a href="https://gearuptofit.com/weight-loss/lose-a-pound-a-day/" className="block text-gearup-red hover:text-red-300 text-sm hover:underline">
                  → Lose a Pound a Day
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeightLossNutrition;

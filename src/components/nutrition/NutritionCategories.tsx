
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Coffee, Dumbbell, Leaf, Zap, Apple, Heart, Pill } from "lucide-react";

const NutritionCategories = () => {
  const nutritionCategories = [
    {
      icon: <Utensils className="w-8 h-8 text-gearup-red" />,
      title: "Meal Planning & Recipes",
      description: "Comprehensive meal plans and healthy recipes for every goal",
      links: [
        { text: "Healthy Overnight Oats Recipe for Weight Loss", url: "https://gearuptofit.com/nutrition/healthy-overnight-oats-recipe-for-weight-loss/" },
        { text: "Healthy Green Smoothies for Weight Loss", url: "https://gearuptofit.com/nutrition/healthy-green-smoothies-for-weight-loss/" },
        { text: "Healthy Banana Recipes for Weight Loss", url: "https://gearuptofit.com/nutrition/healthy-banana-recipes-for-weight-loss/" },
        { text: "Healthy Pasta Recipes Lose Weight", url: "https://gearuptofit.com/nutrition/healthy-pasta-recipes-lose-weight/" },
        { text: "Healthy Ground Turkey Recipes for Weight Loss", url: "https://gearuptofit.com/nutrition/healthy-ground-turkey-recipes-for-weight-loss/" },
        { text: "Breakfast Recipes to Lose Belly Fat", url: "https://gearuptofit.com/nutrition/breakfast-recipes-to-lose-belly-fat/" },
        { text: "High Protein Meal Prep for Weight Loss", url: "https://gearuptofit.com/nutrition/high-protein-meal-prep-for-weight-loss/" },
        { text: "Indian Breakfast for Weight Loss", url: "https://gearuptofit.com/nutrition/indian-breakfast-for-weight-loss/" }
      ]
    },
    {
      icon: <Coffee className="w-8 h-8 text-gearup-red" />,
      title: "Smoothies & Drinks",
      description: "Nutritious smoothies and beverages for health and performance",
      links: [
        { text: "Post Workout Smoothie", url: "https://gearuptofit.com/nutrition/post-workout-smoothie/" },
        { text: "Best Smoothies for Weight Gain", url: "https://gearuptofit.com/nutrition/best-smoothies-for-weight-gain/" },
        { text: "Smoothies to Lower Cholesterol", url: "https://gearuptofit.com/nutrition/smoothies-to-lower-cholesterol/" },
        { text: "Healthy Juice Recipes for Weight Loss", url: "https://gearuptofit.com/nutrition/healthy-juice-recipes-for-weight-loss/" },
        { text: "Energy Boost Smoothie Recipe", url: "https://gearuptofit.com/nutrition/energy-boost-smoothie-recipe/" },
        { text: "Tips for Proper Juicing", url: "https://gearuptofit.com/nutrition/tips-for-proper-juicing/" },
        { text: "8 Benefits of a Juice Cleanse", url: "https://gearuptofit.com/nutrition/8-benefits-of-a-juice-cleanse/" }
      ]
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-gearup-red" />,
      title: "Sports & Performance Nutrition",
      description: "Optimize your athletic performance with targeted nutrition",
      links: [
        { text: "Essential Nutrients for Athletes", url: "https://gearuptofit.com/nutrition/essential-nutrients-for-athletes/" },
        { text: "Nutrition Plan for an Athlete", url: "https://gearuptofit.com/nutrition/nutrition-plan-for-an-athlete/" },
        { text: "10 Pre-Workout Meals That Will Help You Perform Like a Beast", url: "https://gearuptofit.com/nutrition/10-pre-workout-meals-that-will-help-you-perform-like-a-beast/" },
        { text: "Nutrition Tips for Post-Workout Recovery", url: "https://gearuptofit.com/nutrition/nutrition-tips-for-post-workout-recovery/" },
        { text: "Post Workout Meal Ideas", url: "https://gearuptofit.com/nutrition/post-workout-meal-ideas/" },
        { text: "Cycling Nutrition and Hydration Tips", url: "https://gearuptofit.com/nutrition/cycling-nutrition-and-hydration-tips/" },
        { text: "Nutrition Plan for Half Marathon", url: "https://gearuptofit.com/nutrition/nutrition-plan-for-half-marathon/" },
        { text: "Trail Running Nutrition Guide", url: "https://gearuptofit.com/nutrition/trail-running-nutrition-guide/" },
        { text: "Healthy Travel Snacks for Athletes", url: "https://gearuptofit.com/nutrition/healthy-travel-snacks-for-athletes/" }
      ]
    },
    {
      icon: <Leaf className="w-8 h-8 text-gearup-red" />,
      title: "Diet Plans & Strategies",
      description: "Comprehensive diet plans for various health and fitness goals",
      links: [
        { text: "The Low Carb Diet for Beginners", url: "https://gearuptofit.com/nutrition/the-low-carb-diet-for-beginners/" },
        { text: "Healthy Vegan Diet Plan", url: "https://gearuptofit.com/nutrition/healthy-vegan-diet-plan/" },
        { text: "Vegan 1200 Calorie Meal Plan", url: "https://gearuptofit.com/nutrition/vegan-1200-calorie-meal-plan/" },
        { text: "The 1600 Calorie Meal Plan Lose Weight Feel Great", url: "https://gearuptofit.com/nutrition/the-1600-calorie-meal-plan-lose-weight-feel-great/" },
        { text: "Diet for Calisthenics", url: "https://gearuptofit.com/nutrition/diet-for-calisthenics/" },
        { text: "Balanced Plate Diet for Healthy Weight Loss", url: "https://gearuptofit.com/nutrition/balanced-plate-diet-for-healthy-weight-loss/" },
        { text: "How to Perform Long Fasts", url: "https://gearuptofit.com/nutrition/how-to-perform-long-fasts/" },
        { text: "High Nutrient Diet Plan", url: "https://gearuptofit.com/nutrition/high-nutrient-diet-plan/" }
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-gearup-red" />,
      title: "Metabolism & Weight Management",
      description: "Boost your metabolism and manage weight effectively",
      links: [
        { text: "Best Foods for Increasing Metabolism", url: "https://gearuptofit.com/nutrition/best-foods-for-increasing-metabolism/" },
        { text: "10 Metabolism Boosting Foods", url: "https://gearuptofit.com/nutrition/10-metabolism-boosting-foods/" },
        { text: "Foods Slow Metabolism and Lead to Weight Gain", url: "https://gearuptofit.com/nutrition/foods-slow-metabolism-and-lead-to-weight-gain/" },
        { text: "What is Aerobic Metabolism and How Can It Burn Fat", url: "https://gearuptofit.com/nutrition/what-is-aerobic-metabolism-and-how-can-it-burn-fat/" },
        { text: "Determine Your Metabolism Type", url: "https://gearuptofit.com/nutrition/determine-your-metabolism-type/" },
        { text: "Best Vitamin to Boost Metabolism", url: "https://gearuptofit.com/nutrition/best-vitamin-to-boost-metabolism/" },
        { text: "Foods to Boost Your Metabolism for a Flat Stomach", url: "https://gearuptofit.com/nutrition/foods-to-boost-your-metabolism-for-a-flat-stomach/" },
        { text: "Healthy Weight Management Strategies", url: "https://gearuptofit.com/nutrition/healthy-weight-management-strategies/" }
      ]
    },
    {
      icon: <Apple className="w-8 h-8 text-gearup-red" />,
      title: "Macronutrients & Food Science",
      description: "Understanding proteins, carbs, fats and their role in nutrition",
      links: [
        { text: "Protein is the Key to Optimal Health", url: "https://gearuptofit.com/nutrition/protein-is-the-key-to-optimal-health/" },
        { text: "Are You Getting Enough Protein", url: "https://gearuptofit.com/nutrition/are-you-getting-enough-protein/" },
        { text: "How to Calculate Macros", url: "https://gearuptofit.com/nutrition/how-to-calculate-macros/" },
        { text: "Macronutrients Breakdown", url: "https://gearuptofit.com/nutrition/macronutrients-breakdown/" },
        { text: "High Protein Low Carb Foods", url: "https://gearuptofit.com/nutrition/high-protein-low-carb-foods/" },
        { text: "High Carb Low Fat Foods", url: "https://gearuptofit.com/nutrition/high-carb-low-fat-foods/" },
        { text: "Stop Eating Refined Carbs", url: "https://gearuptofit.com/nutrition/stop-eating-refined-carbs/" },
        { text: "Vegetarian Protein Sources", url: "https://gearuptofit.com/nutrition/vegetarian-protein-sources-effective-ways-to-get-protein-from-vegetables/" },
        { text: "5 Surprising Good Sources of Protein", url: "https://gearuptofit.com/nutrition/5-surprising-good-sources-of-protein/" }
      ]
    },
    {
      icon: <Heart className="w-8 h-8 text-gearup-red" />,
      title: "Health & Wellness",
      description: "Nutrition for overall health, immunity and disease prevention",
      links: [
        { text: "Understanding How Nutrition Affects Your Health", url: "https://gearuptofit.com/nutrition/understanding-how-nutrition-affects-your-health/" },
        { text: "The Nutrients of the Body and What They Do", url: "https://gearuptofit.com/nutrition/the-nutrients-of-the-body-and-what-they-do/" },
        { text: "Feed Your Brain Nutrition for Cognitive Function", url: "https://gearuptofit.com/nutrition/feed-your-brain-nutrition-for-cognitive-function/" },
        { text: "The Best Foods for Stronger Bones", url: "https://gearuptofit.com/nutrition/the-best-foods-for-stronger-bones/" },
        { text: "The Health Benefits of Ginger", url: "https://gearuptofit.com/nutrition/the-health-benefits-of-ginger/" },
        { text: "What are the Health Benefits of Honey", url: "https://gearuptofit.com/nutrition/what-are-the-health-benefits-of-honey/" },
        { text: "Top 10 Health Benefits of Eating Eggs", url: "https://gearuptofit.com/nutrition/top-10-health-benefits-of-eating-eggs/" },
        { text: "7 Health Benefits of Zinc", url: "https://gearuptofit.com/nutrition/7-health-benefits-of-zinc/" },
        { text: "The Cholesterol Myth", url: "https://gearuptofit.com/nutrition/the-cholesterol-myth/" }
      ]
    },
    {
      icon: <Pill className="w-8 h-8 text-gearup-red" />,
      title: "Supplements & Superfoods",
      description: "Best supplements and superfoods for optimal nutrition",
      links: [
        { text: "Ranking the Best Superfoods of 2024", url: "https://gearuptofit.com/nutrition/ranking-the-best-superfoods-of-2024/" },
        { text: "Best Vitamin E Supplements", url: "https://gearuptofit.com/nutrition/best-vitamin-e-supplements/" },
        { text: "Best Vitamin K2 Supplements of 2024", url: "https://gearuptofit.com/nutrition/best-vitamin-k2-supplements-of-2024/" },
        { text: "Best Spirulina Supplements of 2024", url: "https://gearuptofit.com/nutrition/best-spirulina-supplements-of-2024/" },
        { text: "Best Keto Supplements of 2024", url: "https://gearuptofit.com/nutrition/best-keto-supplements-of-2024/" },
        { text: "The Best Collagen Peptide Supplements", url: "https://gearuptofit.com/nutrition/the-best-collagen-peptide-supplements/" },
        { text: "Best Alpha Lipoic Acid Supplements of 2024", url: "https://gearuptofit.com/nutrition/best-alpha-lipoic-acid-supplements-of-2024/" },
        { text: "Ranking the Best Raspberry Ketone Supplements of 2024", url: "https://gearuptofit.com/nutrition/ranking-the-best-raspberry-ketone-supplements-of-2024/" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gearup-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Complete Nutrition Library
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Access our comprehensive collection of nutrition guides, meal plans, and expert advice 
            covering every aspect of healthy eating and performance nutrition
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {nutritionCategories.map((category, index) => (
            <Card key={index} className="bg-gearup-charcoal border-2 border-gearup-light-gray hover:border-gearup-red transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gearup-red/20 rounded-full p-3">
                    {category.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-white mb-2">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-gearup-light">
                      {category.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {category.links.map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block text-gray-300 hover:text-gearup-red text-sm leading-relaxed hover:underline transition-colors p-2 rounded hover:bg-gearup-light-gray/20"
                    >
                      → {link.text}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NutritionCategories;

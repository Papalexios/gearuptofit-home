
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Dumbbell, Target, Apple, TrendingDown, Calculator, Star } from "lucide-react";

const FeaturedContent = () => {
  const featuredSections = [
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Fitness Essentials",
      description: "Master the fundamentals with our most popular fitness guides",
      color: "border-red-500",
      links: [
        {
          title: "The Beginner's Guide to the Gym",
          url: "https://gearuptofit.com/fitness/the-beginners-guide-to-the-gym/",
          description: "Everything you need to know for your first gym visit"
        },
        {
          title: "Upper Body HIIT Workout",
          url: "https://gearuptofit.com/fitness/upper-body-hiit-workout/",
          description: "High-intensity training for maximum results"
        },
        {
          title: "All About CrossFit Exercises",
          url: "https://gearuptofit.com/fitness/all-about-crossfit-exercises/",
          description: "Complete guide to functional fitness movements"
        },
        {
          title: "Exercises to Get Rid of Back Fat",
          url: "https://gearuptofit.com/fitness/exercises-to-get-rid-of-back-fat/",
          description: "Targeted exercises for a stronger, leaner back"
        }
      ]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Running Revolution",
      description: "Transform from beginner to confident runner",
      color: "border-orange-500",
      links: [
        {
          title: "How to Start Running When You Don't Feel Like It",
          url: "https://gearuptofit.com/running/how-to-start-running-when-you-dont-feel-like-it/",
          description: "Overcome mental barriers and build momentum"
        },
        {
          title: "From Couch to Your First 5K",
          url: "https://gearuptofit.com/running/from-couch-to-your-first-5k/",
          description: "Step-by-step plan for running success"
        },
        {
          title: "10K Training and Race Preparation Tips",
          url: "https://gearuptofit.com/running/10k-training-and-race-preparation-tips/",
          description: "Advanced strategies for your next running goal"
        },
        {
          title: "Garmin Enduro 3 Review",
          url: "https://gearuptofit.com/running/garmin-enduro-3/",
          description: "Expert review of premium GPS running watch"
        }
      ]
    },
    {
      icon: <Apple className="w-6 h-6" />,
      title: "Nutrition Mastery",
      description: "Science-backed nutrition for optimal performance",
      color: "border-green-500",
      links: [
        {
          title: "Protein is the Key to Optimal Health",
          url: "https://gearuptofit.com/nutrition/protein-is-the-key-to-optimal-health/",
          description: "Why protein should be your nutrition priority"
        },
        {
          title: "Best Foods for Increasing Metabolism",
          url: "https://gearuptofit.com/nutrition/best-foods-for-increasing-metabolism/",
          description: "Natural ways to boost your metabolic rate"
        },
        {
          title: "Stop Eating Refined Carbs",
          url: "https://gearuptofit.com/nutrition/stop-eating-refined-carbs/",
          description: "Break free from processed food addiction"
        },
        {
          title: "Nutritional Benefits of Cooking with Coconut Oil",
          url: "https://gearuptofit.com/nutrition/nutritional-benefits-of-cooking-with-coconut-oil/",
          description: "Healthy cooking fats for better nutrition"
        }
      ]
    }
  ];

  const additionalSections = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Weight Loss Strategies",
      color: "border-purple-500",
      links: [
        {
          title: "10 Major Causes of Obesity and Weight Gain",
          url: "https://gearuptofit.com/weight-loss/10-major-causes-of-obesity-and-weight-gain/",
          description: "Understanding the root causes"
        },
        {
          title: "Protein Shake Recipes for Weight Loss",
          url: "https://gearuptofit.com/weight-loss/protein-shake-recipes-for-weight-loss/",
          description: "Delicious and effective meal replacements"
        },
        {
          title: "Carnivore Diet Meal Plan",
          url: "https://gearuptofit.com/weight-loss/carnivore-diet-meal-plan/",
          description: "Complete guide to meat-based nutrition"
        },
        {
          title: "How to Keep Your Weight Loss Motivation High",
          url: "https://gearuptofit.com/weight-loss/how-to-keep-your-weight-loss-motivation-high/",
          description: "Stay motivated throughout your journey"
        }
      ]
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Essential Calculators",
      color: "border-blue-500",
      links: [
        {
          title: "Total Daily Energy Expenditure Calculator",
          url: "https://gearuptofit.com/fitness-and-health-calculators/total-daily-energy-expenditure-calculation-tool/",
          description: "Calculate your daily calorie needs"
        },
        {
          title: "Calculate Your Calorie Burn Today",
          url: "https://gearuptofit.com/fitness-and-health-calculators/calculate-your-calorie-burn-today/",
          description: "Track your workout intensity"
        },
        {
          title: "Calculate BMI, BMR and WHR Now",
          url: "https://gearuptofit.com/fitness-and-health-calculators/calculate-bmi-bmr-and-whr-now/",
          description: "Complete health metrics analysis"
        },
        {
          title: "Meal Calorie Calculator",
          url: "https://gearuptofit.com/fitness-and-health-calculators/meal-calorie-calculator/",
          description: "Plan your meals with precision"
        }
      ]
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Expert Reviews",
      color: "border-yellow-500",
      links: [
        {
          title: "Huawei Watch GT 5 Pro Review",
          url: "https://gearuptofit.com/review/huawei-watch-gt-5-pro/",
          description: "Latest smartwatch technology tested"
        },
        {
          title: "Suunto Core Review",
          url: "https://gearuptofit.com/review/suunto-core/",
          description: "Outdoor adventure watch analysis"
        },
        {
          title: "Garmin Fenix 7X Review",
          url: "https://gearuptofit.com/review/garmin-fenix-7x-review/",
          description: "Premium GPS watch deep dive"
        },
        {
          title: "Best Fitness Trackers for Weight Loss",
          url: "https://gearuptofit.com/review/best-fitness-trackers-for-weight-loss/",
          description: "Top devices for tracking progress"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gearup-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured Content &
            <span className="text-gearup-red block mt-2">Expert Guides</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dive deep into our most popular and effective resources
          </p>
        </div>

        {/* Main Featured Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredSections.map((section, index) => (
            <Card key={index} className={`bg-gearup-charcoal border-2 ${section.color} hover:shadow-lg transition-all duration-300`}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-gearup-red">{section.icon}</div>
                  <CardTitle className="text-white text-lg">{section.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 rounded-lg bg-gearup-light-gray hover:bg-gearup-red/10 transition-colors border border-transparent hover:border-gearup-red/30"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-white font-medium text-sm leading-tight mb-1">
                            {link.title}
                          </h4>
                          <p className="text-gray-400 text-xs leading-relaxed">
                            {link.description}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gearup-red flex-shrink-0 mt-0.5" />
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="grid lg:grid-cols-3 gap-8">
          {additionalSections.map((section, index) => (
            <Card key={index} className={`bg-gearup-charcoal border-2 ${section.color} hover:shadow-lg transition-all duration-300`}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-gearup-red">{section.icon}</div>
                  <CardTitle className="text-white text-lg">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2 rounded bg-gearup-light-gray hover:bg-gearup-red/10 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <h4 className="text-white font-medium text-sm leading-tight mb-1">
                            {link.title}
                          </h4>
                          <p className="text-gray-400 text-xs">
                            {link.description}
                          </p>
                        </div>
                        <ExternalLink className="w-3 h-3 text-gearup-red flex-shrink-0" />
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            className="bg-gearup-red hover:bg-red-700 text-white px-12 py-4 text-lg font-semibold shadow-lg hover:scale-105 transition-all duration-200"
            asChild
          >
            <a href="/start-free">
              Start Your Transformation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;

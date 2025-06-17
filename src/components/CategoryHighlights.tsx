
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Target, Apple, TrendingDown, Calculator, Star, ArrowRight } from "lucide-react";

const CategoryHighlights = () => {
  const categories = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Fitness",
      description: "Comprehensive workouts and training guides for all fitness levels",
      href: "/fitness",
      color: "from-red-600 to-red-800",
      features: [
        "Beginner-friendly gym guides",
        "HIIT workouts for quick results", 
        "CrossFit exercise libraries",
        "Targeted fat-burning routines"
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Running",
      description: "From couch to marathon - complete running transformation",
      href: "/running",
      color: "from-orange-600 to-red-700",
      features: [
        "Motivation for non-runners",
        "Couch to 5K programs",
        "10K training plans",
        "GPS watch reviews"
      ]
    },
    {
      icon: <Apple className="w-8 h-8" />,
      title: "Nutrition",
      description: "Science-backed nutrition strategies for optimal health",
      href: "/nutrition",
      color: "from-green-600 to-emerald-700",
      features: [
        "Protein optimization guides",
        "Metabolism-boosting foods",
        "Refined carb elimination",
        "Coconut oil cooking benefits"
      ]
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Weight Loss",
      description: "Sustainable weight loss strategies that actually work",
      href: "/weight-loss",
      color: "from-purple-600 to-purple-800",
      features: [
        "Root causes of weight gain",
        "Protein shake recipes",
        "Carnivore diet plans",
        "Motivation maintenance"
      ]
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Calculators",
      description: "Powerful tools to track and optimize your progress",
      href: "/calculators",
      color: "from-blue-600 to-blue-800",
      features: [
        "TDEE calculation tools",
        "Calorie burn calculators",
        "BMI and BMR tools",
        "Meal calorie counters"
      ]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Reviews",
      description: "Expert reviews of the latest fitness gear and tech",
      href: "/reviews",
      color: "from-yellow-600 to-orange-700",
      features: [
        "Latest smartwatch reviews",
        "Suunto Core analysis",
        "Garmin Fenix comparisons",
        "Fitness tracker roundups"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gearup-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Your Complete Fitness
            <span className="text-gearup-red block mt-2">Transformation Hub</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to transform your health, fitness, and performance - 
            all in one comprehensive platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="bg-gearup-dark border-gearup-red/20 hover:border-gearup-red transition-all duration-300 overflow-hidden group">
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              <CardHeader className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gearup-red/20 rounded-full p-3 text-gearup-red group-hover:bg-gearup-red group-hover:text-white transition-all">
                    {category.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-gearup-red transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-gray-300 leading-relaxed">
                  {category.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative">
                <div className="space-y-3 mb-6">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-gearup-red rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full bg-gearup-red hover:bg-red-700 text-white group-hover:scale-105 transition-all duration-200"
                  asChild
                >
                  <a href={category.href} className="flex items-center justify-center gap-2">
                    Explore {category.title}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call-to-Action Bar */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gearup-red to-red-700 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Life?
            </h3>
            <p className="text-lg text-red-100 mb-6 max-w-2xl mx-auto">
              Join thousands who've already started their fitness journey with our proven strategies
            </p>
            <Button 
              size="lg" 
              className="bg-white text-gearup-red hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:scale-105 transition-all duration-200"
              asChild
            >
              <a href="/start-free">
                Start Free Today
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHighlights;


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, BookOpen } from "lucide-react";

const NutritionFeaturedTools = () => {
  const featuredTools = [
    {
      title: "AI Recipe Generator",
      description: "Get personalized healthy recipes with our AI-powered tool",
      url: "https://gearuptofit.com/nutrition/ai-recipe-generator/",
      icon: <Calculator className="w-6 h-6" />
    },
    {
      title: "Nutritional Planning Guide",
      description: "Complete guide to planning your nutrition strategy",
      url: "https://gearuptofit.com/nutrition/nutritional-planning/",
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-16 bg-gearup-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Nutrition Tools</h2>
          <p className="text-xl text-gearup-light max-w-2xl mx-auto">
            Advanced tools to help you plan and optimize your nutrition
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featuredTools.map((tool, index) => (
            <Card key={index} className="bg-gearup-light-gray border-gearup-red/20 hover:border-gearup-red transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-gearup-red">{tool.icon}</div>
                  <CardTitle className="text-white">{tool.title}</CardTitle>
                </div>
                <CardDescription className="text-gearup-light">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href={tool.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-gearup-red text-gearup-red hover:bg-gearup-red text-slate-50 bg-red-600 hover:bg-red-500">
                    Try Now
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NutritionFeaturedTools;

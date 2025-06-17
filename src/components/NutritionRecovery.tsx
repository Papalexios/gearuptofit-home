import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Apple, Moon, Droplets, Utensils, Heart, Shield, Target } from "lucide-react";

const NutritionRecovery = () => {
  const nutritionTopics = [
    {
      title: "How to Eat Healthy for Fitness",
      description: "Complete nutrition guide for optimal workout performance and recovery",
      link: "https://gearuptofit.com/fitness/how-to-eat-healthy-for-fitness/",
      category: "Nutrition Basics",
      icon: <Apple className="w-5 h-5" />
    },
    {
      title: "Best Ways to Boost Your Metabolism Naturally",
      description: "Science-backed strategies to increase your metabolic rate and burn more calories",
      link: "https://gearuptofit.com/fitness/best-ways-to-boost-your-metabolism-naturally/",
      category: "Metabolism",
      icon: <Heart className="w-5 h-5" />
    },
    {
      title: "Easy Fat Killer Strategy",
      description: "Simple yet effective approach to sustainable fat loss without extreme dieting",
      link: "https://gearuptofit.com/fitness/easy-fat-killer-strategy/",
      category: "Fat Loss",
      icon: <Target className="w-5 h-5" />
    }
  ];

  const recoveryTopics = [
    {
      title: "How to Recover from Workouts",
      description: "Essential recovery protocols to maximize gains and prevent burnout",
      link: "https://gearuptofit.com/fitness/how-to-recover-from-workouts/",
      category: "Recovery",
      icon: <Moon className="w-5 h-5" />
    },
    {
      title: "The Importance of Proper Recovery in HIIT",
      description: "Why recovery is crucial for HIIT success and how to optimize it",
      link: "https://gearuptofit.com/fitness/the-importance-of-proper-recovery-in-hiit/",
      category: "HIIT Recovery",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "How to Avoid Injuries While Working Out",
      description: "Proven injury prevention strategies for safe, consistent training",
      link: "https://gearuptofit.com/fitness/how-to-avoid-injuries-while-working-out/",
      category: "Injury Prevention",
      icon: <Shield className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-20 bg-gearup-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Fuel Your Success
          </h2>
          <p className="text-xl text-gearup-light max-w-3xl mx-auto">
            Discover the nutrition and recovery strategies that separate good results from great ones. 
            Learn how to eat, rest, and recover like a pro athlete.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Nutrition Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gearup-red/20 p-3 rounded-lg">
                <Utensils className="w-8 h-8 text-gearup-red" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Nutrition Mastery</h3>
                <p className="text-gearup-light">Fuel your workouts, accelerate recovery</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {nutritionTopics.map((topic, index) => (
                <Card key={index} className="bg-gearup-light-gray border-2 hover:border-gearup-red transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-gearup-red/20 text-gearup-red">
                        {topic.category}
                      </Badge>
                      {topic.icon}
                    </div>
                    <CardTitle className="text-lg text-white">
                      <a href={topic.link} className="hover:text-gearup-red transition-colors">
                        {topic.title}
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gearup-light">
                      {topic.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recovery Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gearup-red/20 p-3 rounded-lg">
                <Moon className="w-8 h-8 text-gearup-red" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Recovery Science</h3>
                <p className="text-gearup-light">Rest smart, train harder, avoid injuries</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {recoveryTopics.map((topic, index) => (
                <Card key={index} className="bg-gearup-light-gray border-2 hover:border-gearup-red transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-gearup-red/20 text-gearup-red">
                        {topic.category}
                      </Badge>
                      {topic.icon}
                    </div>
                    <CardTitle className="text-lg text-white">
                      <a href={topic.link} className="hover:text-gearup-red transition-colors">
                        {topic.title}
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gearup-light">
                      {topic.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Wellness Section */}
        <div className="bg-gradient-to-r from-gearup-red/20 to-gearup-light-gray rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Complete Wellness Approach
            </h3>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Beyond workouts - discover holistic strategies for lasting health and happiness
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <h4 className="font-bold text-white mb-2">Mental Fitness</h4>
              <p className="text-gray-300 mb-3 text-sm">Boost your mental strength and confidence</p>
              <Button variant="outline" size="sm" className="border-gearup-red text-gearup-red bg-white hover:bg-gray-50">
                <a href="https://gearuptofit.com/fitness/6-surprising-ways-you-can-boost-your-mental-fitness/">
                  Learn More
                </a>
              </Button>
            </div>
            
            <div className="text-center p-4">
              <h4 className="font-bold text-white mb-2">Exercise Confidence</h4>
              <p className="text-gray-300 mb-3 text-sm">Feel confident in any gym or workout setting</p>
              <Button variant="outline" size="sm" className="border-gearup-red text-gearup-red bg-white hover:bg-gray-50">
                <a href="https://gearuptofit.com/fitness/5-ways-to-feel-more-confident-when-exercising/">
                  Build Confidence
                </a>
              </Button>
            </div>
            
            <div className="text-center p-4">
              <h4 className="font-bold text-white mb-2">Special Needs</h4>
              <p className="text-gray-300 mb-3 text-sm">Fitness solutions for every body and situation</p>
              <Button variant="outline" size="sm" className="border-gearup-red text-gearup-red bg-white hover:bg-gray-50">
                <a href="https://gearuptofit.com/fitness/how-to-empower-your-fitness-with-limited-mobility/">
                  Adaptive Fitness
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionRecovery;

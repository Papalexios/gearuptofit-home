
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, TrendingUp, Users, Target } from "lucide-react";

const WeightLossMotivation = () => {
  const motivationTopics = [
    {
      icon: <Heart className="w-8 h-8 text-gearup-red" />,
      title: "Stay Motivated",
      description: "Psychological strategies to maintain momentum",
      feature: "Motivation Techniques"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-gearup-red" />,
      title: "Track Progress",
      description: "Monitor your success and celebrate milestones",
      feature: "Progress Tracking"
    },
    {
      icon: <Users className="w-8 h-8 text-gearup-red" />,
      title: "Community Support",
      description: "Connect with others on similar journeys",
      feature: "Support Network"
    },
    {
      icon: <Target className="w-8 h-8 text-gearup-red" />,
      title: "Set Goals",
      description: "Create realistic, achievable weight loss targets",
      feature: "Goal Setting"
    }
  ];

  return (
    <section className="py-20 bg-gearup-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Motivation & Mindset
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Develop the mental strength and motivation needed for lasting weight loss success with our 
            proven psychological strategies and community support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {motivationTopics.map((topic, index) => (
            <Card key={index} className="bg-gearup-light-gray border-2 border-gearup-medium-gray hover:border-gearup-red transition-all duration-300 group text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-gearup-red/20 rounded-full p-4 group-hover:bg-gearup-red/30 transition-colors">
                    {topic.icon}
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-white mb-2">
                  {topic.title}
                </CardTitle>
                <CardDescription className="text-gray-300 text-sm">
                  {topic.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-gearup-red font-medium text-sm">
                  {topic.feature}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Motivation Content */}
        <div className="bg-gearup-light-gray rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Master Your Weight Loss Mindset
          </h3>
          <p className="text-lg text-gearup-light mb-8 max-w-2xl mx-auto">
            The key to lasting weight loss isn't just what you eat or how you exercise - it's developing 
            the right mindset and staying motivated through challenges.
          </p>
          <Button 
            size="lg" 
            className="bg-gearup-red hover:bg-red-700 text-white px-8 py-4"
          >
            <a href="https://gearuptofit.com/weight-loss/how-to-keep-your-weight-loss-motivation-high/">
              Read: How to Keep Your Weight Loss Motivation High
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WeightLossMotivation;

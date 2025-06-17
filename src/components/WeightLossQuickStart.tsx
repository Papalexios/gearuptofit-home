
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Utensils, Activity, CheckCircle } from "lucide-react";

const WeightLossQuickStart = () => {
  const steps = [
    {
      icon: <Target className="w-8 h-8 text-gearup-red" />,
      title: "Set Your Goal",
      description: "Define realistic weight loss targets and create a sustainable plan that fits your lifestyle.",
      link: "https://gearuptofit.com/weight-loss/how-to-keep-your-weight-loss-motivation-high/"
    },
    {
      icon: <Utensils className="w-8 h-8 text-gearup-red" />,
      title: "Plan Your Nutrition",
      description: "Get personalized meal plans, calorie targets, and nutrition strategies for lasting results.",
      link: "https://gearuptofit.com/weight-loss/lose-weight-with-a-meal-plan/"
    },
    {
      icon: <Activity className="w-8 h-8 text-gearup-red" />,
      title: "Start Moving",
      description: "Follow proven workout routines designed specifically for maximum fat burning and weight loss.",
      link: "https://gearuptofit.com/weight-loss/how-to-maximize-workout-benefits-for-weight-loss/"
    }
  ];

  return (
    <section className="py-16 bg-gearup-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gearup-white mb-4">
            Never Diet Alone Again
          </h2>
          <p className="text-xl text-gearup-light max-w-2xl mx-auto">
            Join thousands who transformed their bodies with our proven 3-step weight loss system
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-gearup-light-gray border-2 hover:border-gearup-red">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-gearup-white">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gearup-light mb-4">
                  {step.description}
                </CardDescription>
                <a 
                  href={step.link}
                  className="text-gearup-red hover:text-red-300 font-medium hover:underline"
                >
                  Learn More →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Featured Quick Start Guide */}
        <div className="bg-gearup-light-gray rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gearup-white mb-4">
              Ready to Start? Begin Here
            </h3>
            <p className="text-lg text-gearup-light mb-6">
              Our most popular guide has helped over 250,000 people lose weight naturally and keep it off
            </p>
            <Button 
              size="lg" 
              className="bg-gearup-red hover:bg-red-700 text-white"
            >
              <a href="https://gearuptofit.com/weight-loss/top-10-ways-to-weight-loss/" className="flex items-center gap-2">
                Read: Top 10 Ways to Lose Weight Successfully
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeightLossQuickStart;

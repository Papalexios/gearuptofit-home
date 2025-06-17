
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, CheckCircle, Play, Target } from "lucide-react";

const QuickStart = () => {
  const steps = [
    {
      icon: <Target className="w-8 h-8 text-gearup-red" />,
      title: "Set Your Goal",
      description: "Whether it's your first 5K or a marathon PR, we'll help you define achievable targets.",
      link: "https://gearuptofit.com/running/setting-smart-running-goals-strategies-for-success-and-long-term-progress/"
    },
    {
      icon: <Play className="w-8 h-8 text-gearup-red" />,
      title: "Choose Your Plan",
      description: "Get a personalized training plan that fits your schedule and experience level.",
      link: "https://gearuptofit.com/running/custom-running-plan-free/"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-gearup-red" />,
      title: "Start Running",
      description: "Follow our proven methodology and track your progress every step of the way.",
      link: "https://gearuptofit.com/running/how-to-start-running-from-scratch-the-smart-guide/"
    }
  ];

  return (
    <section className="py-16 bg-gearup-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gearup-white mb-4">
            Never Run Alone Again
          </h2>
          <p className="text-xl text-gearup-light max-w-2xl mx-auto">
            Join thousands of runners who transformed their fitness with our proven 3-step system
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
              Feeling Overwhelmed? Start Here
            </h3>
            <p className="text-lg text-gearup-light mb-6">
              Our most popular guide has helped over 100,000 people overcome the mental barriers to running
            </p>
            <Button 
              size="lg" 
              className="bg-gearup-red hover:bg-red-700 text-white"
            >
              <a href="https://gearuptofit.com/running/how-to-start-running-when-you-dont-feel-like-it/" className="flex items-center gap-2">
                Read: How to Start Running When You Don't Feel Like It
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStart;

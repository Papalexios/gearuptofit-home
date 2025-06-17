
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Dumbbell, Heart, Target } from "lucide-react";

const WeightLossExercise = () => {
  const exerciseTypes = [
    {
      icon: <Zap className="w-8 h-8 text-gearup-red" />,
      title: "HIIT & Cardio",
      description: "High-intensity workouts for maximum calorie burn",
      benefits: ["Burns calories fast", "Boosts metabolism", "Time-efficient"],
      cta: "Start HIIT Training"
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-gearup-red" />,
      title: "Strength Training",
      description: "Build lean muscle while burning fat",
      benefits: ["Increases muscle mass", "Burns fat 24/7", "Improves strength"],
      cta: "Build Muscle"
    },
    {
      icon: <Heart className="w-8 h-8 text-gearup-red" />,
      title: "Low-Impact Cardio",
      description: "Gentle on joints, effective for weight loss",
      benefits: ["Joint-friendly", "Sustainable", "Great for beginners"],
      cta: "Start Walking"
    },
    {
      icon: <Target className="w-8 h-8 text-gearup-red" />,
      title: "Targeted Fat Loss",
      description: "Focus on problem areas like belly fat",
      benefits: ["Core strengthening", "Better posture", "Visible results"],
      cta: "Target Belly Fat"
    }
  ];

  return (
    <section className="py-20 bg-gearup-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Exercise & Fitness for Weight Loss
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Discover proven workout strategies designed specifically for weight loss, from beginner-friendly 
            routines to advanced fat-burning protocols
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {exerciseTypes.map((type, index) => (
            <Card key={index} className="bg-gearup-light-gray border-2 border-gearup-medium-gray hover:border-gearup-red transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-gearup-red/20 rounded-full p-4 group-hover:bg-gearup-red/30 transition-colors">
                    {type.icon}
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-white mb-2">
                  {type.title}
                </CardTitle>
                <CardDescription className="text-gray-300 text-sm">
                  {type.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-gray-200 flex items-center text-sm">
                      <div className="w-2 h-2 bg-gearup-red rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-gearup-red hover:bg-red-700 text-white"
                  size="sm"
                >
                  {type.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Exercise Content */}
        <div className="bg-gearup-light-gray rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Expert Exercise Guidance
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Workout Optimization</h4>
              <div className="space-y-3">
                <a href="https://gearuptofit.com/weight-loss/how-to-maximize-workout-benefits-for-weight-loss/" className="block text-gearup-red hover:text-red-300 hover:underline">
                  → How to Maximize Workout Benefits for Weight Loss
                </a>
                <a href="https://gearuptofit.com/weight-loss/best-pre-workout-for-weight-loss/" className="block text-gearup-red hover:text-red-300 hover:underline">
                  → Best Pre-Workout for Weight Loss
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Medical Conditions</h4>
              <div className="space-y-3">
                <a href="https://gearuptofit.com/weight-loss/10-major-causes-of-obesity-and-weight-gain/" className="block text-gearup-red hover:text-red-300 hover:underline">
                  → 10 Major Causes of Obesity and Weight Gain
                </a>
                <a href="https://gearuptofit.com/weight-loss/treating-lipoedema/" className="block text-gearup-red hover:text-red-300 hover:underline">
                  → Treating Lipoedema
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeightLossExercise;

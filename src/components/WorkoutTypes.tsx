
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Heart, Dumbbell, Waves, Timer, Target } from "lucide-react";

const WorkoutTypes = () => {
  const workoutCategories = [
    {
      icon: <Zap className="w-8 h-8 text-gearup-red" />,
      title: "HIIT & High-Intensity",
      description: "Burn maximum calories in minimum time with proven high-intensity protocols",
      badge: "Most Popular",
      workouts: [
        {
          title: "Upper Body HIIT Workout",
          link: "https://gearuptofit.com/fitness/upper-body-hiit-workout/",
          duration: "20 min"
        },
        {
          title: "HIIT for Flexibility: Benefits & Mobility Exercises",
          link: "https://gearuptofit.com/fitness/hiit-for-flexibility-benefits-mobility-exercises/",
          duration: "15 min"
        },
        {
          title: "The Ultimate Guide to HIIT Workout",
          link: "https://gearuptofit.com/fitness/the-ultimate-guide-to-hiit-workout/",
          duration: "Guide"
        },
        {
          title: "How Effective is 20 Minutes of HIIT?",
          link: "https://gearuptofit.com/fitness/how-effective-is-20-minutes-of-hiit/",
          duration: "Analysis"
        }
      ]
    },
    {
      icon: <Heart className="w-8 h-8 text-gearup-red" />,
      title: "Cardio & Endurance",
      description: "Build cardiovascular health and endurance with diverse cardio workouts",
      badge: "Heart Health",
      workouts: [
        {
          title: "Cardio Daily: Surprising Results in 7 Days? Ultimate Guide",
          link: "https://gearuptofit.com/fitness/cardio-daily-surprising-results-in-7-days-ultimate-guide/",
          duration: "7 days"
        },
        {
          title: "Best Cardio for Weight Loss",
          link: "https://gearuptofit.com/fitness/best-cardio-for-weight-loss/",
          duration: "Guide"
        },
        {
          title: "Cardio vs Strength Training",
          link: "https://gearuptofit.com/fitness/cardio-vs-strength-training/",
          duration: "Compare"
        },
        {
          title: "Key Differences Between Indoor and Outdoor Cycling",
          link: "https://gearuptofit.com/fitness/key-differences-between-indoor-and-outdoor-cycling/",
          duration: "Guide"
        }
      ]
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-gearup-red" />,
      title: "Strength & Muscle Building",
      description: "Build lean muscle and increase strength with progressive training programs",
      badge: "Muscle Growth",
      workouts: [
        {
          title: "How to Build Muscle Mass",
          link: "https://gearuptofit.com/fitness/how-to-build-muscle-mass/",
          duration: "Program"
        },
        {
          title: "Best Recovery Methods for Powerlifting",
          link: "https://gearuptofit.com/fitness/best-recovery-methods-for-powerlifting/",
          duration: "Recovery"
        },
        {
          title: "How to Burn Fat Fast with High Intensity Resistance Training",
          link: "https://gearuptofit.com/fitness/how-to-burn-fat-fast-with-high-intensity-resistance-training/",
          duration: "Fat Loss"
        },
        {
          title: "Balancing Cardio and Strength Training",
          link: "https://gearuptofit.com/fitness/balancing-cardio-and-strength-training/",
          duration: "Balance"
        }
      ]
    },
    {
      icon: <Waves className="w-8 h-8 text-gearup-red" />,
      title: "Bodyweight & Flexibility",
      description: "Train anywhere with equipment-free workouts and improve your mobility",
      badge: "No Equipment",
      workouts: [
        {
          title: "The Quick Bodyweight Workout Routine",
          link: "https://gearuptofit.com/fitness/the-quick-bodyweight-workout-routine/",
          duration: "15 min"
        },
        {
          title: "Bodyweight Exercises to Improve Your Core",
          link: "https://gearuptofit.com/fitness/bodyweight-exercises-to-improve-your-core/",
          duration: "Core"
        },
        {
          title: "Calisthenics Exercises",
          link: "https://gearuptofit.com/fitness/calisthenics-exercises/",
          duration: "Full Body"
        },
        {
          title: "The Best Full Body Stretching Routine for Flexibility",
          link: "https://gearuptofit.com/fitness/the-best-full-body-stretching-routine-for-flexibility/",
          duration: "Stretch"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gearup-black mb-6">
            Choose Your Workout Style
          </h2>
          <p className="text-xl text-gearup-medium-gray max-w-3xl mx-auto">
            Whether you're a complete beginner or seasoned athlete, find the perfect workout 
            that fits your goals, schedule, and fitness level
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {workoutCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-gearup-red transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-gearup-red/10 p-3 rounded-lg">
                      {category.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gearup-black">
                        {category.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-2 bg-gearup-red/10 text-gearup-red">
                        {category.badge}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-gearup-medium-gray text-base">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.workouts.map((workout, workoutIndex) => (
                    <div key={workoutIndex} className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                      <a 
                        href={workout.link}
                        className="text-gearup-black hover:text-gearup-red font-medium flex-1 hover:underline"
                      >
                        {workout.title}
                      </a>
                      <Badge variant="outline" className="text-xs">
                        {workout.duration}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CrossFit Special Section */}
        <div className="mt-16 bg-gearup-dark rounded-2xl p-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Target className="w-12 h-12 text-gearup-red mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready for CrossFit? Start Here
            </h3>
            <p className="text-xl text-gray-200 mb-8">
              Discover the world's most effective fitness methodology with our comprehensive CrossFit guides
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Button variant="outline" className="border-gearup-red text-gearup-red bg-white hover:bg-gray-50">
                <a href="https://gearuptofit.com/fitness/all-about-crossfit-exercises/">
                  All About CrossFit
                </a>
              </Button>
              <Button variant="outline" className="border-gearup-red text-gearup-red bg-white hover:bg-gray-50">
                <a href="https://gearuptofit.com/fitness/crossfit-workouts-for-beginners/">
                  Beginner Workouts
                </a>
              </Button>
              <Button variant="outline" className="border-gearup-red text-gearup-red bg-white hover:bg-gray-50">
                <a href="https://gearuptofit.com/fitness/crossfit-weight-loss/">
                  Weight Loss
                </a>
              </Button>
              <Button variant="outline" className="border-gearup-red text-gearup-red bg-white hover:bg-gray-50">
                <a href="https://gearuptofit.com/fitness/crossfit-for-endurance/">
                  Endurance Training
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutTypes;

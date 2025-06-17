
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Heart, Zap, Home, Baby, Shield } from "lucide-react";

const FitnessMotivation = () => {
  const motivationGuides = [
    {
      icon: <Target className="w-8 h-8 text-gearup-red" />,
      title: "How to Set Fitness Goals",
      description: "Learn the SMART goal-setting framework that actually works for lasting motivation",
      link: "https://gearuptofit.com/fitness/how-to-set-fitness-goals/",
      category: "Goal Setting",
      featured: true
    },
    {
      icon: <Zap className="w-8 h-8 text-gearup-red" />,
      title: "How to Motivate Yourself for Workout",
      description: "Practical strategies to overcome workout resistance and build unstoppable momentum",
      link: "https://gearuptofit.com/fitness/how-to-motivate-yourself-for-workout/",
      category: "Motivation",
      featured: true
    },
    {
      icon: <Heart className="w-8 h-8 text-gearup-red" />,
      title: "How to Stay Motivated to Work Out",
      description: "Long-term strategies for maintaining motivation when the initial excitement fades",
      link: "https://gearuptofit.com/fitness/how-to-stay-motivated-to-work-out/",
      category: "Consistency",
      featured: true
    },
    {
      icon: <Users className="w-8 h-8 text-gearup-red" />,
      title: "How to Make Fitness a Part of Your Lifestyle",
      description: "Transform fitness from a chore into a natural, enjoyable part of your daily life",
      link: "https://gearuptofit.com/fitness/how-to-make-fitness-a-part-of-your-lifestyle/",
      category: "Lifestyle",
      featured: false
    }
  ];

  const specialSituations = [
    {
      title: "Finding Fitness Motivation During Lockdown",
      description: "Stay active and motivated when gym access is limited",
      link: "https://gearuptofit.com/fitness/finding-fitness-motivation-during-lockdown/",
      icon: <Home className="w-5 h-5" />,
      category: "Home Fitness"
    },
    {
      title: "Creative Ways to Stay Active with Kids at Home",
      description: "Family-friendly fitness solutions that work for busy parents",
      link: "https://gearuptofit.com/fitness/creative-ways-to-stay-active-with-kids-at-home/",
      icon: <Baby className="w-5 h-5" />,
      category: "Family Fitness"
    },
    {
      title: "Tips for Exercising Safely with Arthritis or Joint Pain",
      description: "Safe, effective exercise strategies for those with physical limitations",
      link: "https://gearuptofit.com/fitness/tips-for-exercising-safely-with-arthritis-or-joint-pain/",
      icon: <Shield className="w-5 h-5" />,
      category: "Adaptive Fitness"
    }
  ];

  const lifestyleIntegration = [
    {
      title: "How to Stay on Track with Your Fitness Routine",
      link: "https://gearuptofit.com/fitness/how-to-stay-on-track-with-your-fitness-routine/",
      category: "Routine"
    },
    {
      title: "Regular Physical Activity",
      link: "https://gearuptofit.com/fitness/regular-physical-activity/",
      category: "Habits"
    },
    {
      title: "Leading a Healthy Life in Lockdown",
      link: "https://gearuptofit.com/fitness/leading-a-healthy-life-in-lockdown/",
      category: "Wellness"
    },
    {
      title: "Beginner Tips: Surviving Your First Time at the Gym",
      link: "https://gearuptofit.com/fitness/beginner-tips-surviving-your-first-time-at-the-gym/",
      category: "Beginners"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gearup-black mb-6">
            Stay Motivated & Consistent
          </h2>
          <p className="text-xl text-gearup-medium-gray max-w-3xl mx-auto">
            The difference between success and failure isn't talent—it's consistency. 
            Discover proven strategies to stay motivated, overcome obstacles, and make fitness a lifestyle.
          </p>
        </div>

        {/* Core Motivation Guides */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gearup-black mb-8 text-center">
            🔥 Master Your Mindset
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {motivationGuides.map((guide, index) => (
              <Card key={index} className={`text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-gearup-red hover:scale-105 ${guide.featured ? 'ring-2 ring-gearup-red/20' : ''}`}>
                {guide.featured && (
                  <div className="bg-gearup-red text-white text-xs font-bold py-1 px-3 rounded-b-lg w-fit mx-auto mb-4">
                    Essential
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gearup-red/10 p-3 rounded-full">
                      {guide.icon}
                    </div>
                  </div>
                  <Badge variant="secondary" className="mb-3 mx-auto w-fit">
                    {guide.category}
                  </Badge>
                  <CardTitle className="text-lg font-bold text-gearup-black">
                    <a href={guide.link} className="hover:text-gearup-red transition-colors">
                      {guide.title}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gearup-medium-gray">
                    {guide.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Situations */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gearup-black mb-8 text-center">
            Fitness for Every Situation
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {specialSituations.map((situation, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-gearup-red">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-gearup-red/10 p-2 rounded-lg">
                      {situation.icon}
                    </div>
                    <Badge variant="outline">
                      {situation.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gearup-black">
                    <a href={situation.link} className="hover:text-gearup-red transition-colors">
                      {situation.title}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gearup-medium-gray">
                    {situation.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Lifestyle Integration */}
        <div className="bg-gearup-light-gray rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Make Fitness Your Lifestyle
            </h3>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Transform from someone who "tries to work out" to someone who simply "is fit"
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {lifestyleIntegration.map((resource, index) => (
              <div key={index} className="text-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Badge variant="outline" className="mb-3 border-gearup-red text-gearup-red">
                  {resource.category}
                </Badge>
                <h4 className="font-semibold text-white text-sm leading-tight">
                  <a href={resource.link} className="hover:text-gearup-red hover:underline">
                    {resource.title}
                  </a>
                </h4>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gearup-red hover:bg-red-700 text-white px-8 py-4"
            >
              <a href="https://gearuptofit.com/fitness/how-to-start-training-and-not-quit/" className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Start Your Transformation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitnessMotivation;

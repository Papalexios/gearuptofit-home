
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Waves, Sun, Apple, RotateCcw, Bike, Thermometer } from "lucide-react";

const SpecialtyFitness = () => {
  const specialtyWorkouts = [
    {
      icon: <Waves className="w-8 h-8 text-gearup-red" />,
      title: "Water Sports & Swimming",
      description: "Discover low-impact, full-body workouts that are easy on joints",
      link: "https://gearuptofit.com/fitness/how-to-get-fit-with-water-sports/",
      category: "Aquatic Fitness",
      benefits: ["Low Impact", "Full Body", "Cardio + Strength", "Joint Friendly"]
    },
    {
      icon: <RotateCcw className="w-8 h-8 text-gearup-red" />,
      title: "Roller Skating vs Running",
      description: "Compare these fun cardio options and find your perfect match",
      link: "https://gearuptofit.com/fitness/roller-skating-vs-running-which-is-better-for-your-health/",
      category: "Cardio Comparison",
      benefits: ["Fun Factor", "Calorie Burn", "Skill Building", "Social Activity"]
    },
    {
      icon: <Bike className="w-8 h-8 text-gearup-red" />,
      title: "Indoor vs Outdoor Cycling",
      description: "Make the right choice for your cycling journey",
      link: "https://gearuptofit.com/fitness/key-differences-between-indoor-and-outdoor-cycling/",
      category: "Cycling Guide",
      benefits: ["Weather Independent", "Scenic Routes", "Controlled Environment", "Adventure"]
    }
  ];

  const bodyTransformation = [
    {
      title: "How Different Types of Training Transform Body Physique",
      description: "Understand how each training style sculpts your body differently",
      link: "https://gearuptofit.com/fitness/how-different-types-of-training-transform-body-physique/",
      category: "Body Transformation"
    },
    {
      title: "Exercises to Get Rid of Back Fat",
      description: "Targeted exercises for a stronger, leaner back",
      link: "https://gearuptofit.com/fitness/exercises-to-get-rid-of-back-fat/",
      category: "Targeted Training"
    },
    {
      title: "Improve Posture with HIIT Workouts",
      description: "Fix your posture while getting an amazing workout",
      link: "https://gearuptofit.com/fitness/improve-posture-with-hiit-workouts/",
      category: "Posture Correction"
    },
    {
      title: "The Value of Your Core Muscles in Exercise",
      description: "Why core strength is the foundation of all fitness",
      link: "https://gearuptofit.com/fitness/the-value-of-your-core-muscles-in-exercise/",
      category: "Core Strength"
    }
  ];

  const seasonalFitness = [
    {
      title: "Best Clothing for Staying Active in Hot Weather",
      description: "Stay cool and comfortable during summer workouts",
      link: "https://gearuptofit.com/fitness/best-clothing-for-staying-active-in-hot-weather/",
      icon: <Sun className="w-5 h-5" />,
      season: "Summer"
    }
  ];

  const technologyFitness = [
    {
      title: "How to Change Fitness Goals on Apple Watch",
      description: "Optimize your Apple Watch for better fitness tracking",
      link: "https://gearuptofit.com/fitness/how-to-change-fitness-goals-on-apple-watch/",
      icon: <Apple className="w-5 h-5" />,
      category: "Tech Tips"
    },
    {
      title: "Does Planet Fitness Have Showers?",
      description: "Everything you need to know about Planet Fitness amenities",
      link: "https://gearuptofit.com/fitness/does-planet-fitness-have-showers/",
      icon: <Thermometer className="w-5 h-5" />,
      category: "Gym Guide"
    }
  ];

  return (
    <section className="py-20 bg-gearup-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Explore Unique Fitness Adventures
          </h2>
          <p className="text-xl text-gearup-light max-w-3xl mx-auto">
            Break free from boring routines! Discover exciting alternatives, seasonal strategies, 
            and specialized training methods that keep fitness fun and engaging.
          </p>
        </div>

        {/* Specialty Workouts */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            🌊 Alternative Workouts That Work
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {specialtyWorkouts.map((workout, index) => (
              <Card key={index} className="bg-gearup-light-gray border-2 hover:border-gearup-red transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gearup-red/20 p-3 rounded-lg">
                      {workout.icon}
                    </div>
                    <Badge variant="secondary" className="bg-gearup-red/20 text-gearup-red">
                      {workout.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-white">
                    <a href={workout.link} className="hover:text-gearup-red transition-colors">
                      {workout.title}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gearup-light mb-6">
                    {workout.description}
                  </CardDescription>
                  <div className="grid grid-cols-2 gap-2">
                    {workout.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-gearup-red rounded-full"></div>
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Body Transformation */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            💪 Transform Your Body
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bodyTransformation.map((guide, index) => (
              <Card key={index} className="bg-gearup-light-gray border hover:border-gearup-red transition-all duration-300">
                <CardHeader className="pb-3">
                  <Badge variant="outline" className="w-fit mb-2 border-gearup-red text-gearup-red">
                    {guide.category}
                  </Badge>
                  <CardTitle className="text-lg text-white leading-tight">
                    <a href={guide.link} className="hover:text-gearup-red transition-colors">
                      {guide.title}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gearup-light text-sm">
                    {guide.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Practical Tips & Tech */}
        <div className="bg-gradient-to-r from-gearup-light-gray to-gearup-charcoal rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Practical Fitness Tips & Tech
            </h3>
            <p className="text-xl text-gray-200">
              Smart solutions for common fitness challenges and tech optimization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Seasonal Tips */}
            {seasonalFitness.map((tip, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  {tip.icon}
                  <Badge variant="outline" className="border-gearup-red text-gearup-red">
                    {tip.season}
                  </Badge>
                </div>
                <h4 className="font-bold text-white mb-2">
                  <a href={tip.link} className="hover:text-gearup-red hover:underline">
                    {tip.title}
                  </a>
                </h4>
                <p className="text-gray-300 text-sm">{tip.description}</p>
              </div>
            ))}
            
            {/* Tech Tips */}
            {technologyFitness.map((tech, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  {tech.icon}
                  <Badge variant="outline" className="border-gearup-red text-gearup-red">
                    {tech.category}
                  </Badge>
                </div>
                <h4 className="font-bold text-white mb-2">
                  <a href={tech.link} className="hover:text-gearup-red hover:underline">
                    {tech.title}
                  </a>
                </h4>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              size="lg" 
              className="bg-gearup-red hover:bg-red-700 text-white"
            >
              <a href="https://gearuptofit.com/fitness/how-to-get-fit-with-water-sports/">
                Explore All Specialty Workouts
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtyFitness;

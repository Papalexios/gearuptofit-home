
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Target, Zap, Shield, Award, MapPin, Heart, ExternalLink } from "lucide-react";

const RunningCategories = () => {
  const runningCategories = [
    {
      title: "Getting Started",
      icon: <Play className="w-8 h-8" />,
      description: "Begin your running journey with expert guidance and proven strategies",
      gradient: "from-blue-500 to-blue-700",
      links: [
        { title: "How to Start Running from Scratch", url: "https://gearuptofit.com/running/how-to-start-running-from-scratch-the-smart-guide/" },
        { title: "Start Running When You Don't Feel Like It", url: "https://gearuptofit.com/running/how-to-start-running-when-you-dont-feel-like-it/" },
        { title: "11 Tips for Beginner Runners", url: "https://gearuptofit.com/running/new-to-running-here-are-11-tips-to-help-you-get-started/" },
        { title: "Tips to Start Running as a Beginner", url: "https://gearuptofit.com/running/tips-on-how-to-start-running-as-a-beginner/" },
        { title: "Mistakes to Avoid as a Beginner", url: "https://gearuptofit.com/running/tips-to-avoid-as-a-beginner-runner/" },
        { title: "Running Gear for Beginners", url: "https://gearuptofit.com/running/running-gear-for-beginners/" },
        { title: "Outdoor Running for Beginners", url: "https://gearuptofit.com/running/outdoor-running-for-beginners/" },
      ]
    },
    {
      title: "Training Plans & Goals",
      icon: <Target className="w-8 h-8" />,
      description: "Structured training plans for every distance and goal",
      gradient: "from-green-500 to-green-700",
      links: [
        { title: "Couch to 5K Training Plan", url: "https://gearuptofit.com/running/from-couch-to-your-first-5k/" },
        { title: "10K Training & Race Preparation", url: "https://gearuptofit.com/running/10k-training-and-race-preparation-tips/" },
        { title: "Half Marathon Training Guide", url: "https://gearuptofit.com/running/half-marathon-training-guide/" },
        { title: "Custom Running Plan (Free)", url: "https://gearuptofit.com/running/custom-running-plan-free/" },
        { title: "Running Plan for Weight Loss", url: "https://gearuptofit.com/running/running-plan-to-lose-weight/" },
        { title: "Running & Strength Training Schedule", url: "https://gearuptofit.com/running/running-and-strength-training-schedule-for-weight-loss/" },
        { title: "Setting SMART Running Goals", url: "https://gearuptofit.com/running/setting-smart-running-goals-strategies-for-success-and-long-term-progress/" },
        { title: "Elite Runners Training Optimization", url: "https://gearuptofit.com/running/elite-runners-optimizing-training-for-race-performance/" },
      ]
    },
    {
      title: "Performance & Training",
      icon: <Zap className="w-8 h-8" />,
      description: "Advanced techniques to improve your running performance",
      gradient: "from-purple-500 to-purple-700",
      links: [
        { title: "Interval Training for Runners", url: "https://gearuptofit.com/running/interval-training-for-runners/" },
        { title: "How to Get Better at Running", url: "https://gearuptofit.com/running/how-to-get-better-at-running/" },
        { title: "Understanding VO2 Max", url: "https://gearuptofit.com/running/understanding-vo2-max/" },
        { title: "VO2 Max & Running Performance", url: "https://gearuptofit.com/fitness/vo2-max-improving-running-performance/" },
        { title: "Increase Running Stamina", url: "https://gearuptofit.com/running/how-to-increase-stamina-for-running/" },
        { title: "Running Cadence Mastery", url: "https://gearuptofit.com/running/master-your-running-cadence/" },
        { title: "How to Increase Running Cadence", url: "https://gearuptofit.com/running/how-to-increase-running-cadence/" },
        { title: "Running Economy", url: "https://gearuptofit.com/running/running-economy/" },
        { title: "Running Pace Training", url: "https://gearuptofit.com/running/running-pace-training/" },
        { title: "Altitude Training", url: "https://gearuptofit.com/running/altitude-training/" },
        { title: "Primary Training Methods", url: "https://gearuptofit.com/running/the-primary-training-methods-of-running/" },
      ]
    },
    {
      title: "Running Form & Technique",
      icon: <Award className="w-8 h-8" />,
      description: "Perfect your running form and technique",
      gradient: "from-orange-500 to-orange-700",
      links: [
        { title: "Proper Running Form & Technique", url: "https://gearuptofit.com/running/proper-running-form-technique-outdoor/" },
        { title: "How to Improve Your Running Form", url: "https://gearuptofit.com/running/how-to-improve-your-running-form/" },
        { title: "Running Form Drills", url: "https://gearuptofit.com/running/running-form-drills/" },
        { title: "How to Breathe While Running", url: "https://gearuptofit.com/running/how-to-breathe-while-running/" },
        { title: "Breathing Techniques While Running", url: "https://gearuptofit.com/running/breathing-techniques-while-running/" },
        { title: "Running Biomechanics & Injury Prevention", url: "https://gearuptofit.com/running/running-biomechanics-and-injury-prevention/" },
      ]
    },
    {
      title: "Injury Prevention & Recovery",
      icon: <Shield className="w-8 h-8" />,
      description: "Stay healthy and recover from running injuries",
      gradient: "from-red-500 to-red-700",
      links: [
        { title: "Recover from a Running Injury", url: "https://gearuptofit.com/running/recover-from-a-running-injury/" },
        { title: "Return to Running After Injury", url: "https://gearuptofit.com/running/return-to-running-after-injury/" },
        { title: "Impact of Running Surfaces", url: "https://gearuptofit.com/running/impact-of-running-surfaces-and-injury-risk/" },
        { title: "Why Running Hurts Your Knees", url: "https://gearuptofit.com/running/why-running-hurts-your-knees/" },
        { title: "Common Foot Problems for Runners", url: "https://gearuptofit.com/running/common-foot-problems-for-runners/" },
        { title: "Stretching Before & After Running", url: "https://gearuptofit.com/running/the-importance-of-stretching-before-and-after-a-run/" },
        { title: "Running Recovery Methods", url: "https://gearuptofit.com/running/running-recovery-methods/" },
        { title: "Cool Down Stretches", url: "https://gearuptofit.com/running/cool-down-stretches-outdoor-running/" },
        { title: "Prevent Common Outdoor Running Injuries", url: "https://gearuptofit.com/running/prevent-common-outdoor-running-injuries/" },
      ]
    },
    {
      title: "Running Gear & Reviews",
      icon: <Award className="w-8 h-8" />,
      description: "Find the best running gear for your needs",
      gradient: "from-indigo-500 to-indigo-700",
      links: [
        { title: "Best Running Shoes for Beginners", url: "https://gearuptofit.com/review/best-running-shoes-for-beginners/" },
        { title: "Best Running Shoes for Flat Feet", url: "https://gearuptofit.com/review/best-running-shoes-for-flat-feet/" },
        { title: "Best Running Shoes for Overpronation", url: "https://gearuptofit.com/review/best-running-shoes-for-overpronation/" },
        { title: "Best Running Shoes for Women", url: "https://gearuptofit.com/review/best-running-shoes-for-women-in-2024/" },
        { title: "Best Running Shoes for Wide Feet", url: "https://gearuptofit.com/review/best-running-shoes-for-wide-feet-in-2023/" },
        { title: "Best Running Shoes for Plantar Fasciitis", url: "https://gearuptofit.com/review/best-running-shoes-for-plantar-fasciitis/" },
        { title: "How Running Shoes Should Fit", url: "https://gearuptofit.com/running/how-running-shoes-should-fit/" },
        { title: "How to Choose Running Shoes", url: "https://gearuptofit.com/running/how-to-choose-the-right-running-shoes/" },
        { title: "Best Running Socks for Blister Prevention", url: "https://gearuptofit.com/review/best-running-socks-for-blister-prevention/" },
        { title: "GPS Running Watches - Garmin Enduro 3", url: "https://gearuptofit.com/review/garmin-enduro-3/" },
        { title: "Garmin Fenix 7X Review", url: "https://gearuptofit.com/review/garmin-fenix-7x-review/" },
        { title: "Best Fitness Trackers 2024", url: "https://gearuptofit.com/review/best-fitness-trackers-2024/" },
      ]
    },
    {
      title: "Outdoor & Trail Running",
      icon: <MapPin className="w-8 h-8" />,
      description: "Explore outdoor and trail running adventures",
      gradient: "from-teal-500 to-teal-700",
      links: [
        { title: "Trail Running Adventures", url: "https://gearuptofit.com/running/trail-running-adventures-discovering-the-thrill-of-off-road-paths/" },
        { title: "Trail Running Basics", url: "https://gearuptofit.com/running/trail-running/" },
        { title: "Start Trail Running", url: "https://gearuptofit.com/running/start-trail-running/" },
        { title: "Trail Running Terrains", url: "https://gearuptofit.com/running/trail-running-terrains/" },
        { title: "A Trail Runner's Mindset", url: "https://gearuptofit.com/running/a-trail-runners-mindset/" },
        { title: "How Trail Running Shoes Should Fit", url: "https://gearuptofit.com/running/how-should-trail-running-shoes-fit/" },
        { title: "Running Uphill Techniques", url: "https://gearuptofit.com/running/running-uphill/" },
        { title: "Hill Running Workouts", url: "https://gearuptofit.com/running/hill-running-workouts/" },
        { title: "Essential Outdoor Running Gear", url: "https://gearuptofit.com/running/essential-outdoor-running-gear/" },
        { title: "Outdoor Running Safety Tips", url: "https://gearuptofit.com/running/outdoor-running-safety-tips/" },
        { title: "Outdoor Running Etiquette", url: "https://gearuptofit.com/running/outdoor-running-etiquette/" },
      ]
    },
    {
      title: "Running & Nutrition",
      icon: <Heart className="w-8 h-8" />,
      description: "Fuel your runs with proper nutrition and hydration",
      gradient: "from-pink-500 to-pink-700",
      links: [
        { title: "Nutrition & Hydration in Running", url: "https://gearuptofit.com/running/nutrition-and-hydration-in-running-performance/" },
        { title: "Long Run Nutrition", url: "https://gearuptofit.com/running/long-run-nutrition/" },
        { title: "Nutrition Timing for Runners", url: "https://gearuptofit.com/running/nutrition-timing-runners/" },
        { title: "Running Hydration Packs & Belts", url: "https://gearuptofit.com/running/running-hydration-packs-belts/" },
        { title: "Running & Gut Health", url: "https://gearuptofit.com/running/running-gut-health/" },
        { title: "Running vs Walking Calories", url: "https://gearuptofit.com/running/running-vs-walking-calories/" },
        { title: "How Many Calories Does Running Burn", url: "https://gearuptofit.com/running/how-many-calories-does-running-burn/" },
        { title: "Can Running Burn Belly Fat", url: "https://gearuptofit.com/running/can-running-burn-belly-fat/" },
        { title: "Does Running Make You Lose Weight", url: "https://gearuptofit.com/running/does-running-make-you-lose-weight/" },
      ]
    }
  ];

  return (
    <section id="running-categories" className="py-24 bg-gearup-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8">
            Complete Running <span className="bg-gradient-to-r from-gearup-red to-red-400 bg-clip-text text-transparent">Resource Hub</span>
          </h2>
          <p className="text-xl text-gearup-light max-w-4xl mx-auto leading-relaxed">
            Everything you need for your running journey, organized by category and expertise level
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {runningCategories.map((category, index) => (
            <Card key={index} className="bg-gearup-light-gray border-0 hover:shadow-2xl hover:shadow-gearup-red/20 transition-all duration-500 group hover:-translate-y-2 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${category.gradient}`}></div>
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-4 bg-gradient-to-r ${category.gradient} rounded-2xl text-white group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-white text-2xl mb-2 group-hover:text-gearup-red transition-colors">{category.title}</CardTitle>
                    <CardDescription className="text-gearup-light leading-relaxed">{category.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 max-h-80 overflow-y-auto custom-scrollbar">
                  {category.links.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      variant="ghost"
                      className="w-full justify-between text-left h-auto p-4 text-gearup-light hover:text-white hover:bg-gradient-to-r hover:from-gearup-red/20 hover:to-transparent transition-all duration-300 rounded-xl group/link"
                      asChild
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="block">
                        <span className="text-sm leading-tight font-medium">{link.title}</span>
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RunningCategories;

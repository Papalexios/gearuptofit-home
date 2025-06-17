
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Utensils, Calendar, Zap, Users, Target, TrendingDown } from "lucide-react";

const WeightLossPlans = () => {
  const plans = [
    {
      icon: <Utensils className="w-8 h-8 text-gearup-red" />,
      title: "Diet Plans & Nutrition",
      description: "Science-backed eating strategies for sustainable weight loss",
      features: ["Keto & Mediterranean diets", "Meal replacement plans", "Calorie deficit strategies"],
      links: [
        { text: "The Beginners Guide to Keto", url: "https://gearuptofit.com/weight-loss/the-beginners-guide-to-keto/" },
        { text: "Mediterranean Diet for Health Benefits", url: "https://gearuptofit.com/weight-loss/the-mediterranean-diet-for-health-benefits/" },
        { text: "Calorie Deficit Diet Plan", url: "https://gearuptofit.com/weight-loss/calorie-deficit-diet-plan/" }
      ]
    },
    {
      icon: <Calendar className="w-8 h-8 text-gearup-red" />,
      title: "Meal Plans & Recipes", 
      description: "Ready-to-follow meal plans and healthy recipes for every goal",
      features: ["7-day meal plans", "Healthy recipes", "Breakfast & lunch ideas"],
      links: [
        { text: "7 Day Diet Plan for Weight Loss", url: "https://gearuptofit.com/weight-loss/7-day-diet-plan-for-weight-loss/" },
        { text: "Best Breakfast for Weight Loss", url: "https://gearuptofit.com/weight-loss/best-breakfast-for-weight-loss/" },
        { text: "Healthy Lunches for Weight Loss", url: "https://gearuptofit.com/weight-loss/healthy-lunches-for-weight-loss/" }
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-gearup-red" />,
      title: "Fast Weight Loss",
      description: "Proven strategies for quick, healthy weight loss results",
      features: ["Weekly plans", "Monthly goals", "Rapid fat loss"],
      links: [
        { text: "How to Lose Weight in a Week", url: "https://gearuptofit.com/weight-loss/how-to-lose-weight-in-a-week/" },
        { text: "How to Lose 10 Pounds in a Month", url: "https://gearuptofit.com/weight-loss/how-to-lose-10-pounds-in-a-month/" },
        { text: "Lose 20 Pounds in a Month: Diet Plan Free", url: "https://gearuptofit.com/weight-loss/lose-20-pounds-in-a-month-diet-plan-free/" }
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-gearup-red" />,
      title: "Specialized Programs",
      description: "Targeted solutions for specific health conditions and goals",
      features: ["PCOS diet plans", "Post-surgery recovery", "Medical conditions"],
      links: [
        { text: "PCOS Diet Plan for Natural Weight Loss", url: "https://gearuptofit.com/weight-loss/how-to-lose-weight-naturally-with-a-pcos-diet-plan/" },
        { text: "How to Lose Weight After a Tummy Tuck", url: "https://gearuptofit.com/weight-loss/how-to-lose-weight-after-a-tummy-tuck/" },
        { text: "Best Diet Plan for High Cholesterol", url: "https://gearuptofit.com/weight-loss/best-diet-plan-for-high-cholesterol/" }
      ]
    },
    {
      icon: <Target className="w-8 h-8 text-gearup-red" />,
      title: "Belly Fat Loss",
      description: "Targeted strategies to burn stubborn belly fat effectively",
      features: ["Belly fat diets", "Core exercises", "Fat burning foods"],
      links: [
        { text: "Best Diet for Belly Fat Loss", url: "https://gearuptofit.com/weight-loss/best-diet-for-belly-fat-loss/" },
        { text: "How to Get Rid of Lower Belly Fat", url: "https://gearuptofit.com/weight-loss/how-to-get-rid-of-lower-belly-fat/" },
        { text: "Best Foods to Lose Belly Fat", url: "https://gearuptofit.com/weight-loss/best-foods-to-lose-belly-fat/" }
      ]
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-gearup-red" />,
      title: "Advanced Strategies",
      description: "Break through plateaus and optimize your weight loss journey",
      features: ["Plateau solutions", "Metabolic reset", "Advanced techniques"],
      links: [
        { text: "Overcome a Weight Loss Plateau", url: "https://gearuptofit.com/weight-loss/overcome-a-weight-loss-plateau/" },
        { text: "The Metabolic Reset Diet Plan", url: "https://gearuptofit.com/weight-loss/the-metabolic-reset-diet-plan/" },
        { text: "How to Burn Stubborn Fat", url: "https://gearuptofit.com/weight-loss/how-to-burn-stubborn-fat/" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gearup-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Proven Weight Loss Plans
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive collection of diet plans, meal strategies, and specialized programs 
            designed to help you lose weight safely and keep it off permanently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className="bg-gearup-charcoal border-2 border-gearup-light-gray hover:border-gearup-red transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-gearup-red/20 rounded-full p-4 group-hover:bg-gearup-red/30 transition-colors">
                    {plan.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-white mb-2">
                  {plan.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-200 flex items-center">
                      <div className="w-2 h-2 bg-gearup-red rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="space-y-3">
                  {plan.links.map((link, idx) => (
                    <a 
                      key={idx}
                      href={link.url}
                      className="block text-gearup-red hover:text-red-300 font-medium hover:underline text-sm"
                    >
                      → {link.text}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gearup-red hover:bg-red-700 text-white px-8 py-4">
            <a href="https://gearuptofit.com/weight-loss/best-weight-loss-diets-for-2024/">
              View All Weight Loss Plans
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WeightLossPlans;


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Pill, Zap, Leaf, Star } from "lucide-react";

const WeightLossSupplements = () => {
  const supplementCategories = [
    {
      icon: <Pill className="w-8 h-8 text-gearup-red" />,
      title: "Weight Loss Supplements",
      links: [
        { text: "Best Weight Loss Supplements", url: "https://gearuptofit.com/weight-loss/best-weight-loss-supplements/" },
        { text: "Weight Loss Gummies & Supplements", url: "https://gearuptofit.com/weight-loss/weight-loss-gummies-supplements/" },
        { text: "Best Weight Loss Gummies", url: "https://gearuptofit.com/weight-loss/best-weight-loss-gummies/" }
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-gearup-red" />,
      title: "Pre-Workout & Energy",
      links: [
        { text: "Best Pre-Workout for Weight Loss", url: "https://gearuptofit.com/weight-loss/best-pre-workout-for-weight-loss/" },
        { text: "5 of the Most Important Vitamins That Help with Weight Loss", url: "https://gearuptofit.com/weight-loss/5-of-the-most-important-vitamins-that-help-with-weight-loss/" }
      ]
    },
    {
      icon: <Leaf className="w-8 h-8 text-gearup-red" />,
      title: "Natural Solutions",
      links: [
        { text: "Best Green Tea for Weight Loss: Zero Calorie", url: "https://gearuptofit.com/weight-loss/best-green-tea-for-weight-loss-zero-calorie/" }
      ]
    },
    {
      icon: <Star className="w-8 h-8 text-gearup-red" />,
      title: "Medical Options",
      links: [
        { text: "How to Take Topiramate for Weight Loss", url: "https://gearuptofit.com/weight-loss/how-to-take-topiramate-for-weight-loss/" },
        { text: "Weight Loss Results with Ozempic", url: "https://gearuptofit.com/weight-loss/weight-loss-results-with-ozempic/" },
        { text: "The Physician Weight Loss Diet Plan", url: "https://gearuptofit.com/weight-loss/the-physician-weight-loss-diet-plan/" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gearup-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Supplements & Medical Support
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Explore evidence-based supplements, medical weight loss options, and expert reviews 
            to enhance your weight loss journey safely and effectively
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supplementCategories.map((category, index) => (
            <Card key={index} className="bg-gearup-charcoal border-2 border-gearup-light-gray hover:border-gearup-red transition-all duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-gearup-red/20 rounded-full p-4">
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-white">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.links.map((link, idx) => (
                    <a 
                      key={idx}
                      href={link.url}
                      className="block text-gray-300 hover:text-gearup-red text-sm leading-relaxed hover:underline transition-colors"
                    >
                      → {link.text}
                    </a>
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

export default WeightLossSupplements;

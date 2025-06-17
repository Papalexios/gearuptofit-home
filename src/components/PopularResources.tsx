
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, TrendingUp } from "lucide-react";

const PopularResources = () => {
  const trainingPlans = [
    {
      title: "From Couch to Your First 5K",
      description: "Complete beginner-friendly program that takes you from zero to 5K in 8 weeks",
      link: "https://gearuptofit.com/running/from-couch-to-your-first-5k/",
      badge: "Beginner",
      icon: <Users className="w-5 h-5" />,
      stats: "50K+ completed"
    },
    {
      title: "10K Training and Race Preparation",
      description: "Advanced strategies and proven training methods for crushing your 10K goals",
      link: "https://gearuptofit.com/running/10k-training-and-race-preparation-tips/",
      badge: "Intermediate",
      icon: <TrendingUp className="w-5 h-5" />,
      stats: "12-week program"
    },
    {
      title: "Half Marathon Training Guide",
      description: "Comprehensive training plan with nutrition and recovery strategies",
      link: "https://gearuptofit.com/running/half-marathon-training-guide/",
      badge: "Advanced",
      icon: <Clock className="w-5 h-5" />,
      stats: "16-week plan"
    }
  ];

  const gearReviews = [
    {
      title: "Best Running Shoes for Flat Feet",
      description: "Expert-tested recommendations for maximum comfort and injury prevention",
      link: "https://gearuptofit.com/review/best-running-shoes-for-flat-feet/",
      rating: "4.9/5",
      reviews: "2.3K reviews"
    },
    {
      title: "Best Running Shoes for Beginners",
      description: "Budget-friendly options that don't compromise on quality or comfort",
      link: "https://gearuptofit.com/review/best-running-shoes-for-beginners/",
      rating: "4.8/5",
      reviews: "1.8K reviews"
    },
    {
      title: "Best Running Shoes for Women in 2024",
      description: "Top picks designed specifically for women's biomechanics and preferences",
      link: "https://gearuptofit.com/review/best-running-shoes-for-women-in-2024/",
      rating: "4.9/5",
      reviews: "3.1K reviews"
    }
  ];

  const performanceGuides = [
    {
      title: "VO2 Max: Improving Running Performance",
      description: "Science-backed methods to boost your aerobic capacity and race times",
      link: "https://gearuptofit.com/fitness/vo2-max-improving-running-performance/",
      category: "Performance"
    },
    {
      title: "Interval Training for Runners",
      description: "High-intensity workouts that dramatically improve speed and endurance",
      link: "https://gearuptofit.com/running/interval-training-for-runners/",
      category: "Training"
    },
    {
      title: "How to Breathe While Running",
      description: "Master proper breathing techniques to run longer and feel better",
      link: "https://gearuptofit.com/running/how-to-breathe-while-running/",
      category: "Technique"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Most Popular Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thousands of runners have transformed their performance with these proven guides
          </p>
        </div>

        {/* Training Plans */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🏃‍♀️ Training Plans That Work
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {trainingPlans.map((plan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="mb-2">
                      {plan.badge}
                    </Badge>
                    <div className="flex items-center gap-1 text-gray-500">
                      {plan.icon}
                      <span className="text-sm">{plan.stats}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">
                    <a href={plan.link} className="hover:text-blue-600 transition-colors">
                      {plan.title}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {plan.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gear Reviews */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            👟 Expert Gear Reviews
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {gearReviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-green-200">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{review.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">{review.reviews}</span>
                  </div>
                  <CardTitle className="text-lg">
                    <a href={review.link} className="hover:text-green-600 transition-colors">
                      {review.title}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {review.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Performance Guides */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🚀 Performance & Technique
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {performanceGuides.map((guide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-purple-200">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    {guide.category}
                  </Badge>
                  <CardTitle className="text-lg">
                    <a href={guide.link} className="hover:text-purple-600 transition-colors">
                      {guide.title}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {guide.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Resource Links */}
        <div className="mt-16 bg-white rounded-2xl p-8">
          <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
            More Essential Resources
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            <a href="https://gearuptofit.com/running/running-plan-to-lose-weight/" className="text-blue-600 hover:text-blue-800 hover:underline">
              Running Plan to Lose Weight
            </a>
            <a href="https://gearuptofit.com/running/recover-from-a-running-injury/" className="text-blue-600 hover:text-blue-800 hover:underline">
              Recover from a Running Injury
            </a>
            <a href="https://gearuptofit.com/running/trail-running/" className="text-blue-600 hover:text-blue-800 hover:underline">
              Complete Trail Running Guide
            </a>
            <a href="https://gearuptofit.com/running/proper-running-form-technique-outdoor/" className="text-blue-600 hover:text-blue-800 hover:underline">
              Proper Running Form & Technique
            </a>
            <a href="https://gearuptofit.com/running/running-motivation/" className="text-blue-600 hover:text-blue-800 hover:underline">
              Stay Motivated to Run
            </a>
            <a href="https://gearuptofit.com/running/nutrition-and-hydration-in-running-performance/" className="text-blue-600 hover:text-blue-800 hover:underline">
              Running Nutrition & Hydration
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularResources;

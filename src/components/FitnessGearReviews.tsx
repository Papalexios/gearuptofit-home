
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Watch, Star, TrendingUp, Award, DollarSign, Home } from "lucide-react";

const FitnessGearReviews = () => {
  const featuredReviews = [
    {
      title: "Best Fitness Trackers for Weight Loss",
      description: "Expert-tested fitness trackers that actually help you lose weight and stay motivated",
      link: "https://gearuptofit.com/review/best-fitness-trackers-for-weight-loss/",
      rating: "4.9/5",
      reviews: "2,847 reviews",
      category: "Fitness Trackers",
      image: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      featured: true
    },
    {
      title: "Garmin Venu Review",
      description: "In-depth analysis of Garmin's premium smartwatch for serious fitness enthusiasts",
      link: "https://gearuptofit.com/review/garmin-venu-review/",
      rating: "4.8/5",
      reviews: "1,923 reviews",
      category: "Smartwatch",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      featured: true
    }
  ];

  const gearCategories = [
    {
      icon: <Watch className="w-6 h-6 text-gearup-red" />,
      title: "Fitness Trackers & Smartwatches",
      description: "Monitor your progress with the latest wearable technology",
      benefits: ["Heart Rate Monitoring", "Activity Tracking", "Sleep Analysis", "GPS Features"]
    },
    {
      icon: <Home className="w-6 h-6 text-gearup-red" />,
      title: "Home Gym Equipment",
      description: "Build your perfect home gym without breaking the bank",
      benefits: ["Space-Efficient Design", "Budget-Friendly Options", "Professional Results", "Easy Storage"]
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-gearup-red" />,
      title: "Performance Enhancement",
      description: "Gear that actually improves your workout performance",
      benefits: ["Increased Motivation", "Better Form", "Progress Tracking", "Injury Prevention"]
    }
  ];

  const additionalResources = [
    {
      title: "10 Health Benefits of Wearing a Fitness Tracker",
      link: "https://gearuptofit.com/fitness/10-health-benefits-of-wearing-a-fitness-tracker/",
      category: "Benefits"
    },
    {
      title: "How to Choose the Best Home Gym Equipment on a Budget",
      link: "https://gearuptofit.com/fitness/how-to-choose-the-best-home-gym-equipment-on-a-budget/",
      category: "Buying Guide"
    },
    {
      title: "Benefits of Adding an Upright Bike to Your Workout",
      link: "https://gearuptofit.com/fitness/benefits-of-adding-an-upright-bike-to-your-workout/",
      category: "Equipment"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gearup-black mb-6">
            Expert Gear Reviews & Recommendations
          </h2>
          <p className="text-xl text-gearup-medium-gray max-w-3xl mx-auto">
            Make informed decisions with our comprehensive reviews and buying guides. 
            We test every product to help you find gear that actually delivers results.
          </p>
        </div>

        {/* Featured Reviews */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gearup-black mb-8 text-center">
            🏆 Editor's Choice Reviews
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredReviews.map((review, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-gearup-red">
                <div className="relative">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="w-full h-48 object-cover"
                  />
                  {review.featured && (
                    <Badge className="absolute top-4 left-4 bg-gearup-red text-white">
                      <Award className="w-3 h-3 mr-1" />
                      Editor's Choice
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">
                      {review.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{review.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">
                    <a href={review.link} className="hover:text-gearup-red transition-colors">
                      {review.title}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gearup-medium-gray mb-4">
                    {review.description}
                  </CardDescription>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{review.reviews}</span>
                    <Button 
                      variant="outline" 
                      className="border-gearup-red text-gearup-red hover:bg-gearup-red hover:text-white"
                    >
                      <a href={review.link}>
                        Read Review
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gear Categories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gearup-black mb-8 text-center">
            Why the Right Gear Matters
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {gearCategories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-2 hover:border-gearup-red">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="bg-gearup-red/10 p-4 rounded-full">
                      {category.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gearup-black">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gearup-medium-gray mb-6">
                    {category.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {category.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-gearup-red rounded-full"></div>
                        <span className="text-gearup-medium-gray">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gearup-black mb-4">
              More Gear Guides & Tips
            </h3>
            <p className="text-gearup-medium-gray">
              Discover how the right equipment can transform your fitness journey
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6">
            {additionalResources.map((resource, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Badge variant="outline" className="mb-3">
                  {resource.category}
                </Badge>
                <h4 className="font-semibold text-gearup-black mb-2">
                  <a href={resource.link} className="hover:text-gearup-red hover:underline">
                    {resource.title}
                  </a>
                </h4>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              size="lg" 
              className="bg-gearup-red hover:bg-red-700 text-white"
            >
              <a href="https://gearuptofit.com/fitness/10-health-benefits-of-wearing-a-fitness-tracker/">
                Explore All Reviews
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitnessGearReviews;

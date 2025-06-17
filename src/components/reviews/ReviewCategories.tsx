
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Watch, Activity, Target, Zap } from "lucide-react";

const ReviewCategories = () => {
  const reviewCategories = [{
    icon: <Watch className="w-8 h-8 text-gearup-red" />,
    title: "Smartwatches & Fitness Trackers",
    description: "In-depth reviews of the latest wearable technology",
    count: "25+ Reviews",
    reviews: [{
      title: "Garmin Fenix 8",
      link: "https://gearuptofit.com/review/garmin-fenix-8/"
    }, {
      title: "Samsung Galaxy Watch 7",
      link: "https://gearuptofit.com/review/samsung-galaxy-watch-7/"
    }, {
      title: "Garmin Enduro 3",
      link: "https://gearuptofit.com/review/garmin-enduro-3/"
    }, {
      title: "Huawei Watch GT 5 Pro",
      link: "https://gearuptofit.com/review/huawei-watch-gt-5-pro/"
    }, {
      title: "Garmin Venu 2 Plus",
      link: "https://gearuptofit.com/review/garmin-venu-2-plus-review/"
    }, {
      title: "Polar Grit X Pro Premium",
      link: "https://gearuptofit.com/review/polar-grit-x-pro-premium/"
    }, {
      title: "Amazfit Band 7",
      link: "https://gearuptofit.com/review/amazfit-band-7/"
    }, {
      title: "Garmin Instinct 2X",
      link: "https://gearuptofit.com/review/garmin-instinct-2x-review/"
    }]
  }, {
    icon: <Activity className="w-8 h-8 text-gearup-red" />,
    title: "Running Shoes & Gear",
    description: "Expert reviews for runners of all levels and foot types",
    count: "20+ Reviews",
    reviews: [{
      title: "Best Running Shoes for Beginners",
      link: "https://gearuptofit.com/review/best-running-shoes-for-beginners/"
    }, {
      title: "Best Running Shoes for Women 2024",
      link: "https://gearuptofit.com/review/best-running-shoes-for-women-in-2024/"
    }, {
      title: "Best Running Shoes for Flat Feet",
      link: "https://gearuptofit.com/review/best-running-shoes-for-flat-feet/"
    }, {
      title: "Best Running Shoes for Plantar Fasciitis",
      link: "https://gearuptofit.com/review/best-running-shoes-for-plantar-fasciitis/"
    }, {
      title: "Best Running Shoes for Wide Feet",
      link: "https://gearuptofit.com/review/best-running-shoes-for-wide-feet-in-2023/"
    }, {
      title: "Best Running Shoes for Overpronation",
      link: "https://gearuptofit.com/review/best-running-shoes-for-overpronation/"
    }, {
      title: "Best Running Socks for Blister Prevention",
      link: "https://gearuptofit.com/review/best-running-socks-for-blister-prevention/"
    }, {
      title: "Hoka Bondi 9 Review",
      link: "https://gearuptofit.com/review/hoka-bondi-9/"
    }]
  }, {
    icon: <Target className="w-8 h-8 text-gearup-red" />,
    title: "Home Gym Equipment",
    description: "Build your perfect home gym with expert-tested equipment",
    count: "10+ Reviews",
    reviews: [{
      title: "Best Dumbbells for Home Workouts",
      link: "https://gearuptofit.com/review/best-dumbbells-for-home-workouts/"
    }, {
      title: "Best Resistance Bands for Home Workouts",
      link: "https://gearuptofit.com/review/best-resistance-bands-for-home-workouts/"
    }, {
      title: "Best CrossFit Skipping Rope",
      link: "https://gearuptofit.com/review/best-crossfit-skipping-rope/"
    }, {
      title: "Best Shoes for Rowing",
      link: "https://gearuptofit.com/review/best-shoes-for-rowing/"
    }, {
      title: "Best Racquetball Glove",
      link: "https://gearuptofit.com/review/best-racquetball-glove/"
    }]
  }, {
    icon: <Zap className="w-8 h-8 text-gearup-red" />,
    title: "Sports Nutrition",
    description: "Supplements and nutrition products that actually work",
    count: "5+ Reviews",
    reviews: [{
      title: "Best Protein Powders for Muscle Gain",
      link: "https://gearuptofit.com/review/best-protein-powders-for-muscle-gain/"
    }, {
      title: "Best Protein for CrossFit",
      link: "https://gearuptofit.com/review/best-protein-for-crossfit/"
    }, {
      title: "Best Fitness Trackers for Weight Loss",
      link: "https://gearuptofit.com/review/best-fitness-trackers-for-weight-loss/"
    }]
  }];

  return (
    <section className="py-20 bg-gearup-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Review Categories</h2>
          <p className="text-xl text-gearup-light max-w-2xl mx-auto">
            Comprehensive reviews across all fitness categories
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {reviewCategories.map((category, index) => (
            <Card key={index} className="bg-gearup-light-gray border-gearup-red/20 hover:border-gearup-red transition-all">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gearup-red/10 p-3 rounded-full">
                    {category.icon}
                  </div>
                  <Badge className="bg-gearup-red">{category.count}</Badge>
                </div>
                <CardTitle className="text-white text-xl">{category.title}</CardTitle>
                <CardDescription className="text-gearup-light">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  {category.reviews.slice(0, 4).map((review, reviewIndex) => (
                    <div key={reviewIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-gearup-red rounded-full"></div>
                      <a href={review.link} className="text-gearup-light hover:text-gearup-red transition-colors hover:underline">
                        {review.title}
                      </a>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-gearup-red hover:bg-red-700 text-white">
                  View All Reviews
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewCategories;

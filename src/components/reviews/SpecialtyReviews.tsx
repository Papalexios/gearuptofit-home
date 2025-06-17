
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const SpecialtyReviews = () => {
  const specialtyReviews = [{
    category: "Specialized Sports Watches",
    reviews: [{
      title: "Best Sports Watches for Triathletes",
      link: "https://gearuptofit.com/review/best-sports-watches-for-triathletes-in-2023/"
    }, {
      title: "Best Sports Watches for Swimming",
      link: "https://gearuptofit.com/review/best-sports-watches-for-swimming/"
    }, {
      title: "Best Sports Watches for Interval Training",
      link: "https://gearuptofit.com/review/best-sports-watches-for-interval-training-in-2023/"
    }, {
      title: "Best Smartwatches for Hiking 2024",
      link: "https://gearuptofit.com/review/best-smartwatches-for-hiking-in-2024/"
    }, {
      title: "Best Smartwatches for Weightlifters 2024",
      link: "https://gearuptofit.com/review/best-smartwatches-for-weightlifters-in-2024/"
    }]
  }, {
    category: "Demographic-Specific Reviews",
    reviews: [{
      title: "Best Smartwatches for Seniors",
      link: "https://gearuptofit.com/review/best-smartwatches-for-seniors/"
    }, {
      title: "Best Smartwatches for Kids 2023",
      link: "https://gearuptofit.com/review/best-smartwatches-for-kids-in-2023/"
    }, {
      title: "Best Sports Watches for Women 2023",
      link: "https://gearuptofit.com/review/best-sports-watches-for-women-in-2023/"
    }, {
      title: "Best Budget Smartwatches for Fitness",
      link: "https://gearuptofit.com/review/best-budget-smartwatches-for-fitness-tracking/"
    }]
  }, {
    category: "Brand-Specific Reviews",
    reviews: [{
      title: "Garmin Forerunner 265",
      link: "https://gearuptofit.com/review/garmin-forerunner-265/"
    }, {
      title: "Garmin Forerunner 45",
      link: "https://gearuptofit.com/review/garmin-forerunner-45-review/"
    }, {
      title: "Galaxy Watch 6 Review",
      link: "https://gearuptofit.com/review/galaxy-watch-6-review/"
    }, {
      title: "Coros Pace 3 Review",
      link: "https://gearuptofit.com/review/coros-pace-3-review/"
    }, {
      title: "Amazfit GTR 4 Review",
      link: "https://gearuptofit.com/review/amazfit-gtr-4-review/"
    }, {
      title: "Suunto Core Review",
      link: "https://gearuptofit.com/review/suunto-core/"
    }]
  }];

  const comparisons = [{
    title: "Garmin Fenix 8 vs Enduro 3",
    link: "https://gearuptofit.com/review/garmin-fenix-8-vs-enduro-3/"
  }, {
    title: "Smartbands Comparison Guide",
    link: "https://gearuptofit.com/review/smartbands/"
  }];

  return (
    <section className="py-20 bg-gearup-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Specialty & Comparison Reviews</h2>
          <p className="text-xl text-gearup-light max-w-2xl mx-auto">
            Detailed comparisons and specialized reviews for specific needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {specialtyReviews.map((section, index) => (
            <Card key={index} className="bg-gearup-light-gray border-gearup-red/20">
              <CardHeader>
                <CardTitle className="text-white text-lg">{section.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {section.reviews.map((review, reviewIndex) => (
                    <a key={reviewIndex} href={review.link} className="block text-sm text-gearup-light hover:text-gearup-red transition-colors hover:underline">
                      {review.title}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Comparison Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Head-to-Head Comparisons</h3>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {comparisons.map((comparison, index) => (
              <Card key={index} className="bg-gearup-light-gray border-gearup-red/20 hover:border-gearup-red transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-gearup-red" />
                    <a href={comparison.link} className="text-white hover:text-gearup-red transition-colors font-medium">
                      {comparison.title}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtyReviews;

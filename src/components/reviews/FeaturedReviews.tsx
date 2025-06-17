
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const FeaturedReviews = () => {
  const featuredReviews = [{
    title: "Garmin Fenix 8 Review",
    description: "The ultimate GPS smartwatch for serious athletes with advanced performance metrics",
    link: "https://gearuptofit.com/review/garmin-fenix-8/",
    category: "Premium Smartwatch",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    featured: true
  }, {
    title: "Best Fitness Trackers 2024",
    description: "Complete guide to the top fitness trackers that actually deliver results",
    link: "https://gearuptofit.com/review/best-fitness-trackers-2024/",
    category: "Buyer's Guide",
    image: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    featured: true
  }, {
    title: "Best Running Shoes for Women 2024",
    description: "Expert-tested running shoes designed specifically for women's biomechanics",
    link: "https://gearuptofit.com/review/best-running-shoes-for-women-in-2024/",
    category: "Running Gear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    featured: true
  }];

  return (
    <section className="py-20 bg-gearup-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            🏆 Editor's Choice Reviews
          </h2>
          <p className="text-xl text-gearup-light max-w-3xl mx-auto">
            Our top-rated reviews based on extensive testing and expert analysis
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredReviews.map((review, index) => (
            <Card key={index} className="bg-gearup-light-gray border-gearup-red/20 hover:border-gearup-red transition-all overflow-hidden">
              <div className="relative">
                <img src={review.image} alt={review.title} className="w-full h-48 object-cover" />
                <Badge className="absolute top-4 left-4 bg-gearup-red text-white">
                  <Award className="w-3 h-3 mr-1" />
                  Editor's Choice
                </Badge>
              </div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  {review.category}
                </Badge>
                <CardTitle className="text-white">
                  <a href={review.link} className="hover:text-gearup-red transition-colors">
                    {review.title}
                  </a>
                </CardTitle>
                <CardDescription className="text-gearup-light">
                  {review.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gearup-red hover:bg-red-700 text-white">
                  <a href={review.link}>
                    Read Review
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedReviews;

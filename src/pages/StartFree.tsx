
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Gift, Target } from "lucide-react";
import Footer from "@/components/Footer";

const StartFree = () => {
  return (
    <div className="min-h-screen bg-gearup-dark">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gearup-dark flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Start your fitness journey for free"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-gearup-red text-white mb-4 text-lg px-6 py-2">
              <Gift className="w-5 h-5 mr-2" />
              100% Free Access
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Start Your Fitness Journey
              <span className="text-gearup-red block mt-2">Absolutely Free</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Get instant access to expert workout plans, nutrition guides, calculators, 
              and premium content - no credit card required, no hidden fees.
            </p>
            
            <Button size="lg" className="bg-gearup-red hover:bg-red-700 text-white px-12 py-6 text-xl font-bold">
              <Target className="w-6 h-6 mr-3" />
              Get Free Access Now
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gearup-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">What's Included</h2>
            <p className="text-xl text-gearup-light max-w-2xl mx-auto">
              Everything you need to succeed in your fitness journey, completely free
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                "Complete workout programs for all fitness levels",
                "Personalized nutrition guides and meal plans",
                "Advanced fitness calculators and tracking tools",
                "Expert tips from certified trainers",
                "Injury prevention and recovery protocols",
                "Progress tracking and goal setting tools"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gearup-light-gray rounded-lg">
                  <CheckCircle className="w-6 h-6 text-gearup-red flex-shrink-0" />
                  <span className="text-white text-lg">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-gearup-red/20 to-gearup-light-gray border-gearup-red">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Star className="w-8 h-8 text-gearup-red" />
                    <div>
                      <CardTitle className="text-white text-xl">Premium Quality</CardTitle>
                      <CardDescription className="text-gray-200">
                        Professional-grade content typically worth $100+
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              
              <Card className="bg-gradient-to-r from-gearup-red/20 to-gearup-light-gray border-gearup-red">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Target className="w-8 h-8 text-gearup-red" />
                    <div>
                      <CardTitle className="text-white text-xl">Results Guaranteed</CardTitle>
                      <CardDescription className="text-gray-200">
                        Follow our proven system and see results in 30 days
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              
              <Card className="bg-gradient-to-r from-gearup-red/20 to-gearup-light-gray border-gearup-red">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Gift className="w-8 h-8 text-gearup-red" />
                    <div>
                      <CardTitle className="text-white text-xl">Always Free</CardTitle>
                      <CardDescription className="text-gray-200">
                        No hidden costs, no subscriptions, no strings attached
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button size="lg" className="bg-gearup-red hover:bg-red-700 text-white px-12 py-6 text-xl font-bold">
              <Target className="w-6 h-6 mr-3" />
              Start Your Free Journey Now
            </Button>
            <p className="text-gearup-light mt-4">Join thousands who've transformed their lives</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartFree;

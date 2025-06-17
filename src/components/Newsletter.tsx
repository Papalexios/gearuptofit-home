
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Gift, CheckCircle } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setIsSubscribed(true);
    setEmail("");
  };

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gearup-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto bg-gearup-light-gray border-gearup-red">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-gearup-red mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Welcome to the Community!
              </h3>
              <p className="text-gray-200 mb-6">
                Check your email for your free training plan and weekly running tips.
              </p>
              <Button 
                className="bg-gearup-red hover:bg-red-700 text-white"
                onClick={() => setIsSubscribed(false)}
              >
                Continue Exploring
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gearup-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-gearup-red/20 rounded-full p-6">
              <Gift className="w-12 h-12 text-gearup-red" />
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Get Your Free Training Plan
          </h2>
          <p className="text-xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Join 100,000+ runners receiving weekly tips, exclusive training plans, and early access to new guides
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-gearup-charcoal text-white placeholder-gray-400 border-gearup-light-gray h-14 text-lg px-6 rounded-lg focus:border-gearup-red"
              />
              <Button 
                type="submit"
                size="lg"
                className="bg-gearup-red hover:bg-red-700 text-white font-bold px-8 h-14 text-lg rounded-lg whitespace-nowrap"
              >
                Get Free Plan
              </Button>
            </div>
          </form>
          
          <div className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-3 text-gearup-red" />
              <span className="font-semibold text-white">Weekly expert tips</span>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-8 h-8 mb-3 text-gearup-red" />
              <span className="font-semibold text-white">Free training plans</span>
            </div>
            <div className="flex flex-col items-center">
              <Gift className="w-8 h-8 mb-3 text-gearup-red" />
              <span className="font-semibold text-white">Exclusive content</span>
            </div>
          </div>
          
          <p className="text-sm mt-8 text-gray-400">
            No spam, ever. Unsubscribe anytime with one click.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

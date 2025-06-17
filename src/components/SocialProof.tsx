
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Sarah Martinez",
      achievement: "Completed First Marathon",
      quote: "I went from struggling to run 1 mile to completing my first marathon in 6 months. The training plans are incredible and the community support is amazing!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80&face=center"
    },
    {
      name: "Marcus Johnson",
      achievement: "Lost 40 lbs Running",
      quote: "The combination of running plans and nutrition guidance helped me lose 40 pounds and gain confidence I never had. Life-changing experience!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80&face=center"
    },
    {
      name: "Jennifer Chen",
      achievement: "5K PR: 22:15",
      quote: "The interval training program shaved 3 minutes off my 5K time. I'm now competitive in local races and loving every minute of it!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80&face=center"
    }
  ];

  const brands = [
    "Runner's World",
    "Men's Health", 
    "Women's Running",
    "Outside Magazine",
    "Competitor"
  ];

  const stats = [
    { number: "500K+", label: "Runners Trained" },
    { number: "95%", label: "Success Rate" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <section className="py-16 bg-gearup-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Trusted by Runners Worldwide
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gearup-red mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Real Results from Real Runners
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-gearup-light-gray border-2 hover:border-gearup-red transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-gearup-red shadow-lg"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="font-bold text-lg text-white">{testimonial.name}</div>
                      <div className="text-sm text-gearup-red font-semibold bg-red-900/30 px-3 py-1 rounded-full inline-block mt-1">
                        {testimonial.achievement}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <Quote className="w-8 h-8 text-gearup-red opacity-30 mb-3" />
                    <p className="text-gray-200 italic leading-relaxed text-base">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Brand Mentions */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-6">
            Featured In
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300">
            {brands.map((brand, index) => (
              <div key={index} className="text-lg font-medium hover:text-gearup-red transition-colors">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

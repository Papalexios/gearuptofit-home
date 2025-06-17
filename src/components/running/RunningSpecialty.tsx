import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, ArrowRight } from "lucide-react";
const RunningSpecialty = () => {
  const mentalTrainingLinks = [{
    title: "Running Mental Training",
    url: "https://gearuptofit.com/running/running-mental-training/"
  }, {
    title: "Mindful Running Techniques",
    url: "https://gearuptofit.com/running/mindful-running-techniques/"
  }, {
    title: "Running Motivation",
    url: "https://gearuptofit.com/running/running-motivation/"
  }, {
    title: "Running Stress Management",
    url: "https://gearuptofit.com/running/running-stress-management/"
  }];
  const specialtyRunning = [{
    title: "Running for Seniors",
    url: "https://gearuptofit.com/running/running-for-seniors/"
  }, {
    title: "Running with Your Dog",
    url: "https://gearuptofit.com/running/running-with-your-dog/"
  }, {
    title: "Morning Running Benefits",
    url: "https://gearuptofit.com/running/running-in-the-morning/"
  }, {
    title: "Morning Jogging Guide",
    url: "https://gearuptofit.com/running/morning-jogging/"
  }, {
    title: "Running a Mile a Day Benefits",
    url: "https://gearuptofit.com/running/the-benefits-of-running-a-mile-a-day/"
  }, {
    title: "Weather Conditions Impact",
    url: "https://gearuptofit.com/running/impact-of-weather-conditions-on-running-performance/"
  }];
  return <section className="py-24 bg-gearup-dark bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Mental Training */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-4xl font-bold text-white mb-4">
                Mental Training & <span className="bg-gradient-to-r from-gearup-red to-red-400 bg-clip-text text-transparent">Motivation</span>
              </h3>
              <p className="text-gearup-light text-lg">Strengthen your mental game and stay motivated on every run</p>
            </div>
            <div className="grid gap-4">
              {mentalTrainingLinks.map((link, index) => <Card key={index} className="bg-gradient-to-r from-gearup-light-gray to-gearup-light-gray/80 border-0 hover:from-gearup-red/10 hover:to-gearup-red/5 transition-all duration-300 group hover:shadow-lg hover:shadow-gearup-red/10">
                  <CardContent className="p-6 bg-slate-900">
                    <Button variant="ghost" className="w-full h-auto p-0 text-left justify-start text-gearup-light hover:text-white transition-all group-hover:translate-x-2" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="block">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl text-white">
                              <Users className="w-5 h-5" />
                            </div>
                            <span className="text-base font-medium">{link.title}</span>
                          </div>
                          <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </a>
                    </Button>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Specialty Running */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-4xl font-bold text-white mb-4">
                Specialty <span className="bg-gradient-to-r from-gearup-red to-red-400 bg-clip-text text-transparent">Running</span>
              </h3>
              <p className="text-gearup-light text-lg">Specialized guides for unique running situations and demographics</p>
            </div>
            <div className="grid gap-4">
              {specialtyRunning.map((link, index) => <Card key={index} className="bg-gradient-to-r from-gearup-light-gray to-gearup-light-gray/80 border-0 hover:from-gearup-red/10 hover:to-gearup-red/5 transition-all duration-300 group hover:shadow-lg hover:shadow-gearup-red/10">
                  <CardContent className="p-6 bg-gray-900">
                    <Button variant="ghost" className="w-full h-auto p-0 text-left justify-start text-gearup-light hover:text-white transition-all group-hover:translate-x-2" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="block">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-gradient-to-r from-teal-500 to-teal-700 rounded-xl text-white">
                              <Heart className="w-5 h-5" />
                            </div>
                            <span className="text-base font-medium">{link.title}</span>
                          </div>
                          <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </a>
                    </Button>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default RunningSpecialty;
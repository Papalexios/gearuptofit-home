
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavigationExternal = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "https://gearuptofit.com" },
    { name: "Fitness", href: "https://fitness.gearuptofit.com" },
    { name: "Running", href: "https://running.gearuptofit.com" },
    { name: "Nutrition", href: "https://nutrition.gearuptofit.com" },
    { name: "Weight Loss", href: "https://weightloss.gearuptofit.com" },
    { name: "Calculators", href: "https://calculators.gearuptofit.com" },
    { name: "Reviews", href: "https://reviews.gearuptofit.com" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gearup-dark/95 backdrop-blur-md border-b border-gearup-red/20">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="https://gearuptofit.com" className="text-lg sm:text-2xl font-bold text-white">
              Gear<span className="text-gearup-red">Up</span>ToFit
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-2 xl:space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gearup-light hover:text-gearup-red px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button - Hidden on small screens */}
          <div className="hidden lg:block">
            <Button className="bg-gearup-red hover:bg-red-700 text-white text-sm px-4 py-2">
              <a href="https://gearuptofit.com/start-free">Start Free</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gearup-light hover:text-gearup-red p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gearup-charcoal rounded-lg mt-2 mb-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gearup-light hover:text-gearup-red block px-3 py-3 rounded-md text-base font-medium transition-colors border-b border-gearup-red/10 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-gearup-red hover:bg-red-700 text-white py-3 text-lg font-semibold">
                  <a href="https://gearuptofit.com/start-free" onClick={() => setIsMenuOpen(false)}>Start Free</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationExternal;

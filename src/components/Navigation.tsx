
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Fitness", href: "/fitness" },
    { name: "Running", href: "/running" },
    { name: "Nutrition", href: "/nutrition" },
    { name: "Weight Loss", href: "/weight-loss" },
    { name: "Calculators", href: "/calculators" },
    { name: "Reviews", href: "/reviews" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gearup-dark/95 backdrop-blur-md border-b border-gearup-red/20">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-lg sm:text-2xl font-bold text-white">
              Gear<span className="text-gearup-red">Up</span>ToFit
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-2 xl:space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gearup-light hover:text-gearup-red px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - Hidden on small screens */}
          <div className="hidden lg:block">
            <Button className="bg-gearup-red hover:bg-red-700 text-white text-sm px-4 py-2">
              <Link to="/start-free">Start Free</Link>
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
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gearup-light hover:text-gearup-red block px-3 py-3 rounded-md text-base font-medium transition-colors border-b border-gearup-red/10 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-gearup-red hover:bg-red-700 text-white py-3 text-lg font-semibold">
                  <Link to="/start-free" onClick={() => setIsMenuOpen(false)}>Start Free</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

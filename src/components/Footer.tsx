
const Footer = () => {
  const quickLinks = [
    { title: "Start Running Guide", url: "https://gearuptofit.com/running/how-to-start-running-from-scratch-the-smart-guide/" },
    { title: "Running for Weight Loss", url: "https://gearuptofit.com/running/running-plan-to-lose-weight/" },
    { title: "Best Running Shoes", url: "https://gearuptofit.com/review/best-running-shoes-for-beginners/" },
    { title: "Running Injury Recovery", url: "https://gearuptofit.com/running/recover-from-a-running-injury/" },
  ];

  const trainingLinks = [
    { title: "5K Training Plan", url: "https://gearuptofit.com/running/from-couch-to-your-first-5k/" },
    { title: "10K Training", url: "https://gearuptofit.com/running/10k-training-and-race-preparation-tips/" },
    { title: "Half Marathon Guide", url: "https://gearuptofit.com/running/half-marathon-training-guide/" },
    { title: "Interval Training", url: "https://gearuptofit.com/running/interval-training-for-runners/" },
  ];

  const gearLinks = [
    { title: "Running Shoes for Flat Feet", url: "https://gearuptofit.com/review/best-running-shoes-for-flat-feet/" },
    { title: "Shoes for Overpronation", url: "https://gearuptofit.com/review/best-running-shoes-for-overpronation/" },
    { title: "Women's Running Shoes", url: "https://gearuptofit.com/review/best-running-shoes-for-women-in-2024/" },
    { title: "GPS Running Watches", url: "https://gearuptofit.com/review/garmin-enduro-3/" },
  ];

  const performanceLinks = [
    { title: "Improve VO2 Max", url: "https://gearuptofit.com/fitness/vo2-max-improving-running-performance/" },
    { title: "Running Form & Technique", url: "https://gearuptofit.com/running/proper-running-form-technique-outdoor/" },
    { title: "Breathing Techniques", url: "https://gearuptofit.com/running/how-to-breathe-while-running/" },
    { title: "Running Motivation", url: "https://gearuptofit.com/running/running-motivation/" },
  ];

  return (
    <footer className="bg-gearup-dark text-gearup-white py-16 border-t border-gearup-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="https://gearuptofit.com/wp-content/uploads/2023/01/cropped-Gear-Up-to-Fit-new-Logo-272-%C3%97-40-px.webp?lm=65B25074"
                alt="GearUpToFit Logo"
                className="h-10 w-auto mr-3"
              />
              <h3 className="text-xl font-bold text-gearup-red">
                GearUpToFit
              </h3>
            </div>
            <p className="text-gearup-light mb-4 text-sm leading-relaxed">
              Your ultimate resource for running advice, training plans, and gear reviews.
            </p>
            <div className="text-sm text-gearup-medium-gray">
              Helping runners since 2008
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gearup-red">Quick Start</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-gearup-light hover:text-gearup-white transition-colors text-sm hover:underline">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Training */}
          <div>
            <h4 className="font-semibold mb-4 text-gearup-red">Training Plans</h4>
            <ul className="space-y-3">
              {trainingLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-gearup-light hover:text-gearup-white transition-colors text-sm hover:underline">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Gear */}
          <div>
            <h4 className="font-semibold mb-4 text-gearup-red">Gear Reviews</h4>
            <ul className="space-y-3">
              {gearLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-gearup-light hover:text-gearup-white transition-colors text-sm hover:underline">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Performance */}
          <div>
            <h4 className="font-semibold mb-4 text-gearup-red">Performance</h4>
            <ul className="space-y-3">
              {performanceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-gearup-light hover:text-gearup-white transition-colors text-sm hover:underline">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gearup-light-gray mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gearup-medium-gray text-sm mb-4 md:mb-0">
              © 2025 GearUpToFit.com. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="https://gearuptofit.com/privacy-policy/" className="text-gearup-medium-gray hover:text-gearup-white transition-colors hover:underline">
                Privacy Policy
              </a>
              <a href="https://gearuptofit.com/terms-of-service/" className="text-gearup-medium-gray hover:text-gearup-white transition-colors hover:underline">
                Terms of Service
              </a>
              <a href="https://gearuptofit.com/contact/" className="text-gearup-medium-gray hover:text-gearup-white transition-colors hover:underline">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

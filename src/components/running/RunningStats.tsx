
const RunningStats = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-gearup-charcoal to-gearup-dark border-y border-gearup-red/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-gearup-red mb-2">150+</div>
            <div className="text-gearup-light">Running Guides</div>
          </div>
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-gearup-red mb-2">50+</div>
            <div className="text-gearup-light">Gear Reviews</div>
          </div>
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-gearup-red mb-2">25+</div>
            <div className="text-gearup-light">Training Plans</div>
          </div>
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-gearup-red mb-2">100K+</div>
            <div className="text-gearup-light">Runners Helped</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunningStats;

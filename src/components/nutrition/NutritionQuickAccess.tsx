
const NutritionQuickAccess = () => {
  return (
    <section className="py-16 bg-gearup-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Essential Nutrition Resources</h3>
          <p className="text-xl text-gearup-light">Quick access to our most popular guides</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Weight Management</h4>
            <div className="space-y-2">
              <a href="https://gearuptofit.com/nutrition/healthy-eating-for-weight-loss/" className="block text-gearup-red hover:text-red-300 text-sm hover:underline">
                → Healthy Eating for Weight Loss
              </a>
              <a href="https://gearuptofit.com/nutrition/meal-planning-for-weight-loss/" className="block text-gearup-red hover:text-red-300 text-sm hover:underline">
                → Meal Planning for Weight Loss
              </a>
              <a href="https://gearuptofit.com/nutrition/caloric-restriction/" className="block text-gearup-red hover:text-red-300 text-sm hover:underline">
                → Caloric Restriction Guide
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Budget-Friendly Nutrition</h4>
            <div className="space-y-2">
              <a href="https://gearuptofit.com/nutrition/smart-tips-to-eat-healthy-on-a-budget/" className="block text-gearup-red hover:text-red-300 text-sm hover:underline">
                → Smart Tips to Eat Healthy on a Budget
              </a>
              <a href="https://gearuptofit.com/nutrition/7-whole-grains-to-try-and-how-to-cook-them/" className="block text-gearup-red hover:text-red-300 text-sm hover:underline">
                → 7 Whole Grains to Try
              </a>
              <a href="https://gearuptofit.com/nutrition/low-fat-diet-foods/" className="block text-gearup-red hover:text-red-300 text-sm hover:underline">
                → Low Fat Diet Foods
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Transformation Tips</h4>
            <div className="space-y-2">
              <a href="https://gearuptofit.com/nutrition/12-life-changing-tips-for-healthy-transformation/" className="block text-gearup-red hover:text-red-300 text-sm hover:underline">
                → 12 Life-Changing Tips for Healthy Transformation
              </a>
              <a href="https://gearuptofit.com/nutrition/how-to-control-emotional-eating-and-stop-cravings/" className="block text-gearup-red hover:text-red-300 text-sm hover:underline">
                → Control Emotional Eating
              </a>
              <a href="https://gearuptofit.com/nutrition/how-to-teach-your-kids-to-love-salad/" className="block text-gearup-red hover:text-red-300 text-sm hover:underline">
                → Teach Your Kids to Love Salad
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionQuickAccess;

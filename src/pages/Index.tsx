
import Hero from "@/components/Hero";
import PopularResources from "@/components/PopularResources";
import InteractiveTools from "@/components/InteractiveTools";
import SocialProof from "@/components/SocialProof";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import CategoryHighlights from "@/components/CategoryHighlights";
import FeaturedContent from "@/components/FeaturedContent";
import LiveFeedCarousel from "@/components/LiveFeedCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gearup-dark overflow-x-hidden">
      <Hero />
      <div className="px-2 sm:px-4 lg:px-0">
        <CategoryHighlights />
        <FeaturedContent />
        <LiveFeedCarousel />
        <PopularResources />
        <InteractiveTools />
        <SocialProof />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

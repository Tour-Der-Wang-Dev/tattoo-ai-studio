
import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/homepage/HeroSection"
import { FeaturesGrid } from "@/components/homepage/FeaturesGrid"
import { StatsCounter } from "@/components/homepage/StatsCounter"
import { TestimonialsCarousel } from "@/components/homepage/TestimonialsCarousel"
import { Footer } from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <StatsCounter />
        <TestimonialsCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

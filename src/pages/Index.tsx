import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ValueSection from "@/components/ValueSection";
import UrgencySection from "@/components/UrgencySection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ValueSection />
      <UrgencySection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <img
        src={heroBg}
        alt="Growth and opportunity"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      
      <div className="relative z-10 container px-6 text-center max-w-4xl">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-6">
          Stop guessing. Start growing.
        </p>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8">
          Your competitors
          <br />
          <span className="text-gradient">aren't waiting.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Every day without a system that brings in customers, converts them, and keeps them
          — is a day your business falls behind. We fix that.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="px-10 py-6 text-lg" onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}>
            See What You're Missing
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="heroOutline" size="lg" className="px-10 py-6 text-lg" onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}>
            How It Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

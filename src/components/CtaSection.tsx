import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section id="cta" className="py-24 md:py-32">
      <div className="container px-6 max-w-3xl text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Get a free audit of <span className="text-gradient">what you're leaving on the table.</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
          No pressure. No jargon. We'll show you exactly where you're losing customers — and what to do about it. Takes 15 minutes.
        </p>
        
        <Button variant="hero" size="lg" className="px-12 py-7 text-lg glow-box-strong">
          Book Your Free Audit Now
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        <p className="text-sm text-muted-foreground mt-6">
          No credit card. No commitment. Just clarity.
        </p>
      </div>
    </section>
  );
};

export default CtaSection;

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Clock, Gift } from "lucide-react";

const CtaSection = () => {
  return (
    <section id="cta" className="py-20 md:py-28 section-cream">
      <div className="container px-6 max-w-3xl text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          Ready to grow?
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-5">
          Get your free <span className="text-primary">growth plan.</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
          We'll look at your business, find the gaps, and show you exactly how to get more customers. No confusing jargon. No pressure. Just a clear plan you can actually use.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          {[
            { icon: Gift, text: "100% Free" },
            { icon: Clock, text: "15-minute call" },
            { icon: Phone, text: "Friendly conversation" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
              <item.icon className="w-4 h-4 text-primary" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
        
        <Button variant="hero" size="lg" className="px-12 py-7 text-lg shadow-lg shadow-primary/20">
          Get My Free Growth Plan
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        <p className="text-sm text-muted-foreground mt-5">
          No credit card. No commitment. Just a clear path forward.
        </p>
      </div>
    </section>
  );
};

export default CtaSection;

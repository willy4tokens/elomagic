import { Button } from "@/components/ui/button";
import heroPeople from "@/assets/hero-people.jpg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="container px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block bg-primary/10 text-primary font-display font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
              For local business owners
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-foreground">
              Get more customers.{" "}
              <span className="text-primary">Every week.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
              People search for you every day. They find someone else instead.
              We fix that — fast.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button
                variant="hero"
                size="lg"
                className="px-8 py-6 text-base"
                onClick={() => document.getElementById("simulator")?.scrollIntoView({ behavior: "smooth" })}
              >
                See What You're Losing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                className="px-8 py-6 text-base"
                onClick={() => document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" })}
              >
                How It Works
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-5">
              ✓ First results in 30 days &nbsp;·&nbsp; ✓ No contracts &nbsp;·&nbsp; ✓ Free audit
            </p>
          </div>

          <div className="flex-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-border">
              <img
                src={heroPeople}
                alt="Business owner finally getting the customers they deserve"
                className="w-full h-auto object-cover"
                width={1400}
                height={934}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

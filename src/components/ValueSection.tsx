import dashboardImg from "@/assets/dashboard.jpg";
import growthImg from "@/assets/growth.jpg";
import { Check } from "lucide-react";

const services = [
  {
    label: "Websites That Convert",
    points: ["Built to turn visitors into customers", "Fast, clean, impossible to ignore", "Every button, every word — placed with purpose"],
    image: dashboardImg,
    imageAlt: "High-converting analytics dashboard",
  },
  {
    label: "Traffic & AI-Powered Conversions",
    points: ["Get found by the right people", "AI identifies your best leads instantly", "Turn clicks into calls, meetings, and sales"],
    image: growthImg,
    imageAlt: "Growth trajectory visualization",
  },
];

const ValueSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-6 max-w-6xl">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-4 text-center">
          What we build for you
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-6">
          A complete system. <span className="text-gradient">Not just a website.</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-20 text-lg">
          We connect every step — from the first click to the long-term customer — so nothing falls through the cracks.
        </p>

        <div className="space-y-24">
          {services.map((service, i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">{service.label}</h3>
                <ul className="space-y-4">
                  {service.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-lg text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <div className="rounded-2xl overflow-hidden border border-border glow-box">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow-up & Custom Builds */}
        <div className="mt-24 grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-2xl p-10 hover:border-primary/30 transition-all duration-500">
            <h3 className="font-display text-2xl font-bold mb-4">Long-Term Follow-Up</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Most sales happen after the 5th contact. We build automated follow-up systems that nurture leads for weeks and months — so you close deals while you sleep.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-10 hover:border-primary/30 transition-all duration-500">
            <h3 className="font-display text-2xl font-bold mb-4">Custom Builds</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Need something unique? Portals, dashboards, booking systems, integrations — if it helps you win more business, we build it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;

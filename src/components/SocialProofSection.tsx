import person2 from "@/assets/person2.jpg";
import person3 from "@/assets/person3.jpg";
import businessOwner from "@/assets/business-owner.jpg";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mike T.",
    role: "General Contractor, Los Angeles",
    image: person3,
    quote: "My phone barely rang before Elo. Now I get 3–4 calls a week just from Google. I had to hire another crew.",
    stat: "4x more inbound calls",
  },
  {
    name: "Sandra R.",
    role: "Remodeling Contractor, San Diego",
    image: person2,
    quote: "No more tire-kickers. The leads I get now already know my prices and want to book. Night and day difference.",
    stat: "Qualified leads only",
  },
  {
    name: "Carlos M.",
    role: "Roofing & Construction, Fresno",
    image: businessOwner,
    quote: "I was skeptical. Within 6 weeks I had more work than I could handle. The system runs on its own.",
    stat: "ROI in 6 weeks",
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-20 md:py-28 section-cream">
      <div className="container px-6 max-w-6xl">
        <div className="text-center mb-14">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Real contractors. Real results.
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
            They were stuck too. <span className="text-primary">Here's what changed.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-8 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground text-lg leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </p>
              <div className="bg-primary/8 rounded-xl px-4 py-2 mb-5 inline-block self-start">
                <span className="font-display font-bold text-primary text-sm">{t.stat}</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="w-11 h-11 rounded-full object-cover border-2 border-border"
                />
                <div>
                  <p className="font-display font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-8 md:gap-14 text-center">
          {[
            { value: "200+", label: "businesses helped" },
            { value: "3.2x", label: "average lead increase" },
            { value: "94%", label: "client retention rate" },
          ].map((s, i) => (
            <div key={i}>
              <p className="font-display text-3xl md:text-4xl font-extrabold text-primary">{s.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;

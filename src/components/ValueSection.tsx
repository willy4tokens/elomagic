import { Check } from "lucide-react";

// Contractor reviewing project photos on tablet with homeowner
const teamMeeting = "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=1200&q=80&fit=crop";
// Contractor on the job site, work in progress
const teamWork = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&fit=crop";

const services = [
  {
    label: "A Website That Gets You Calls",
    points: [
      "Shows your past projects, licenses & reviews — everything homeowners need to say yes.",
      "Built to convert visitors into calls and quote requests.",
      "Works perfectly on mobile, where 80% of searches happen.",
    ],
    image: teamMeeting,
    imageAlt: "Contractor website built to convert visitors into calls",
  },
  {
    label: "Rank #1 on Google Maps in Your Area",
    points: [
      "When someone searches 'contractor near me', your business shows up first.",
      "We optimize your Google Business Profile and build local authority.",
      "More calls from homeowners who are ready to hire now.",
    ],
    image: teamWork,
    imageAlt: "Local SEO strategy for contractors in California",
  },
];

const ValueSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-6 max-w-6xl">
        <div className="text-center mb-16">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            What you get
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
            You stop chasing.{" "}
            <span className="text-primary">Customers come to you.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We set it up. It runs while you work.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-10 items-center`}
            >
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-5">{service.label}</h3>
                <ul className="space-y-4">
                  {service.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-lg text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <div className="rounded-2xl overflow-hidden shadow-xl shadow-foreground/5 border border-border">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-2xl p-9 hover:shadow-lg hover:shadow-primary/5 transition-all duration-400">
            <h3 className="font-display text-xl font-bold mb-3">
              Follow-Up on Autopilot
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Most homeowners get 3+ quotes. Our system follows up automatically by SMS and email so you stay top of mind until they're ready to sign.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-9 hover:shadow-lg hover:shadow-primary/5 transition-all duration-400">
            <h3 className="font-display text-xl font-bold mb-3">Never Miss a Lead Again</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our AI answers every missed call and texts back instantly — nights, weekends, while you're on a job. The contractor who replies first gets the job.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;

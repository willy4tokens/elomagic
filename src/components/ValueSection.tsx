import teamMeeting from "@/assets/team-meeting.jpg";
import teamWork from "@/assets/team-work.jpg";
import { Check } from "lucide-react";

const services = [
  {
    label: "A Website That Gets You Calls",
    points: [
      "Works on every phone and screen.",
      "Built to get you calls — not just clicks.",
      "Earns you leads while you sleep.",
    ],
    image: teamMeeting,
    imageAlt: "Team building a high-converting website strategy",
  },
  {
    label: "Show Up First on Google",
    points: [
      "People near you search. They find you first.",
      "More calls from buyers who are ready now.",
      "We track what works and cut what doesn't.",
    ],
    image: teamWork,
    imageAlt: "Team mapping out a local SEO and visibility strategy",
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
              Most leads need 5+ messages before they say yes. Almost no one sends them. We do — automatically — while you focus on the job.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-9 hover:shadow-lg hover:shadow-primary/5 transition-all duration-400">
            <h3 className="font-display text-xl font-bold mb-3">Never Miss a Call Again</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our system answers every call — nights, weekends, while you're on a job. Every lead gets a reply in under 2 minutes. The one who answers first wins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;

import teamMeeting from "@/assets/team-meeting.jpg";
import teamWork from "@/assets/team-work.jpg";
import { Check } from "lucide-react";

const services = [
  {
    label: "A Website That Actually Brings In Business",
    points: [
      "Built so visitors become customers — not just visitors",
      "Looks amazing on every device — phones, tablets, desktops",
      "Every word, every button — placed to make people take action",
    ],
    image: teamMeeting,
    imageAlt: "Team reviewing a website strategy together",
  },
  {
    label: "Get Found Online & Turn Clicks Into Customers",
    points: [
      "Show up where your customers are already looking",
      "Smart AI helps you focus on your best opportunities",
      "More calls, more bookings, more sales — on autopilot",
    ],
    image: teamWork,
    imageAlt: "Team collaborating on growth strategy",
  },
];

const ValueSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-6 max-w-6xl">
        <div className="text-center mb-16">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            What we do for you
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
            Everything you need to grow. <span className="text-primary">Nothing you don't.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We connect every piece — so customers find you, choose you, and stay with you.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}
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
            <h3 className="font-display text-xl font-bold mb-3">We Follow Up So You Don't Have To</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Most sales happen after the 5th conversation. We set up smart follow-ups that keep working — emails, texts, reminders — while you focus on running your business.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-9 hover:shadow-lg hover:shadow-primary/5 transition-all duration-400">
            <h3 className="font-display text-xl font-bold mb-3">Need Something Custom? We Build It.</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Booking systems, customer portals, special tools — if it helps your business run smoother and make more money, we'll make it happen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;

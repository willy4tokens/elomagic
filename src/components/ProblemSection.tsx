import { EyeOff, Timer, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: EyeOff,
    stat: "73%",
    title: "of homeowners hire the first contractor they find online.",
    description:
      "They're not waiting for referrals anymore. If you're not on page one, you don't exist.",
  },
  {
    icon: Timer,
    stat: "$12,400",
    title: "average job value lost every time a lead goes cold.",
    description:
      "You missed one call. They hired someone else. That's a kitchen remodel gone.",
  },
  {
    icon: TrendingUp,
    stat: "Today",
    title: "a homeowner searched 'general contractor near me'. Your competitor answered.",
    description:
      "Not because they're better. Because they showed up and you didn't.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 md:py-28 section-cream">
      <div className="container px-6 max-w-6xl">
        <div className="text-center mb-14">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            What's happening right now
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
            You're losing jobs{" "}
            <span className="text-primary">you don't even know about.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Not because your work is bad. Because homeowners can't find you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-400 group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-display text-4xl font-extrabold text-primary mb-2">{item.stat}</p>
              <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

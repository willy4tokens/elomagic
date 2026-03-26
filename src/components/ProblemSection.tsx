import { EyeOff, Timer, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: EyeOff,
    stat: "96%",
    title: "of visitors leave your website without ever contacting you.",
    description:
      "They found you. You just lost them. No call, no email, no booking — because nothing on your site made them stop and act.",
  },
  {
    icon: Timer,
    stat: "47 hrs",
    title: "is how long most businesses take to respond to a new lead.",
    description:
      "The research is brutal: you have 5 minutes before a lead goes cold. Your competitor who answers in 2 minutes is stealing your customers — right now.",
  },
  {
    icon: TrendingUp,
    stat: "Today",
    title: "someone searched for exactly what you do. They found your competitor.",
    description:
      "Not because your competitor is better. Because they show up and you don't. Visibility isn't vanity — it's revenue.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 md:py-28 section-cream">
      <div className="container px-6 max-w-6xl">
        <div className="text-center mb-14">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Every day you're open, this is happening
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
            You're working hard.{" "}
            <span className="text-primary">The wrong people just can't find you.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            It's not your product. It's not your price. It's the gap between how good you are
            and how visible you are. That gap has a dollar amount.
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

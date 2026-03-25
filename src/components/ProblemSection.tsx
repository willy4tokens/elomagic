import { TrendingDown, Clock, DollarSign } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    stat: "96%",
    title: "of website visitors leave without buying.",
    description: "Most businesses have no system to bring them back. That's money walking out the door — every single day.",
  },
  {
    icon: Clock,
    title: "Your best leads go cold in 5 minutes.",
    stat: "5 min",
    description: "Harvard Business Review found that responding in 5 minutes is 100x more effective than waiting 30. Most businesses wait hours.",
  },
  {
    icon: DollarSign,
    stat: "$0",
    title: "is what a pretty website earns if nobody finds it.",
    description: "Design means nothing without traffic. Traffic means nothing without conversions. You need the full system.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 md:py-32 section-fade">
      <div className="container px-6 max-w-6xl">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-4 text-center">
          The uncomfortable truth
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-6">
          Here's what's really <span className="text-gradient">costing you.</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          It's not that you're doing something wrong. It's that you're missing pieces — and each missing piece leaks revenue.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:glow-box group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-display text-4xl font-bold text-gradient mb-3">{item.stat}</p>
              <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

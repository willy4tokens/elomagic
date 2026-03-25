import { TrendingDown, Clock, DollarSign } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    stat: "96%",
    title: "of people who visit your site leave without doing anything.",
    description: "No call. No email. No purchase. They're gone — and they're not coming back unless you have a plan.",
  },
  {
    icon: Clock,
    stat: "5 min",
    title: "is all you get before a lead goes cold.",
    description: "When someone's interested, the clock starts ticking. Wait too long and they'll go with whoever answers first.",
  },
  {
    icon: DollarSign,
    stat: "$0",
    title: "is what a great website earns if nobody sees it.",
    description: "Looking good means nothing if people can't find you. You need the right people showing up — every day.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 md:py-28 section-cream">
      <div className="container px-6 max-w-6xl">
        <div className="text-center mb-14">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Sound familiar?
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
            Here's what's quietly <span className="text-primary">holding you back.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            You're working hard. But without the right system, you're leaving money on the table every single day.
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

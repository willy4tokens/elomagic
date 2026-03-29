// Kitchen renovation in progress — the cost of a missed job
const officeSpace = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80&fit=crop";

const UrgencySection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="rounded-2xl overflow-hidden shadow-xl shadow-foreground/5 border border-border">
              <img
                src={officeSpace}
                alt="Kitchen renovation project — the type of job you're missing without visibility"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              The cost of waiting
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-6">
              The contractors who go digital first{" "}
              <span className="text-primary">win the whole market.</span>
            </h2>

            <div className="space-y-5 mb-8">
              {[
                {
                  value: "73%",
                  text: "of homeowners hire the first contractor they find. Second place doesn't get a call.",
                },
                {
                  value: "$12,400",
                  text: "average job value lost per cold lead. One missed call is a remodel you'll never get back.",
                },
                {
                  value: "2 min",
                  text: "is how fast our system replies to a new lead. Most contractors take 47 hours. First to reply wins.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="font-display text-xl font-extrabold text-primary whitespace-nowrap">
                    {item.value}
                  </span>
                  <p className="text-muted-foreground text-lg">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              Your market is small.{" "}
              <span className="font-semibold">One contractor will dominate it online.</span> Every week you wait, that contractor is your competition — not you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;

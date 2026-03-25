const UrgencySection = () => {
  return (
    <section className="py-24 md:py-32 section-fade">
      <div className="container px-6 max-w-4xl text-center">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-4">
          The math is simple
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-10">
          Every month you wait costs you <span className="text-gradient">real money.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { value: "30", unit: "days", desc: "of lost leads you'll never get back" },
            { value: "67%", unit: "", desc: "of the buyer's journey happens online before they ever call you" },
            { value: "10x", unit: "", desc: "more expensive to win a new customer than keep one" },
          ].map((stat, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-8">
              <p className="font-display text-5xl font-bold text-gradient mb-1">
                {stat.value}<span className="text-2xl text-muted-foreground">{stat.unit}</span>
              </p>
              <p className="text-muted-foreground">{stat.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Your competitors are investing in systems like these <span className="text-foreground font-semibold">right now</span>. 
          The gap between you and them gets wider every week. Let's close it.
        </p>
      </div>
    </section>
  );
};

export default UrgencySection;

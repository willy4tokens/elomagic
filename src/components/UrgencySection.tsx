import officeSpace from "@/assets/office-space.jpg";

const UrgencySection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="rounded-2xl overflow-hidden shadow-xl shadow-foreground/5 border border-border">
              <img
                src={officeSpace}
                alt="The real cost of staying invisible"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              The math is simple. And it hurts.
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-6">
              What staying invisible is{" "}
              <span className="text-primary">costing you every month.</span>
            </h2>

            <div className="space-y-5 mb-8">
              {[
                {
                  value: "67%",
                  text: "of your potential customers research online before they ever pick up the phone. If you're not visible, you don't exist.",
                },
                {
                  value: "$8,400",
                  text: "is the average additional monthly revenue our clients see in their first 90 days. That's money on the table right now.",
                },
                {
                  value: "2 min",
                  text: "is how fast our system responds to a new lead. The industry average is 47 hours. That gap is where your competitor wins.",
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
              You don't have a business problem.{" "}
              <span className="font-semibold">You have a visibility problem.</span> And every
              week you wait is another week your competitors take work that belongs to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;

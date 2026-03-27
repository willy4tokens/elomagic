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
              The cost of waiting
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-6">
              Every week you wait,{" "}
              <span className="text-primary">you lose real money.</span>
            </h2>

            <div className="space-y-5 mb-8">
              {[
                {
                  value: "67%",
                  text: "of buyers look online before they call. If you're not there, you don't exist.",
                },
                {
                  value: "$8,400",
                  text: "extra per month — that's what our clients earn on average in their first 90 days.",
                },
                {
                  value: "2 min",
                  text: "is how fast we reply to a new lead. Most businesses take 47 hours. First to reply wins.",
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
              It's not your product.{" "}
              <span className="font-semibold">It's that people can't find you.</span> Every week you wait is another week your competitor gets your customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;

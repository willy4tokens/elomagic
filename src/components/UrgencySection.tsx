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
                alt="Modern workspace"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              The simple math
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-6">
              Every week you wait is a week your competitors <span className="text-primary">get ahead.</span>
            </h2>
            
            <div className="space-y-5 mb-8">
              {[
                { value: "67%", text: "of people research online before they ever call a business" },
                { value: "10x", text: "more expensive to find new customers than keep existing ones" },
                { value: "5 min", text: "— that's how fast a hot lead turns cold without follow-up" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="font-display text-xl font-extrabold text-primary whitespace-nowrap">{item.value}</span>
                  <p className="text-muted-foreground text-lg">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              You don't need to figure this out alone. We've done this hundreds of times. 
              <span className="font-semibold"> Let us show you exactly what's possible.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;

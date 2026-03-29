import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, MapPin, MessageSquare, Phone, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const services = [
  {
    icon: Globe,
    title: "Professional Contractor Website",
    description:
      "Built to convert visitors into calls. Mobile-first, fast, and optimized for local search. Showcases your projects, license, and reviews.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile Optimization",
    description:
      "Rank in the Local Pack when homeowners search 'contractor near me' in your city. We handle the setup, optimization, and ongoing management.",
  },
  {
    icon: MessageSquare,
    title: "Automated Lead Follow-Up",
    description:
      "SMS + email sequences that follow up with every lead automatically. Most homeowners get 3+ quotes — we make sure they choose you.",
  },
  {
    icon: Phone,
    title: "AI Call Answering",
    description:
      "Never miss a call again. Our AI answers 24/7 and texts back instantly — nights, weekends, while you're on a job.",
  },
];

const GeneralContractor = () => {
  return (
    <>
      <LocalBusinessSchema
        name="Elo — Digital Marketing for General Contractors"
        city="Los Angeles"
        state="CA"
        url="https://www.elo-magic.com/services/general-contractor"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container px-6 max-w-4xl mx-auto text-center">
          <div className="inline-block bg-primary/10 text-primary font-display font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
            For General Contractors in California
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-[1.1] mb-6">
            Digital Marketing for{" "}
            <span className="text-primary">General Contractors</span> in California
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            We help contractors rank on Google Maps, get more quote requests, and never miss a lead again.
          </p>
          <Button variant="hero" size="lg" className="px-8 py-6 text-base" asChild>
            <Link to="/#cta">
              Get My Free Visibility Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 section-cream">
        <div className="container px-6 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              What we do
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
              Everything you need to{" "}
              <span className="text-primary">dominate local search.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSLB Trust section */}
      <section className="py-20">
        <div className="container px-6 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-5">
                Built for California.{" "}
                <span className="text-primary">Built for trust.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                California homeowners are cautious. They want to see your CSLB license number, proof of insurance, and real project photos before they call.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every website we build prominently displays your license, insurance, years of experience, and past work — the exact trust signals that turn visitors into booked jobs.
              </p>
            </div>
            <div className="flex-1">
              <div className="bg-card border border-border rounded-2xl p-8 space-y-5">
                {[
                  "CSLB license number displayed prominently",
                  "Insurance & bonding verification",
                  "Before & after project gallery",
                  "Google & Yelp review integration",
                  "Years in business & service area",
                  "Free estimate CTA on every page",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-cream">
        <div className="container px-6 max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-5">
            Ready to get more{" "}
            <span className="text-primary">construction jobs?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Free visibility audit. We'll show you exactly what's costing you jobs online — and how to fix it.
          </p>
          <Button variant="hero" size="lg" className="px-8 py-6 text-base" asChild>
            <Link to="/#cta">
              Get My Free Visibility Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No commitment · No contracts · Results in 30 days
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GeneralContractor;

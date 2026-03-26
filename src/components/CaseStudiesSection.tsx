import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const cases = [
  {
    slug: "marcos-plumbing",
    industry: "Plumbing",
    name: "Marco's Plumbing",
    location: "North Hollywood, CA",
    avatar: "M",
    problem: "12 years in business. Zero online presence. Losing every Google search to newer, worse competitors.",
    result: "+23 inbound calls/month",
    revenueGain: "$8,200/mo additional revenue",
    time: "First 60 days",
    package: "Visible",
    quote: "I used to get maybe 2 calls a week from people I didn't already know. Now my phone doesn't stop.",
  },
  {
    slug: "valley-smile-co",
    industry: "Dental",
    name: "Valley Smile Co.",
    location: "Sherman Oaks, CA",
    avatar: "V",
    problem: "1,200 website visitors a month. 11 bookings. A beautiful website that converted nobody.",
    result: "3.1× more booked appointments",
    revenueGain: "$19,500/mo additional revenue",
    time: "First 90 days",
    package: "Pipeline",
    quote: "We had traffic. We just weren't turning any of it into patients. Elo fixed that completely.",
  },
  {
    slug: "apex-roofing",
    industry: "Roofing",
    name: "Apex Roofing",
    location: "Van Nuys, CA",
    avatar: "A",
    problem: "On-site all day. Missed calls went to voicemail. Leads were hiring whoever picked up first.",
    result: "0 missed leads",
    revenueGain: "$14,100/mo additional revenue",
    time: "First 45 days",
    package: "Autopilot",
    quote: "The AI answers, qualifies, and sends me a summary. I show up to close. That's it.",
  },
  {
    slug: "greenway-interiors",
    industry: "Interior Design",
    name: "Greenway Interiors",
    location: "Glendale, CA",
    avatar: "G",
    problem: "All referrals, no system. Some months were great. Others were terrifying.",
    result: "8–12 qualified leads/month on autopilot",
    revenueGain: "$34,000 in new projects — 4 months",
    time: "First 4 months",
    package: "Pipeline",
    quote: "I stopped worrying about where the next client was coming from. That feeling is priceless.",
  },
];

const packageColors: Record<string, string> = {
  Visible: "bg-blue-50 text-blue-700",
  Pipeline: "bg-violet-50 text-violet-700",
  Autopilot: "bg-emerald-50 text-emerald-700",
};

const CaseStudiesSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-6 max-w-6xl">
        <div className="text-center mb-14">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Real transformations
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
            Businesses that were exactly{" "}
            <span className="text-primary">where you are now.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Same problems. Same doubts. Different results — because they stopped waiting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <Link
              key={c.slug}
              to={`/case-studies/${c.slug}`}
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-display font-extrabold text-primary">{c.avatar}</span>
                  </div>
                  <div>
                    <p className="font-display font-bold">{c.name}</p>
                    <p className="text-sm text-muted-foreground">{c.location} · {c.industry}</p>
                  </div>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${packageColors[c.package]}`}>
                  {c.package}
                </span>
              </div>

              <div className="bg-muted/40 rounded-xl p-4 mb-5">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-1">The problem</p>
                <p className="text-sm text-foreground leading-relaxed">{c.problem}</p>
              </div>

              <p className="text-muted-foreground italic text-sm leading-relaxed mb-5 flex-1">
                "{c.quote}"
              </p>

              <div className="border-t border-border pt-4 flex items-end justify-between">
                <div>
                  <p className="font-display text-xl font-extrabold text-primary">{c.result}</p>
                  <p className="text-sm text-muted-foreground">{c.revenueGain} · {c.time}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="heroOutline" size="lg" asChild>
            <Link to="/case-studies">
              Read All Case Studies
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;

import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cases = [
  {
    slug: "marcos-plumbing",
    industry: "Plumbing",
    name: "Marco's Plumbing",
    location: "North Hollywood, CA",
    avatar: "M",
    package: "Visible",
    packagePrice: "$197/mo",
    timeToResults: "60 days",
    problem:
      "Marco had been running his plumbing business for 12 years on pure word of mouth. Great reputation. Zero online presence. His Google Business Profile was unclaimed. His website was built in 2014 and hadn't been touched since. He was losing every local search to newer competitors who — by his own admission — did worse work.",
    gap: "He was invisible. Every day, people in North Hollywood searched 'plumber near me' and found someone else. Marco had no idea how many jobs he was losing because he could never count what he never received.",
    solution:
      "We started with the Visible package: a rebuilt, conversion-focused website and a fully optimized Google Business Profile. Within 2 weeks, Marco's listing was appearing in the local map pack for his core service keywords. Within 30 days, his website was ranking on page 1 for 6 local searches. We added review generation — within 60 days he had 34 new Google reviews averaging 4.9 stars.",
    results: [
      { label: "Inbound calls/month", before: "2–3", after: "26" },
      { label: "Google reviews", before: "7", after: "41" },
      { label: "Website ranking keywords", before: "0", after: "14" },
      { label: "Additional monthly revenue", before: "—", after: "$8,200" },
    ],
    quote:
      "I used to get maybe 2 calls a week from people I didn't already know. Now my phone doesn't stop. I had to bring on a second crew.",
    quoteAuthor: "Marco D., Owner",
  },
  {
    slug: "valley-smile-co",
    industry: "Dental",
    name: "Valley Smile Co.",
    location: "Sherman Oaks, CA",
    avatar: "V",
    package: "Pipeline",
    packagePrice: "$397/mo",
    timeToResults: "90 days",
    problem:
      "Valley Smile had traffic — around 1,200 visitors a month hitting their website. But in an average month, they'd get maybe 11 online bookings. Their website looked professional. The problem was invisible: no urgency, no chatbot, no follow-up, and a contact form that sent inquiries to an email nobody checked until the end of the day.",
    gap: "At 1,200 monthly visitors and an average new-patient value of $850, even getting to a 4% conversion rate would mean 48 new patients instead of 11. That's a $31,000/month gap — being lost silently, every single month.",
    solution:
      "We upgraded them to Pipeline. New website copy focused on patient transformation, not credentials. A lead capture chatbot that engaged visitors within 8 seconds. An AI qualification flow that asked the right questions and booked appointments directly into their calendar — no phone tag. An automated follow-up sequence for anyone who started but didn't finish booking.",
    results: [
      { label: "Monthly bookings from website", before: "11", after: "34" },
      { label: "Website conversion rate", before: "0.9%", after: "2.8%" },
      { label: "Lead response time", before: "18 hours", after: "< 2 min" },
      { label: "Additional monthly revenue", before: "—", after: "$19,500" },
    ],
    quote:
      "We had traffic. We just weren't turning any of it into patients. It felt like we had a full waiting room outside that we kept telling to come back later.",
    quoteAuthor: "Dr. Sarah K., Owner",
  },
  {
    slug: "apex-roofing",
    industry: "Roofing",
    name: "Apex Roofing",
    location: "Van Nuys, CA",
    avatar: "A",
    package: "Autopilot",
    packagePrice: "$597/mo",
    timeToResults: "45 days",
    problem:
      "Apex was doing well — but they were leaving a trail of money behind them. The owner and two crew leads were on rooftops all day. Calls came in and went to voicemail. People who left a voicemail rarely got a callback before the end of the day. In the roofing industry — where a leak creates urgency — whoever answers first wins the job. Apex was systematically losing to faster competitors.",
    gap: "We estimated that 40–50% of inbound inquiries were converting to a callback but only 20% of those booked. The bottleneck was pure speed. Leads were going cold in the time between a missed call and a returned call.",
    solution:
      "Autopilot package. An AI voice agent answers every call in 2 rings, introduces itself as the Apex team, asks the right diagnostic questions, and either books the estimate directly or sends a summary and next steps to the owner. After-hours calls get the same experience. A monthly GBP management routine keeps their listing in the top 3 for 'roofer near me' in three zip codes.",
    results: [
      { label: "Missed calls converted", before: "~20%", after: "94%" },
      { label: "Estimate bookings/month", before: "18", after: "31" },
      { label: "After-hours leads captured", before: "0", after: "8–12/mo" },
      { label: "Additional monthly revenue", before: "—", after: "$14,100" },
    ],
    quote:
      "The AI answers, qualifies the lead, and sends me a summary with the address and what they need. I show up to close. That's all I do now.",
    quoteAuthor: "Tony R., Owner",
  },
  {
    slug: "greenway-interiors",
    industry: "Interior Design",
    name: "Greenway Interiors",
    location: "Glendale, CA",
    avatar: "G",
    package: "Pipeline",
    packagePrice: "$397/mo",
    timeToResults: "4 months",
    problem:
      "Nadia had built a beautiful design business — entirely on referrals. Which meant some months were extraordinary and some were terrifying. She had no control over the pipeline. She'd finish a project, then spend weeks anxious about where the next one was coming from. The feast-or-famine cycle was exhausting her.",
    gap: "The issue wasn't her work — her past clients adored her. The issue was that new clients who didn't know anyone she'd worked with had no way to discover her. She had no SEO presence, no lead capture, and no way to nurture people who found her and weren't quite ready to commit.",
    solution:
      "Pipeline. A new website built around her portfolio with conversion copy that spoke to homeowners considering a remodel. Local SEO targeting 'interior designer Glendale' and surrounding cities. A lead capture form that offered a free design consultation. An automated email nurture sequence for anyone who signed up but didn't book — sending inspiration content, portfolio pieces, and a soft CTA every 10 days.",
    results: [
      { label: "Qualified leads/month", before: "0–2 (referral only)", after: "8–12" },
      { label: "Website organic traffic", before: "~60 visits/mo", after: "~520 visits/mo" },
      { label: "Email list", before: "0", after: "87 warm prospects" },
      { label: "New project revenue (4 months)", before: "—", after: "$34,000" },
    ],
    quote:
      "I stopped lying awake wondering where the next client was coming from. That feeling alone was worth every penny.",
    quoteAuthor: "Nadia V., Founder",
  },
];

// Listing page
export const CaseStudiesListing = () => {
  const packageColors: Record<string, string> = {
    Visible: "bg-blue-50 text-blue-700",
    Pipeline: "bg-violet-50 text-violet-700",
    Autopilot: "bg-emerald-50 text-emerald-700",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Case studies
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
              Real businesses.{" "}
              <span className="text-primary">Real transformations.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every one of these business owners had the same doubts you have right now.
              Read what changed — and why.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {cases.map((c) => (
              <Link
                key={c.slug}
                to={`/case-studies/${c.slug}`}
                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="font-display font-extrabold text-primary">{c.avatar}</span>
                    </div>
                    <div>
                      <p className="font-display font-bold">{c.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {c.location} · {c.industry}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${packageColors[c.package]}`}
                  >
                    {c.package}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {c.problem.substring(0, 140)}...
                </p>
                <div className="border-t border-border pt-4 grid grid-cols-2 gap-3">
                  {c.results.slice(0, 2).map((r) => (
                    <div key={r.label}>
                      <p className="font-display font-extrabold text-lg text-primary">{r.after}</p>
                      <p className="text-xs text-muted-foreground">{r.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary">
                  Read full story{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center bg-card border border-border rounded-2xl p-10">
            <h2 className="font-display text-2xl font-extrabold mb-3">
              Ready to write your own story?
            </h2>
            <p className="text-muted-foreground mb-6">
              Get a free 15-minute growth plan — we'll show you exactly what's possible for your business.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/#cta">
                Get My Free Growth Plan
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Detail page
export const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const c = cases.find((cs) => cs.slug === slug);

  const packageColors: Record<string, string> = {
    Visible: "bg-blue-50 text-blue-700",
    Pipeline: "bg-violet-50 text-violet-700",
    Autopilot: "bg-emerald-50 text-emerald-700",
  };

  if (!c) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-display font-bold mb-4">Case study not found</p>
          <Link to="/case-studies" className="text-primary hover:underline">
            ← Back to all case studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="container max-w-2xl mx-auto">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All case studies
          </Link>

          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="font-display font-extrabold text-xl text-primary">{c.avatar}</span>
              </div>
              <div>
                <h1 className="font-display text-2xl font-extrabold">{c.name}</h1>
                <p className="text-muted-foreground text-sm">
                  {c.location} · {c.industry}
                </p>
              </div>
            </div>
            <span
              className={`text-xs font-semibold px-3 py-1.5 rounded-full ${packageColors[c.package]}`}
            >
              {c.package} — {c.packagePrice}
            </span>
          </div>

          <p className="text-sm text-muted-foreground mb-10">
            Results in: {c.timeToResults}
          </p>

          {/* Results table */}
          <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6 mb-10">
            <p className="font-display text-xs font-bold uppercase tracking-widest text-primary mb-4">
              The results
            </p>
            <div className="space-y-3">
              {c.results.map((r) => (
                <div key={r.label} className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{r.label}</p>
                  <div className="flex items-center gap-3">
                    {r.before !== "—" && (
                      <>
                        <span className="text-sm text-muted-foreground line-through">{r.before}</span>
                        <ArrowRight className="w-3 h-3 text-muted-foreground" />
                      </>
                    )}
                    <span className="font-display font-bold text-primary">{r.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Story */}
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">The problem</h2>
              <p>{c.problem}</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">The gap</h2>
              <p>{c.gap}</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">What we did</h2>
              <p>{c.solution}</p>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="my-10 border-l-4 border-primary pl-6">
            <p className="text-lg text-foreground italic leading-relaxed">"{c.quote}"</p>
            <cite className="block mt-3 text-sm text-muted-foreground not-italic">
              — {c.quoteAuthor}
            </cite>
          </blockquote>

          {/* CTA */}
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <h2 className="font-display text-2xl font-extrabold mb-3">
              Sound familiar?
            </h2>
            <p className="text-muted-foreground mb-6">
              Get a free growth plan — we'll show you exactly what's possible for your business.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/#cta">
                Get My Free Growth Plan
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 text-center px-6">
        <div className="container max-w-3xl mx-auto">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Our story
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
            Built for the ones who <span className="text-primary">bet everything</span> on their dream.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            This is not a story about marketing. It's a story about what happens
            when great people don't get the chance they deserve.
          </p>
        </div>
      </section>

      {/* ACT 1 — The Ordinary World */}
      <section className="py-16 md:py-20 section-cream">
        <div className="container max-w-2xl mx-auto px-6">
          <p className="font-display text-xs font-bold uppercase tracking-widest text-primary/60 mb-6">
            Act I — The world we all know
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-8 leading-tight">
            You didn't start a business to become a marketer.
          </h2>
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              You started it because you were <em>really good at something.</em> Maybe you fix things
              people thought couldn't be fixed. Maybe you build homes that last generations.
              Maybe you make food that makes people close their eyes and forget their problems.
            </p>
            <p>
              You poured years into your craft. Late nights. Early mornings.
              Sacrifices your family noticed even when they didn't say anything.
            </p>
            <p>
              And yet — the phone isn't ringing the way it should.
              You know you're better than the competitor down the street
              with the flashy Instagram and the mediocre work.
              But somehow, <strong className="text-foreground">they're getting the calls. You're not.</strong>
            </p>
            <p>
              It's maddening. And it's more common than you think.
            </p>
          </div>
        </div>
      </section>

      {/* INCITING INCIDENT */}
      <section className="py-16 md:py-20">
        <div className="container max-w-2xl mx-auto px-6">
          <p className="font-display text-xs font-bold uppercase tracking-widest text-primary/60 mb-6">
            The moment everything changed
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-8 leading-tight">
            A business closed. Not because it failed —<br />
            <span className="text-primary">because no one could find it.</span>
          </h2>
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              In 2023, our founder William watched someone he loved close their business.
              Fifteen years of experience. Immaculate work. A reputation built
              one satisfied customer at a time.
            </p>
            <p>
              But their website was invisible on Google. Their phone number online was wrong.
              Their only reviews were buried under a competitor who had three times fewer
              skills but ten times more digital presence.
            </p>
            <p>
              They were the <strong className="text-foreground">best-kept secret in North Hollywood.</strong>
              And secrets don't pay the bills.
            </p>
            <p>
              The business closed. The dream folded quietly.
              And William couldn't stop thinking about it.
            </p>
          </div>
        </div>
      </section>

      {/* ACT 2 — The Journey */}
      <section className="py-16 md:py-20 section-cream">
        <div className="container max-w-2xl mx-auto px-6">
          <p className="font-display text-xs font-bold uppercase tracking-widest text-primary/60 mb-6">
            Act II — The journey
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-8 leading-tight">
            He had the tools. He just never thought to use them<br />
            <span className="text-primary">for the people who needed them most.</span>
          </h2>
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              William had spent years building digital systems for large companies —
              the kind of infrastructure that generates millions in revenue, runs automatically,
              and turns strangers into loyal customers while you sleep.
            </p>
            <p>
              He knew every piece. The SEO. The conversion funnels. The automated follow-up.
              The ads. The data. He had built all of it — for people who already had everything.
            </p>
            <p>
              <strong className="text-foreground">What if he built it for people who had nothing but talent?</strong>
            </p>
            <p>
              He started small. A bakery in Burbank. A therapist in Sherman Oaks.
              A landscaper in Van Nuys who had been in business for twelve years
              and still relied entirely on word of mouth.
            </p>
            <p>
              The results were undeniable. Within weeks, phones rang that had been silent for months.
              Inboxes filled. Calendars booked up. One client called William at 7am just to say:
              <em> "I had to turn someone away today. I've never had to do that before."</em>
            </p>
            <p>
              He was onto something. But something still wasn't right.
            </p>
          </div>
        </div>
      </section>

      {/* THE DARK MOMENT */}
      <section className="py-16 md:py-20">
        <div className="container max-w-2xl mx-auto px-6">
          <p className="font-display text-xs font-bold uppercase tracking-widest text-primary/60 mb-6">
            The real problem
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-8 leading-tight">
            More leads wasn't the answer.<br />
            <span className="text-primary">Freedom was.</span>
          </h2>
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              Even as the results poured in, William noticed something.
              His clients were still stressed. Still spending evenings answering
              emails they didn't know how to answer. Still posting on social media
              because they felt like they had to. Still second-guessing everything.
            </p>
            <p>
              They weren't losing at business. They were losing themselves <em>inside</em> it.
            </p>
            <p>
              The landscaper who loved being in the soil was now trapped behind a laptop.
              The therapist who lit up when helping patients was now drowning in
              follow-up messages she didn't have time for. The baker who made magic with
              her hands was spending three hours a week trying to figure out Google Ads.
            </p>
            <p>
              <strong className="text-foreground">
                That's when William understood: the goal was never just more customers.
                The goal was to give these people their lives back.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* ACT 3 — The New World */}
      <section className="py-16 md:py-24 section-cream">
        <div className="container max-w-2xl mx-auto px-6">
          <p className="font-display text-xs font-bold uppercase tracking-widest text-primary/60 mb-6">
            Act III — Elo is born
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-8 leading-tight">
            We build the system.<br />
            <span className="text-primary">You run your business.</span>
          </h2>
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              Elo was built on a single conviction:
              the best business owners in the world deserve to focus on what makes them great.
            </p>
            <p>
              Everything else — getting found, converting visitors into customers,
              following up with leads, keeping clients coming back — that's our job.
              We build it once. We make it work forever. And then we stay by your side
              as your business grows.
            </p>
            <p>
              No confusing jargon. No 40-slide decks. No "strategies" that go nowhere.
              Just a clear system, real results, and the freedom to do
              <strong className="text-foreground"> what you do best.</strong>
            </p>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 text-center border-t border-border pt-10">
            {[
              { value: "200+", label: "Businesses helped" },
              { value: "3.2x", label: "Average lead increase" },
              { value: "94%", label: "Client retention rate" },
            ].map((s, i) => (
              <div key={i}>
                <p className="font-display text-3xl font-extrabold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder card */}
      <section className="py-16 md:py-20">
        <div className="container max-w-2xl mx-auto px-6">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="font-display text-2xl font-extrabold text-primary">W</span>
              </div>
              <div>
                <p className="font-display font-bold text-lg">William</p>
                <p className="text-primary text-sm font-medium mb-4">Founder, Elo</p>
                <p className="text-muted-foreground leading-relaxed">
                  "I built Elo because I believe the best business in any neighborhood
                  shouldn't lose to the loudest. Talent deserves to be found.
                  That's what we're here for."
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                  <a href="mailto:william@elo-magic.com" className="hover:text-primary transition-colors">
                    william@elo-magic.com
                  </a>
                  <span className="hidden sm:inline text-border">·</span>
                  <a href="tel:+18185748339" className="hover:text-primary transition-colors">
                    +1 818 574 8339
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 section-cream text-center px-6">
        <div className="container max-w-xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-5">
            Ready to focus on what you <span className="text-primary">love?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get a free 15-minute growth plan. No pressure, no jargon — just clarity.
          </p>
          <Button
            variant="hero"
            size="lg"
            className="px-10 py-6 text-base"
            onClick={() => {
              window.location.href = "/#cta";
            }}
          >
            Get My Free Growth Plan
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card. No commitment.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

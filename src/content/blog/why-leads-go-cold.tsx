import BlogLayout from "@/components/BlogLayout";
import { getBlogPost, blogPosts } from "@/lib/blog";

const post = getBlogPost("why-leads-go-cold")!;
const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

const Post = () => (
  <BlogLayout post={post} relatedPosts={related}>
    <p className="text-xl text-foreground font-medium leading-relaxed">
      Someone filled out your form on a Tuesday afternoon. You saw it Wednesday morning, called back,
      got voicemail. Left a message. Never heard from them again. Sound familiar? This happens to
      almost every service business — and it's almost entirely preventable.
    </p>

    <p>
      Lead response time is one of the most researched topics in sales, and the data is brutal.
      A lead contacted within 5 minutes of submitting a form is 21 times more likely to convert
      than one contacted after 30 minutes. Wait 24 hours — which most businesses do — and your
      odds of ever speaking to that person drop below 10%.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      Why leads go cold so fast
    </h2>
    <p>
      Here's what's happening on their end. They're in problem-solving mode. They need a plumber,
      a dentist, a roofing estimate. They searched, found a few options, and submitted a form —
      or called and left a voicemail — to 2 or 3 businesses simultaneously. Whoever responds
      first gets the conversation. The others get ignored.
    </p>
    <p>
      It's not personal. It's not because they prefer your competitor. It's because they're
      busy, they solved their problem the moment someone called back, and now they've moved on.
      Your callback 18 hours later isn't a follow-up. It's an interruption.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      The follow-up problem goes deeper than speed
    </h2>
    <p>
      Speed is the first problem. But even businesses that respond quickly often lose leads
      through poor follow-up strategy. Research consistently shows that 80% of sales require
      5 or more follow-up contacts. Yet 44% of salespeople give up after one attempt.
    </p>
    <p>
      Think about your own process. Someone calls, you talk, they say "let me think about it."
      Do you follow up 3 days later? A week later? With a specific reason to reach back out?
      Or do you move on, assuming they'll call when they're ready? They won't. Not because
      they're not interested — but because they got busy, forgot, or found someone who stayed
      in front of them.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      The three points where leads go cold
    </h2>

    <p className="font-semibold text-foreground">Point 1: The first 5 minutes</p>
    <p>
      This is the most critical window. A lead submitted online or a call that went to voicemail
      needs a response — ideally automated — within minutes. An automatic text that says "Hey,
      saw your inquiry — we'll call you within the hour, or click here to book directly" keeps
      the lead warm while you're on a job site.
    </p>

    <p className="font-semibold text-foreground mt-6">Point 2: After the first conversation</p>
    <p>
      Most leads don't buy on the first call. They need to compare, check their budget, talk to
      a spouse. If you don't have a follow-up plan — a specific reason to call back in 48 hours,
      a value-add email, a gentle nudge — you're leaving the decision entirely to them. And
      indecision defaults to inaction.
    </p>

    <p className="font-semibold text-foreground mt-6">Point 3: The "not yet" leads</p>
    <p>
      Some people enquire but aren't ready to buy for weeks or months. A homeowner getting
      roofing quotes in January might not pull the trigger until spring. If you don't have a
      system to stay in touch over time — without being annoying — that lead will simply forget
      you exist by the time they're ready.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      What a system looks like vs. what most businesses do
    </h2>
    <p>
      Most businesses: lead comes in → owner calls back when they remember → one follow-up
      attempt → lead forgotten.
    </p>
    <p>
      A system: lead comes in → automated text within 2 minutes → owner calls within the hour →
      if no answer, automated email with booking link → if no booking, follow-up text in 24 hours
      → if still no response, nurture email sequence over 30 days → owner gets a task reminder
      after 7 days.
    </p>
    <p>
      The businesses running the second process don't have better salespeople. They just never
      let a lead disappear without a fight. And across hundreds of potential customers, that
      difference compounds into tens of thousands of dollars.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      The honest takeaway
    </h2>
    <p>
      If your leads are going cold, it's not because your price is too high or your service
      isn't good enough. It's because there's a gap between when interest peaks and when you
      respond — and your competitor is filling that gap. The fix isn't working harder. It's
      building a system that works whether you're in the middle of a job or asleep at 11pm.
    </p>

    <div className="bg-muted/50 rounded-xl p-6 mt-8">
      <p className="font-display font-bold text-foreground mb-2">Is this your problem?</p>
      <ul className="space-y-2 text-sm">
        {[
          "Do you call back leads within 5 minutes of receiving them?",
          "Do you have an automatic text or email that goes out the moment a form is submitted?",
          "Do you follow up at least 3–5 times before giving up on a lead?",
          "Do you have a nurture sequence for leads who said 'not yet'?",
          "Could your business run the follow-up process if you were on a job for 8 hours straight?",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-primary mt-0.5">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </BlogLayout>
);

export default Post;

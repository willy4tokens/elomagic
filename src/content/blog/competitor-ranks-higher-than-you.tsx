import BlogLayout from "@/components/BlogLayout";
import { getBlogPost, blogPosts } from "@/lib/blog";

const post = getBlogPost("competitor-ranks-higher-than-you")!;
const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

const Post = () => (
  <BlogLayout post={post} relatedPosts={related}>
    <p className="text-xl text-foreground font-medium leading-relaxed">
      You know you do better work. Your customers tell you. Your reviews — when people actually
      leave them — are excellent. And yet when someone in your city searches for what you do, your
      competitor shows up first. The one with the generic logo and the slightly-too-long response
      time. How does that happen?
    </p>

    <p>
      It's genuinely infuriating. But the answer, once you understand it, is also clarifying:
      Google doesn't rank the best business. It ranks the most trustworthy signal. And those
      are different things.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      Google can't see inside your business
    </h2>
    <p>
      Google has no way to evaluate the quality of your work. It can't watch you in action,
      compare your results to a competitor's, or judge your expertise directly. Instead, it
      uses proxy signals — things it can measure — to infer trustworthiness and relevance.
    </p>
    <p>
      Those signals include: review volume and recency, website authority and load speed,
      Google Business Profile completeness, consistency of your name and address across the
      web, how often people click on your listing vs. scroll past it, and how recently your
      GBP was updated. Notice what's not on that list: how good your work actually is.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      Why your competitor is winning on signals
    </h2>
    <p>
      The competitor ranking above you has likely done one or more of the following, even
      if they didn't do it intentionally:
    </p>
    <p>
      <strong className="text-foreground">They have more recent reviews.</strong> Not necessarily
      more total reviews — more recent ones. Google weights reviews from the last 90 days
      significantly higher than older ones. A business with 50 reviews from 2022 will often
      rank below one with 20 reviews from the last month.
    </p>
    <p>
      <strong className="text-foreground">Their GBP is more active.</strong> Google rewards
      listings that post updates, add new photos, and respond to reviews regularly. An active
      listing signals a real, engaged business. A dormant one — even a legitimate business —
      looks like it might have closed.
    </p>
    <p>
      <strong className="text-foreground">Their website is faster.</strong> Page speed is a
      confirmed Google ranking factor. A website that loads in 1.2 seconds will outrank one
      that loads in 4.5 seconds, everything else being equal.
    </p>
    <p>
      <strong className="text-foreground">They have more local citations.</strong> A citation
      is any mention of your business name, address, and phone number on another website —
      Yelp, Angi, HomeAdvisor, local directories, chamber of commerce sites. More consistent
      citations = more trust signals = better ranking.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      The click-through rate problem
    </h2>
    <p>
      Here's one most people don't know: Google watches how often people click on your listing
      when it appears. If your listing shows up but people consistently scroll past it to click
      on someone else, Google interprets that as a signal that you're less relevant — and moves
      you down.
    </p>
    <p>
      Your listing's click-through rate is influenced by your review rating, your photo quality,
      your response to reviews (if you respond, it shows up in the listing), and whether your
      listing description contains the keywords the person searched. A 4.2-star listing with
      professional photos gets clicked more than a 4.8-star listing with no photos.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      The gap is closable — faster than you think
    </h2>
    <p>
      Here's the good news: most of your local competitors aren't doing any of this
      intentionally. They got where they are through time and passive accumulation of signals.
      Which means a focused 60–90 day effort — a fully optimized GBP, consistent review
      generation, a faster website, and active local citation building — can close most of
      the gap in under 3 months.
    </p>
    <p>
      We've seen businesses that had never ranked for a single local keyword reach the Google
      Map Pack within 8 weeks, simply by doing what their competitors had never bothered to do.
      The barrier is not skill or budget. It's consistency.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      What you should actually do this week
    </h2>
    <p>
      Start with the two highest-leverage actions: review generation and GBP optimization.
      Send a message to your last 10 satisfied customers asking them to leave a Google review —
      most will say yes, most just hadn't thought to do it. Then go into your GBP, add 5 new
      photos, complete every blank field, and post a short update. Do this consistently every
      week for 60 days. The ranking change will be visible.
    </p>
    <p>
      The competitor beating you is not better than you. They're just more visible than you.
      Visibility is the only variable you actually need to change.
    </p>

    <div className="bg-muted/50 rounded-xl p-6 mt-8">
      <p className="font-display font-bold text-foreground mb-2">The competitor audit checklist</p>
      <ul className="space-y-2 text-sm">
        {[
          "How many Google reviews does your top competitor have — and how recent are they?",
          "When did they last post on their Google Business Profile?",
          "How does their website speed compare to yours on mobile?",
          "Are they listed on Yelp, Angi, HomeAdvisor, and local directories consistently?",
          "Do they respond to their Google reviews? Do you?",
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

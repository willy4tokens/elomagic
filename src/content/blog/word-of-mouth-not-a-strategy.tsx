import BlogLayout from "@/components/BlogLayout";
import { getBlogPost, blogPosts } from "@/lib/blog";

const post = getBlogPost("word-of-mouth-not-a-strategy")!;
const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

const Post = () => (
  <BlogLayout post={post} relatedPosts={related}>
    <p className="text-xl text-foreground font-medium leading-relaxed">
      Your best clients came from referrals. Your favorite projects came from referrals. You've
      built something genuinely good and people talk about it. Referrals are wonderful.
      They are also completely outside your control — which means they are not a strategy. They
      are luck, systematized just enough to feel reliable.
    </p>

    <p>
      This is a hard thing to hear when referrals have worked. But the tell is almost always
      the same: some months are great. Other months are terrifying. You have no idea which
      kind of month is coming next. That's not a business — that's a prayer.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      Why referrals feel like a strategy but aren't
    </h2>
    <p>
      Referrals feel reliable because they've worked in the past. They've created a cognitive
      shortcut: "I don't need to do marketing because my clients refer me." But what you're
      actually saying is: "My growth depends entirely on whether my existing clients happen to
      talk to the right people at the right moment."
    </p>
    <p>
      You have no control over when that happens. You have no control over how often it
      happens. You have no control over the quality of the referral or whether the referred
      person is actually a good fit. And critically — if you lose a major client, go through
      a slow season, or your existing base simply gets older and less active, your pipeline
      evaporates. With no warning and no backup.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      The feast-or-famine cycle is not random
    </h2>
    <p>
      Every service business owner on referrals experiences the same pattern: a busy period
      where you're too overwhelmed to think about marketing, followed by a slow period where
      you panic. The busy period created the slow period — because when you were busy, you
      stopped nurturing relationships, following up with past clients, or staying visible.
      When the current work ended, there was nothing in the pipeline.
    </p>
    <p>
      This isn't a talent problem or a quality problem. It's a system problem. Without a
      system that works even when you're too busy to run it, you will always oscillate
      between too much and not enough.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      What a real pipeline looks like
    </h2>
    <p>
      A real pipeline has three sources of leads working simultaneously, each independently
      of your attention:
    </p>
    <p>
      <strong className="text-foreground">Organic search:</strong> People who have never heard
      of you, searching for what you do right now. They find you because you rank on Google.
      This is the highest-intent traffic that exists — someone actively looking to buy —
      and most referral-dependent businesses have none of it.
    </p>
    <p>
      <strong className="text-foreground">Automated follow-up of past clients:</strong> Your
      existing clients are your warmest audience. An automated sequence that checks in every
      6 months, sends relevant value, and makes it easy to re-book or refer — without you
      doing anything — captures revenue that currently evaporates.
    </p>
    <p>
      <strong className="text-foreground">Lead nurturing:</strong> People who expressed interest
      but didn't buy yet. Without a nurture sequence, these people vanish. With one, they
      convert weeks or months later, when they're finally ready — and they convert to you,
      because you were the one who stayed in touch.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      Referrals + a system = an unfair advantage
    </h2>
    <p>
      Here's the thing: we're not saying referrals are bad. We're saying referrals alone
      are not enough. The businesses growing fastest are the ones that have both: a
      great reputation that generates referrals, and a system that captures, converts,
      and retains customers without depending on anyone's memory.
    </p>
    <p>
      When you have that combination, you stop lying awake wondering where the next client
      is coming from. Your referrals become a bonus on top of a predictable baseline —
      instead of the only thing standing between you and a scary month.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      The question to ask yourself
    </h2>
    <p>
      If your three biggest referral sources stopped referring you tomorrow — a client moves,
      a partner retires, a relationship cools — how long before your business is in trouble?
      If the answer is "a few months," you don't have a resilient business. You have a
      relationship that's doing the work a system should be doing.
    </p>
    <p>
      Building that system doesn't have to be complicated. It starts with making sure
      strangers can find you, that they convert when they do, and that the ones who aren't
      ready yet don't disappear. Everything else — the referrals, the word of mouth, the
      five-star reviews — stacks on top of a foundation that actually holds.
    </p>

    <div className="bg-muted/50 rounded-xl p-6 mt-8">
      <p className="font-display font-bold text-foreground mb-2">The resilience test</p>
      <ul className="space-y-2 text-sm">
        {[
          "If your top 3 referral sources went silent tomorrow, how long before revenue drops significantly?",
          "Do you have any source of leads that works when you're too busy to think about it?",
          "Do new potential clients find you when they search your service category on Google?",
          "Do you have a system that re-engages past clients automatically?",
          "Do you nurture leads who said 'not yet' until they're ready?",
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

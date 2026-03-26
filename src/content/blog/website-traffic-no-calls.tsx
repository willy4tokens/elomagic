import BlogLayout from "@/components/BlogLayout";
import { getBlogPost, blogPosts } from "@/lib/blog";

const post = getBlogPost("website-traffic-no-calls")!;
const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

const Post = () => (
  <BlogLayout post={post} relatedPosts={related}>
    <p className="text-xl text-foreground font-medium leading-relaxed">
      Your Google Analytics shows visitors. Maybe a few hundred a month, maybe more. But your phone
      is quiet. Your inbox has nothing in it. You're watching people walk into your store and walk
      straight back out — except you can't see it happening. That's what low conversion looks like.
    </p>

    <p>
      This is a different problem than not being found. You're being found. Something is broken
      between "they arrived" and "they called." Here's what it almost always comes down to.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      1. Your headline doesn't speak to a problem they have right now
    </h2>
    <p>
      Most business websites open with something like "Welcome to [Business Name]" or "Quality
      Service You Can Trust." These phrases are invisible. They say nothing about what the visitor
      is experiencing and why your business is the answer.
    </p>
    <p>
      A visitor who just searched "emergency plumber North Hollywood" is stressed. They have water
      somewhere it shouldn't be. They don't want to read about your 20 years of experience. They
      want to know you can come right now. Your headline needs to meet them where they are: "Pipe
      burst? We're there in 60 minutes or less — guaranteed."
    </p>
    <p>
      The rule: your headline should immediately answer the question the visitor arrived with.
      If it doesn't, most people leave within 8 seconds.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      2. There's no clear next step
    </h2>
    <p>
      Look at your website right now. What is the single most obvious thing a visitor should do?
      If the answer requires thought — or if there are four different buttons competing for
      attention — you have a conversion problem.
    </p>
    <p>
      Every page should have one primary call to action. One. Not "Call Us," "Get a Quote,"
      "Schedule a Consultation," and "Learn More" all fighting for the same eyeball. Pick the
      action that matters most to you and make it impossible to miss. Everything else is secondary.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      3. Visitors don't trust you yet
    </h2>
    <p>
      Someone who finds your website from Google knows nothing about you. They're asking
      themselves: is this real? Are they good? Will I regret this? Your website has about
      10 seconds to answer those questions.
    </p>
    <p>
      Trust signals that work: Google review count and average rating (displayed prominently),
      before/after photos or project photos, specific client names or testimonials (even first
      name + last initial), license numbers or certifications, and a real phone number visible
      at the top of every page. If any of these are missing, a meaningful percentage of your
      visitors will leave to find someone they feel safer about.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      4. Your site is slow or broken on mobile
    </h2>
    <p>
      Over 70% of local business searches happen on a phone. If your website takes more than
      3 seconds to load on mobile, you lose roughly half your visitors before they see a
      single word. If text is too small to read without pinching, or if buttons are too close
      together to tap accurately, visitors leave — not because they don't want your service,
      but because the friction is too high.
    </p>
    <p>
      You can check your site speed right now at Google's PageSpeed Insights. If your mobile
      score is below 70, it's actively costing you customers.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      5. You're asking for too much, too soon
    </h2>
    <p>
      Some visitors are ready to book today. Many are in research mode — comparing options,
      not yet ready to commit. If your only option is "fill out this form to get a quote," you
      lose the second group entirely.
    </p>
    <p>
      The fix: offer a lower-commitment entry point. A free consultation, a downloadable
      guide, a price calculator, a chatbot that answers questions before asking for contact
      info. Capture the research-phase visitor now and follow up when they're ready. This
      single change — adding a lower-commitment path — typically increases total conversions
      by 30–50%.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      The real math of a conversion problem
    </h2>
    <p>
      If 500 people visit your website this month and 1% convert, you get 5 leads. If you
      fix the issues above and get to 3% conversion — which is achievable and often
      conservative — you get 15 leads from the exact same traffic. No more ad spend. No new
      SEO. Just a website that actually does its job.
    </p>
    <p>
      Most businesses treat their website like a brochure: something that exists, looks
      decent, and sits there. The ones growing fastest treat it like a salesperson — and
      hold it accountable for results.
    </p>

    <div className="bg-muted/50 rounded-xl p-6 mt-8">
      <p className="font-display font-bold text-foreground mb-2">Quick self-audit</p>
      <ul className="space-y-2 text-sm">
        {[
          "Does your homepage headline directly address the problem your customer arrived with?",
          "Is there one obvious, dominant call to action on every page?",
          "Do you show reviews, ratings, or client results above the fold?",
          "Does your site load in under 3 seconds on a phone? (Check PageSpeed Insights)",
          "Do you offer a lower-commitment option for visitors who aren't ready to buy today?",
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

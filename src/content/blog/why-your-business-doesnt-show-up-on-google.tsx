import BlogLayout from "@/components/BlogLayout";
import { getBlogPost, blogPosts } from "@/lib/blog";

const post = getBlogPost("why-your-business-doesnt-show-up-on-google")!;
const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

const Post = () => (
  <BlogLayout post={post} relatedPosts={related}>
    <p className="text-xl text-foreground font-medium leading-relaxed">
      You typed your own business name into Google. It's not there. Or it shows up buried on page 3,
      under competitors you've never even heard of. You've verified your Google Business Profile.
      You have a website. So what's going on?
    </p>

    <p>
      This is one of the most common — and most expensive — problems small business owners face.
      And the frustrating part is that it's almost never one thing. It's a combination of small
      signals that Google uses to decide who deserves to be seen. Here are the real reasons, in order
      of how often we see them.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      1. Your Google Business Profile is incomplete or inconsistent
    </h2>
    <p>
      Google's local ranking algorithm weighs something called NAP consistency — your Name, Address,
      and Phone number. If your business is listed as "Marco's Plumbing LLC" on your website but
      "Marcos Plumbing" on Google, or if your phone number on Yelp differs from the one on Google,
      these inconsistencies send a signal of low trustworthiness. Google doesn't reward businesses
      it's not sure about.
    </p>
    <p>
      Beyond consistency, completeness matters. A GBP listing with hours, services, photos, a
      description, and regular posts ranks dramatically better than one with just a name and address.
      Most businesses set it up once and never touch it again.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      2. You don't have enough reviews — or the right ones
    </h2>
    <p>
      Reviews are one of Google's strongest local ranking signals. Not just the quantity, but the
      recency and the keywords inside them. A business with 8 reviews from 2019 will almost always
      rank below a competitor with 40 reviews from the last 6 months, even if the older business
      has a higher average rating.
    </p>
    <p>
      Most businesses leave reviews entirely to chance. They do great work, hope a client mentions
      it online, and wonder why their competitor with mediocre service is ranked higher. The answer
      is almost always: that competitor has a system for asking.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      3. Your website has no local SEO signals
    </h2>
    <p>
      Google connects your GBP listing to your website. If your website doesn't mention your city,
      your service area, or use the kind of language your customers type when they search, Google
      can't confidently show you for local queries. "Best plumber in North Hollywood" is a phrase
      people actually search. If it doesn't appear anywhere on your site, Google assumes you don't
      serve that area.
    </p>
    <p>
      This is also where page speed matters. A website that loads in 5 seconds on mobile will rank
      below one that loads in 1.5 seconds, everything else being equal.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      4. You're in a competitive category and haven't built authority
    </h2>
    <p>
      Some industries — plumbing, roofing, dentistry, personal injury law — are intensely
      competitive online. In these categories, the top 3 results in Google Maps (the "Map Pack")
      often go to businesses that have been consistently active online for years. They have
      backlinks from local directories, active GBP listings, and dozens of recent reviews.
    </p>
    <p>
      The good news: most of your local competitors are also doing none of this intentionally.
      They're just older. Consistent effort over 60–90 days can close that gap faster than
      most business owners expect.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      5. You're appearing — just not where you think
    </h2>
    <p>
      Google personalizes results based on location. If you search for your business from your
      office (which is near your listed address), you'll likely see yourself rank higher than
      a customer searching from across town. This creates a false sense of security.
    </p>
    <p>
      The real test: use a private/incognito browser window, or ask a friend in a different
      neighborhood to search for your service category without typing your name. If you don't
      appear in the top 5 results, most of your potential customers can't find you.
    </p>

    <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
      What this is actually costing you
    </h2>
    <p>
      Let's make it concrete. If 100 people search for your service category this month in
      your area, and you're not in the top 3 results, you're seeing roughly 5–10 of those
      clicks. The top 3 results split about 75% of all clicks. If your average customer is
      worth $600, and you're missing 40 potential customers a month — that's $24,000 in
      revenue going to someone else. Every month.
    </p>
    <p>
      The businesses ranked above you aren't always better. They're just more visible. And
      visibility is something you can fix.
    </p>

    <div className="bg-muted/50 rounded-xl p-6 mt-8">
      <p className="font-display font-bold text-foreground mb-2">The short checklist</p>
      <ul className="space-y-2 text-sm">
        {[
          "Is your NAP identical across your website, GBP, Yelp, and every directory?",
          "Do you have at least 20 Google reviews, with several from the last 3 months?",
          "Does your website mention your city and service area naturally in the copy?",
          "Is your GBP listing fully completed — hours, services, photos, description?",
          "Does your website load in under 2 seconds on mobile?",
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

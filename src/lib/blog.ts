export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readTime: number;
  problem: string;
  searchQuery: string; // the exact search this post targets
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-your-business-doesnt-show-up-on-google",
    title: "Why Your Business Doesn't Show Up on Google (And How to Fix It)",
    description:
      "You've verified your Google Business Profile. You have a website. So why can't anyone find you? Here are the real reasons — and what to do about each one.",
    publishedAt: "2026-03-26",
    readTime: 7,
    problem: "Not being found online",
    searchQuery: "why isn't my business showing up on Google",
  },
  {
    slug: "website-traffic-no-calls",
    title: "Your Website Gets Visitors. So Why Isn't Your Phone Ringing?",
    description:
      "Traffic without calls is a conversion problem, not a traffic problem. Here's exactly why visitors leave without contacting you — and how to fix each one.",
    publishedAt: "2026-03-26",
    readTime: 6,
    problem: "Website not converting",
    searchQuery: "website traffic but no calls or sales",
  },
  {
    slug: "why-leads-go-cold",
    title: "Why Your Leads Go Cold — And How to Stop Losing Them",
    description:
      "Someone filled out your form or called and left a voicemail. Then nothing. The lead went cold. Here's why it happens and the system that prevents it.",
    publishedAt: "2026-03-26",
    readTime: 6,
    problem: "Leads going cold",
    searchQuery: "why do leads stop responding",
  },
  {
    slug: "competitor-ranks-higher-than-you",
    title: "Your Competitor Ranks Higher Than You. And You're Better. Here's Why.",
    description:
      "It's infuriating: you do better work, charge fair prices, and treat customers right — but the competitor down the street is showing up first everywhere. Here's what they're doing that you're not.",
    publishedAt: "2026-03-26",
    readTime: 7,
    problem: "Competitors winning despite worse quality",
    searchQuery: "why are my competitors ranking higher than me",
  },
  {
    slug: "word-of-mouth-not-a-strategy",
    title: "Word of Mouth Is Great. It's Not a Business Strategy.",
    description:
      "Referrals are wonderful — until they dry up. If your entire pipeline depends on people talking about you, you don't have a business. You have a wish. Here's how to build something predictable.",
    publishedAt: "2026-03-26",
    readTime: 5,
    problem: "Word of mouth not scaling",
    searchQuery: "how to get more customers beyond word of mouth",
  },
];

export const getBlogPost = (slug: string) =>
  blogPosts.find((p) => p.slug === slug) ?? null;

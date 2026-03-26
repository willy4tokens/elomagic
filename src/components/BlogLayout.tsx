import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { BlogPost } from "@/lib/blog";

interface Props {
  post: BlogPost;
  children: React.ReactNode;
  relatedPosts?: BlogPost[];
}

const BlogLayout = ({ post, children, relatedPosts = [] }: Props) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="container max-w-2xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All articles
          </Link>

          {/* Problem tag */}
          <div className="inline-block bg-primary/10 text-primary font-display font-semibold text-xs px-3 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            {post.problem}
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{post.description}</p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </span>
            <span className="bg-muted text-muted-foreground text-xs px-2 py-0.5 rounded-full font-medium">
              Elo Editorial
            </span>
          </div>

          {/* Article body */}
          <div className="prose-custom space-y-6 text-muted-foreground leading-relaxed">
            {children}
          </div>

          {/* CTA box */}
          <div className="mt-14 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <p className="font-display text-xs font-bold uppercase tracking-widest text-primary mb-3">
              See what this means for your business
            </p>
            <h2 className="font-display text-2xl font-extrabold mb-3">
              Find out what you're leaving on the table.
            </h2>
            <p className="text-muted-foreground mb-6">
              Put your numbers into our free simulator — see exactly how much fixing this problem is worth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/#simulator">
                  Run the Simulator
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/#cta">Get a Free Audit</Link>
              </Button>
            </div>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-14">
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-5">
                Related problems
              </p>
              <div className="space-y-3">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    to={`/blog/${rp.slug}`}
                    className="flex items-start justify-between gap-4 bg-card border border-border rounded-xl p-4 hover:border-primary/30 hover:shadow-sm transition-all group"
                  >
                    <div>
                      <p className="text-xs text-primary font-semibold mb-1">{rp.problem}</p>
                      <p className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                        {rp.title}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogLayout;

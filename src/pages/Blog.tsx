import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              The Elo Blog
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
              Real answers to the questions{" "}
              <span className="text-primary">every business owner is asking.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              No jargon. No generic advice. Just honest answers to the problems keeping you from growing.
            </p>
          </div>

          <div className="space-y-4">
            {blogPosts.map((post, i) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-card border border-border rounded-2xl p-6 hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                      {post.problem}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime} min
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {post.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-card border border-border rounded-2xl p-10 text-center">
            <h2 className="font-display text-2xl font-extrabold mb-3">
              Don't just read about it.
            </h2>
            <p className="text-muted-foreground mb-6">
              Get a free growth plan and find out exactly what's keeping your business from growing.
            </p>
            <Link
              to="/#cta"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              Get My Free Growth Plan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;

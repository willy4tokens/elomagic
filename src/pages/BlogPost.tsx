import { useParams, Navigate } from "react-router-dom";
import { getBlogPost, blogPosts } from "@/lib/blog";
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const postComponents: Record<string, React.LazyExoticComponent<React.FC>> = {
  "why-your-business-doesnt-show-up-on-google": lazy(
    () => import("@/content/blog/why-your-business-doesnt-show-up-on-google")
  ),
  "website-traffic-no-calls": lazy(
    () => import("@/content/blog/website-traffic-no-calls")
  ),
  "why-leads-go-cold": lazy(
    () => import("@/content/blog/why-leads-go-cold")
  ),
  "competitor-ranks-higher-than-you": lazy(
    () => import("@/content/blog/competitor-ranks-higher-than-you")
  ),
  "word-of-mouth-not-a-strategy": lazy(
    () => import("@/content/blog/word-of-mouth-not-a-strategy")
  ),
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !getBlogPost(slug)) {
    return <Navigate to="/blog" replace />;
  }

  const PostComponent = postComponents[slug];

  if (!PostComponent) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background">
          <Navbar />
          <div className="pt-32 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          </div>
          <Footer />
        </div>
      }
    >
      <PostComponent />
    </Suspense>
  );
};

export default BlogPost;

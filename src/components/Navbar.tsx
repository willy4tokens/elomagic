import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleCTA = () => {
    if (isHome) {
      document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#cta";
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16 px-6">
        <Link to="/" className="font-display text-2xl font-extrabold text-primary">
          Elo
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to="/about"
            className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/case-studies"
            className="hidden md:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Case Studies
          </Link>
          <Button variant="hero" size="sm" onClick={handleCTA}>
            Get Your Free Growth Plan
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

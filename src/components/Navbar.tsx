import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16 px-6">
        <span className="font-display text-2xl font-extrabold text-primary">Elo</span>
        <Button variant="hero" size="sm" onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}>
          Get Your Free Growth Plan
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

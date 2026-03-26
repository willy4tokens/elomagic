import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-card">
      <div className="container px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display text-2xl font-extrabold text-primary">
              Elo
            </Link>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs leading-relaxed">
              Helping business owners get more customers and focus on what they do best.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <p className="font-display text-sm font-semibold mb-3">Company</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/about" className="hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-display text-sm font-semibold mb-3">Contact</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:william@elo-magic.com" className="hover:text-foreground transition-colors">
                    william@elo-magic.com
                  </a>
                </li>
                <li>
                  <a href="tel:+18185748339" className="hover:text-foreground transition-colors">
                    +1 818 574 8339
                  </a>
                </li>
                <li>North Hollywood, CA</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Elo. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            North Hollywood, California, USA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Listens for React Router location changes and scrolls to the
 * hash element if one is present. Add this once inside <BrowserRouter>.
 */
const HashScroller = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const id = hash.slice(1);
    // Small delay so the page has rendered before we try to find the element
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

export default HashScroller;

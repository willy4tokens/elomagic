import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import SimulatorPage from "./pages/Simulator.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import { CaseStudiesListing, CaseStudyDetail } from "./pages/CaseStudies.tsx";
import CasaVerde from "./pages/CasaVerde.tsx";
import NotFound from "./pages/NotFound.tsx";
import HashScroller from "./components/HashScroller.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <HashScroller />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/simulator" element={<SimulatorPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/case-studies" element={<CaseStudiesListing />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/casa-verde" element={<CasaVerde />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

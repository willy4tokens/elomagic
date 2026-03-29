import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

interface LocationPageProps {
  city: string;
  nearbyCities: string[];
}

const services = (city: string) => [
  `Kitchen remodeling in ${city}`,
  `Bathroom remodeling in ${city}`,
  `Home additions & ADUs in ${city}`,
  `Roofing & roof repair in ${city}`,
  `Flooring installation in ${city}`,
  `Interior & exterior painting in ${city}`,
  `Landscaping & hardscape in ${city}`,
  `Commercial construction in ${city}`,
];

const LocationPage = ({ city, nearbyCities }: LocationPageProps) => {
  return (
    <>
      <LocalBusinessSchema
        name={`General Contractor in ${city}, CA`}
        city={city}
        state="CA"
        url={`https://www.elo-magic.com/${city.toLowerCase().replace(/\s+/g, "-")}-general-contractor`}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container px-6 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-display font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
            <MapPin className="w-3.5 h-3.5" />
            {city}, California
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-[1.1] mb-6">
            General Contractor in {city}, CA —{" "}
            <span className="text-primary">More Jobs. Less Guesswork.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Homeowners in {city} search for contractors online every day. We help you show up first, answer fast, and win the job.
          </p>
          <Button variant="hero" size="lg" className="px-8 py-6 text-base" asChild>
            <Link to="/#cta">
              Get My Free Visibility Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            ✓ Free audit · ✓ No contracts · ✓ Results in 30 days
          </p>
        </div>
      </section>

      {/* Services in city */}
      <section className="py-20 section-cream">
        <div className="container px-6 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
              Contractor services in{" "}
              <span className="text-primary">{city}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              We help contractors rank for every service they offer — in {city} and the surrounding area.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {services(city).map((s) => (
              <div key={s} className="bg-card border border-border rounded-xl p-5 text-sm text-muted-foreground hover:border-primary/40 transition-colors">
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serving area */}
      <section className="py-20">
        <div className="container px-6 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-1">
              <h2 className="font-display text-3xl font-extrabold mb-5">
                Serving {city}{" "}
                <span className="text-primary">and surrounding areas</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We work with contractors across the greater {city} area. If you serve nearby cities, we make sure you rank there too.
              </p>
              <div className="flex flex-wrap gap-2">
                {nearbyCities.map((c) => (
                  <span key={c} className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1 bg-card border border-border rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold mb-5">Why contractors choose Elo</h3>
              <div className="space-y-4">
                {[
                  "Rank on Google Maps in your city",
                  "Website built to get you calls",
                  "AI answers every missed call",
                  "Automated follow-up by SMS & email",
                  "CSLB license & trust signals on every page",
                  "Free visibility audit to start",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-cream">
        <div className="container px-6 max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-5">
            Ready to get more jobs{" "}
            <span className="text-primary">in {city}?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We'll audit your online presence for free and show you exactly what's costing you jobs.
          </p>
          <Button variant="hero" size="lg" className="px-8 py-6 text-base" asChild>
            <Link to="/#cta">
              Get My Free Visibility Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

// Pre-defined city pages
export const LosAngelesPage = () => (
  <LocationPage
    city="Los Angeles"
    nearbyCities={["Burbank", "Glendale", "Pasadena", "Santa Monica", "Culver City", "Long Beach", "Torrance", "El Monte"]}
  />
);

export const SanDiegoPage = () => (
  <LocationPage
    city="San Diego"
    nearbyCities={["Chula Vista", "El Cajon", "Escondido", "Oceanside", "Santee", "La Mesa", "National City", "Poway"]}
  />
);

export const FresnoPage = () => (
  <LocationPage
    city="Fresno"
    nearbyCities={["Clovis", "Madera", "Visalia", "Tulare", "Selma", "Sanger", "Reedley", "Hanford"]}
  />
);

export const SacramentoPage = () => (
  <LocationPage
    city="Sacramento"
    nearbyCities={["Elk Grove", "Roseville", "Folsom", "Citrus Heights", "Rancho Cordova", "Davis", "Woodland", "West Sacramento"]}
  />
);

export const SanJosePage = () => (
  <LocationPage
    city="San Jose"
    nearbyCities={["Santa Clara", "Sunnyvale", "Milpitas", "Campbell", "Los Gatos", "Morgan Hill", "Gilroy", "Cupertino"]}
  />
);

export default LocationPage;

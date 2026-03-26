import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, TrendingUp, DollarSign, Zap, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const PACKAGES = {
  visible: {
    name: "Visible",
    tagline: "Get Found",
    setupCost: 799,
    monthlyCost: 197,
    boost: 0.45,
    icon: TrendingUp,
    description: "Website + Google profile. Show up where customers are searching.",
    features: [
      "Conversion-focused website",
      "Google Business Profile setup",
      "Maintenance & hosting included",
    ],
  },
  pipeline: {
    name: "Pipeline",
    tagline: "Capture Every Lead",
    setupCost: 1499,
    monthlyCost: 397,
    boost: 0.9,
    icon: DollarSign,
    description: "Everything in Visible + AI that qualifies and books leads automatically.",
    features: [
      "Everything in Visible",
      "Lead capture chatbot",
      "AI lead qualification & booking",
      "Monthly performance report",
    ],
  },
  autopilot: {
    name: "Autopilot",
    tagline: "Never Miss a Lead",
    setupCost: 1999,
    monthlyCost: 597,
    boost: 1.65,
    icon: Zap,
    description: "The full system. AI answers your phone, manages your profile, closes for you.",
    features: [
      "Everything in Pipeline",
      "AI voice agent (24/7 call answering)",
      "Monthly GBP management",
      "Monthly optimizations included",
    ],
  },
} as const;

type PackageKey = keyof typeof PACKAGES;

const INDUSTRIES = [
  "Plumbing / HVAC",
  "Dental / Healthcare",
  "Landscaping",
  "Real Estate",
  "Restaurant / Food",
  "Gym / Fitness",
  "Salon / Spa",
  "Legal Services",
  "Home Remodeling",
  "Interior Design",
  "Retail",
  "Other",
];

const fmt = (n: number) =>
  n >= 1000
    ? "$" + Math.round(n / 100) * 100 >= 10000
      ? "$" + (Math.round(n / 1000) * 1000).toLocaleString()
      : "$" + Math.round(n).toLocaleString()
    : "$" + Math.round(n).toLocaleString();

const GrowthSimulator = () => {
  const [industry, setIndustry] = useState("");
  const [avgValue, setAvgValue] = useState("");
  const [currentCustomers, setCurrentCustomers] = useState("");
  const [selected, setSelected] = useState<PackageKey>("pipeline");

  const avg = parseFloat(avgValue) || 0;
  const current = parseFloat(currentCustomers) || 0;
  const pkg = PACKAGES[selected];

  const currentRevenue = avg * current;
  const additionalCustomers = Math.round(current * pkg.boost);
  const newCustomers = current + additionalCustomers;
  const additionalRevenue = additionalCustomers * avg;
  const newRevenue = currentRevenue + additionalRevenue;
  const annualGain = additionalRevenue * 12;
  const roi = pkg.monthlyCost > 0 ? Math.round((additionalRevenue / pkg.monthlyCost) * 10) / 10 : 0;
  const paybackWeeks =
    additionalRevenue > 0 ? Math.round((pkg.setupCost / additionalRevenue) * 4.3) : null;

  const hasResults = avg > 0 && current > 0;

  return (
    <section id="simulator" className="py-20 md:py-28 section-cream">
      <div className="container px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Growth calculator
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
            See exactly what Elo is worth{" "}
            <span className="text-primary">to your business.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Put in your numbers. Pick a package. See the gap you're leaving on the table — every single month.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
          {/* Inputs */}
          <div className="p-8 border-b border-border">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-1.5">
                <Label>Your industry</Label>
                <Select value={industry} onValueChange={setIndustry}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {INDUSTRIES.map((ind) => (
                      <SelectItem key={ind} value={ind}>
                        {ind}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="avg-value">Average job / transaction value ($)</Label>
                <Input
                  id="avg-value"
                  type="number"
                  min="0"
                  placeholder="e.g. 800"
                  value={avgValue}
                  onChange={(e) => setAvgValue(e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="customers">New customers per month (now)</Label>
                <Input
                  id="customers"
                  type="number"
                  min="0"
                  placeholder="e.g. 10"
                  value={currentCustomers}
                  onChange={(e) => setCurrentCustomers(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Package selector */}
          <div className="p-8 border-b border-border">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-5">
              Choose your package
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {(Object.keys(PACKAGES) as PackageKey[]).map((key) => {
                const p = PACKAGES[key];
                const Icon = p.icon;
                const isSelected = selected === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelected(key)}
                    className={cn(
                      "text-left rounded-xl border-2 p-5 transition-all duration-200 hover:border-primary/50",
                      isSelected
                        ? "border-primary bg-primary/5 shadow-sm"
                        : "border-border bg-background"
                    )}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={cn(
                          "w-8 h-8 rounded-lg flex items-center justify-center",
                          isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        )}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      {isSelected && (
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                          Selected
                        </span>
                      )}
                    </div>
                    <p className="font-display font-extrabold text-lg">{p.name}</p>
                    <p className="text-xs text-primary font-semibold mb-2">{p.tagline}</p>
                    <p className="text-sm text-muted-foreground mb-3">{p.description}</p>
                    <p className="font-display font-bold text-foreground">
                      ${p.monthlyCost}
                      <span className="text-muted-foreground font-normal text-sm">/mo</span>
                    </p>
                    <p className="text-xs text-muted-foreground">+ ${p.setupCost} setup</p>
                    <ul className="mt-3 space-y-1.5">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                          <Check className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results */}
          <div className="p-8">
            {!hasResults ? (
              <div className="text-center py-8 text-muted-foreground">
                <p className="text-lg font-display font-semibold mb-1">Enter your numbers above</p>
                <p className="text-sm">We'll show you exactly what you're leaving on the table.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Your projected results with {pkg.name}
                </p>

                {/* Before / After */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/40 rounded-xl p-5">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-3">
                      Right now
                    </p>
                    <p className="font-display text-3xl font-extrabold text-foreground">
                      {fmt(currentRevenue)}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">/month</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {current} new customers × {fmt(avg)} avg value
                    </p>
                  </div>
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                    <p className="text-xs text-primary uppercase tracking-wide font-semibold mb-3">
                      With Elo {pkg.name}
                    </p>
                    <p className="font-display text-3xl font-extrabold text-primary">
                      {fmt(newRevenue)}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">/month</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {newCustomers} new customers × {fmt(avg)} avg value
                    </p>
                  </div>
                </div>

                {/* Key metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    {
                      label: "Extra customers/mo",
                      value: `+${additionalCustomers}`,
                      highlight: false,
                    },
                    {
                      label: "Extra revenue/mo",
                      value: fmt(additionalRevenue),
                      highlight: true,
                    },
                    {
                      label: "Extra revenue/year",
                      value: fmt(annualGain),
                      highlight: true,
                    },
                    {
                      label: "Return on investment",
                      value: `${roi}×`,
                      highlight: false,
                    },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className={cn(
                        "rounded-xl p-4 text-center",
                        m.highlight ? "bg-primary/10" : "bg-muted/40"
                      )}
                    >
                      <p
                        className={cn(
                          "font-display text-2xl font-extrabold",
                          m.highlight ? "text-primary" : "text-foreground"
                        )}
                      >
                        {m.value}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Payback + CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div>
                    {paybackWeeks !== null && paybackWeeks > 0 && (
                      <p className="text-muted-foreground text-sm">
                        Setup cost paid back in approximately{" "}
                        <span className="font-semibold text-foreground">
                          {paybackWeeks} {paybackWeeks === 1 ? "week" : "weeks"}
                        </span>
                        .
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">
                      * Projections based on average client results. Individual outcomes vary.
                    </p>
                  </div>
                  <Button variant="hero" size="lg" className="shrink-0 px-8" asChild>
                    <Link to="/#cta">
                      Get My Free Growth Plan
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSimulator;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Loader2, CheckCircle2, AlertCircle, Gift, Clock, Phone } from "lucide-react";

const WEBHOOK_URL = "https://hook.eu2.make.com/k5jnogmi3rxsk2bruv6ivzppkh3svd8v";

const INDUSTRIES = [
  "Retail",
  "E-commerce",
  "Healthcare",
  "Real Estate",
  "Financial Services",
  "Technology",
  "Hospitality & Tourism",
  "Construction & Trades",
  "Professional Services",
  "Education",
  "Food & Beverage",
  "Marketing & Advertising",
  "Manufacturing",
  "Non-profit",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

const CTAForm = () => {
  const [form, setForm] = useState({
    first_name: "",
    name: "",
    company: "",
    email: "",
    phone_number: "",
    industry: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="cta" className="py-20 md:py-28 section-cream">
      <div className="container px-6 max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Ready to grow?
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-5">
            Get your free <span className="text-primary">growth plan.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            We'll look at your business, find the gaps, and show you exactly how to get more customers. No confusing jargon. No pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
            {[
              { icon: Gift, text: "100% Free" },
              { icon: Clock, text: "15-minute call" },
              { icon: Phone, text: "Friendly conversation" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                <item.icon className="w-4 h-4 text-primary" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Success state */}
        {status === "success" ? (
          <div className="bg-card rounded-2xl border border-border p-10 text-center shadow-sm">
            <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold mb-2">You're all set!</h3>
            <p className="text-muted-foreground">
              Thanks for reaching out. We'll review your details and be in touch shortly with your personalised growth plan.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 shadow-sm space-y-5">
            {/* Error banner */}
            {status === "error" && (
              <div className="flex items-center gap-3 rounded-lg bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive">
                <AlertCircle className="w-4 h-4 shrink-0" />
                Something went wrong. Please try again or contact us directly.
              </div>
            )}

            {/* Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="first_name">First name <span className="text-destructive">*</span></Label>
                <Input
                  id="first_name"
                  name="first_name"
                  placeholder="Jessica"
                  value={form.first_name}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="name">Last name <span className="text-destructive">*</span></Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Rivera"
                  value={form.name}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                />
              </div>
            </div>

            {/* Company */}
            <div className="space-y-1.5">
              <Label htmlFor="company">Company name</Label>
              <Input
                id="company"
                name="company"
                placeholder="Acme Ltd."
                value={form.company}
                onChange={handleChange}
                disabled={status === "loading"}
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jessica@acme.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone_number">Phone number</Label>
                <Input
                  id="phone_number"
                  name="phone_number"
                  type="tel"
                  placeholder="+1 (818) 555-0192"
                  value={form.phone_number}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />
              </div>
            </div>

            {/* Industry */}
            <div className="space-y-1.5">
              <Label htmlFor="industry">Industry</Label>
              <Select
                value={form.industry}
                onValueChange={(val) => setForm((prev) => ({ ...prev, industry: val }))}
                disabled={status === "loading"}
              >
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Select your industry" />
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

            {/* Message */}
            <div className="space-y-1.5">
              <Label htmlFor="message">Tell us about your business</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="What's your biggest challenge right now? What are your growth goals?"
                rows={4}
                value={form.message}
                onChange={handleChange}
                disabled={status === "loading"}
                className="resize-none"
              />
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              disabled={status === "loading"}
              className="w-full py-6 text-base"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Get My Free Growth Plan
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              No credit card. No commitment. Just a clear path forward.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default CTAForm;

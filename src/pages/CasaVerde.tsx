import { useState, useEffect } from "react";

/* ─────────────────────────────────────────
   FONT LOADER
───────────────────────────────────────── */
const useCasaVerdeFonts = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,800;1,9..144,700&family=Outfit:wght@400;500;600;700;800&display=swap";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);
};

const DISPLAY = "'Fraunces', serif";
const BODY = "'Outfit', sans-serif";
const GREEN = "#166534";
const GREEN_DARK = "#14532d";
const GREEN_MID = "#15803d";
const ORANGE = "#EA580C";
const ORANGE_DARK = "#C2410C";
const CREAM = "#fdf6ee";

/* ─────────────────────────────────────────
   NAVBAR
───────────────────────────────────────── */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      style={{ fontFamily: BODY, backgroundColor: GREEN }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ fontFamily: DISPLAY, color: "white" }}
          className="text-2xl font-extrabold tracking-tight"
        >
          Casa Verde
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Menu", id: "menu" },
            { label: "Our Story", id: "about" },
            { label: "Reviews", id: "reviews" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("cta")}
            style={{ backgroundColor: ORANGE }}
            className="text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Reserve a Table
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white text-xl font-bold"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div
          style={{ backgroundColor: GREEN_DARK, fontFamily: BODY }}
          className="md:hidden border-t border-white/10 px-6 py-5 flex flex-col gap-4"
        >
          {[
            { label: "Menu", id: "menu" },
            { label: "Our Story", id: "about" },
            { label: "Reviews", id: "reviews" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm font-medium text-white/80 text-left"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("cta")}
            style={{ backgroundColor: ORANGE }}
            className="text-white text-sm font-semibold px-5 py-3 rounded-full w-full"
          >
            Reserve a Table
          </button>
        </div>
      )}
    </nav>
  );
};

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
const HeroSection = () => {
  const scrollToCTA = () => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  const scrollToMenu = () => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      style={{ backgroundColor: GREEN_DARK, fontFamily: BODY }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-30 pointer-events-none"
        style={{ backgroundColor: GREEN_MID }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-20 pointer-events-none"
        style={{ backgroundColor: GREEN }}
      />
      <div
        className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full opacity-5 pointer-events-none"
        style={{ backgroundColor: ORANGE }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Copy */}
          <div>
            <div
              className="inline-flex items-center gap-2 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-8 border border-white/20"
              style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              🌿 Family-Owned · San Jose, CA · Est. 2008
            </div>

            <h1
              style={{ fontFamily: DISPLAY, lineHeight: 1.1 }}
              className="text-5xl md:text-6xl font-extrabold text-white mb-6"
            >
              Real Mexican Food That Tastes Like{" "}
              <span style={{ color: ORANGE }}>Home.</span>
            </h1>

            <p className="text-xl text-white/80 max-w-lg mb-8 leading-relaxed">
              Handmade tortillas, slow-cooked meats, and bold flavors passed down through generations.
              Come taste what San Jose locals have been raving about for 16 years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-5">
              <button
                onClick={scrollToCTA}
                style={{ backgroundColor: ORANGE }}
                className="flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full text-base transition-all hover:opacity-90 hover:scale-105 shadow-lg"
              >
                Reserve Your Table Tonight →
              </button>
              <button
                onClick={scrollToMenu}
                className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
              >
                See Our Menu
              </button>
            </div>

            <p className="text-sm text-white/50">
              ✓ No reservation fee &nbsp;·&nbsp; ✓ Walk-ins always welcome &nbsp;·&nbsp; ✓ Groups of any size
            </p>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div
              className="rounded-3xl border border-white/10 p-6 shadow-2xl"
              style={{ backgroundColor: GREEN }}
            >
              <div className="grid grid-cols-2 gap-3 mb-3">
                {[
                  { emoji: "🌮", title: "Handmade Tacos", sub: "Corn tortillas made fresh daily" },
                  { emoji: "🥩", title: "Slow-Cooked Meats", sub: "8-hour birria de res" },
                  { emoji: "🍹", title: "Fresh Margaritas", sub: "Real lime, no sour mix" },
                  { emoji: "🌶️", title: "House-Made Salsas", sub: "Roasted fresh every morning" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl p-4 text-center"
                    style={{ backgroundColor: GREEN_DARK }}
                  >
                    <div className="text-4xl mb-2">{item.emoji}</div>
                    <p className="text-white text-sm font-semibold leading-tight">{item.title}</p>
                    <p className="text-white/50 text-xs mt-1">{item.sub}</p>
                  </div>
                ))}
              </div>

              <div
                className="rounded-2xl p-4 text-center"
                style={{ backgroundColor: ORANGE }}
              >
                <div
                  className="text-2xl font-extrabold text-white"
                  style={{ fontFamily: DISPLAY }}
                >
                  4.9 ⭐
                </div>
                <p className="text-white/90 text-sm font-semibold">Average Google Rating</p>
                <p className="text-white/70 text-xs mt-0.5">Based on 847 reviews</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────
   PROBLEM
───────────────────────────────────────── */
const ProblemSection = () => (
  <section
    id="about"
    style={{ backgroundColor: CREAM, fontFamily: BODY }}
    className="py-20 md:py-28"
  >
    <div className="max-w-6xl mx-auto px-6">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p
          className="text-sm font-semibold uppercase tracking-widest mb-3"
          style={{ color: ORANGE }}
        >
          Sound familiar?
        </p>
        <h2
          style={{ fontFamily: DISPLAY, lineHeight: 1.1, color: GREEN_DARK }}
          className="text-4xl md:text-5xl font-extrabold mb-5"
        >
          You're tired of settling for less.
        </h2>
        <p className="text-lg text-neutral-600 leading-relaxed">
          San Jose has plenty of Mexican restaurants. But how many actually feel like Mexico?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        {[
          {
            emoji: "😞",
            title: "Chain restaurants that microwave your burrito",
            body: "You've been burned by that sad, soggy burrito from the drive-through. You deserve freshly pressed tortillas and meat that's been marinating since yesterday.",
          },
          {
            emoji: "🫙",
            title: "Salsa that came out of a jar",
            body: "If the salsa tastes like it came from aisle 7, it probably did. Our salsas are fire-roasted every single morning. You'll taste the difference in the first chip.",
          },
          {
            emoji: "❌",
            title: "\"Mexican food\" with no soul",
            body: "There's a difference between a place that serves Mexican food and a place that loves it. Every dish here was born in someone's grandmother's kitchen.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border p-6 shadow-sm"
            style={{ backgroundColor: "white", borderColor: "#e5e7eb" }}
          >
            <div className="text-4xl mb-4">{item.emoji}</div>
            <h3
              style={{ fontFamily: DISPLAY, color: GREEN_DARK }}
              className="text-lg font-bold mb-2 leading-snug"
            >
              {item.title}
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>

      <div
        className="rounded-3xl p-8 md:p-10 text-center"
        style={{ backgroundColor: GREEN_DARK }}
      >
        <p
          style={{ fontFamily: DISPLAY, color: "white", lineHeight: 1.2 }}
          className="text-2xl md:text-3xl font-bold max-w-2xl mx-auto"
        >
          "You came here because you want the real thing.
          <span style={{ color: ORANGE }}> At Casa Verde, that's all we serve."</span>
        </p>
        <p className="text-white/60 mt-4 text-sm">— The Ramirez Family, Founders</p>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────
   VALUE / MENU
───────────────────────────────────────── */
const ValueSection = () => (
  <section
    id="menu"
    style={{ backgroundColor: "white", fontFamily: BODY }}
    className="py-20 md:py-28"
  >
    <div className="max-w-6xl mx-auto px-6">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p
          className="text-sm font-semibold uppercase tracking-widest mb-3"
          style={{ color: ORANGE }}
        >
          What we're known for
        </p>
        <h2
          style={{ fontFamily: DISPLAY, lineHeight: 1.1, color: GREEN_DARK }}
          className="text-4xl md:text-5xl font-extrabold mb-5"
        >
          Every dish tells a story.
        </h2>
        <p className="text-lg text-neutral-600 leading-relaxed">
          Our menu is built around recipes that survived the journey from small-town Mexico to your table in San Jose — and taste every bit as good.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            emoji: "🌮",
            tag: "Our #1 Bestseller",
            title: "Street Tacos",
            price: "$14",
            body: "Three handmade corn tortillas loaded with your choice of carne asada, al pastor, or carnitas. Topped with white onion, cilantro, and our signature house salsa verde. Order two plates. You'll thank yourself.",
            tagColor: ORANGE,
          },
          {
            emoji: "🫕",
            tag: "Weekend Favorite",
            title: "Birria de Res",
            price: "$18",
            body: "Tender beef slow-cooked for 8 hours in a rich consommé of dried chiles, guajillo, and spices. Served with handmade corn tortillas for dipping and a bowl of consommé on the side. Friday and Saturday only.",
            tagColor: GREEN,
          },
          {
            emoji: "🫔",
            tag: "Chef's Recommendation",
            title: "Enchiladas Rojas",
            price: "$16",
            body: "Corn tortillas rolled around slow-braised pulled chicken, then smothered in our house-made ancho-guajillo sauce and finished with a drizzle of crema and crumbled queso fresco. Served with arroz and refried beans.",
            tagColor: GREEN,
          },
          {
            emoji: "🍹",
            tag: "Happy Hour 3–6pm",
            title: "Margaritas Artesanales",
            price: "$12",
            body: "Fresh-squeezed lime juice, 100% agave tequila, and a salted rim — that's it. No sour mix, no shortcuts. Choose from Classic, Mango Habanero, or Cucumber Jalapeño. Made to order, every time.",
            tagColor: ORANGE,
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border shadow-sm overflow-hidden"
            style={{ borderColor: "#e5e7eb" }}
          >
            <div
              className="px-6 py-4 flex items-center justify-between"
              style={{ backgroundColor: "#f9f5f0" }}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{item.emoji}</span>
                <div>
                  <span
                    className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full text-white mb-1"
                    style={{ backgroundColor: item.tagColor }}
                  >
                    {item.tag}
                  </span>
                  <h3
                    style={{ fontFamily: DISPLAY, color: GREEN_DARK }}
                    className="text-xl font-bold leading-tight"
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
              <span
                className="text-2xl font-extrabold"
                style={{ fontFamily: DISPLAY, color: GREEN }}
              >
                {item.price}
              </span>
            </div>
            <div className="px-6 py-5">
              <p className="text-neutral-600 text-sm leading-relaxed">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
          style={{ backgroundColor: GREEN }}
          className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full text-base hover:opacity-90 transition-opacity"
        >
          Reserve Your Table to Try These →
        </button>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────
   SOCIAL PROOF
───────────────────────────────────────── */
const SocialProofSection = () => (
  <section
    id="reviews"
    style={{ backgroundColor: CREAM, fontFamily: BODY }}
    className="py-20 md:py-28"
  >
    <div className="max-w-6xl mx-auto px-6">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p
          className="text-sm font-semibold uppercase tracking-widest mb-3"
          style={{ color: ORANGE }}
        >
          What our guests say
        </p>
        <h2
          style={{ fontFamily: DISPLAY, lineHeight: 1.1, color: GREEN_DARK }}
          className="text-4xl md:text-5xl font-extrabold mb-5"
        >
          Don't take our word for it.
        </h2>
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl">⭐⭐⭐⭐⭐</span>
          <span className="text-neutral-700 font-semibold">4.9 stars · 847 reviews on Google</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            quote:
              "The best tacos I've had outside of Mexico City. The carne asada is perfectly seasoned and the tortillas are pressed right in front of you. My whole family drives from Fremont just to eat here.",
            name: "Maria G.",
            location: "San Jose, CA",
            result: "Regular since 2019",
          },
          {
            quote:
              "We've been coming here every Friday night for two years. The birria ramen is absolutely unreal and the service feels like family. They actually remember our names. You can't fake that.",
            name: "Carlos & Sofia M.",
            location: "Milpitas, CA",
            result: "100+ visits and counting",
          },
          {
            quote:
              "My family drove 45 minutes for my dad's birthday. He grew up in Oaxaca and said the enchiladas tasted like his mom's cooking. That's the highest compliment in our house. We'll be back next month.",
            name: "Jennifer L.",
            location: "Santa Cruz, CA",
            result: "Now a monthly tradition",
          },
        ].map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border p-6 shadow-sm"
            style={{ backgroundColor: "white", borderColor: "#e5e7eb" }}
          >
            <div className="text-[#F59E0B] text-lg mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-neutral-700 text-sm leading-relaxed mb-6 italic">
              "{item.quote}"
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p
                  className="font-bold text-sm"
                  style={{ color: GREEN_DARK }}
                >
                  {item.name}
                </p>
                <p className="text-neutral-500 text-xs">{item.location}</p>
              </div>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                style={{ backgroundColor: GREEN }}
              >
                {item.result}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────
   URGENCY
───────────────────────────────────────── */
const UrgencySection = () => (
  <section
    style={{ backgroundColor: GREEN, fontFamily: BODY }}
    className="py-16 md:py-20"
  >
    <div className="max-w-3xl mx-auto px-6 text-center">
      <div className="text-5xl mb-5">🗓️</div>
      <h2
        style={{ fontFamily: DISPLAY, lineHeight: 1.1, color: "white" }}
        className="text-3xl md:text-4xl font-extrabold mb-4"
      >
        Weekend tables fill up fast.
      </h2>
      <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
        Our dining room seats just 48 guests. Friday and Saturday nights typically book out by Wednesday evening. If you're thinking about this weekend — reserve now.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
        {[
          "📞 (408) 555-0174",
          "📍 1247 Lincoln Ave, San Jose",
          "🕐 Open Fri–Sat until 10pm",
        ].map((item) => (
          <span
            key={item}
            className="text-white/90 text-sm font-medium px-4 py-2 rounded-full border border-white/20"
          >
            {item}
          </span>
        ))}
      </div>
      <button
        onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
        style={{ backgroundColor: ORANGE }}
        className="inline-flex items-center gap-2 text-white font-semibold px-10 py-4 rounded-full text-base hover:opacity-90 transition-opacity shadow-lg"
      >
        Reserve My Table Now →
      </button>
    </div>
  </section>
);

/* ─────────────────────────────────────────
   CTA / RESERVATION FORM
───────────────────────────────────────── */
type FormState = {
  name: string;
  email: string;
  phone: string;
  date: string;
  party_size: string;
  notes: string;
};

type Status = "idle" | "success";

const CTASection = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    date: "",
    party_size: "",
    notes: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mockup only — no webhook
    setStatus("success");
  };

  return (
    <section
      id="cta"
      style={{ backgroundColor: CREAM, fontFamily: BODY }}
      className="py-20 md:py-28"
    >
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: ORANGE }}
          >
            Join us for dinner
          </p>
          <h2
            style={{ fontFamily: DISPLAY, lineHeight: 1.1, color: GREEN_DARK }}
            className="text-4xl md:text-5xl font-extrabold mb-5"
          >
            Reserve your table. Taste the difference.
          </h2>
          <p className="text-lg text-neutral-600 max-w-lg mx-auto leading-relaxed">
            Fill out the form below and we'll confirm your reservation within 1 hour. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-5">
            {[
              { icon: "✓", text: "No credit card" },
              { icon: "✓", text: "Free cancellation" },
              { icon: "✓", text: "Confirmed in 1 hour" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-neutral-600 text-sm">
                <span style={{ color: GREEN }} className="font-bold">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {status === "success" ? (
          <div
            className="rounded-2xl border p-10 text-center shadow-sm"
            style={{ backgroundColor: "white", borderColor: "#e5e7eb" }}
          >
            <div className="text-6xl mb-4">🎉</div>
            <h3
              style={{ fontFamily: DISPLAY, color: GREEN_DARK }}
              className="text-2xl font-bold mb-2"
            >
              You're on the list!
            </h3>
            <p className="text-neutral-600">
              We received your request and will confirm your table within 1 hour. See you soon —{" "}
              <em>¡Buen provecho!</em>
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border p-8 shadow-sm space-y-5"
            style={{ backgroundColor: "white", borderColor: "#e5e7eb" }}
          >
            {/* Name */}
            <div className="space-y-1.5">
              <label htmlFor="cv-name" className="block text-sm font-semibold text-neutral-700">
                Full Name <span style={{ color: ORANGE }}>*</span>
              </label>
              <input
                id="cv-name"
                name="name"
                type="text"
                placeholder="Maria Rivera"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 bg-neutral-50"
                style={{ "--tw-ring-color": GREEN } as React.CSSProperties}
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="cv-email" className="block text-sm font-semibold text-neutral-700">
                  Email <span style={{ color: ORANGE }}>*</span>
                </label>
                <input
                  id="cv-email"
                  name="email"
                  type="email"
                  placeholder="maria@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none bg-neutral-50"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="cv-phone" className="block text-sm font-semibold text-neutral-700">
                  Phone Number
                </label>
                <input
                  id="cv-phone"
                  name="phone"
                  type="tel"
                  placeholder="(408) 555-0192"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none bg-neutral-50"
                />
              </div>
            </div>

            {/* Date + Party size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="cv-date" className="block text-sm font-semibold text-neutral-700">
                  Preferred Date <span style={{ color: ORANGE }}>*</span>
                </label>
                <input
                  id="cv-date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none bg-neutral-50"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="cv-party" className="block text-sm font-semibold text-neutral-700">
                  Party Size <span style={{ color: ORANGE }}>*</span>
                </label>
                <select
                  id="cv-party"
                  name="party_size"
                  value={form.party_size}
                  onChange={handleChange}
                  required
                  className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none bg-neutral-50"
                >
                  <option value="">Select guests</option>
                  {["1–2 guests", "3–4 guests", "5–6 guests", "7–10 guests", "Large party (10+)"].map(
                    (o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-1.5">
              <label htmlFor="cv-notes" className="block text-sm font-semibold text-neutral-700">
                Special Requests <span className="text-neutral-400 font-normal">(optional)</span>
              </label>
              <textarea
                id="cv-notes"
                name="notes"
                placeholder="Celebrating a birthday? Dietary restrictions? Let us know."
                rows={3}
                value={form.notes}
                onChange={handleChange}
                className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none bg-neutral-50 resize-none"
              />
            </div>

            <button
              type="submit"
              style={{ backgroundColor: GREEN }}
              className="w-full text-white font-semibold py-4 rounded-full text-base hover:opacity-90 transition-opacity"
            >
              Reserve My Table →
            </button>

            <p className="text-center text-xs text-neutral-500">
              No credit card required. Free cancellation up to 24 hours before your visit.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */
const FooterSection = () => (
  <footer
    style={{ backgroundColor: GREEN_DARK, fontFamily: BODY }}
    className="border-t border-white/10 py-12"
  >
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
        <div>
          <h3
            style={{ fontFamily: DISPLAY, color: "white" }}
            className="text-2xl font-extrabold mb-2"
          >
            Casa Verde
          </h3>
          <p className="text-white/60 text-sm max-w-xs leading-relaxed">
            Authentic Mexican food, made with love since 2008. Family-owned and operated in the heart of San Jose.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-10">
          <div>
            <p
              className="text-sm font-semibold mb-3"
              style={{ color: ORANGE }}
            >
              Hours
            </p>
            <ul className="space-y-1.5 text-sm text-white/60">
              <li>Mon – Thu: 11am – 9pm</li>
              <li>Fri – Sat: 11am – 10pm</li>
              <li>Sunday: 12pm – 8pm</li>
            </ul>
          </div>
          <div>
            <p
              className="text-sm font-semibold mb-3"
              style={{ color: ORANGE }}
            >
              Contact
            </p>
            <ul className="space-y-1.5 text-sm text-white/60">
              <li>
                <a href="tel:+14085550174" className="hover:text-white transition-colors">
                  (408) 555-0174
                </a>
              </li>
              <li>
                <a href="mailto:hola@casaverdesi.com" className="hover:text-white transition-colors">
                  hola@casaverdesi.com
                </a>
              </li>
              <li>1247 Lincoln Ave, San Jose, CA 95125</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} Casa Verde Restaurant. All rights reserved.
        </p>
        <p className="text-xs text-white/30">
          Website by{" "}
          <a href="https://elo-magic.com" className="hover:text-white/60 transition-colors">
            Elo Agency
          </a>
        </p>
      </div>
    </div>
  </footer>
);

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
const CasaVerde = () => {
  useCasaVerdeFonts();

  return (
    <div className="min-h-screen" style={{ backgroundColor: CREAM }}>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ValueSection />
      <SocialProofSection />
      <UrgencySection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default CasaVerde;

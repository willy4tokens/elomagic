const Footer = () => {
  return (
    <footer className="border-t border-border py-10 bg-card">
      <div className="container px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl font-extrabold text-primary">Elo</span>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Elo. Helping businesses grow — one customer at a time.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

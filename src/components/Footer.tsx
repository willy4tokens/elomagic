const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl font-bold text-gradient">Elo</span>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Elo. Results, not excuses.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

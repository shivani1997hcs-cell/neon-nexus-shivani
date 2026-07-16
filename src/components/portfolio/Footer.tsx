const Footer = () => {
  return (
    <footer className="px-6 py-10 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-display font-medium text-foreground">Shivani Saluja</span>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} · London
        </div>
      </div>
    </footer>
  );
};

export default Footer;

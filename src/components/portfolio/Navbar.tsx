import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const links = [
  { label: "System", href: "#system" },
  { label: "Case studies", href: "#case-studies" },
  { label: "How I work", href: "#how-i-work" },
  { label: "Writing", href: "#writing" },
  { label: "Background", href: "#background" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
  };

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => go("#hero")}
          className="flex items-center gap-2.5 group"
          aria-label="Home"
        >
          <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform" />
          <span className="font-display font-semibold tracking-tight text-foreground">Shivani Saluja</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => go(l.href)}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-2 p-2 text-muted-foreground hover:text-foreground rounded-md border border-border hover:border-border-strong transition-colors"
          >
            {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 text-muted-foreground hover:text-foreground rounded-md border border-border"
          >
            {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="p-2 flex flex-col gap-1"
          >
            <span className={`block w-5 h-px bg-foreground transition-transform ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-transform ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => go(l.href)}
              className="block w-full text-left py-3 text-muted-foreground hover:text-foreground border-b border-border/50 last:border-0"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

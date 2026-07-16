import { useReveal } from "@/hooks/useReveal";
import { Mail, Linkedin, Download } from "lucide-react";

const Contact = () => {
  const reveal = useReveal<HTMLDivElement>();

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/Shivani_Saluja_Resume.pdf";
    link.download = "Shivani_Saluja_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="px-6 py-24 border-t border-border">
      <div ref={reveal} className="max-w-6xl mx-auto">
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Contact</div>
        <h2 className="font-display font-semibold tracking-tight text-foreground leading-[1.02]"
            style={{ fontSize: "clamp(2.5rem, 6.5vw, 5rem)" }}>
          Let's talk.
        </h2>

        <p className="mt-6 text-muted-foreground text-lg max-w-2xl">
          Best way to reach me is email. I actually reply.
        </p>

        <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-3xl">
          <a
            href="mailto:shivani1997hcs@gmail.com"
            className="stack-card group border border-border rounded-lg p-5 bg-surface flex items-center gap-3"
          >
            <Mail className="w-4 h-4 text-accent shrink-0" />
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="text-sm text-foreground truncate">shivani1997hcs@gmail.com</div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/shivani-saluja-/"
            target="_blank"
            rel="noreferrer noopener"
            className="stack-card group border border-border rounded-lg p-5 bg-surface flex items-center gap-3"
          >
            <Linkedin className="w-4 h-4 text-accent shrink-0" />
            <div>
              <div className="text-xs text-muted-foreground">LinkedIn</div>
              <div className="text-sm text-foreground">/in/shivani-saluja-</div>
            </div>
          </a>

          <button
            onClick={handleDownloadCV}
            className="stack-card group border border-border rounded-lg p-5 bg-surface flex items-center gap-3 text-left"
          >
            <Download className="w-4 h-4 text-accent shrink-0" />
            <div>
              <div className="text-xs text-muted-foreground">Resume</div>
              <div className="text-sm text-foreground">Download PDF</div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

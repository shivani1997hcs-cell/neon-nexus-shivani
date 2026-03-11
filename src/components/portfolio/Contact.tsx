import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-neon-cyan mb-4">Let's Connect</p>

        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          One day or<br />day one?
        </h2>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
          I'm always open to conversations about PMM roles, GTM challenges, or just a good debate about whether positioning or enablement moves pipeline faster.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.open("mailto:shivani.saluja24@imperial.ac.uk", "_blank")}
            className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3 text-base font-semibold rounded-full"
          >
            <Mail className="w-4 h-4 mr-2" />
            Send an Email
          </Button>
          <Button
            variant="outline"
            onClick={() => window.open("https://www.linkedin.com/in/shivani-saluja-/", "_blank")}
            className="border-border text-foreground hover:bg-muted px-8 py-3 text-base font-semibold rounded-full"
          >
            <Linkedin className="w-4 h-4 mr-2" />
            View LinkedIn
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/assets/Shivani_Saluja_Resume.pdf";
              link.download = "Shivani_Saluja_Resume.pdf";
              link.target = "_blank";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="border-border text-foreground hover:bg-muted px-8 py-3 text-base font-semibold rounded-full"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Based in London · Open to global opportunities · Available immediately
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

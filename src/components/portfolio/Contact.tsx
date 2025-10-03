import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Calendar, MessageCircle } from "lucide-react";

const Contact = () => {
  const handleEmailClick = () => {
    window.open('mailto:shivani.saluja24@imperial.ac.uk', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/shivani-saluja-/', '_blank');
  };

  const handleCalendlyClick = () => {
    window.open('https://calendly.com/shivani1997hcs/30min', '_blank');
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gradient-secondary">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-muted-foreground text-xl max-w-4xl mx-auto">
            Whether you want to brainstorm the next big thing, need a product audit, or just want to chat about why your users aren't converting—I'm all ears! ☕
          </p>
        </div>

        <Card className="card-neon text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-primary/10 border border-neon-cyan/20">
                <MessageCircle className="w-8 h-8 text-neon-cyan" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Let's Start a Conversation</h3>
            <p className="text-muted-foreground mb-8">
              Whether you're looking for strategic guidance, product leadership, 
              or growth expertise, I'm here to help drive your vision forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              onClick={handleEmailClick}
              className="bg-gradient-primary text-primary-foreground hover:shadow-neon-cyan transition-all duration-300 p-6 h-auto"
            >
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 mb-2" />
                <span className="font-semibold">Email Me</span>
                <span className="text-xs opacity-80">Quick response</span>
              </div>
            </Button>

            <Button
              variant="outline"
              onClick={handleLinkedInClick}
              className="border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-background transition-all duration-300 p-6 h-auto"
            >
              <div className="flex flex-col items-center">
                <Linkedin className="w-6 h-6 mb-2" />
                <span className="font-semibold">Connect on LinkedIn</span>
                <span className="text-xs opacity-80">Professional network</span>
              </div>
            </Button>

            <Button
              variant="outline"
              onClick={handleCalendlyClick}
              className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background transition-all duration-300 p-6 h-auto"
            >
              <div className="flex flex-col items-center">
                <Calendar className="w-6 h-6 mb-2" />
                <span className="font-semibold">Book a Call</span>
                <span className="text-xs opacity-80">30-min chat</span>
              </div>
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Based in London • Open to global opportunities • Available immediately
            </p>
          </div>
        </Card>

        {/* Why This Exists Section */}
        <Card className="card-neon mt-8">
          <h3 className="text-3xl font-bold mb-6 text-gradient-secondary text-center">
            Why This Website Exists
          </h3>
          
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Because saying "I simplify complex messaging" is useless without showing it. So I built this portfolio site for £2.50 (domain only) using no-code tools. Created AI agents. Made it actually readable. If I can't market myself clearly, why would you trust me to market your product?
            </p>
            
            <p>
              Also, I'm currently doing my MBA at Imperial College London and interning with a conversational AI platform. Which means I'm watching AI hype crash into reality daily. Spoiler: most AI marketing is terrible. I'm trying to fix that.
            </p>

            <div className="pt-8 text-center">
              <h4 className="text-2xl font-bold mb-4 text-neon-cyan">Let's Build Something</h4>
              <p className="text-muted-foreground">
                Whether you're a founder with a wild idea, a fellow PMM/PM looking to collaborate, or someone who just wants to geek out about user psychology. Let's connect!
              </p>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Built by Shivani. Hosted for less than a coffee. ☕
          </p>
          <p className="text-sm text-muted-foreground italic">
            No AI was used to write this. Just kidding. Some AI was definitely used. But I edited it until it sounded like me.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
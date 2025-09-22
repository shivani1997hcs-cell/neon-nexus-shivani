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

        {/* Coffee Culture Section */}
        <Card className="card-neon mt-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-neon-cyan">Coffee Chat? Virtual High-Five? 🙌</h3>
          
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg">
              I believe the best partnerships start with genuine conversations. Whether you're a founder with a wild idea, 
              a fellow PM looking to collaborate, or someone who just wants to geek out about user psychology. Let's connect!
            </p>
            
            <p className="text-lg">
              I'm always up for exploring London's coffee scene while diving deep into product strategy, user psychology, 
              or the latest in AI automation. Because sometimes the best insights come when you step away from the screen! ☕
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
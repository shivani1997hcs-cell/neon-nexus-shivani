import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Shivani is a rare marketer who truly understands the technical side of products. She can translate complex features into clear value propositions that resonate with enterprise buyers.",
    author: "Product Leader",
    role: "GreyOrange"
  },
  {
    quote: "Her ability to align sales, product, and marketing teams around a single narrative made a real difference in how we approached enterprise deals.",
    author: "Sales Director",
    role: "B2B SaaS"
  },
  {
    quote: "Shivani brings structure and clarity to GTM planning. She asks the right questions and builds programs that actually move pipeline.",
    author: "Marketing Executive",
    role: "Times Internet"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-secondary">
            What People Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-neon group hover:scale-[1.02] transition-all duration-300">
              <div className="mb-4">
                <Quote className="w-8 h-8 text-neon-cyan opacity-50" />
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

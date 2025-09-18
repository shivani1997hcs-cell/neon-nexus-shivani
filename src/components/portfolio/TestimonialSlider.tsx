import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    text: "Shivani is one of the most diligent and hard-working colleagues I have come across. She loves to take challenges and deliver them with poise. She is a fast learner and has excelled in planning and executing several campaigns at ET.com.",
    author: "Jaideep Manchanda",
    linkedIn: "https://www.linkedin.com/in/jaideep-manchanda/"
  },
  {
    text: "Shivani excels with a solution-oriented mindset and decisive leadership, driving Graphy's international expansion with innovative GTM strategies. She built a high-performing customer success team from scratch, inspiring collaboration and ownership that significantly boosted retention and repeat business.",
    author: "Gaurav Singh Bisen",
    linkedIn: "https://www.linkedin.com/in/gauravsinghbisen/"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Card className="card-neon mx-4">
                <blockquote className="text-muted-foreground italic text-lg leading-relaxed mb-6">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <a 
                      href={testimonial.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon-cyan hover:text-neon-magenta transition-colors duration-300 font-semibold"
                    >
                      {testimonial.author}
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Slider indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-neon-cyan shadow-neon-cyan' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
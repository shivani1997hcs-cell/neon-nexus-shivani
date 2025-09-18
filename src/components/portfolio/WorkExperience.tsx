import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "HeyAlpha",
    companyUrl: "https://heyalpha.ai",
    role: "Strategy Intern",
    location: "London",
    period: "Jul–Sept 2025",
    description: "B2B2C SaaS platform building conversational AI agents",
    achievements: [
      "Supported 8 pilot rollouts across hotels, healthcare & retail with sales collateral",
      "Built ROI frameworks & GTM strategy for UK & Middle East pilots",
      "Benchmarked 15+ AI competitors to shape positioning & roadmap"
    ],
    colorClasses: {
      text: "text-neon-cyan",
      dot: "bg-neon-cyan"
    }
  },
  {
    company: "GreyOrange",
    companyUrl: "https://greyorange.com",
    role: "Product & Marketing Manager",
    location: "Gurgaon & Atlanta",
    period: "Aug 2022–Aug 2024",
    description: "Global provider of warehouse robotics and AI-powered automation",
    achievements: [
      "Drove 68% ARR growth co-owning automation products from concept to deployment",
      "Lifted pipeline 45% with AI-powered ROI calculators & competitive tools",
      "Improved closure rate with structured win–loss analysis and account planning",
      "Conducted primary research (GLG, Tegus) for unbiased insights"
    ],
    colorClasses: {
      text: "text-neon-magenta",
      dot: "bg-neon-magenta"
    }
  },
  {
    company: "Graphy (Unacademy)",
    companyUrl: "https://graphy.com",
    role: "Growth Manager",
    location: "Gurgaon",
    period: "Mar 2021–Jul 2022",
    description: "LMS enabling creators to deliver courses & scale monetization",
    achievements: [
      "Scaled into 3 markets (+25% customers), generated 5K+ SQLs/month (+40% GMV)",
      "Raised retention to 94% by building customer community & accelerator program"
    ],
    colorClasses: {
      text: "text-neon-purple",
      dot: "bg-neon-purple"
    }
  },
  {
    company: "Times Internet",
    companyUrl: "https://timesinternet.in",
    role: "Brand Strategist",
    location: "Noida",
    period: "Feb 2019–Feb 2021",
    description: "India's largest digital media & technology platform",
    achievements: [
      "Launched 3 monetizable IPs (50%+ profitability, +20% engagement)",
      "Secured £600K+ sponsorships from top brands including Johnson & Johnson",
      "Pitched, closed & led mental health IP with J&J, winning Innovation Award"
    ],
    colorClasses: {
      text: "text-neon-blue",
      dot: "bg-neon-blue"
    }
  }
];

const WorkExperience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey through cutting-edge technology companies, driving growth, 
            innovation, and strategic transformation across global markets.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-6 w-4 h-4 bg-gradient-primary rounded-full border-2 border-background shadow-neon-cyan"></div>
                
                {/* Content */}
                <div className="lg:ml-16 w-full">
                  <Card className="card-neon group hover:scale-[1.02] transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">
                          <a 
                            href={exp.companyUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-neon-cyan transition-colors"
                          >
                            {exp.company}
                          </a>
                        </h3>
                        <h4 className={`text-lg font-semibold ${exp.colorClasses.text} mb-2`}>
                          {exp.role}
                        </h4>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                      </div>
                      <div className="flex flex-col md:items-end space-y-2">
                        <Badge variant="outline" className="border-neon-cyan text-neon-cyan">
                          <Calendar className="w-3 h-3 mr-1" />
                          {exp.period}
                        </Badge>
                        <Badge variant="outline" className="border-neon-magenta text-neon-magenta">
                          <MapPin className="w-3 h-3 mr-1" />
                          {exp.location}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start">
                          <div className={`w-2 h-2 ${exp.colorClasses.dot} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                          <p className="text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
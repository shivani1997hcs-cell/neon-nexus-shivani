import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Trophy, Users, MapPin } from "lucide-react";

const education = [
  {
    institution: "Imperial College Business School",
    degree: "MBA, Digital Strategy & Transformation",
    location: "London",
    period: "Aug 2024–Jun 2025",
    achievements: [
      "Winner: Imperial Innovation Challenge (pitched sepsis diagnosis solution to VCs)",
      "Represented Imperial at VCIC Regional Round (LBS)",
      "Head of External Relations, Tech Club (secured industry speakers & partnerships)"
    ],
    colorClasses: {
      text: "text-neon-cyan",
      bg: "bg-neon-cyan/10",
      border: "border-neon-cyan/20",
      dot: "bg-neon-cyan"
    },
    icon: GraduationCap
  },
  {
    institution: "Hindu College, University of Delhi",
    degree: "B.Sc. Chemistry",
    location: "Delhi",
    period: "Jul 2015–Jul 2018",
    achievements: [
      "Led college cultural fest, securing £30K+ sponsorships and managing large-scale events"
    ],
    colorClasses: {
      text: "text-neon-magenta",
      bg: "bg-neon-magenta/10",
      border: "border-neon-magenta/20",
      dot: "bg-neon-magenta"
    },
    icon: GraduationCap
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
            Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic excellence combined with practical leadership experience, 
            building the foundation for strategic thinking and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <Card key={index} className="card-neon group hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg ${edu.colorClasses.bg} border ${edu.colorClasses.border} mr-4`}>
                      <IconComponent className={`w-6 h-6 ${edu.colorClasses.text}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{edu.institution}</h3>
                      <h4 className={`text-lg font-semibold ${edu.colorClasses.text}`}>
                        {edu.degree}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="border-neon-cyan text-neon-cyan">
                    <MapPin className="w-3 h-3 mr-1" />
                    {edu.location}
                  </Badge>
                  <Badge variant="outline" className="border-neon-purple text-neon-purple">
                    {edu.period}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <h5 className="font-semibold text-foreground flex items-center">
                    <Trophy className="w-4 h-4 mr-2 text-neon-magenta" />
                    Key Achievements
                  </h5>
                  {edu.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start">
                      <div className={`w-2 h-2 ${edu.colorClasses.dot} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                      <p className="text-muted-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
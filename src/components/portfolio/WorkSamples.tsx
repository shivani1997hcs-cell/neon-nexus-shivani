import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const workSamples = [
  {
    title: "Peak Season GTM Campaign",
    type: "Integrated campaign",
    description: "Multi channel campaign for retailers facing peak season volume spikes. Included ebook, assessment, video, landing page, blogs, and LinkedIn promotion.",
    links: [
      { label: "Ebook", url: "https://www.greyorange.com/resource/peak-season-simplified/" },
      { label: "Video", url: "https://www.greyorange.com/resource/video-how-to-prepare-for-peak-season/" },
      { label: "Landing page", url: "https://www.greyorange.com/home/peak-season-fulfillment/" },
      { label: "Blog", url: "https://www.greyorange.com/warehouse/top-4-peak-season-challenges-and-how-to-tackle-each/" }
    ],
    colorClasses: {
      text: "text-neon-cyan",
      bg: "bg-neon-cyan/10",
      border: "border-neon-cyan/20",
      badge: "border-neon-cyan text-neon-cyan"
    }
  },
  {
    title: "Customer Case Study: Dorman Products",
    type: "Customer proof",
    description: "Case study for an automotive manufacturer highlighting multi million dollar savings and reduced labor needs from warehouse automation.",
    links: [
      { label: "Read case study", url: "https://www.greyorange.com/warehouse/how-auto-parts-manufacturer-dorman-is-using-intralogistics-robots-to-save-millions-and-slash-labor-needs/" }
    ],
    colorClasses: {
      text: "text-neon-magenta",
      bg: "bg-neon-magenta/10",
      border: "border-neon-magenta/20",
      badge: "border-neon-magenta text-neon-magenta"
    }
  },
  {
    title: "Customer Case: Dafiti",
    type: "Regional demand generation",
    description: "Customer story and social content for one of Latin America's largest e commerce players, used in regional demand generation.",
    links: [
      { label: "View on LinkedIn", url: "https://www.linkedin.com/posts/gogreyorange_dafiti-cuts-costs-and-serves-customers-faster-activity-7096822838694727680-IafY" }
    ],
    colorClasses: {
      text: "text-neon-purple",
      bg: "bg-neon-purple/10",
      border: "border-neon-purple/20",
      badge: "border-neon-purple text-neon-purple"
    }
  },
  {
    title: "ET Prime Women Leadership Awards",
    type: "Brand IP and event",
    description: "Brand IP and event format used to reach senior CMOs, with live show and editorial coverage.",
    links: [
      { label: "Watch event", url: "https://economictimes.indiatimes.com/spotlight/etpwla2024_watchlive.cms" }
    ],
    colorClasses: {
      text: "text-neon-blue",
      bg: "bg-neon-blue/10",
      border: "border-neon-blue/20",
      badge: "border-neon-blue text-neon-blue"
    }
  }
];

const WorkSamples = () => {
  return (
    <section id="work-samples" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-secondary">
            Work Samples
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Selected content and campaigns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workSamples.map((sample, index) => (
            <Card key={index} className="card-neon group hover:scale-[1.02] transition-all duration-300 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className={sample.colorClasses.badge}>
                  {sample.type}
                </Badge>
              </div>
              
              <h3 className={`text-xl font-bold mb-3 ${sample.colorClasses.text}`}>{sample.title}</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">
                {sample.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {sample.links.map((link, linkIndex) => (
                  <Button
                    key={linkIndex}
                    variant="outline"
                    size="sm"
                    className={`${sample.colorClasses.badge} hover:bg-current/10`}
                    onClick={() => window.open(link.url, '_blank')}
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSamples;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface WorkCard {
  tag: string;
  company: string;
  title: string;
  body: string;
  links?: { label: string; url: string }[];
}

const workCards: WorkCard[] = [
  {
    tag: "CAMPAIGN",
    company: "GREYORANGE",
    title: "From Jargon to Revenue: The Peak Season Campaign",
    body: `When I joined GreyOrange, our content was heavy on "fulfillment orchestration" and light on anything a warehouse operations leader would actually care about. After 100+ customer interviews and win-loss analysis, the insight was simple: our buyers weren't looking for innovation. They were looking for protection against Black Friday disasters.

We rebuilt the entire GTM around one idea: Peak Season Insurance. Risk-anchored landing pages, outbound sequences that led with cost of inaction, a Readiness Assessment as the top-of-funnel hook, and a 90-day pilot to de-risk IT concerns. We A/B tested the risk narrative against the old innovation story.

Result: 3x higher reply rates. 35% increase in qualified pipeline. Win rate up 20%. Sales cycles down from 12-18 months to 4-6 months.`,
    links: [
      { label: "Peak Season Simplified (Ebook)", url: "https://www.greyorange.com/resource/peak-season-simplified/" },
      { label: "Peak Season Landing Page", url: "https://www.greyorange.com/home/peak-season-fulfillment/" },
    ],
  },
  {
    tag: "PRODUCT LAUNCH",
    company: "GREYORANGE",
    title: "Launching Two Autonomous Forklifts. On Time. With a Story That Stuck.",
    body: `The brief was tight: two new autonomous forklift solutions, a large sales org to enable, and a signal to send to enterprise manufacturing accounts that GreyOrange was more than point robotics. I owned the narrative, GTM plan and enablement end to end.

I started with ICP clarity: operations leaders in high-bay warehouses dealing with pallet handling costs, safety incidents and labour shortages. Built a three-pillar messaging framework around throughput, safety and flexibility. Prioritised ruthlessly for launch week, parked the nice-to-haves, ran a live enablement session for 40+ reps and SEs. Then built a post-launch feedback loop to iterate battlecards and deck in real time based on what sales was hearing.

Result: £20M+ influenced pipeline. 45% pipeline growth. 30% reduction in sales cycle where the new narrative was used consistently.`,
  },
  {
    tag: "CUSTOMER PROOF",
    company: "GREYORANGE",
    title: "Building a Customer Voice Program from Zero",
    body: `We had no social proof. A competitor was everywhere with customer stories. I pulled late-stage deal notes where "lack of proof" showed up, built the business case, pushed back on the phone-video shortcut, and project managed eight professional video testimonials across industries: fashion, 3PL, retail, auto manufacturing.

The structure was simple: customer as hero, product as guide. Before, the trigger, the after. Each script pulled both story and numbers so we weren't just telling a nice story.

Result: 3-4x engagement vs standard content. BDRs and AEs adopted them as standard proof in outreach and late-stage deals.`,
    links: [
      { label: "Dorman Products Case Study", url: "https://www.greyorange.com/resource/dorman-products-case-study/" },
      { label: "Dafiti (Latin America)", url: "https://www.greyorange.com/resource/dafiti-case-study/" },
      { label: "Evergreen (Retail)", url: "https://www.linkedin.com/posts/gogreyorange_roboticautomation-peakseason-warehouse-ugcPost-7207013832710336513-EeBV/" },
      { label: "Apotek (Pharmacy)", url: "https://www.linkedin.com/posts/gogreyorange_roboticautomation-warehouse-warehouseautomation-activity-7242521568986173441-IpyY/" },
    ],
  },
  {
    tag: "SALES ENABLEMENT",
    company: "GREYORANGE",
    title: "The BDR Training Nobody Asked For",
    body: `Meeting-booked rates were low. Instead of accepting the usual finger-pointing between Sales and Marketing, I listened to 20+ call recordings and found the real problem: BDRs understood the product but couldn't connect it to what each industry actually cared about.

No one asked me to fix this. PMM isn't Sales Enablement. But the gap was blocking revenue, so I owned it: a four-session training module covering call analysis, industry deep-dives with product, a vertical quiz, and elevator pitch practice.

Result: Pitch quality improved measurably. Meeting-booked rate went up. The BDR team lead said it made a real difference.`,
  },
  {
    tag: "BRAND IP",
    company: "TIMES INTERNET",
    title: "ET Prime Women Leadership Awards",
    body: `Led the launch of a new brand IP designed to engage senior women CMOs and C-suite leaders across India, leveraging Economic Times' 40-45M monthly digital reach. Secured Accenture as a headline sponsor. Closed £600K+ in brand sponsorships across the programme.`,
    links: [
      { label: "ETPWLA 2024", url: "https://economictimes.indiatimes.com/spotlight/etpwla2024_watchlive.cms" },
      { label: "ETPWLA 2023 Winners", url: "https://economictimes.indiatimes.com/news/company/corporate-trends/etpwla-2023-meet-the-trailblazing-winners-of-etprime-women-leadership-awards/articleshow/102541801.cms" },
    ],
  },
];

const neonColors = [
  { text: "text-neon-cyan", border: "border-neon-cyan", bg: "bg-neon-cyan/10" },
  { text: "text-neon-magenta", border: "border-neon-magenta", bg: "bg-neon-magenta/10" },
  { text: "text-neon-purple", border: "border-neon-purple", bg: "bg-neon-purple/10" },
  { text: "text-neon-blue", border: "border-neon-blue", bg: "bg-neon-blue/10" },
  { text: "text-neon-cyan", border: "border-neon-cyan", bg: "bg-neon-cyan/10" },
];

const WorkCardComponent = ({ card, index }: { card: WorkCard; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const color = neonColors[index % neonColors.length];
  const paragraphs = card.body.split("\n\n");
  const preview = paragraphs[0];
  const rest = paragraphs.slice(1);

  return (
    <div className="card-neon">
      <div className="flex items-center gap-2 mb-4">
        <Badge variant="outline" className={`${color.border} ${color.text} text-xs`}>
          {card.tag}
        </Badge>
        <Badge variant="outline" className="border-border text-muted-foreground text-xs">
          {card.company}
        </Badge>
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{card.title}</h3>

      <p className="text-muted-foreground leading-relaxed mb-4">{preview}</p>

      {rest.length > 0 && (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleContent className="space-y-4 mb-4">
            {rest.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </CollapsibleContent>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className={`${color.text} hover:bg-muted/50 mb-4`}>
              {isOpen ? "Show less" : "Read more"}
              {isOpen ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
            </Button>
          </CollapsibleTrigger>
        </Collapsible>
      )}

      {card.links && (
        <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
          {card.links.map((link, i) => (
            <Button
              key={i}
              variant="outline"
              size="sm"
              className={`${color.border} ${color.text} hover:bg-muted/30 text-xs`}
              onClick={() => window.open(link.url, "_blank")}
            >
              {link.label}
              <ExternalLink className="w-3 h-3 ml-1" />
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

const WorkSection = () => {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-neon-cyan mb-4">Work</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Stories, not just slides.
        </h2>
        <p className="text-muted-foreground text-lg mb-16 max-w-3xl">
          Here's an honest look at some of the work I'm most proud of and what it actually took to get there.
        </p>

        <div className="space-y-8">
          {workCards.map((card, index) => (
            <WorkCardComponent key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

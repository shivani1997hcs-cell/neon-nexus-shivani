 import { useState } from "react";
 import { Card } from "@/components/ui/card";
 import { Button } from "@/components/ui/button";
 import { Badge } from "@/components/ui/badge";
 import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
 import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
 
 interface WorkSample {
   title: string;
   type: string;
   period: string;
   summary: string;
   situation: string;
   task: string;
   action: string[];
   result: string[];
   learning: string;
   links?: { label: string; url: string }[];
   colorClasses: {
     text: string;
     bg: string;
     border: string;
     badge: string;
   };
 }
 
 const workSamples: WorkSample[] = [
   {
     title: "Peak Season GTM Repositioning",
     type: "Strategic repositioning",
     period: "2023-2024",
     summary: "Repositioned AI-powered warehouse platform from 'innovation' to 'peak season insurance', reducing sales cycles from 12-18 months to 4-6 months.",
     situation: "GreyOrange's AI-powered warehouse platform (GreyMatter) had a serious positioning problem. Despite working with Fortune 500 retailers, we were stuck in 12-18 month sales cycles with a 50%+ no-decision rate. Reps pitched 'speed and innovation,' but buyers weren't compelled. Robotics was seen as 'nice-to-have,' not mission-critical.",
     task: "Turn a complex technical product (AI-driven predictive fulfillment + robotics) into a must-have solution that solves labor crisis and prevents revenue leakage. I needed to figure out why deals were stalling and how to make our messaging resonate with enterprise buyers who controlled 7-figure budgets.",
     action: [
       "Ran 10+ 'Jobs to be Done' discovery interviews with Operations Directors at target accounts",
       "Analyzed 18 months of win/loss data and CRM notes to find patterns in what made customers buy",
       "Discovered that 80% of wins shared 3 attributes: recent system failure, severe labor shortage, or high peak seasonality (3-5x volume spikes)",
       "Repositioned from 'Revolutionizing retail with robotic fulfillment orchestration' to 'Protect Your Peak Season: Avoid the $1M/day cost of fulfillment failure'",
       "Created 'Peak Season Readiness Assessment' e-book as outreach hook for BDRs",
       "Developed account-specific risk videos for AEs to use in discovery",
       "Retrained sales to lead with 'What happens if you miss your peak season SLA?' instead of product demos",
       "Built battlecards focused on 'cost of inaction' objection handling",
       "Launched 90-day pilot program to reduce technical skepticism from IT teams"
     ],
     result: [
       "45% lift in qualified pipeline within two quarters",
       "Sales cycles reduced from 12-18 months to 4-6 months",
       "20% win rate improvement by focusing on high-risk accounts",
       "30% disqualification rate increase (stopped chasing tire-kickers)",
       "One major US retailer went live in 6 months and survived their biggest Black Friday ever with zero downtime"
     ],
     learning: "Messaging is what the customer hears, not what you say. Data beats intuition. The 80% win pattern came from CRM mining, not guesswork. And sometimes the best GTM strategy is doing less, better: we stopped making new collateral and used what we had more strategically.",
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
     title: "Vertical ABM That Actually Worked",
     type: "Strategic campaign",
     period: "2023",
     summary: "Shifted from horizontal spray-and-pray campaigns to focused vertical ABM, achieving 50% increase in email engagement and doubling sales follow-up response rates.",
     situation: "GreyOrange was running horizontal, spray-and-pray marketing campaigns with stagnant demo booking conversion rates. We were investing heavily in content and demand gen, but results weren't moving. The conventional wisdom was to make MORE collateral and run MORE campaigns.",
     task: "Figure out why our campaigns weren't converting and find a way to drive better engagement without increasing budget or headcount.",
     action: [
       "Paused new campaigns and analyzed where our revenue was actually coming from",
       "Discovered that 80% of revenue came from just 3 industries: 3PL, Fashion, and General Manufacturing",
       "Pitched leadership on a focused ABM approach: 'We're spreading ourselves too thin. Let's stop making new collateral and use what we have more strategically.'",
       "Did deep research on each vertical: pain points, buying personas, regulatory drivers, competitive landscape",
       "Created 3 separate email tracks with industry-specific messaging: 3PL (labor cost reduction, scalability), Fashion (peak season flexibility, returns handling), Manufacturing (precision handling, just-in-time inventory)",
       "Curated existing collateral specifically for each audience (fashion brands got case studies from fashion clients)",
       "Sent monthly newsletters with industry-specific insights, not just product promotions"
     ],
     result: [
       "50% increase in email open rates and CTRs compared to horizontal campaigns",
       "CXO engagement jumped from 12% to 31% in target accounts",
       "Sales follow-up response rates doubled because emails were hyper-relevant",
       "This ABM approach became our go-forward playbook. Our CEO cited it in an all-hands: 'We can't chase everyone in the sea. We have to be specific for quick wins.'"
     ],
     learning: "GTM isn't about doing more. It's about doing the right things for the right audience. Relevance beats reach every time. Sometimes the best strategy is to do less, better.",
     colorClasses: {
       text: "text-neon-magenta",
       bg: "bg-neon-magenta/10",
       border: "border-neon-magenta/20",
       badge: "border-neon-magenta text-neon-magenta"
     }
   },
   {
     title: "Building Social Proof from Zero",
     type: "Customer testimonial program",
     period: "2022-2023",
     summary: "Built customer proof program from scratch with 8 professional video testimonials, delivering 3-4x higher engagement and enabling sales to close late-stage deals.",
     situation: "When I joined GreyOrange, we had zero customer social proof. No case studies, no video testimonials, nothing. Our biggest competitor was showcasing customer stories everywhere, and we had nothing to show. If I were a buyer comparing vendors, the choice would've been obvious.",
     task: "Build a credible customer proof program from scratch. No template, no process, no one telling me how to do it. And I needed it to actually move deals, not just look nice on the website.",
     action: [
       "Pitched leadership on why this mattered: social proof shortens sales cycles",
       "Pushed back when my manager suggested 'just shoot videos on phones with Sales'. I knew cheap videos would deliver 10% of the value",
       "Argued for professional production and got budget approved",
       "Project-managed end-to-end: wrote scripts, got legal permissions, shortlisted customers across industries (fashion, 3PL, retail, general manufacturing)",
       "Coordinated with Customer Success to get sign-offs and scheduled shoots across 8 different customer sites"
     ],
     result: [
       "Created 8 professional customer video testimonials across key verticals",
       "Video posts got 3-4x higher engagement than typical content",
       "BDRs now had ready-made collateral to showcase real-world success in discovery calls",
       "Sales used these videos to overcome skepticism in late-stage deals"
     ],
     learning: "Don't wait for perfect information or clear instructions. If you see a problem worth solving, own it and figure out the rest. And quality matters. Cutting corners would've delivered a fraction of the impact.",
     links: [
       { label: "Evergreen (retail)", url: "https://www.linkedin.com/posts/gogreyorange_roboticautomation-peakseason-warehouse-ugcPost-7207013832710336513-EeBV/" },
       { label: "Apotek (pharmacy)", url: "https://www.linkedin.com/posts/gogreyorange_roboticautomation-warehouse-warehouseautomation-activity-7242521568986173441-IpyY/" },
       { label: "Active Ants (fulfillment)", url: "https://www.linkedin.com/posts/gogreyorange_warehouse-roboticautomation-warehouseautomation-activity-7227305099490930690-SoXG/" }
     ],
     colorClasses: {
       text: "text-neon-purple",
       bg: "bg-neon-purple/10",
       border: "border-neon-purple/20",
       badge: "border-neon-purple text-neon-purple"
     }
   },
   {
     title: "BDR Enablement That Moved the Needle",
     type: "Sales training program",
     period: "2023",
     summary: "Diagnosed BDR performance issues through call analysis and designed a 4-session training program that significantly improved meeting-booked rates.",
     situation: "Our BDR meeting-booked rate was low despite high-quality marketing campaigns. Sales blamed the leads, Marketing blamed the BDRs. Classic finger-pointing, no solutions.",
     task: "Diagnose the real problem and fix it, even though this wasn't my job as a PMM.",
     action: [
       "Listened to 20+ BDR call recordings and realized the issue: BDRs didn't understand our solutions deeply enough to have meaningful conversations",
       "Identified that they were being vague, not connecting pain points to solutions, not tailoring to industries",
       "Designed a 4-session training module over 1.5 months:",
       "Call analysis: Listened to recordings together and walked them through what could've been better",
       "Industry deep-dives: Trained them with Product on pain points specific to fashion, 3PL, retail, and which collateral to use",
       "Quiz: Industry-based quiz to test retention",
       "Elevator pitch refinement: Practiced crafting value-driven pitches"
     ],
     result: [
       "Quality of pitches went way up. BDRs could now have contextual, industry-specific conversations",
       "Meeting-booked rate improved significantly",
       "BDR team lead confirmed it made a real difference in their performance"
     ],
     learning: "Ownership means seeing gaps that block revenue and fixing them, even when they're not in your job description. Don't wait for someone to ask you. Diagnose, build, execute.",
     colorClasses: {
       text: "text-neon-blue",
       bg: "bg-neon-blue/10",
       border: "border-neon-blue/20",
       badge: "border-neon-blue text-neon-blue"
     }
   }
 ];
 
 const WorkSampleCard = ({ sample, index }: { sample: WorkSample; index: number }) => {
   const [isOpen, setIsOpen] = useState(false);
 
   return (
     <Card className="card-neon group transition-all duration-300 h-full flex flex-col">
       <div className="flex items-center justify-between mb-4">
         <Badge variant="outline" className={sample.colorClasses.badge}>
           {sample.type}
         </Badge>
         <span className="text-xs text-muted-foreground">{sample.period}</span>
       </div>
       
       <h3 className={`text-xl font-bold mb-3 ${sample.colorClasses.text}`}>{sample.title}</h3>
       
       <p className="text-muted-foreground text-sm leading-relaxed mb-4">
         {sample.summary}
       </p>
 
       <Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex-grow flex flex-col">
         <CollapsibleTrigger asChild>
           <Button 
             variant="ghost" 
             size="sm" 
             className={`w-full justify-between ${sample.colorClasses.text} hover:bg-white/5 mb-4`}
           >
             {isOpen ? "Show less" : "Read full case study"}
             {isOpen ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
           </Button>
         </CollapsibleTrigger>
         
         <CollapsibleContent className="space-y-4 text-sm">
           <div>
             <h4 className={`font-semibold mb-2 ${sample.colorClasses.text}`}>Situation</h4>
             <p className="text-muted-foreground leading-relaxed">{sample.situation}</p>
           </div>
           
           <div>
             <h4 className={`font-semibold mb-2 ${sample.colorClasses.text}`}>Task</h4>
             <p className="text-muted-foreground leading-relaxed">{sample.task}</p>
           </div>
           
           <div>
             <h4 className={`font-semibold mb-2 ${sample.colorClasses.text}`}>Action</h4>
             <ul className="text-muted-foreground space-y-2">
               {sample.action.map((item, i) => (
                 <li key={i} className="flex items-start gap-2">
                   <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${sample.colorClasses.bg} shrink-0`} />
                   <span className="leading-relaxed">{item}</span>
                 </li>
               ))}
             </ul>
           </div>
           
           <div>
             <h4 className={`font-semibold mb-2 ${sample.colorClasses.text}`}>Result</h4>
             <ul className="text-muted-foreground space-y-2">
               {sample.result.map((item, i) => (
                 <li key={i} className="flex items-start gap-2">
                   <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${sample.colorClasses.bg} shrink-0`} />
                   <span className="leading-relaxed">{item}</span>
                 </li>
               ))}
             </ul>
           </div>
           
           <div className={`p-4 rounded-lg ${sample.colorClasses.bg} border ${sample.colorClasses.border}`}>
             <h4 className={`font-semibold mb-2 ${sample.colorClasses.text}`}>What I learned</h4>
             <p className="text-muted-foreground leading-relaxed">{sample.learning}</p>
           </div>
         </CollapsibleContent>
       </Collapsible>
 
       {sample.links && sample.links.length > 0 && (
         <div className="flex flex-wrap gap-2 mt-auto pt-4">
           {sample.links.map((link, linkIndex) => (
             <Button
               key={linkIndex}
               variant="outline"
               size="sm"
               className={`${sample.colorClasses.badge} hover:bg-white/5`}
               onClick={() => window.open(link.url, '_blank')}
             >
               {link.label}
               <ExternalLink className="w-3 h-3 ml-1" />
             </Button>
           ))}
         </div>
       )}
     </Card>
   );
 };
 
 const WorkSamples = () => {
   return (
     <section id="work-samples" className="py-20 px-6">
       <div className="max-w-7xl mx-auto">
         <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-secondary">
             Work Samples
           </h2>
           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
             Detailed case studies with situation, task, action, and results
           </p>
         </div>
 
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {workSamples.map((sample, index) => (
             <WorkSampleCard key={index} sample={sample} index={index} />
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default WorkSamples;

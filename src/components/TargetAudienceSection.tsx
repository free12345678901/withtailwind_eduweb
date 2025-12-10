import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Users, Building2 } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "10th, 12th, BCom, BBA, BCA graduates looking to build accounting careers",
    color: "bg-brand-navy",
  },
  {
    icon: Briefcase,
    title: "Job Seekers",
    description: "Individuals seeking accounting and finance positions in companies",
    color: "bg-brand-magenta",
  },
  {
    icon: Users,
    title: "Working Professionals",
    description: "Upgrade skills or transition to accounting and finance roles",
    color: "bg-brand-orange",
  },
  {
    icon: Building2,
    title: "Business Owners",
    description: "Manage your own business accounts and GST compliance efficiently",
    color: "bg-brand-purple",
  },
];

const TargetAudienceSection = () => {
  return (
    <section className="py-16 md:py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Who Should Join?
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
            Perfect for anyone looking to excel in accounting and finance
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <Card 
                key={index}
                className="p-5 sm:p-6 hover-lift border-0 bg-white/95 backdrop-blur-sm animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                  <div className={`${audience.color} p-3 sm:p-4 rounded-full shadow-medium`}>
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {audience.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {audience.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;

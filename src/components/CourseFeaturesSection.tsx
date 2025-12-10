import { Card } from "@/components/ui/card";
import { Clock, Monitor, FileText, Headphones } from "lucide-react";

const features = [
  {
    icon: Clock,
    label: "Duration",
    value: "1 - 18 Months",
    description: "Flexible pace to match your schedule",
  },
  {
    icon: Monitor,
    label: "Training Modes",
    value: "Online Live + Offline",
    description: "Choose what works best for you",
  },
  {
    icon: FileText,
    label: "Materials Included",
    value: "Notes + Practice Files",
    description: "Comprehensive learning resources",
  },
  {
    icon: Headphones,
    label: "Extra Benefits",
    value: "Job Assistance + Interview Prep",
    description: "Complete career support",
  },
];

const CourseFeaturesSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Course Features
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for successful learning and career growth
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 sm:p-8 hover-lift border-2 border-border bg-card/70 backdrop-blur-sm text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                  <div className="bg-gradient-cta p-3 sm:p-4 rounded-full shadow-medium">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-1">
                      {feature.label}
                    </p>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">
                      {feature.value}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseFeaturesSection;

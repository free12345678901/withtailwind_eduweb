import { Card } from "@/components/ui/card";
import { BookOpen, FileCheck, Package, MessageSquare, TrendingUp, Award } from "lucide-react";
import { courses } from "@/data/courses";

const BenefitsSection = () => {
  const generalBenefits = [
    {
      icon: MessageSquare,
      title: "Live Doubt Solving",
      description: "Real-time support and assignment guidance",
    },
    {
      icon: TrendingUp,
      title: "Career-Oriented Training",
      description: "Industry-ready skills for immediate job placement",
    },
    {
      icon: Award,
      title: "Government-Registered Certificate",
      description: "Recognized certification for professional credibility",
    },
  ];

  const courseBenefits = courses
    .filter(course => course.id !== 'advanced-web-dev') // Exclude placeholder course
    .map(course => ({
      icon: BookOpen, // Generic icon for all courses
      title: course.name,
      description: course.duration,
    }));

  const allBenefits = [...generalBenefits, ...courseBenefits];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Why Choose Our Courses?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive training that prepares you for real-world challenges with a wide range of courses.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {allBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="p-5 sm:p-6 hover-lift border-2 border-border bg-card/50 backdrop-blur-sm animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                  <div className="bg-gradient-cta p-3 sm:p-4 rounded-full shadow-medium">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {benefit.description}
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

export default BenefitsSection;

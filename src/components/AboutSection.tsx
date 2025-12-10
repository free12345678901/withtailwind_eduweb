import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Users, Building } from "lucide-react";
import instituteImage from "@/assets/institute-classroom.jpg";

const stats = [
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Students Trained",
  },
  {
    icon: BookOpen,
    value: "100+",
    label: "Courses Offered",
  },
  {
    icon: Building,
    value: "100%",
    label: "Job Assistance",
  },
];

const AboutSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <Badge className="bg-brand-magenta text-white text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 mb-3 sm:mb-4">
            🏆 Trusted Education Partner
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">
            About Angel Multimedia Institute
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for quality computer education and professional training
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in-left">
            
            <Card className="p-5 sm:p-6 bg-gradient-card border-2 border-border shadow-soft">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                Government-Registered Institute
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                With over 15 years of excellence in computer education, Angel Multimedia Institute 
                has established itself as a premier training center. We are a government-registered 
                institute committed to providing quality education and skill development.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                Our comprehensive curriculum covers 100+ courses ranging from basic computer skills 
                to advanced professional certifications. We pride ourselves on our practical approach, 
                experienced faculty, and proven track record of student success.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                Every student receives personalized attention, hands-on training, and continuous support 
                to ensure they achieve their career goals. Our government-approved certificates are 
                recognized across India and enhance your employability.
              </p>
            </Card>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card 
                    key={index}
                    className="p-3 sm:p-4 text-center hover-lift border-2 border-border animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-magenta mx-auto mb-1 sm:mb-2" />
                    <p className="text-xl sm:text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                  </Card>
                );
              })}
            </div>
          </div>
          
          {/* Right Image */}
          <div className="animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-strong hover-lift">
              <img 
                src={instituteImage} 
                alt="Angel Multimedia Institute Classroom" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
            
            {/* Floating Badges */}
            <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              <Card className="p-3 sm:p-4 bg-white shadow-soft">
                <p className="text-2xl sm:text-3xl font-bold text-brand-orange">100%</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Practical Training</p>
              </Card>
              <Card className="p-3 sm:p-4 bg-white shadow-soft">
                <p className="text-2xl sm:text-3xl font-bold text-brand-magenta">24/7</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Support Available</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

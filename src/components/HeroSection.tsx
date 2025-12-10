import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-tally-student.jpg";

const HeroSection = () => {

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-hero opacity-95"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-magenta/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <Badge className="bg-brand-orange text-white text-xs px-2 py-1 md:px-3 md:py-1 hover:bg-brand-orange/90">
                🎓 Government Approved Certificate
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Learn the Skills That Shape Tomorrow
              </h1>
              <p className="text-lg md:text-xl font-semibold text-brand-pink">
                From programming to design and digital marketing, gain hands-on experience with real-world tools and expert guidance from our skilled professors.
              </p>
              <p className="text-sm md:text-base text-white/90 max-w-xl">
                Live Online & Offline Classes | 100% Practical Training | Job Assistance
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-4 backdrop-blur-sm hover-scale"
              >
                Explore courses
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-2 pt-4 sm:pt-6">
              <div className="flex flex-col items-center text-center space-y-1">
                <div className="bg-white/20 backdrop-blur-sm p-1 sm:p-2 rounded-full">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="text-xs sm:text-sm font-semibold">15+ Years</p>
                <p className="text-xs text-white/80">Experience</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-1">
                <div className="bg-white/20 backdrop-blur-sm p-1 sm:p-2 rounded-full">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="text-xs sm:text-sm font-semibold">10,000+</p>
                <p className="text-xs text-white/80">Students Trained</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-1">
                <div className="bg-white/20 backdrop-blur-sm p-1 sm:p-2 rounded-full">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="text-xs sm:text-sm font-semibold">Govt</p>
                <p className="text-xs text-white/80">Approved</p>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative mt-6 lg:mt-0 animate-slide-in-right">
            <div className="relative rounded-xl overflow-hidden shadow-strong hover-lift">
              <img 
                src={heroImage} 
                alt="Student mastering Tally software" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white rounded-lg p-2 sm:p-3 shadow-strong animate-float">
              <p className="text-base sm:text-xl font-bold text-brand-magenta">100%</p>
              <p className="text-xs text-muted-foreground">Practical Training</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


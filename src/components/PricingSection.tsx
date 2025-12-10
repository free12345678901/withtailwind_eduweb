import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles } from "lucide-react";

const features = [
  "Complete Tally Prime Training",
  "GST Practical Sessions",
  "Live Doubt Solving",
  "Practice Materials & Notes",
  "Government Certificate",
  "Job Assistance",
  "Interview Preparation",
  "Lifetime Support",
];

const PricingSection = () => {
  const handleEnroll = () => {
    window.open('https://wa.me/919978186631?text=Hi, I want to enroll in Tally with GST course. Please share pricing details.', '_blank');
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-magenta/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <Badge className="bg-brand-orange text-white text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2 mb-3 sm:mb-4">
            🎉 Limited Time Offer
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Invest in Your Future
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Affordable pricing with flexible payment options
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="relative overflow-hidden border-4 border-brand-magenta shadow-strong hover-lift animate-scale-in">
            {/* Offer Badge */}
            <div className="absolute top-0 right-0">
              <Badge className="bg-gradient-cta text-white px-4 py-2 sm:px-6 sm:py-3 rounded-none rounded-bl-2xl text-sm sm:text-base font-bold shadow-medium">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 inline" />
                Limited Seats
              </Badge>
            </div>
            
            <div className="p-6 md:p-12">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                  Professional Certification Course
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Complete Tally with GST Training
                </p>
                
                <div className="mt-4 sm:mt-6 flex items-center justify-center gap-3 sm:gap-4">
                  <div className="text-left">
                    <p className="text-xs sm:text-sm text-muted-foreground line-through">Regular Price: ₹15,000</p>
                    <div className="flex items-baseline gap-1 sm:gap-2">
                      <span className="text-4xl sm:text-5xl font-bold text-brand-magenta">₹9,999</span>
                      <span className="text-base sm:text-xl text-muted-foreground">only</span>
                    </div>
                    <Badge className="bg-brand-orange/20 text-brand-orange border-0 mt-1 sm:mt-2 text-xs sm:text-sm">
                      Save ₹5,001 (33% OFF)
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <p className="font-semibold text-foreground text-base sm:text-lg">What's Included:</p>
                <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-1 sm:gap-2">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-brand-magenta mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-gradient-cta hover:opacity-90 text-white text-lg sm:text-xl py-6 sm:py-7 shadow-glow hover-scale"
                onClick={handleEnroll}
              >
                Enroll Now - Limited Seats Available
              </Button>
              
              <p className="text-center text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
                💳 EMI Options Available | 📞 Call for Group Discounts
              </p>
            </div>
          </Card>
          
          <div className="mt-6 sm:mt-8 text-center">
            <Badge className="bg-destructive/20 text-destructive border-0 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base">
              ⏰ Batch Starting Soon - Only 5 Seats Left!
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

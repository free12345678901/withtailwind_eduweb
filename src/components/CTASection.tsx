import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail } from "lucide-react";
import BgColour from "@/components/BgColour";

const CTASection = () => {

  const handleCallClick = () => {
    window.location.href = 'tel:+919978186631';
  };

  return (
    <section className="py-20">
      <BgColour variant="hero">
        <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Join Angel Multimedia Institute and unlock your full potential. Our expert-led courses and hands-on training will prepare you for a successful career in the digital world.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-brand-orange hover:bg-brand-orange/90 text-white text-base sm:text-xl px-6 sm:px-10 py-5 sm:py-7 shadow-glow hover-scale"
            >
              Enroll Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary text-base sm:text-xl px-6 sm:px-10 py-5 sm:py-7 backdrop-blur-sm hover-scale"
              onClick={handleCallClick}
            >
              <Phone className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              Call: 9978186631
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="pt-8 space-y-4">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white/90 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>WhatsApp: 9978186631</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Call: 9978186631</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Email: info@angelmultimedia.in</span>
              </div>
            </div>
            
            <p className="text-white/80 text-sm sm:text-lg">
              🏆 100% Job Assistance
            </p>
          </div>
        </div>
        </div>
      </BgColour>
    </section>
  );
};

export default CTASection;

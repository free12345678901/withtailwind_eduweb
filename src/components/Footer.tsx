import angelLogo from "@/assets/angel-logo.png";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <img src={angelLogo} alt="Angel Multimedia Institute" className="h-10 sm:h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-white/80 text-xs sm:text-sm">
              Government-registered institute with 15+ years of excellence in computer education and professional training.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80 text-xs sm:text-sm">
              <li><a href="#benefits" className="hover:text-white transition-smooth">Course Benefits</a></li>
              <li><a href="#syllabus" className="hover:text-white transition-smooth">Syllabus</a></li>
              <li><a href="#pricing" className="hover:text-white transition-smooth">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-smooth">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-white transition-smooth">FAQ</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-white/80 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mt-1 flex-shrink-0" />
                <a href="tel:+919978186631" className="hover:text-white transition-smooth">9978186631</a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mt-1 flex-shrink-0" />
                <a href="https://wa.me/919978186631" className="hover:text-white transition-smooth">WhatsApp: 9978186631</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mt-1 flex-shrink-0" />
                <a href="mailto:info@angelmultimedia.in" className="hover:text-white transition-smooth">info@angelmultimedia.in</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-1 flex-shrink-0" />
                <span>Gujarat, India</span>
              </li>
            </ul>
          </div>
          
          {/* Courses */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4">Popular Courses</h3>
            <ul className="space-y-2 text-white/80 text-xs sm:text-sm">
              <li>Tally with GST</li>
              <li>Basic Computer</li>
              <li>DCA & ADCA</li>
              <li>Web Development</li>
              <li>Graphic Design</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 sm:pt-8 text-center text-white/60 text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Angel Multimedia Institute. All rights reserved.</p>
          <p className="mt-2">Government Registered Institute | ISO Certified</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Button asChild variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

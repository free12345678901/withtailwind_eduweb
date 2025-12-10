import { Button } from "@/components/ui/button";
import angelLogo from "@/assets/angel-logo.png";

const Header = () => {
  const handleEnrollClick = () => {
    window.open('https://wa.me/919978186631?text=Hi, I want to enroll in Tally with GST course', '_blank');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={angelLogo}
              alt="Angel Multimedia Institute"
              className="h-10 md:h-12 w-auto"
            />
          </div>

          {/* CTA Button */}
          <Button
            className="bg-gradient-cta hover:opacity-90 text-white shadow-medium hover-scale px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base"
            onClick={handleEnrollClick}
          >
            <span className="hidden sm:inline">Enroll Now</span>
            <span className="sm:hidden">Enroll</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

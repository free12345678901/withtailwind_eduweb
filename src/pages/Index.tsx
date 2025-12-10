import Navigation from "@/components/Navigation";

import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import CourseFeaturesSection from "@/components/CourseFeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import PlacementSection from "@/components/PlacementSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div id="top" className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <section id="benefits">
          <BenefitsSection />
        </section>
        <TargetAudienceSection />
        <CourseFeaturesSection />
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="faq">
          <PlacementSection />
          <FAQSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

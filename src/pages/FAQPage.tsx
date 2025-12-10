import React from 'react';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import StudentSuccessSection from '../components/StudentSuccessSection';
import Navigation from '../components/Navigation';

export const FAQPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <FAQSection />
        <StudentSuccessSection courseName="FAQ" />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};
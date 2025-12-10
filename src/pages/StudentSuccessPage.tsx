import React from 'react';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import StudentSuccessSection from '../components/StudentSuccessSection';
import CTASection from '../components/CTASection';
import Navigation from '../components/Navigation';

export const StudentSuccessPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <StudentSuccessSection courseName="Student Success" />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};
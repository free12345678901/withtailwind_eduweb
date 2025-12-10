import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Helmet>
          <title>Privacy Policy | Angel Multimedia Institute</title>
          <meta name="description" content="Privacy policy detailing data collection, usage, protection, and user rights at Angel Multimedia Institute." />
        </Helmet>
        <section className="bg-gradient-to-r from-primary via-primary-dark to-primary-darker py-16 md:py-20">
          <div className="container mx-auto px-4 text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            <p className="mt-2 text-white/90">Effective Date: 01 Dec 2025</p>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 prose prose-slate max-w-3xl animate-fade-in">
            <h2>Overview</h2>
            <p>We respect your privacy. This policy explains how we collect, use, disclose, and protect your information when you use our website and services.</p>

            <h2>Information We Collect</h2>
            <ul>
              <li>Contact details such as name, email, and phone provided via forms.</li>
              <li>Course preferences and communication history.</li>
              <li>Usage data including pages visited, device information, and cookies.</li>
            </ul>

            <h2>How We Use Information</h2>
            <ul>
              <li>To respond to inquiries and provide requested services.</li>
              <li>To improve courses, content, and user experience.</li>
              <li>To send administrative messages and updates with your consent.</li>
            </ul>

            <h2>Data Sharing</h2>
            <p>We do not sell personal data. We may share data with trusted service providers solely to deliver our services, subject to confidentiality obligations and applicable law.</p>

            <h2>Cookies and Tracking</h2>
            <p>We use cookies to remember preferences and analyze site performance. You can control cookies via your browser settings.</p>

            <h2>Data Security</h2>
            <p>We implement technical and organizational safeguards to protect information against unauthorized access and misuse.</p>

            <h2>Your Rights</h2>
            <ul>
              <li>Access, correction, or deletion of your personal data.</li>
              <li>Withdraw consent for communications.</li>
              <li>Contact us to exercise these rights.</li>
            </ul>

            <h2>Contact</h2>
            <p>Email: info@angelmultimedia.in | Phone: +91 9978186631 | Location: Gujarat, India</p>

            <h2>Updates</h2>
            <p>We may update this policy. Changes will be posted on this page with a revised effective date.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

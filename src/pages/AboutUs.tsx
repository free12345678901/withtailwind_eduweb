import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Eye, Clock } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import PlacementSection from "@/components/PlacementSection";

const team = [
  { name: "A. Patel", role: "Director", bio: "Leads strategy and training quality.", image: "/assets/team-patel.jpg" },
  { name: "R. Shah", role: "Senior Instructor", bio: "Specializes in accounting and GST.", image: "/assets/team-shah.jpg" },
  { name: "M. Gupta", role: "Program Manager", bio: "Drives student success outcomes.", image: "/assets/team-gupta.jpg" },
  { name: "S. Khan", role: "Support Lead", bio: "Ensures smooth operations and support.", image: "/assets/team-khan.jpg" },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Helmet>
          <title>About Us | Angel Multimedia Institute</title>
          <meta name="description" content="Learn about our mission, vision, history, and team dedicated to practical, outcome-driven computer education." />
        </Helmet>
        <section className="gradient-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 md:mb-14 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-white">About Us</h1>
              <p className="mt-3 text-white/90 max-w-2xl mx-auto">Government-registered institute with outcome-focused training and 15+ years of excellence.</p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <Badge className="bg-brand-orange text-white">Govt Registered</Badge>
                <Badge className="bg-white text-primary">ISO Certified</Badge>
              </div>
            </div>
          </div>
        </section>
        <AboutSection />
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/95 rounded-2xl shadow-soft hover-lift animate-scale-in" style={{ animationDelay: '0ms' }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Target className="w-6 h-6 text-brand-orange" /> Mission</CardTitle>
                  <CardDescription>Empower learners with practical, job-ready digital skills.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm md:text-base text-muted-foreground">We deliver hands-on training and mentorship to build confidence, competence, and career readiness.</CardContent>
              </Card>
              <Card className="bg-white/95 rounded-2xl shadow-soft hover-lift animate-scale-in" style={{ animationDelay: '100ms' }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Eye className="w-6 h-6 text-brand-orange" /> Vision</CardTitle>
                  <CardDescription>Accessible, high-quality education for every learner.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm md:text-base text-muted-foreground">We envision a future where professional technology education is inclusive, practical, and impactful.</CardContent>
              </Card>
              <Card className="bg-white/95 rounded-2xl shadow-soft hover-lift animate-scale-in" style={{ animationDelay: '200ms' }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Clock className="w-6 h-6 text-brand-orange" /> History</CardTitle>
                  <CardDescription>15+ years, 10,000+ students trained.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm md:text-base text-muted-foreground">Founded to bridge the gap between theory and practice, we continue to enhance employability through real-world training.</CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white text-center animate-fade-in">Our Team</h2>
              <p className="text-white/90 text-center mt-2">Experienced instructors and mentors committed to student success.</p>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {team.map((member) => (
                  <Card key={member.name} aria-label={`${member.name}, ${member.role}`} className="bg-white/95 rounded-2xl shadow-soft hover-lift animate-scale-in">
                    <CardHeader className="flex flex-col items-center text-center">
                      <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                      <CardTitle className="text-lg md:text-xl">{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm md:text-base text-muted-foreground">{member.bio}</CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-10 flex items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-white"><Users className="w-5 h-5 text-brand-orange" /> 10,000+ Students</div>
                <div className="flex items-center gap-2 text-white"><Clock className="w-5 h-5 text-brand-orange" /> 15+ Years</div>
              </div>
            </div>
          </div>
        </section>
        <PlacementSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;

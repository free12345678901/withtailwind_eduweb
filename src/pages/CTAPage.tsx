import BgColour from "@/components/BgColour";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import StudentSuccessSection from "@/components/StudentSuccessSection";

const CTAPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">
                <BgColour variant="hero">
                    <div className="container mx-auto px-4 py-20">
                        <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-8 animate-fade-in">Enroll Now!</h1>
                        <p className="text-xl text-white text-center max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
                            Ready to transform your career? Join our courses today and unlock your full potential.
                        </p>
                    </div>
                </BgColour>
                <StudentSuccessSection courseName="Enrollment" />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

export default CTAPage;

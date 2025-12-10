import BgColour from "@/components/BgColour";
import { Clock, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import StudentSuccessSection from "@/components/StudentSuccessSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSectionCourse from "@/components/FAQSectionCourse";

const CoursePage2 = () => {
    // Hardcoded course data for a second sample course
    const course = {
        id: "sample-course-2",
        name: "Advanced Web Development",
        description: "This advanced course delves into modern web development techniques, covering popular frameworks, backend integration, and deployment strategies. Ideal for developers looking to deepen their expertise.",
        learningOutcomes: [
            "Master advanced concepts in a leading frontend framework (e.g., React, Angular, Vue).",
            "Develop robust backend APIs using Node.js, Python, or similar technologies.",
            "Implement efficient database solutions with SQL and NoSQL databases.",
            "Design and deploy scalable web applications to cloud platforms.",
            "Apply security best practices to protect web applications.",
        ],
        prerequisites: [
            "Solid understanding of web development fundamentals (HTML, CSS, JavaScript).",
            "Familiarity with at least one frontend framework.",
            "Basic knowledge of command-line interfaces.",
        ],
        curriculum: [
            {
                title: "Module 1: Advanced Frontend Frameworks",
                details: "Deep dive into a chosen frontend framework, covering state management, routing, and performance optimization.",
                examples: "Building a complex single-page application with advanced features.",
                applications: "Creating highly interactive and performant user interfaces.",
            },
            {
                title: "Module 2: Backend Development with Node.js",
                details: "Learn to build RESTful APIs using Node.js and Express, including authentication and authorization.",
                examples: "Developing a user authentication system, creating a blog API.",
                applications: "Powering frontend applications with scalable backend services.",
            },
            {
                title: "Module 3: Database Management",
                details: "Explore relational (PostgreSQL) and non-relational (MongoDB) databases, ORMs, and database design.",
                examples: "Designing a database schema for an e-commerce application, querying data efficiently.",
                applications: "Storing and managing application data effectively.",
            },
            {
                title: "Module 4: API Design and Integration",
                details: "Understand principles of good API design, consuming third-party APIs, and GraphQL basics.",
                examples: "Integrating with a payment gateway, building a weather application using external APIs.",
                applications: "Connecting different services and data sources.",
            },
            {
                title: "Module 5: Deployment and DevOps",
                details: "Learn about cloud deployment (AWS, Azure, GCP), CI/CD pipelines, and containerization with Docker.",
                examples: "Deploying a full-stack application to a cloud server, setting up automated deployments.",
                applications: "Bringing web applications to production and maintaining them.",
            },
        ],
        duration: "12 Weeks",
        topics: [
            "Frontend Frameworks",
            "Backend Technologies",
            "Database Management",
            "API Design",
            "Deployment Strategies",
            "Security Best Practices",
        ],
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">
                <Helmet>
                    <title>{course.name} - EduWeb Courses</title>
                    <meta name="description" content={`Learn ${course.name} in ${course.duration}. Topics include: ${course.topics.join(', ')}.`} />
                </Helmet>
                <BgColour variant="hero">
                    <div className="container mx-auto px-4 py-20">
                        <div className="max-w-5xl mx-auto">
                            {/* Course Header */}
                            <div className="text-center mb-12 animate-fade-in">
                                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                    {course.name}
                                </h1>
                                <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                                    {course.description}
                                </p>
                                <div className="flex items-center justify-center gap-6 text-white/90 text-xl">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-6 h-6 text-brand-orange" />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <BookOpen className="w-6 h-6 text-brand-orange" />
                                        <span>{course.topics.length} Topics</span>
                                    </div>
                                </div>
                            </div>

                            {/* Course Description */}
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20 mb-12 animate-fade-in" style={{ animationDelay: '100ms' }}>
                                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <BookOpen className="w-8 h-8 text-brand-orange" />
                                    Course Overview
                                </h2>
                                <p className="text-white/90 text-lg leading-relaxed">
                                    {course.description}
                                </p>
                            </div>

                            {/* Learning Outcomes */}
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20 mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
                                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <BookOpen className="w-8 h-8 text-brand-orange" />
                                    What You'll Learn
                                </h2>
                                <ul className="list-disc list-inside text-white/90 text-lg space-y-3">
                                    {course.learningOutcomes.map((outcome, index) => (
                                        <li key={index}>{outcome}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Prerequisites */}
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20 mb-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
                                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <BookOpen className="w-8 h-8 text-brand-orange" />
                                    Prerequisites
                                </h2>
                                <ul className="list-disc list-inside text-white/90 text-lg space-y-3">
                                    {course.prerequisites.map((prereq, index) => (
                                        <li key={index}>{prereq}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Course Topics */}
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20 animate-fade-in" style={{ animationDelay: '400ms' }}>
                                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                                    <BookOpen className="w-8 h-8 text-brand-orange" />
                                    Course Curriculum
                                </h2>
                                <div className="space-y-6">
                                    {course.curriculum.map((module, index) => (
                                        <details key={index} className="group bg-white/5 rounded-lg p-5 shadow-md animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                                            <summary className="flex justify-between items-center font-semibold text-xl text-white cursor-pointer">
                                                {module.title}
                                                <span className="group-open:hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-brand-orange"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg></span>
                                                <span className="hidden group-open:block"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-brand-orange"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" /></svg></span>
                                            </summary>
                                            <div className="mt-4 text-white/80 space-y-3">
                                                <p><strong>Details:</strong> {module.details}</p>
                                                <p><strong>Examples:</strong> {module.examples}</p>
                                                <p><strong>Applications:</strong> {module.applications}</p>
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>


                        </div>
                    </div>
                </BgColour>
                <StudentSuccessSection courseName={course.name} />
                <ReviewsSection courseName={course.name} />

                {/* FAQ Section */}
                <FAQSectionCourse courseName={course.name} />

                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

export default CoursePage2;

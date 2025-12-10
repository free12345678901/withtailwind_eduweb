import BgColour from "@/components/BgColour";
import { Clock, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import StudentSuccessSection from "@/components/StudentSuccessSection";
import FAQSectionCourse from "@/components/FAQSectionCourse";

const CoursePage = () => {
    // Hardcoded course data for a sample course
    const course = {
        id: "sample-course",
        name: "Web Development Fundamentals",
        description: "This comprehensive course covers the essential building blocks of modern web development, from foundational languages to popular frameworks. Perfect for beginners and those looking to solidify their understanding.",
        learningOutcomes: [
            "Master HTML5 for structuring web content.",
            "Style web pages effectively with CSS3, including responsive design.",
            "Develop interactive web experiences using JavaScript.",
            "Understand the basics of React for building dynamic user interfaces.",
            "Utilize Git for version control and collaboration.",
        ],
        prerequisites: [
            "Basic computer literacy.",
            "Familiarity with internet browsing.",
            "No prior programming experience required.",
        ],
        curriculum: [
            {
                title: "Module 1: HTML Essentials",
                details: "Learn the core concepts of HTML, including tags, attributes, semantic HTML5, and forms.",
                examples: "Building a personal portfolio page structure.",
                applications: "Creating accessible and well-structured web content.",
            },
            {
                title: "Module 2: CSS Styling & Layout",
                details: "Dive into CSS selectors, properties, Flexbox, Grid, and responsive design principles.",
                examples: "Styling a blog layout, making a website mobile-friendly.",
                applications: "Designing visually appealing and adaptable user interfaces.",
            },
            {
                title: "Module 3: JavaScript Fundamentals",
                details: "Explore variables, data types, control flow, functions, DOM manipulation, and event handling.",
                examples: "Implementing a to-do list, creating interactive image galleries.",
                applications: "Adding dynamic behavior and interactivity to web pages.",
            },
            {
                title: "Module 4: Introduction to React",
                details: "Understand React components, JSX, state, props, and basic hooks.",
                examples: "Building a simple counter application, displaying data from an API.",
                applications: "Developing modern, component-based single-page applications.",
            },
            {
                title: "Module 5: Version Control with Git",
                details: "Learn Git commands, branching, merging, and collaborating on GitHub.",
                examples: "Tracking changes in a project, resolving merge conflicts.",
                applications: "Managing codebases effectively and working in development teams.",
            },
        ],
        duration: "8 Weeks",
        topics: [
            "HTML Basics",
            "CSS Styling",
            "JavaScript Essentials",
            "Responsive Design",
            "Introduction to React",
            "Version Control with Git",
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
                {/* Student Success Section */}
                <StudentSuccessSection courseName={course.name} />

                {/* FAQ Section */}
                <FAQSectionCourse courseName={course.name} />

                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

export default CoursePage;

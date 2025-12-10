import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Clock, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import StudentSuccessSection from "@/components/StudentSuccessSection";
import FAQSectionCourse from "@/components/FAQSectionCourse";
import BgColour from "@/components/BgColour";
import { coursePages, CoursePageContent } from "@/data/courses";

const CourseDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const course: CoursePageContent | undefined = coursePages.find(c => c.slug === slug);

    if (!course) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navigation />
                <main className="flex-grow flex items-center justify-center">
                    <h1 className="text-3xl font-bold text-red-500">Course Not Found</h1>
                </main>
                <Footer />
            </div>
        );
    }

    const allTopics = course.curriculum.flatMap(module => module.items);
    const metaDescription = `${course.name} - ${course.description}`;

    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">
                <Helmet>
                    <title>{course.name} - EduWeb Courses</title>
                    <meta name="description" content={metaDescription} />
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
                                        <span>{course.topicLabel}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Course Overview */}
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20 mb-12 animate-fade-in" style={{ animationDelay: '100ms' }}>
                                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <BookOpen className="w-8 h-8 text-brand-orange" />
                                    Course Overview
                                </h2>
                                <p className="text-white/90 text-lg leading-relaxed">
                                    {course.overview}
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

                            {/* Course Curriculum */}
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
                                                {module.description && (
                                                    <p>{module.description}</p>
                                                )}
                                                <ul className="list-disc list-inside space-y-2">
                                                    {module.items.map((item, itemIndex) => (
                                                        <li key={itemIndex}>{item}</li>
                                                    ))}
                                                </ul>
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

export default CourseDetail;

import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionCourseProps {
    courseName: string;
}

const FAQSectionCourse: React.FC<FAQSectionCourseProps> = ({ courseName }) => {
    // Hardcoded FAQs for demonstration. In a real application, this would come from props or an API.
    const faqs: FAQItem[] = [
        {
            question: `What are the prerequisites for the ${courseName} course?`,
            answer: `For the ${courseName} course, we recommend basic computer literacy and familiarity with internet browsing. No prior programming experience is required, making it perfect for beginners.`,
        },
        {
            question: `How long does the ${courseName} course take to complete?`,
            answer: `The ${courseName} course is designed to be completed in 8 weeks, with a recommended study time of 10-15 hours per week. However, you can learn at your own pace.`,
        },
        {
            question: `What kind of support is available during the ${courseName} course?`,
            answer: `We offer comprehensive support for the ${courseName} course, including dedicated instructors, a community forum, and regular Q&A sessions to help you with any challenges.`,
        },
        {
            question: `Will I receive a certificate after completing the ${courseName} course?`,
            answer: `Yes, upon successful completion of all modules and projects in the ${courseName} course, you will receive a certificate of completion from EduWeb.`,
        },
        {
            question: `What career opportunities can I pursue after the ${courseName} course?`,
            answer: `Graduates of the ${courseName} course are well-prepared for roles such as Junior Web Developer, Frontend Developer, Backend Developer, and Fullstack Developer, depending on their specialization.`,
        },
    ];

    return (
        <section id="faq" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 md:mb-8">
                    Frequently Asked Questions about {courseName}
                </h2>
                <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                    Find answers to the most common questions about our {courseName} course.
                </p>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <details key={index} className="group bg-gray-50 p-5 rounded-lg shadow-md">
                            <summary className="flex justify-between items-center font-semibold text-lg text-gray-800 cursor-pointer">
                                {faq.question}
                                <ChevronDown className="w-5 h-5 text-brand-orange transform group-open:rotate-180 transition-transform duration-200" />
                            </summary>
                            <div className="mt-4 text-gray-600 leading-relaxed">
                                <p>{faq.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSectionCourse;

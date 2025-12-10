import React from 'react';
import { Award, Users, TrendingUp } from 'lucide-react';

interface StudentSuccessSectionProps {
  courseName: string;
}

const StudentSuccessSection: React.FC<StudentSuccessSectionProps> = ({ courseName }) => {
  // Hardcoded data for demonstration. In a real application, this would come from props or an API.
  const successData = {
    metrics: [
      { icon: <Award className="w-8 h-8 text-brand-orange" />, value: '95%', label: 'Completion Rate' },
      { icon: <Users className="w-8 h-8 text-brand-orange" />, value: '90%', label: 'Job Placement' },
      { icon: <TrendingUp className="w-8 h-8 text-brand-orange" />, value: '30%+', label: 'Salary Increase' },
    ],
    testimonials: [
      {
        name: 'Alice Johnson',
        quote: `"This ${courseName} course transformed my career! The instructors were amazing, and the curriculum was incredibly practical. I landed my dream job shortly after completing it."`,
        image: 'https://randomuser.me/api/portraits/women/1.jpg',
      },
      {
        name: 'Bob Williams',
        quote: `"I highly recommend the ${courseName} course. It was challenging but rewarding. The hands-on projects gave me the confidence I needed to excel in my new role."`,
        image: 'https://randomuser.me/api/portraits/men/2.jpg',
      },
      {
        name: 'Charlie Brown',
        quote: `"Before this ${courseName} course, I felt stuck. Now, I have a clear path forward and the skills to back it up. Best investment I've ever made!"`,
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
      },
    ],
  };

  return (
    <section id="student-success" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 md:mb-8">
          Student Success in {courseName}
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Our students achieve incredible results. See how the {courseName} course has helped them succeed.
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {successData.metrics.map((metric, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                {metric.icon}
              </div>
              <p className="text-5xl font-bold text-brand-blue mb-2">{metric.value}</p>
              <p className="text-xl text-gray-700">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {successData.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-brand-orange"
              />
              <p className="text-lg italic text-gray-700 mb-4">"{testimonial.quote}"</p>
              <p className="font-bold text-brand-blue">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentSuccessSection;

import React from 'react';

const PlacementSection = () => {
  return (
    <section id="placement" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Students Placed In
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for student placement cards */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img
              src="/assets/placeholder-student.jpg"
              alt="Student Name"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-900">Student Name</h3>
            <p className="text-primary-dark">Course Name</p>
            <img
              src="/assets/placeholder-company.png"
              alt="Company Logo"
              className="w-32 mx-auto mt-4"
            />
            <p className="text-gray-600 mt-2">Company Name</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img
              src="/assets/placeholder-student.jpg"
              alt="Student Name"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-900">Student Name</h3>
            <p className="text-primary-dark">Course Name</p>
            <img
              src="/assets/placeholder-company.png"
              alt="Company Logo"
              className="w-32 mx-auto mt-4"
            />
            <p className="text-gray-600 mt-2">Company Name</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img
              src="/assets/placeholder-student.jpg"
              alt="Student Name"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-900">Student Name</h3>
            <p className="text-primary-dark">Course Name</p>
            <img
              src="/assets/placeholder-company.png"
              alt="Company Logo"
              className="w-32 mx-auto mt-4"
            />
            <p className="text-gray-600 mt-2">Company Name</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementSection;

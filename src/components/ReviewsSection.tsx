import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: string;
  studentName: string;
  rating: number;
  comment: string;
}

interface ReviewsSectionProps {
  courseName: string;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ courseName }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        // Simulate API call
        const response = await new Promise<Review[]>((resolve) =>
          setTimeout(() => {
            resolve([
              {
                id: '1',
                studentName: 'Alice Smith',
                rating: 5,
                comment: 'This course was absolutely fantastic! I learned so much and the instructor was great.'
              },
              {
                id: '2',
                studentName: 'Bob Johnson',
                rating: 4,
                comment: 'Very comprehensive course. Some parts were a bit challenging but overall a great experience.'
              },
              {
                id: '3',
                studentName: 'Charlie Brown',
                rating: 5,
                comment: 'Highly recommend! The content was engaging and easy to understand.'
              },
              {
                id: '4',
                studentName: 'Diana Prince',
                rating: 4,
                comment: 'Good course, but I wish there were more practical examples.'
              },
            ]);
          }, 1000)
        );
        setReviews(response);
      } catch (err) {
        setError('Failed to fetch reviews.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [courseName]);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            Student Reviews for {courseName}
          </h2>
          <p className="text-center text-gray-600 text-lg">Loading reviews...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            Student Reviews for {courseName}
          </h2>
          <p className="text-center text-red-500 text-lg">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Student Reviews for {courseName}
        </h2>

        {reviews.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No reviews yet. Be the first to review!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-brand-orange">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        fill={i < review.rating ? 'currentColor' : 'none'}
                        strokeWidth={1.5}
                        className="w-5 h-5"
                      />
                    ))}
                  </div>
                  <p className="ml-3 text-gray-700 font-semibold">{review.studentName}</p>
                </div>
                <p className="text-gray-600 leading-relaxed">"{review.comment}"</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;

import React from 'react';
import { ReviewProps } from '@/interfaces/index';

const ReviewSection: React.FC<{ reviews: ReviewProps[] }> = ({ reviews }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-sm ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-6">Reviews</h3>
      <div className="space-y-6">
        {reviews && reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="border-b pb-6 last:border-b-0">
              <div className="flex items-start space-x-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0" 
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet</p>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
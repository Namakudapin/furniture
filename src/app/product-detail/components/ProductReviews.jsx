import React from 'react';
import { Star } from 'lucide-react';

const ProductReviews = () => {
  const reviewStats = {
    average: 4.5,
    total: 2047,
    breakdown: [
      { stars: 5, count: 2023 },
      { stars: 4, count: 20 },
      { stars: 3, count: 4 },
      { stars: 2, count: 0 },
      { stars: 1, count: 0 }
    ]
  };

  const reviews = [
    {
      id: 1,
      author: "Darrell Howard",
      rating: 5,
      content: "This is amazing product! Have.",
      date: "July 12, 2023 12:35 PM",
      likes: 516
    },
    {
      id: 2,
      author: "Darlene Robertson",
      rating: 5,
      content: "This is amazing product! Have.",
      date: "July 12, 2023 1:35 PM",
      likes: 82
    },
    {
      id: 3,
      author: "Kathryn Murphy",
      rating: 5,
      content: "This is amazing product! Have.",
      date: "July 12, 2023 2:00 PM",
      likes: 9
    },
    {
      id: 4,
      author: "Ronald Richards",
      rating: 5,
      content: "This is amazing product! Have.",
      date: "July 12, 2023 3:00 PM",
      likes: 104
    }
  ];

  const ReviewStars = ({ rating }) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-orange-400 text-orange-400' : 'fill-gray-200 text-gray-200'}`}
        />
      ))}
    </div>
  );

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6 text-black">Product Reviews</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left column - Statistics */}
        <div className="md:col-span-1">
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-black">{reviewStats.average}</span>
              <ReviewStars rating={reviewStats.average} />
            </div>
            <p className="text-sm text-gray-600">from {reviewStats.total} reviews</p>
          </div>

          <div className="space-y-2">
            {reviewStats.breakdown.map((stat) => (
              <div key={stat.stars} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                />
                <div className="flex items-center gap-1">
                  <ReviewStars rating={stat.stars} />
                  <span className="text-sm text-gray-600">({stat.count})</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-2">
            <div className="font-semibold mb-4 text-black">Review Topics</div>
            {['Product Quality', 'Seller Services', 'Product Price', 'Shipment', 'Match with Description'].map((topic) => (
              <div key={topic} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                />
                <span className="text-sm text-black">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - Reviews */}
        <div className="md:col-span-3">
          <div className="flex gap-4 mb-6">
            <button className="px-4 py-2 rounded-full bg-gray-100 text-sm text-black">All Reviews</button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-sm text-black flex items-center gap-2">
              With Photo & Video
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-sm text-black">With Description</button>
          </div>

          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-6">
                <ReviewStars rating={review.rating} />
                <p className="my-2 text-black">{review.content}</p>
                <div className="text-sm text-gray-500 mb-2">{review.date}</div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <img
                      src="/sofa 1.svg"
                      alt={review.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm text-black">{review.author}</span>
                  </div>
                  <button className="text-sm text-gray-600 flex items-center gap-1">
                    👍 {review.likes}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            <button className="px-3 py-1 rounded border border-gray-300 bg-gray-50 text-black">1</button>
            <button className="px-3 py-1 rounded border border-gray-300 text-black">2</button>
            <button className="px-3 py-1 rounded border border-gray-300 text-black">3</button>
            <button className="px-3 py-1 rounded border border-gray-300 text-black">...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;

import React, { useState } from 'react';

const ProductInfo = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div>
      <p className="text-black text-sm">John Lewis ANYDAY</p>
      <h1 className="text-black text-2xl font-medium mt-1">Green Sofa, Modern Design, 3-Seater</h1>
      <div className="flex items-center space-x-4">
        <div className="flex items-center gap-4">
          <span className="text-black text-gray-500 line-through">£500.00</span>
          <span className="text-black text-xl font-medium">£350.00</span>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-black text-sm">500 Sold</span>
          <span className="text-yellow-400">★</span>
          <span className="text-black font-medium">4.7</span>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-black font-medium mb-2">Description:</h3>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            showFullDescription ? 'max-h-[500px]' : 'max-h-[80px]'
          }`}
        >
          <p className="text-black text-sm">
            {showFullDescription ? (
              <>
                A stylish and comfortable green sofa with a modern design. This 3-seater is perfect for any living room, offering both comfort and sophistication. The sofa features high-quality fabric, durable frame, and premium cushioning, ensuring long-lasting comfort for your space. The rich green color adds a fresh and vibrant touch to your home décor, making it an ideal choice for modern interiors.
              </>
            ) : (
              <>
                A stylish and comfortable green sofa with a modern design. This 3-seater is perfect for any living room, offering both comfort and sophistication.
              </>
            )}
          </p>
        </div>
        <button
          onClick={handleToggleDescription}
          className="text-black text-sm hover:underline mt-2"
        >
          {showFullDescription ? 'See Less...' : 'See More...'}
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;

import { useState, useEffect } from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/20/solid';
import { ProductCard } from './ProductCard';

export const ProductGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    { id: 1, onSale: false, inStock: true },
    { id: 2, onSale: false, inStock: false },
    { id: 3, onSale: true, inStock: true },
    { id: 4, onSale: true, inStock: true },
    { id: 5, onSale: true, inStock: true },
    { id: 6, onSale: true, inStock: true },
    { id: 7, onSale: true, inStock: false },
    { id: 8, onSale: false, inStock: true },
    { id: 9, onSale: true, inStock: true },
    { id: 10, onSale: true, inStock: false },
    { id: 11, onSale: false, inStock: true },
    { id: 12, onSale: true, inStock: true },
    { id: 13, onSale: false, inStock: true },
    { id: 14, onSale: true, inStock: true },
    { id: 15, onSale: false, inStock: true },
    { id: 16, onSale: true, inStock: true },
  ];

  const totalSlides = products.length;
  const slidesToShow = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + slidesToShow) >= totalSlides ? 0 : prevIndex + slidesToShow;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? totalSlides - slidesToShow : prevIndex - slidesToShow;
    });
  };

  const renderDots = () => {
    const totalDots = Math.ceil(totalSlides / slidesToShow);
    return [...Array(totalDots)].map((_, index) => (
      <button
        key={index}
        className={`h-2 w-2 rounded-full transition-all ${
          currentIndex >= index * slidesToShow && currentIndex < (index + 1) * slidesToShow
            ? 'bg-black w-4'
            : 'bg-gray-300'
        }`}
        onClick={() => setCurrentIndex(index * slidesToShow)}
      />
    ));
  };

  return (
    <div className="flex-1 px-2 md:px-4 py-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-medium text-black text-lg md:text-xl">Related Products</h1>
        <button className="text-sm text-black flex items-center hover:underline">
          See All
          <ChevronRightIcon className="w-4 h-4 ml-1 text-black" />
        </button>
      </div>

      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <ChevronLeftIcon className="w-6 h-6 text-black" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <ChevronRightIcon className="w-6 h-6 text-black" />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex / totalSlides) * 100}%)`,
              width: `${(totalSlides * 100) / slidesToShow}%`,
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="px-2"
                style={{ width: `${100 / slidesToShow}%` }}
              >
                <ProductCard
                  onSale={product.onSale}
                  inStock={product.inStock}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-4 gap-2">
          {renderDots()}
        </div>
      </div>
    </div>
  );
};

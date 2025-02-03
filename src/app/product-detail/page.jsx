"use client";

import React, { useState } from 'react';
import ProductImage from './components/ProductImage';
import ThumbnailGallery from './components/ThumbnailGallery';
import ProductInfo from './components/ProductInfo';
import ColorSelection from './components/ColorSelection';
import SizeSelection from './components/SizeSelection';
import ActionButtons from './components/ActionButton';
import ProductReviews from './components/ProductReviews';
import { ProductSlider } from './components/ProductSlider';

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState('8');
  const sizes = ['6', '8', '10', '14', '18', '20'];
  const colors = [
    { name: 'Royal Brown', code: 'bg-[#8B4513]' },
    { name: 'Light Gray', code: 'bg-gray-200' },
    { name: 'Blue', code: 'bg-blue-600' },
    { name: 'Black', code: 'bg-black' },
  ];

  const handleBack = () => {
    window.history.back(); 
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <button 
          onClick={handleBack} 
          className="text-black text-sm mb-4 hover:underline"
        >
          &larr; Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <ProductImage />
            <ThumbnailGallery />
          </div>

          <div className="space-y-6">
            <ProductInfo />
            <div className="space-y-6">
              <ColorSelection colors={colors} />
              <SizeSelection
                sizes={sizes}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
              <ActionButtons />
              <button className="text-black text-sm hover:underline">
                Delivery T&C
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 my-8"></div>
        <ProductSlider />
        <ProductReviews />
      </div>
    </div>
  );
};

export default ProductDetail;

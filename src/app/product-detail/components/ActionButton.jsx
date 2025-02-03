// components/ActionButtons.js
import React from 'react';

const ActionButtons = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-900">
        Add To Cart
      </button>
      <button className="w-full bg-white text-black py-3 rounded border border-gray-200 hover:border-gray-300">
        Checkout Now
      </button>
    </div>
  );
};

export default ActionButtons;

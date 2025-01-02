import React from 'react';

const ProductSection = () => {
  const products = [
    {
      name: 'Nordic CHAIR',
      price: 50.00,
      image: 'product-2.svg'
    },
    {
      name: 'Kruzo Aero Chair',
      price: 78.00,
      image: 'product-2.svg'
    },
    {
      name: 'Ergonomic Chair',
      price: 43.00,
      image: 'product-2.svg'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/3">
          <h2 className="text-3xl font-bold mb-4 text-black">
            Crafted with excellent material.
          </h2>
          <p className="text-gray-600 mb-6">
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done.
          </p>
          <button className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
            Explore
          </button>
        </div>

        <div className="lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group relative bg-white rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300">
                <div className="relative">
                  <div className="relative p-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto transform transition-transform duration-300 group-hover:-translate-y-24" // Gambar akan naik lebih banyak
                    />
                  </div>
                </div>
                <div className="mt-4 px-6 py-4">
                  <h3 className="font-medium text-gray-900">{product.name}</h3>
                  <p className="text-gray-900">${product.price.toFixed(2)}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center -mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-2 mt-12">
            <div className="w-2 h-2 rounded-full bg-[#3B5D50]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;

import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ProductCard } from './ProductCard';
import { useState } from 'react';

export const ProductGrid = () => {
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
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const currentData = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex-1 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="font-medium text-black text-lg md:text-xl">
          "Sofa" <span className="text-sm md:text-base">{products.length} Results</span>
        </h1>
        <button className="border rounded px-3 py-1 text-sm flex items-center gap-1 text-black">
          Sort by
          <ChevronDownIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Grid Produk (Responsive) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {currentData.map((product) => (
          <ProductCard
            key={product.id}
            onSale={product.onSale}
            inStock={product.inStock}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center sm:justify-end items-center mt-6">
        <div className="flex flex-wrap items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className={`px-3 py-1 border rounded text-xs sm:text-sm ${
              currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'text-black'
            }`}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 border rounded text-xs sm:text-sm ${
                currentPage === index + 1 ? 'bg-black text-white' : 'text-black'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className={`px-3 py-1 border rounded text-xs sm:text-sm ${
              currentPage === totalPages ? 'bg-gray-200 text-gray-500' : 'text-black'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

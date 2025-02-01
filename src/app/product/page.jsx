"use client";

import { useState } from 'react';
import { ProductGrid } from './components/ProductGrid';
import { Header } from './components/Header';
import SidebarFilter from './components/filters/SidebarFilter';

const ProductPage = () => {
  const [filters, setFilters] = useState({
    all: true,
    runningShoes: false,
    category3: false,
    category4: false,
    inStock: false,
    outOfStock: false
  });

  const handleFilterChange = (filterName) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-black mb-4">
          Product / Search 
        </div>

        <div className="flex gap-8">
          <SidebarFilter filters={filters} handleFilterChange={handleFilterChange} />
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
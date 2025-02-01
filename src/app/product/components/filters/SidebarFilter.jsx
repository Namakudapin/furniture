import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react';
import { AppliedFilters } from './AppliedFilters';
import { CategoryFilter } from './CategoryFilter';
import { StockFilter } from './StockFilter';
import { SizeFilter } from './SizedFilter';
import { ColorFilter } from './ColorFilter';


export const SidebarFilter = ({ filters, handleFilterChange }) => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const FilterContent = () => (
    <div className="space-y-4">
      <AppliedFilters />
      <CategoryFilter filters={filters} handleFilterChange={handleFilterChange} />
      <StockFilter filters={filters} handleFilterChange={handleFilterChange} />
      <SizeFilter />
      <ColorFilter />
    </div>
  );

  return (
    <>
      <div className="lg:hidden fixed bottom-4 right-4 z-30">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="bg-black text-white rounded-full p-4 shadow-lg flex items-center gap-2"
        >
          <Menu size={20} />
          <span className="font-medium">Filters</span>
        </button>
      </div>

      {/* Mobile Filter Drawer with Animation */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-white p-6 overflow-y-auto z-50 shadow-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-medium text-lg">Filters</h2>
                <button 
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>
              <FilterContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar (Tetap Tanpa Animasi) */}
      <div className="hidden lg:block w-64 flex-shrink-0 sticky top-4 self-start">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-medium text-black text-lg">Filters</h2>
        </div>
        <FilterContent />
      </div>
    </>
  );
};

export default SidebarFilter;

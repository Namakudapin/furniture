import { AppliedFilters } from "./AppliedFilters";
import { CategoryFilter } from "./CategoryFilter";
import { ColorFilter } from "./ColorFilter";
import { SizeFilter } from "./SizedFilter";
import { StockFilter } from "./StockFilter";

export const SidebarFIlter = ({ filters, handleFilterChange }) => (
    <div className="w-64 flex-shrink-0 sticky top-0 self-start">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-medium text-black">◀ Filters</h2>
      </div>
  
      <div className="space-y-4">
        <AppliedFilters />
        <CategoryFilter filters={filters} handleFilterChange={handleFilterChange} />
        <StockFilter filters={filters} handleFilterChange={handleFilterChange} />
        <SizeFilter />
        <ColorFilter />
      </div>
    </div>
  );
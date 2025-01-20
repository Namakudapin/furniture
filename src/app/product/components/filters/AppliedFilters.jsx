export const AppliedFilters = () => (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-black">Applied Filters</span>
        <button className="text-xs text-black">clear all</button>
      </div>
      <div className="flex flex-wrap gap-1">
        <span className="text-xs bg-gray-100 px-2 py-1 rounded-sm text-black">All ×</span>
        <span className="text-xs bg-gray-100 px-2 py-1 rounded-sm text-black">Running Shoes ×</span>
        <span className="text-xs bg-gray-100 px-2 py-1 rounded-sm text-black">Red ×</span>
      </div>
    </div>
  );
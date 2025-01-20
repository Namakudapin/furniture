export const CategoryFilter = ({ filters, handleFilterChange }) => (
    <div>
      <h3 className="font-medium mb-2 text-black">Category</h3>
      <div className="space-y-2">
        {[
          { id: 'all', label: 'All' },
          { id: 'runningShoes', label: 'Running Shoes' },
          { id: 'category3', label: 'Category 3' },
          { id: 'category4', label: 'Category 4' },
        ].map(({ id, label }) => (
          <label key={id} className="flex items-center gap-2">
            <input 
              type="checkbox" 
              checked={filters[id]}
              onChange={() => handleFilterChange(id)}
              className="rounded" 
            />
            <span className="text-sm text-black">{label}</span>
          </label>
        ))}
      </div>
    </div>
  );
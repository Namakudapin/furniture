export const StockFilter = ({ filters, handleFilterChange }) => (
    <div>
      <h3 className="font-medium mb-2 text-black">Stock Status</h3>
      <div className="space-y-2">
        {[
          { id: 'inStock', label: 'In Stock' },
          { id: 'outOfStock', label: 'Out of Stock' },
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
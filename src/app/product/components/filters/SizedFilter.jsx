export const SizeFilter = () => (
    <div>
      <h3 className="font-medium mb-2 text-black">Size</h3>
      <div className="flex flex-wrap gap-2">
        {['7', '8', '9', '10'].map((size) => (
          <button
            key={size}
            className="w-8 h-8 text-sm border rounded-sm hover:bg-gray-50 text-black"
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
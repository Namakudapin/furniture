const SizeSelection = ({ sizes, selectedSize, setSelectedSize }) => (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-black font-medium">Size: {selectedSize}</h3>
        <button className="text-black text-sm hover:underline">
          View Size Chart
        </button>
      </div>
      <div className="grid grid-cols-6 gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`py-2 text-center rounded ${
              selectedSize === size
                ? 'bg-black text-white'
                : 'border border-gray-200 hover:border-gray-300'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
  
  export default SizeSelection;
  
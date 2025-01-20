export const ProductCard = ({ onSale, inStock }) => (
    <div className="bg-gray-100 p-4 rounded">
      <div className="relative">
        {onSale && (
          <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-medium px-2 py-1 rounded-sm">
            Sale
          </span>
        )}
        <img src="/sofa 1.svg" alt="Product" className="w-full h-48 object-contain mb-4" />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium text-black">Ultraboost Light Running Shoes</h3>
        <p className="text-xs text-black">Running Shoes</p>
        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-sm">★</span>
            ))}
          </div>
          <span className="text-xs text-black">(10 Reviews)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-black">$200</span>
          {onSale && <span className="text-xs text-gray-400 line-through">$400</span>}
        </div>
        <div className="flex items-center gap-2 pt-1">
          <button className="flex-1 bg-black text-white text-sm py-2 px-4 rounded hover:bg-gray-800">
            + Add To Cart
          </button>
          <button className="p-2 hover:bg-gray-200 rounded text-black">
            ♡
          </button>
        </div>
        <p className={`text-xs ${inStock ? 'text-green-600' : 'text-red-600'}`}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      </div>
    </div>
  );
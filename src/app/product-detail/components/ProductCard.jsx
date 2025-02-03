export const ProductCard = ({ onSale, inStock }) => (
  <div className="bg-gray-100 p-4 rounded-lg shadow-sm flex flex-col relative max-w-xs mx-auto">
    <button className="absolute top-2 left-2 p-2 hover:bg-gray-200 rounded-full text-black">
      ♡
    </button>

    <div className="relative w-full aspect-square flex justify-center items-center">
      {onSale && (
        <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-medium px-2 py-1 rounded-sm">
          Sale
        </span>
      )}
      <img
        src="/sofa 1.svg"
        alt="Product"
        className="w-3/4 h-auto object-contain"
      />
    </div>

    <div className="flex-1 space-y-2 mt-4 text-center sm:text-left">
      <h3 className="text-base md:text-lg font-medium text-black">Sofa hijau mantap</h3>
      <p className="hidden md:block text-xs md:text-sm text-black">Sofa</p>

      <div className="hidden md:flex items-center justify-center sm:justify-start gap-1">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-sm md:text-base">★</span>
          ))}
        </div>
        <span className="text-xs md:text-sm text-black">(10 Reviews)</span>
      </div>

      <div className="flex justify-center sm:justify-start items-center gap-2">
        <span className="font-medium text-black text-sm md:text-base">$200</span>
        {onSale && <span className="text-xs md:text-sm text-gray-400 line-through">$400</span>}
      </div>

      <div className="flex gap-2 pt-1">
        <button className="w-full bg-black text-white text-xs md:text-sm py-2 px-4 rounded hover:bg-gray-800">
          + Add To Cart
        </button>
      </div>

      <p className={`text-xs md:text-sm ${inStock ? 'text-green-600' : 'text-red-600'}`}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  </div>
);

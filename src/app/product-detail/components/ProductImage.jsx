const ProductImage = () => (
    <div className="relative">
      <img
        src="/sofa 1.svg"
        alt="Product"
        className="w-full aspect-square object-contain"
      />
      <button className="absolute top-4 right-4 p-2 rounded-full">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
    </div>
  );
  
  export default ProductImage;
  
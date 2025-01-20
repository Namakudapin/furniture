import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ProductCard } from './ProductCard';

export const ProductGrid = () => (
  <div className="flex-1">
    <div className="flex justify-between items-center mb-6">
      <h1 className="font-medium text-black">
        "Running Shoes" <span className="text-black text-sm">288 Results</span>
      </h1>
      <button className="border rounded px-3 py-1 text-sm flex items-center gap-1 text-black">
        Sort by
        <ChevronDownIcon className="w-4 h-4" />
      </button>
    </div>

    <div className="grid grid-cols-3 gap-6">
      <ProductCard onSale={false} inStock={true} />
      <ProductCard onSale={false} inStock={false} />
      <ProductCard onSale={true} inStock={true} />
      <ProductCard onSale={true} inStock={true} />
      <ProductCard onSale={true} inStock={true} />
      <ProductCard onSale={true} inStock={true} />
    </div>
  </div>
);
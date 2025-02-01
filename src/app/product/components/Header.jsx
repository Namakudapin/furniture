import { Search, ShoppingCart } from 'lucide-react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export const Header = () => (
  <header className="border-b">
    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2 flex-1">
        <div className="relative">
          <select className="appearance-none bg-transparent pr-8 py-1 pl-2 border-r text-sm text-black">
            <option>Sofa</option>
          </select>
          <ChevronDownIcon className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
        <div className="relative flex-1 max-w-md">
          <input
            type="search"
            placeholder="search"
            className="w-full pl-3 pr-10 py-1 text-sm bg-transparent text-black placeholder-gray-500"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </div>
      <button className="bg-yellow-400 px-4 py-1.5 rounded flex items-center gap-2 text-sm text-black">
        <ShoppingCart className="w-4 h-4" />
        View Cart
      </button>
    </div>
  </header>
);
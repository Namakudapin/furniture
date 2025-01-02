"use client";

import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#3B5D50] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold">Furniture</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="border-b-2 border-yellow-500 py-2">Home</a>
            <a href="/about" className="hover:text-gray-300">About us</a>
            <a href="/services" className="hover:text-gray-300">Services</a>
            <a href="/blog" className="hover:text-gray-300">Blog</a>
            <a href="/contact" className="hover:text-gray-300">Contact us</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="hover:text-gray-300">
              <User size={20} />
            </button>
            <button className="hover:text-gray-300">
              <ShoppingCart size={20} />
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 hover:bg-[#2f4b40]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 border-l-4 border-yellow-500">Home</a>
              <a href="/about" className="block px-3 py-2 hover:bg-[#2f4b40]">About us</a>
              <a href="/services" className="block px-3 py-2 hover:bg-[#2f4b40]">Services</a>
              <a href="/blog" className="block px-3 py-2 hover:bg-[#2f4b40]">Blog</a>
              <a href="/contact" className="block px-3 py-2 hover:bg-[#2f4b40]">Contact us</a>
              <div className="flex space-x-4 px-3 py-2">
                <button className="hover:text-gray-300">
                  <User size={20} />
                </button>
                <button className="hover:text-gray-300">
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-[#3B5D50] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center mt-16">
          <div className="lg:w-1/2 mb-28">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Modern Interior<br />Design Studio
            </h1>
            
            <div className="flex space-x-4 mt-8">
              <button className="px-6 py-2 bg-yellow-500 text-black font-medium rounded-xl hover:bg-yellow-600 transition-colors">
                Shop Now
              </button>
              <button className="px-6 py-2 border border-white text-white font-medium rounded-xl hover:bg-white/10 transition-colors">
                Explore
              </button>
            </div>
          </div>
          <div>
            <img 
              src="couch 1.svg" 
              alt="Modern Sofa" 
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
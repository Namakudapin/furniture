import React from 'react';

const InteriorDesign = () => {
  const features = [
    'Donec mattis porta eros, eu aliquet finibus ri, let consecteteur adipiscing elit sed do eiusmod tempor incididunt',
    'Donec mattis porta eros, eu aliquet finibus ri, let consecteteur adipiscing elit',
    'Donec mattis porta eros, eu aliquet finibus ri, let magna aliqua',
    'Donec mattis porta eros, eu aliquet finibus ri, let ut labore et dolore'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col lg:flex-row items-start gap-12">
        <div className="lg:w-1/2">
          <img 
            src="interiordesign.svg"
            alt="Interior Design"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>

        <div className="lg:w-1/2 text-left mt-28">
          <h2 className="text-3xl font-bold mb-4 text-black">
            We help you make Modern Interior Design
          </h2>
          <p className="text-gray-600 mb-8">
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done, this this is a long used for me text. This small text has to be place here, since this is a place holder. You can also change it.
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                <p className="text-gray-600 break-words">{feature}</p>
              </div>
            ))}
          </div>

          <button className="mt-8 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteriorDesign;
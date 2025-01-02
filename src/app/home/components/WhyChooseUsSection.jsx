import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: '🚚',
      title: 'Fast & Free Shipping',
      description: 'Donec mattis porta eros, aliquet finibus risus interdum at. Nulla viverra est.'
    },
    {
      icon: '🛍️',
      title: 'Easy to Shop',
      description: 'Donec mattis porta eros, aliquet finibus risus interdum at. Nulla viverra est.'
    },
    {
      icon: '⏰',
      title: '24/7 Support',
      description: 'Donec mattis porta eros, aliquet finibus risus interdum at. Nulla viverra est.'
    },
    {
      icon: '↩️',
      title: 'Hassle Free Returns',
      description: 'Donec mattis porta eros, aliquet finibus risus interdum at. Nulla viverra est.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">

        <div className="lg:w-1/2 text-left">
          <h2 className="text-3xl font-bold mb-6 text-black">Why Choose Us</h2>
          <p className="text-gray-600 mb-12 max-w-xl">
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla viverra est.
            Vivethe as it was for us to know what was to be done.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col max-w-[250px]">
                <span className="text-3xl mb-4">{feature.icon}</span>
                <h3 className="text-xl font-medium mb-2 text-black">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <img 
            src="why-choose-us-img 1.svg"
            alt="Interior Design"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
import React from 'react';

const BlogSection = () => {
  const products = [
    {
      name: 'First Time Home Owner Ideas',
      desc: 'by Nana Ama on Nov 18th, 2022',
      image: 'post-1 1.svg'
    },
    {
      name: 'First Time Home Owner Ideas',
      desc: 'by Nana Ama on Nov 18th, 2022',
      image: 'post-1 1.svg'
    },
    {
      name: 'First Time Home Owner Ideas',
      desc: 'by Nana Ama on Nov 18th, 2022',
      image: 'post-1 1.svg'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className='flex justify-between'> 
            <h2 className="text-3xl font-bold mb-4 text-black">
                Blog Sesion
            </h2>

            <h2 className='text-1xl font-bold mb-4 text-black'>
                View All Posts
            </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="mt-4  ">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-50 object-cover rounded-md mb-4" 
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {product.name}
            </h3>
        
            <p className="text-gray-600">
             {product.desc}
            </p>
          </div>
        ))}
    </div>
    </div>
  );
};

export default BlogSection;

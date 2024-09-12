import React from 'react';
import TestimonialsAvatars from './TestimonialsAvatars';

const Hero = () => {
  return (
    <div className="bg-white  text-center">
      <div className="max-w-9xl mx-auto px-4">
        <h1 className="text-7xl font-bold text-gray-900 mb-4">
          You don’t need more features.
        </h1>
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          You need{' '}

          <span className="pl-5 pr-5 text-blue-800 font-bold bg-yellow-300 decoration-wavy">
  Marketing
</span>

        
        </h1>
        <br />
        <p className="text-4xl text-gray-600 mb-8">
          Get a 100% customised marketing plan on how to get more users and grow
          your SaaS, with ROI projection.
        </p>
        <a
          href="#"
          className="bg-red-600 text-white  text-3xl py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 inline-block"
        >
          Get your report — in 5 minutes!
          
        </a>
        <br /> 
        <br />


      <TestimonialsAvatars/>
      </div>
    </div>
  );
};

export default Hero;

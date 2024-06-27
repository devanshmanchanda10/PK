import React from 'react';
// import sampleImage from './path-to-your-image.jpg'; // Ensure the path to your image is correct

const CreativeCard = () => {
  return (
    <div className="relative h-64 flex items-center p-3 bg-white shadow-lg rounded-lg w-full md:w-1/2 mx-auto my-10  ">
      {/* Text Section */}
      <div className="w-3/4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Creative Card Title</h2>
        <p className="text-gray-600 mb-4">
          This is a creative and minimalistic card that contains some interesting text. The image is positioned outside the box to the right.
        </p>
        <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-800 text-white rounded-md">
          Learn More
        </button>
      </div>
      {/* Image Section */}
      <div className="absolute right-[-60px] top-1/2 transform -translate-y-1/2">
        <img src="" alt="Creative" className="w-32 h-32 object-cover rounded-full shadow-lg" />
      </div>
    </div>
  );
};

export default CreativeCard

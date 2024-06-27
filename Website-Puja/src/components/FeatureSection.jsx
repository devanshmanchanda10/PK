import React from 'react';
// import './styles/tailwind.css'; // Ensure Tailwind CSS is imported

const FeatureCard = ({ title, description, imageUrl, buttonText }) => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-8">
      {/* Text Section in a Box */}
      <div className="bg-white shadow-lg rounded-lg p-6 md:w-1/2 relative z-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:from-teal-500 hover:to-blue-600 focus:outline-none">
          {buttonText}
        </button>
      </div>
      
      {/* Image Section */}
      <div className="md:w-1/2 md:ml-4 mt-4 md:mt-0">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: 'High Quality Products',
      description: 'We offer a wide range of high quality products to meet your needs.',
      imageUrl: `${process.env.PUBLIC_URL}/images/product1.jpg`,
      buttonText: 'Shop Now',
    },
    {
      title: 'Fast Delivery',
      description: 'Get your products delivered to you quickly and safely.',
      imageUrl: `${process.env.PUBLIC_URL}/images/product2.jpg`,
      buttonText: 'Learn More',
    },
    {
      title: 'Customer Support',
      description: 'Our customer support is available 24/7 to assist you.',
      imageUrl: `${process.env.PUBLIC_URL}/images/product3.jpg`,
      buttonText: 'Contact Us',
    },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Features</h1>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          imageUrl={feature.imageUrl}
          buttonText={feature.buttonText}
        />
      ))}
    </div>
  );
};


export default FeaturesSection;
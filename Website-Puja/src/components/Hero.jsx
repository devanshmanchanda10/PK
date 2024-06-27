import React from "react";
import aarti from "../assets/pexels-bhaveshjain-3988077.jpg";

const Hero = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row mt-10 justify-between p-8 min-h-screen">
      {/* Text Section */}
      <div className="md:w-1/2 p-4 text-center md:text-left">
        <div className="text-7xl mt-10 font-bold text-gray-800 mb-4 whitespace-nowrap">
          {" "}
          Hand picked{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            सामग्री
          </span>
        </div>

        <p className="text-4xl text-gray-600">
          DELIVERED  AT YOUR DOOR STEP
        </p>
        <div className="  ml-36 -mt-5 ">

        <h1 className="text-centermd:text-left whitespace-nowrap text-7xl mt-20 font-bold text-gray-800 mb-4">
Celebrate <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            FESTIVALS
          </span>         </h1>
        <p className="text-4xl  text-gray-600">
          WITH OUR SERVICES
        </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="mb-0 mr-10 mt-0">
        <img src={aarti} alt="Placeholder" className=" rounded-lg w-96 border border-orange-700 shadow-sm shadow-orange-400 mr-10 my-0" />
      </div>
    </div>
    <div className="w-full my-8 -mt-16">
        <hr className="max-h-64 w-auto object-contain" />
      </div>
    </>
    
  );
};

export default Hero;

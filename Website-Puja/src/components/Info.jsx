import React from "react";
// import './index.css'; // Ensure your custom CSS is imported
import CreativeCard from "./Service";
const SlantedDiv = () => {
  // Ensure your custom CSS is imported

  return (
    <div className="relative md:h-48 lg:h-screen w-full bg-neutral-200 shadow-lg rounded-lg  ">
      <div className="absolute md:text-lg top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:text-2xl font-bold text-gray-800 px-2">
        SERVICES WE PROVIDE
      </div>
      <div className="absolute top-5 left-4">
        <CreativeCard/>
        <div className="absolute top-5 left-96">
        <CreativeCard/>
     </div>

      </div>
    </div>
  );
};

export default SlantedDiv;

import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className= "shadow-lg  bg-opacity-50  backdrop-blur-md bg-teal-100  sticky top-0 z-50   ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-5">
            {/* Logo */}
            <div>
              <a
                href="/"
                className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
              >
                {/* <svg
                  className="h-8 w-8 mr-2 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  
                </svg> */}
                <span className="font-bold text-2xl">PujaKaro.in</span>
              </a>
            </div>

            {/* Primary Nav */}
            <div className=" hidden md:flex items-center space-x-1 ">
              <a
                href="/"
                className="text-xl py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="/shop"
                className=" text-xl py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Shop 

              </a>
              <a
                href="/about"
                className="text-xl py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-xl py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Secondary Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="/cart"
              className="py-5 px-3 text-gray-700 hover:text-gray-900"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-4 8h18M7 13L5.4 5M13 16h-1v6h-1v-6H7v-1h6v1z"
                />
              </svg>
            </a>
            <a
              href="/login"
              className="py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-400"
            >
              Login
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu hidden md:hidden">
        <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Home
        </a>
        <a href="/shop" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Shop
        </a>
        <a href="/about" className="block py-2 px-4 text-sm hover:bg-gray-200">
          About
        </a>
        <a
          href="/contact"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaDollarSign,
  FaShoppingCart,
  FaKey,
  FaPlus,
  FaSearch,
} from "react-icons/fa";

const Landing = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen w-full bg-gradient-to-r from-[#667EEA] to-[#764BA2]">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Background1.png')",
            opacity: 0.2
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Hero Text */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">Find Your Perfect</span>
              <span className="block">Home </span>
              <span className="block opacity-70">Across the Globe</span>
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto opacity-80">
              Discover Premium Properties in Egypt, Dubai, Europe, Africa 
              <br className="hidden sm:block" />
              and beyond with 3D tours and AI assistance
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
              
              {/* Search Filters Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                
                {/* Location */}
                <div className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                  <FaMapMarkerAlt className="text-gray-500 text-lg" />
                  <select className="bg-transparent outline-none text-gray-700 w-full font-medium">
                    <option>Select Location</option>
                    <option>Egypt</option>
                    <option>Dubai</option>
                    <option>Europe</option>
                    <option>Africa</option>
                  </select>
                </div>

                {/* Property Type */}
                <div className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                  <FaBuilding className="text-gray-500 text-lg" />
                  <select className="bg-transparent outline-none text-gray-700 w-full font-medium">
                    <option>Property Type</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Office</option>
                    <option>Commercial</option>
                  </select>
                </div>

                {/* Price Range */}
                <div className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                  <FaDollarSign className="text-gray-500 text-lg" />
                  <select className="bg-transparent outline-none text-gray-700 w-full font-medium">
                    <option>Price Range</option>
                    <option>$500 - $1,000</option>
                    <option>$1,000 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000+</option>
                  </select>
                </div>

                {/* Search Button */}
                <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
                  <FaSearch className="text-lg" />
                  Search
                </button>
              </div>

              {/* Action Buttons Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Buy Button */}
                <button className="flex items-center justify-center gap-3 bg-blue-100 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-200 transition-all duration-300 hover:scale-105 active:scale-95">
                  <FaShoppingCart className="text-lg" />
                  Buy
                </button>

                {/* Rent Button */}
                <button className="flex items-center justify-center gap-3 bg-green-100 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-200 transition-all duration-300 hover:scale-105 active:scale-95">
                  <FaKey className="text-lg" />
                  Rent
                </button>

                {/* List Property Button */}
                <button className="flex items-center justify-center gap-3 bg-purple-100 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-200 transition-all duration-300 hover:scale-105 active:scale-95">
                  <FaPlus className="text-lg" />
                  List Property
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Property Action Cards Section */}
      <div className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Buy Property Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                <FaShoppingCart className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Buy Property
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Explore premium properties with 3D tours and virtual walkthroughs
              </p>
            </div>

            {/* Rent Property Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                <FaKey className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Rent Property
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Find your perfect rental home with flexible terms and options
              </p>
            </div>

            {/* List Property Card */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                <FaPlus className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                List Property
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Sell or rent your property globally with our AI-powered platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
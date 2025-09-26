import React from "react";
import Map from "./Map";
import { FaMapMarkerAlt } from "react-icons/fa";

const PropertyMap = () => {
  return (
    <div className="py-8 sm:py-10">
      {/* العنوان والموقع */}
      <div className="mb-6">
        {/* العنوان الرئيسي */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2 relative inline-block">
          Property Location
        </h2>
        
        {/* العنوان الفرعي (الموقع) */}
        <div className="flex items-center gap-3 mt-2 mb-6">
          <FaMapMarkerAlt className="text-[#4B5563] flex-shrink-0 w-5 h-5" />
          <p className="font-normal text-base sm:text-lg text-[#4B5563] leading-normal">
            123 Main St, Anytown, USA
          </p>
        </div>
      </div>
      
      {/* خريطة الموقع */}
      <Map />
    </div>
  );
};

export default PropertyMap;

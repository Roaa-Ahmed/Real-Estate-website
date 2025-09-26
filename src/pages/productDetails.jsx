import React from "react";
import PropertyGallery from "../Components/productDetails/PropertyGallery";
import PropertyInfo from "../Components/productDetails/PropertyInfo";
import PropertyBookingForm from "../Components/productDetails/PropertyBookingForm";
import PropertyMap from "../Components/productDetails/PropertyMap";

const ProductDetails = () => {
 // max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PropertyGallery />
      <div className="flex items-start flex-wrap gap-4">
        <PropertyInfo />
        <PropertyBookingForm />
      </div>
      <PropertyMap />
    </div>
  );
};

export default ProductDetails;

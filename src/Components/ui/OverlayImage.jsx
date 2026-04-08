import React from "react";

const OverlayImage = () => {
  return (
    <>
      <div
        className="w-full max-w-[1152px] absolute inset-0 overflow-hidden p-0 rounded-none   
        bg-[linear-gradient(180deg,rgba(102,126,234,0.73),rgba(118,75,162,0.73)),url('/images/Background1.png')]    bg-[length:110%] bg-center 
"
      ></div>
      <div className="absolute inset-0 bg-white/25 "></div>
    </>
  );
};

export default OverlayImage;

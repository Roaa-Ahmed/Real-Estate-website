import React from "react";

const ButtonLocal = ({ as = "button", variant = "", children, ...props }) => {
  const Component = as || "button";
  return (
    <Component
      className={`
  
       py-2 px-3 text-center rounded-lg capitalize text-xl
        bg-green-600 font-medium leading-6 cursor-pointer  ${variant}
        
      `}
      {...props}
    >
      {children}
    </Component>
  );
};

export default ButtonLocal;

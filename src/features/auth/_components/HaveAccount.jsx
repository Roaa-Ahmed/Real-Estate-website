import React from "react";
import { Link } from "react-router";

const HaveAccount = ({text,hrf,textLink}) => {
  return (
    <div className="ml-5 mt-2 flex items-center gap-2 text-[15px]">
      <p className="text-[rgba(0,0,0,0.32)]  font-normal">
        {text}
      </p>
      <Link to={hrf} className=" text-[rgba(118,75,162,0.82)] cursor-pointer
       hover:text-[rgba(118,75,162,0.99)] hover:underline hover:scale-105 transition-all">
        {textLink}
      </Link>
    </div>
  );
};

export default HaveAccount;

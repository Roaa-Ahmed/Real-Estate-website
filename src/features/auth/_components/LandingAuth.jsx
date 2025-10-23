import React from "react";
import Icon from "../../../assets/photos/homeIcon.svg?react";
import { Link } from "react-router";
import {LogoWithLabel} from "@/Components";

const LandingAuth = () => {
  return (
    <div className=" flex-1 relative hidden md:block ">
      <div className="min-h-full  items-center">
        {/* <Link to='/'> */}
<LogoWithLabel Icon={Icon} label='Hub Estate Real' classDiv='mt-20 pl-13'/>
        
        {/* <div className="flex items-center mt-20 gap-2 pl-13 ">
          <Icon />
          <h2
            className=" font-semibold text-2xl text-[rgba(255,255,255,1)] 
                leading-7 tracking-normal font-sans"
          >
            Hub Estate Real
          </h2>
        </div> */}
        {/* </Link> */}
        <p
          className="max-w-sm absolute top-1/2 left-10 -translate-y-1/2 capitalize 
              text-[49px] text-[rgba(255,255,255,1)] leading-15 font-semibold font-sans 
              tracking-normal"
        >
          Find Your Perfect Home Across the Globe
        </p>
      </div>
    </div>
  );
};

export default LandingAuth;

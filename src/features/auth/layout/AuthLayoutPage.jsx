import React from "react";
import { OverlayImage } from "@/Components";
import { LandingAuth } from "@/features/auth";

const AuthLayoutPage = ({ children, imagePosition = "" }) => {
  return (
    <div className="w-full max-w-6xl mx-3 md:mx-0 overflow-hidden rounded-2xl md:rounded-none ">
      <div className={"flex flex-col gap-6 relative "}>
        <OverlayImage />

        <div
          className={`flex p-0  
      ${imagePosition == "right" ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <LandingAuth />
          <div
            className={`flex-1/11 px-6 py-15 md:pb-30 md:pt-20 bg-[rgba(255,255,255,1)]
        ${
          imagePosition === "right"
            ? "md:rounded-r-[40px]"
            : "md:rounded-l-[40px]"
        }
          z-50`}
          >
            <div className="max-w-[450px] mx-auto">
              {children}
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayoutPage;

import React from "react";

import { OverlayImage } from "@/Components";
import { ResetPasswordForm } from "@/features/auth";
import useIsSmallScreen from "@/hooks/useIsSmallScreen ";

const ResetPasswordPage = () => {
    const isSmallScreen = useIsSmallScreen();

  return (
    <div className="w-full max-w-6xl ">
      <div className={"flex justify-center items-center relative "}>
        {!isSmallScreen&&<OverlayImage />}
        <div
          className={`w-xl p-6 md:pb-30 md:pt-20 my-15 mx-3 sm:mx-auto bg-[rgba(255,255,255,1)] 
      
          z-50  overflow-hidden rounded-2xl sm:rounded-[40px]`}
        >
          <div className="max-w-[450px] mx-auto">

            <h1
              className="mb-10 text-[26px] text-center font-medium capitalize
               text-[rgba(13,4,31,1)] mx-auto"
            >
              reset password
            </h1>
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;

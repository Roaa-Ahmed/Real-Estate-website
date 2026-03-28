import React from "react";
import SocialButton from "@/features/auth/ui/SocialButton";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
const SocialButtons = ({isLogin,authGoogle,authFace}) => {
  return (
    <div className=" my-9 flex  justify-center md:justify-between items-center 
    flex-wrap md:flex-nowrap gap-5 md:gap-0">
      <SocialButton icon={<FcGoogle size={22} />} 
      label={`${isLogin?'Login':"Sign up"} with Google`} 
      onClick={authGoogle}
      />

      <SocialButton
        icon={<FaFacebook size={22} color="#346cdb" />}
        label={`${isLogin?'Login':"Sign up"} with Facebook`}
        onClick={authFace}
      />
    </div>
  );
};

export default SocialButtons;

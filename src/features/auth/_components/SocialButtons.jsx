import React from "react";
import SocialButton from "@/features/auth/ui/SocialButton";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
const SocialButtons = () => {
  return (
    <div className=" my-9 flex  justify-center md:justify-between items-center 
    flex-wrap md:flex-nowrap gap-5 md:gap-0">
      <SocialButton icon={<FcGoogle size={22} />} label="Sign up with Google" />

      <SocialButton
        icon={<FaFacebook size={22} color="#346cdb" />}
        label="Sign up with Facebook"
      />
    </div>
  );
};

export default SocialButtons;

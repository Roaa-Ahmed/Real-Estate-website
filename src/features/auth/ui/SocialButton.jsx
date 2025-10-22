import React from "react";
import { Button } from "@mui/material";

const SocialButton = ({ icon, label,...props }) => {
  return (
    <Button
      startIcon={icon}
      variant="contained"
      className="!max-w-[188px] !py-3  !bg-[rgba(245,244,246,1)]
       !text-[rgba(0,0,0,0.32)]  !text-xs !normal-case !font-[poppins] 
       !rounded-[8px] text-nowrap "
      {...props}
    >
      {label}
    </Button>
  );
};

export default SocialButton;

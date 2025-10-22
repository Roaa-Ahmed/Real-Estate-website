import React from "react";

import {
  SignupForm,
  HaveAccount,
  SocialButtons,
  AuthLayoutPage,
} from "@/features/auth";
import { FieldSeparator } from "@/components/ui/field";

const SignupPage = () => {
  return (
    <AuthLayoutPage imagePosition="left">
      <h1
        className="text-[26px] text-center font-medium capitalize
               text-[rgba(13,4,31,1)] mx-auto"
      >
        Create account
      </h1>

      <SocialButtons />
      <FieldSeparator
        className="*:data-[slot=field-separator-content]:bg-card 
               max-w-[40px] ext-[rgba(0,0,0,0.32) text-lg mx-auto !mb-[50px]"
      >
        Or
      </FieldSeparator>
      <SignupForm />
      <HaveAccount
        text="Already have an account?"
        textLink="Log in"
        hrf="/login"
      />
    </AuthLayoutPage>
  );
};

export default SignupPage;

import React from "react";
// LOCAL COMPONENTS
import { AuthForm } from "@/features/auth";



const SignupForm = () => {
  const fields = [
    { name: "name", label: "Full name", placeholder: "Full name" },
    {
      name: "email",
      label: "Email address",
      placeholder: "Email address",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Password",
      type: "password",
    },
  ];
  const hundleSubmit = (value) => {
  };

  return (
    <AuthForm
      buttonText="Create account"
      fields={fields}
      onSubmit={hundleSubmit}
    />
  );
};

export default SignupForm;

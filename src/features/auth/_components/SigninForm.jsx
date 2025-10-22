import React from "react";
// LOCAL COMPONENTS
import { AuthForm } from "@/features/auth";

const SigninForm = () => {
  const fields = [
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

  const handleSubmit = (values) => {
  };
  return (
    <AuthForm
      fields={fields}
      buttonText="Log in"
      onSubmit={handleSubmit}
      isLogin={true}
    />
  );
};

export default SigninForm;

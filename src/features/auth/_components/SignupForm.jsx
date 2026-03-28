import React from "react";
// LOCAL COMPONENTS
import { AuthForm, HandleUserRegistration } from "@/features/auth";
// EXTERNAL COMPONENTS

const SignupForm = ({
  existEmail,
  setExistEmail,
  setEmail,
  refetch,
  mutation,
}) => {
  const fields = [
    {
      name: "name",
      label: "Full name",
      placeholder: "Full name",
      type: "text",
    },
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

  const hundleSubmit = HandleUserRegistration({
    setEmail,
    refetch,
    mutation,
    setExistEmail,
  });

  return (
    <AuthForm
      buttonText="Create account"
      fields={fields}
      onsubmit={hundleSubmit}
      existEmail={existEmail}
      setExistEmail={setExistEmail}
    />
  );
};

export default SignupForm;

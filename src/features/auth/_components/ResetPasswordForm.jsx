import React from 'react'
import { AuthForm } from '@/features/auth';

const ResetPasswordForm = () => {
  const fields = [
    {
      name: "new password",
      label: "new password",
      placeholder: "new password",
      type: "password",
    },
    {
      name: "confirm password",
      label: "confirm Password",
      placeholder: "confirm Password",
      type: "password",
    },
  ];

  const handleSubmit = (values) => {
  };
  return (
    <AuthForm
      fields={fields}
      buttonText="reset password"
      onSubmit={handleSubmit}
      classField='mt-10'
      classButton='mt-20 !font-semibold !max-w-[273px]'
    />  )
}

export default ResetPasswordForm
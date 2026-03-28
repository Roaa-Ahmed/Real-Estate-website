import React from 'react'
import { AuthForm } from '@/features/auth';

const ResetPasswordForm = () => {
  const fields = [
    {
      name: "password",
      label: "new password",
      placeholder: "new password",
      type: "password",
    },
    {
      name: "confirmPassword",
      label: "confirm Password",
      placeholder: "confirm Password",
      type: "password",
    },
  ];
console.log(fields.map(e=>e.name.replace(/\s/g, "")))

  const handleSubmit = (values) => {
        console.log(values)

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
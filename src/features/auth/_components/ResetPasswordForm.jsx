// import React from 'react'
// import { AuthForm } from '@/features/auth';

// const ResetPasswordForm = () => {
//   const fields = [
//     {
// <<<<<<< HEAD
//       name: "password",
// =======
//       name: "new password",
// >>>>>>> 30dda53c9e2b31f27da2e05ab9c62c55b6b95794
//       label: "new password",
//       placeholder: "new password",
//       type: "password",
//     },
//     {
// <<<<<<< HEAD
//       name: "confirmPassword",
// =======
//       name: "confirm password",
// >>>>>>> 30dda53c9e2b31f27da2e05ab9c62c55b6b95794
//       label: "confirm Password",
//       placeholder: "confirm Password",
//       type: "password",
//     },
//   ];
// <<<<<<< HEAD
// console.log(fields.map(e=>e.name.replace(/\s/g, "")))

//   const handleSubmit = (values) => {
//         console.log(values)

// =======

//   const handleSubmit = (values) => {
// >>>>>>> 30dda53c9e2b31f27da2e05ab9c62c55b6b95794
//   };
//   return (
//     <AuthForm
//       fields={fields}
//       buttonText="reset password"
//       onSubmit={handleSubmit}
//       classField='mt-10'
//       classButton='mt-20 !font-semibold !max-w-[273px]'
//     />  )
// }

// export default ResetPasswordForm



























import React from "react";
import { AuthForm } from "@/features/auth";

const ResetPasswordForm = () => {
  const fields = [
    {
      name: "password",
      label: "New Password",
      placeholder: "New Password",
      type: "password",
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      placeholder: "Confirm Password",
      type: "password",
    },
  ];

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <AuthForm
      fields={fields}
      buttonText="Reset Password"
      onsubmit={handleSubmit}
      classField="mt-10"
      classButton="mt-20 !font-semibold !max-w-[273px]"
    />
  );
};

export default ResetPasswordForm;
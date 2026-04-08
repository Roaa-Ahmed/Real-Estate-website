// import React from "react";
// // LOCAL COMPONENTS
// <<<<<<< HEAD
// import { AuthForm, HandleUserRegistration } from "@/features/auth";
// // EXTERNAL COMPONENTS

// const SignupForm = ({
//   existEmail,
//   setExistEmail,
//   setEmail,
//   refetch,
//   mutation,
// }) => {
//   const fields = [
//     {
//       name: "name",
//       label: "Full name",
//       placeholder: "Full name",
//       type: "text",
//     },
// =======
// import { AuthForm } from "@/features/auth";



// const SignupForm = () => {
//   const fields = [
//     { name: "name", label: "Full name", placeholder: "Full name" },
// >>>>>>> 30dda53c9e2b31f27da2e05ab9c62c55b6b95794
//     {
//       name: "email",
//       label: "Email address",
//       placeholder: "Email address",
//       type: "email",
//     },
//     {
//       name: "password",
//       label: "Password",
//       placeholder: "Password",
//       type: "password",
//     },
//   ];
// <<<<<<< HEAD

//   const hundleSubmit = HandleUserRegistration({
//     setEmail,
//     refetch,
//     mutation,
//     setExistEmail,
//   });
// =======
//   const hundleSubmit = (value) => {
//   };
// >>>>>>> 30dda53c9e2b31f27da2e05ab9c62c55b6b95794

//   return (
//     <AuthForm
//       buttonText="Create account"
//       fields={fields}
// <<<<<<< HEAD
//       onsubmit={hundleSubmit}
//       existEmail={existEmail}
//       setExistEmail={setExistEmail}
// =======
//       onSubmit={hundleSubmit}
// >>>>>>> 30dda53c9e2b31f27da2e05ab9c62c55b6b95794
//     />
//   );
// };

// export default SignupForm;
































import React from "react";
// LOCAL COMPONENTS
import { AuthForm, HandleUserRegistration } from "@/features/auth";

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

  const handleSubmit = HandleUserRegistration({
    setEmail,
    refetch,
    mutation,
    setExistEmail,
  });

  return (
    <AuthForm
      buttonText="Create account"
      fields={fields}
      onsubmit={handleSubmit}
      existEmail={existEmail}
      setExistEmail={setExistEmail}
    />
  );
};

export default SignupForm;

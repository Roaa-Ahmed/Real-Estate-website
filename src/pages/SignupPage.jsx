// <<<<<<< HEAD
// import React, { useState } from "react";

// // LOCAL COMPONENTS
// =======
// import React from "react";

// >>>>>>> 30dda53c9e2b31f27da2e05ab9c62c55b6b95794
// import {
//   SignupForm,
//   HaveAccount,
//   SocialButtons,
//   AuthLayoutPage,
// <<<<<<< HEAD
//   useRegisterWithGoogle,
//   useRegisterUser,
//   useAuth,
//   useCheckEmail,
// =======
// >>>>>>> 30dda53c9e2b31f27da2e05ab9c62c55b6b95794
// } from "@/features/auth";
// import { FieldSeparator } from "@/Components/ui/field";

// const SignupPage = () => {
// <<<<<<< HEAD
//   const [existEmail, setExistEmail] = useState(false);
//   const mutation = useRegisterUser();
//   const { email, setEmail } = useAuth();
//   const { refetch } = useCheckEmail(email);
//   const signupWithGoogle = useRegisterWithGoogle({
//     setExistEmail,
//     setEmail,
//     refetch,
//     mutation,
//   });

// =======
// >>>>>>> 30dda53c9e2b31f27da2e05ab9c62c55b6b95794
//   return (
//     <AuthLayoutPage imagePosition="left">
//       <h1
//         className="text-[26px] text-center font-medium capitalize
//                text-[rgba(13,4,31,1)] mx-auto"
//       >
//         Create account
//       </h1>

// <<<<<<< HEAD
//       <SocialButtons authGoogle={signupWithGoogle} />
// =======
//       <SocialButtons />
// >>>>>>> 30dda53c9e2b31f27da2e05ab9c62c55b6b95794
//       <FieldSeparator
//         className="*:data-[slot=field-separator-content]:bg-card 
//                max-w-[40px] ext-[rgba(0,0,0,0.32) text-lg mx-auto !mb-[50px]"
//       >
//         Or
//       </FieldSeparator>
// <<<<<<< HEAD
//       <SignupForm
//         existEmail={existEmail}
//         setExistEmail={setExistEmail}
//         setEmail={setEmail}
//         refetch={refetch}
//         mutation={mutation}
//       />
// =======
//       <SignupForm />
// >>>>>>> 30dda53c9e2b31f27da2e05ab9c62c55b6b95794
//       <HaveAccount
//         text="Already have an account?"
//         textLink="Log in"
//         hrf="/login"
//       />
//     </AuthLayoutPage>
//   );
// };

// export default SignupPage;














import React, { useEffect, useState } from "react";

// LOCAL COMPONENTS
import {
  SignupForm,
  HaveAccount,
  SocialButtons,
  AuthLayoutPage,
  useRegisterWithGoogle,
  useRegisterUser,
  useAuth,
  useCheckEmail,
} from "@/features/auth";
import { FieldSeparator } from "@/Components/ui/field";

const SignupPage = () => {
  const [existEmail, setExistEmail] = useState(false);
  const mutation = useRegisterUser();
  const { email, setEmail } = useAuth();
  const { refetch } = useCheckEmail(email);

  const signupWithGoogle = useRegisterWithGoogle({
    setExistEmail,
    setEmail,
    refetch,
    mutation,
  });


useEffect(() => {
 const script = document.createElement("script");
 script.src = "https://accounts.google.com/gsi/client";
 script.async = true;
 document.body.appendChild(script);
}, []);



  return (
    <AuthLayoutPage imagePosition="left">
      <h1
        className="text-[26px] text-center font-medium capitalize
               text-[rgba(13,4,31,1)] mx-auto"
      >
        Create account
      </h1>

      <SocialButtons authGoogle={signupWithGoogle} />

      <FieldSeparator
        className="*:data-[slot=field-separator-content]:bg-card 
               max-w-[40px] text-[rgba(0,0,0,0.32)] text-lg mx-auto !mb-[50px]"
      >
        Or
      </FieldSeparator>

      <SignupForm
        existEmail={existEmail}
        setExistEmail={setExistEmail}
        setEmail={setEmail}
        refetch={refetch}
        mutation={mutation}
      />

      <HaveAccount
        text="Already have an account?"
        textLink="Log in"
        hrf="/login"
      />
    </AuthLayoutPage>
  );
};

export default SignupPage;
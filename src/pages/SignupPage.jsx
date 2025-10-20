// "use client";
// import * as React from "react";
// import { useForm, Controller } from "react-hook-form";
// import {
//   Form,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormDescription,
//   FormMessage,
//   FormField,
// } from "@/components/ui/form";
// import { Input } from "@/Components/ui/input";
// import { Button } from "@/Components/ui/button";

// export default function SignUpForm() {
//   const methods = useForm({
//     defaultValues: {
//       name: "",
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmit = (data) => {
//     console.log("Sign Up Data:", data);
//     // هنا ممكن تبعتي الداتا للـAPI أو أي حاجة
//   };

//   return (
//     <Form {...methods}>
//       <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
//         {/* Name Field */}
//         <FormField
//           name="name"
//           control={methods.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Name</FormLabel>
//               <FormControl>
//                 <Input placeholder="Your name" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Email Field */}
//         <FormField
//           name="email"
//           control={methods.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Email</FormLabel>
//               <FormControl>
//                 <Input type="email" placeholder="you@example.com" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Password Field */}
//         <FormField
//           name="password"
//           control={methods.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Password</FormLabel>
//               <FormControl>
//                 <Input type="password" placeholder="Your password" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <Button type="submit">Sign Up</Button>
//       </form>
//     </Form>
//   );
// }

import { Section } from "@/Components";
import { SignupForm } from "@/Components/signup-form";
import React from "react";
// import {SignupForm} '@Components/ui/signup-form'
const SignupPage = () => {
  return (
    <div className='w-full max-w-6xl   '>
      <SignupForm />
    </div>
  );
};

export default SignupPage;

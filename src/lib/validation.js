import * as z from "zod";
const rules = {
  name: z
    .string()
    .min(3, "Name must be at least 3 characters.")
    .max(50, "Name must be at most 50 characters."),
  email: z
    .string()
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: "Please enter a valid email address.",
    })
    .max(100, "Email must be at most 100 characters."),
  password: z
    .string()
    .min(3, "Password must be at least 8 characters.")
    .max(32, "Password must be at most 32 characters."),
  // .regex(
  //   /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/,
  //   "Password must include uppercase, lowercase, number, and special character."
  // )
  confirmPassword: z
    .string()
  // .min(8, "Confirm password must be at least 8 characters."),
};

export const createCustomSchema = (fields = []) => {
  const selectedRules = {};

  fields.forEach((field) => {
    if (rules[field]) {
      selectedRules[field] = rules[field];
    }
  });
  const schema = z.object(selectedRules).refine(
    (data) => {
      if('confirmPassword' in data){
        return data.password === data.confirmPassword
      }
      return true
    },
      //  data.password === data.confirmPassword || (data.password === 
      // data.confirmPassword&&data.confirmPassword=='') ,

    { message: "Passwords do not match.", path: ["confirmPassword"] }
  );
  // const  result=schema.safeParse()

  return schema;
};

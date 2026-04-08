// import React, { useMemo } from "react";
// import { Field, FieldLabel, FieldError } from "@/Components/ui/Field";
// import { Input } from "@/Components";
// import { cn } from "@/lib/utils";

// const FormInputField = ({
//   form,
//   type,
//   name,
//   placeholder,
//   label,
//   classField,
//   existEmail,
//   email,
//   setExistEmail,
// }) => {
//   console.log("🔥 FormInputField Rendered");

//   const inputClasses = useMemo(
//     () =>
//       cn(
//         "max-w-[421px] mx-auto pl-0 border-0 border-b border-[rgba(0,0,0,0.12)]",
//         "bg-transparent rounded-none focus-visible:ring-0 transition-colors",
//         "placeholder:text-lg placeholder:text-[rgba(0,0,0,0.32)] placeholder:font-normal",
//         existEmail && name === "email" && "!text-red-500 border-red-500"
//       ),
//     [existEmail, name]
//   );

//   const handleChange = useMemo(
//     () => (e, field) => {
//       const value = e.target.value;
//       field.handleChange(value);
//       setExistEmail(email === value);
//     },
//     [email, setExistEmail]
//   );

//   return (
//     <form.Field
//       name={name}
//       children={(field) => {
//         const isInvalid =
//           field.state.meta.isTouched && !field.state.meta.isValid;

//         return (
//           <Field className={classField} data-invalid={isInvalid}>
//             <FieldLabel className="sr-only" htmlFor={field.name}>
//               {label}
//             </FieldLabel>
//             <Input
//               // key={
//               //   isSuccess && data?.data.length > 0 && field.name === "email"
//               //     ? "email-exist"
//               //     : "email-normal"
//               // }
//               id={field.name}
//               name={field.name}
//               value={field.state.value}
//               type={type}
//               onBlur={field.handleBlur}
//               onChange={(e) => handleChange(e, field)}
//               // onChange={(e) =>{
//               //   const value=e.target.value;
//               //   field.handleChange(value)
//               //   // e.target.value===email?setExistEmail(true):setExistEmail(false)
//               //   setExistEmail(email===value)
//               // }}
//               aria-invalid={isInvalid}
//               placeholder={placeholder}
//               autoComplete="off"
//               className={inputClasses}
            
//             />
//             {isInvalid && <FieldError errors={field.state.meta.errors} />}
//           </Field>
//         );
//       }}
//     />
//   );
// };

// export default React.memo(FormInputField);

import React from "react";
import { Field, FieldLabel, FieldError } from "@/Components/ui/Field";
import { Input } from "@/Components";
import { cn } from "@/lib/utils";

const FormInputField = ({
  form,
  type,
  name,
  placeholder,
  label,
  classField,
  existEmail,
  email,
  setExistEmail,
}) => {
    console.log("🔥 FormInputField Rendered");

  return (
    <form.Field name={name}>
      {(field) => {
        const isInvalid =
          field.state.meta.isTouched && !field.state.meta.isValid;

        const inputClasses = cn(
          "max-w-[421px] mx-auto pl-0 border-0 border-b border-[rgba(0,0,0,0.12)]",
          "bg-transparent rounded-none focus-visible:ring-0 transition-colors",
          "placeholder:text-lg placeholder:text-[rgba(0,0,0,0.32)] placeholder:font-normal",
          existEmail && name === "email" && "!text-red-500 border-red-500"
        );

        return (
          <Field className={classField} data-invalid={isInvalid}>
            <FieldLabel className="sr-only" htmlFor={field.name}>
              {label}
            </FieldLabel>

            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              type={type}
              onBlur={field.handleBlur}
              onChange={(e) => {
                const value = e.target.value;
                field.handleChange(value);
                setExistEmail(value === email);
              }}
              aria-invalid={isInvalid}
              placeholder={placeholder}
              autoComplete="off"
              className={inputClasses}
            />

            {isInvalid && <FieldError errors={field.state.meta.errors} />}
          </Field>
        );
      }}
    </form.Field>
  );
};

export default React.memo(FormInputField);

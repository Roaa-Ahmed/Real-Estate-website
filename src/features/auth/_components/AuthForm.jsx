// LOCAL COMPONENTS
import { FieldGroup } from "@/Components/ui/field";
import { FormInputField } from "@/Components/formUi";
import { Button } from "@/Components/ui/button";
import { createCustomSchema } from "@/lib/validation";
import { useAuth } from "@/features/auth";

// EXTERNAL COMPONENTS
import React from "react";
import { Link } from "react-router";
import { useForm } from "@tanstack/react-form";
import { useSnackbar } from "notistack";
import { validators } from "tailwind-merge";

const AuthForm = ({
  fields,
  onsubmit,
  buttonText,
  isLogin,
  classButton,
  classField,
  existEmail,
  setExistEmail,
}) => {
  const { enqueueSnackbar } = useSnackbar();

  const schema = createCustomSchema(
    fields.map((f) => f.name.replace(/\s/g, ""))
  );
  const result = (value) => schema.safeParse(value);

  const { email } = useAuth();

  const formData = useForm({
    defaultValues: fields.reduce((acc, f) => ({ ...acc, [f.name]: "" }), {}),

    validators: {
      onChange: schema,
      
    
    },
  //   fields:{
  //     email:{
  //       validators:{
  // emailNotSame:val=>{
  //       // console.log(val)
  //      if (val === email) {
  //           return { message: "Email must be different" };
  //         }
  //         return undefined;
  //       }
  //     }
  //   }
  // },

    onSubmitInvalid: ({ value }) => {
      if (!result(value).success) {
        enqueueSnackbar("Validation failed", { variant: "error" });

        return;
      }
    },

    onSubmit: async ({ value }) => {
      if (result(value).success) {
        console.log(value,formData, formData.options.validators.emailNotSame);

        return await onsubmit(value, formData);
      }
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formData.handleSubmit();

      }}
    >
      <FieldGroup>
        {fields.map((field) => (
          <FormInputField
            key={field.name}
            form={formData}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            label={field.label}
            classField={classField}
            existEmail={existEmail}
            email={email}
            setExistEmail={setExistEmail}
            {...field}
          />
        ))}
      </FieldGroup>
      {isLogin && (
        <Link
          to="/resetpassword"
          className="block w-fit capitalize text-[rgba(0,0,0,0.32)] 
      text-[13px] mt-3 ml-auto mr-5 hover:scale-110 hover:text-[rgba(0,0,0,0.60)] transition-all"
        >
          forget password?
        </Link>
      )}

      <formData.Subscribe
        selector={(state) => [
          state.canSubmit,
          state.isSubmitting,
          state.isValid,
          state.values.email,
        ]}
        children={([canSubmit, isSubmitting, isValid, isEmail]) => (
          <Button
            className={`w-full max-w-[405px] block text-[rgba(248,250,255,1)]
         text-base font-medium mt-11 !mx-auto  capitalize
          bg-[linear-gradient(90deg,_rgba(102,_126,_234,_1)_0%,_rgba(118,_75,_162,_1)_100%)] 
        hover:shadow-lg shadow-accent-foreground active:scale-105 transition-all ${classButton}`}
            type="submit"
            size="lg"
            disabled={!canSubmit || !isValid|| isEmail === email }
          >
            {isSubmitting ? "Loading..." : buttonText}
          </Button>
        )}
      />
    </form>
  );
};

export default AuthForm;

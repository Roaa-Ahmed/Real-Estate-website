// EXTERNAL COMPONENTS
import React from "react";
import { Link } from "react-router";
import { useForm } from "@tanstack/react-form";

// LOCAL COMPONENTS
import { FieldGroup } from "@/Components/ui/Field";
import { FormInputField } from "@/Components/formUi";
import { Button } from "@/Components/ui/button";



const AuthForm = ({ fields, onSubmit, buttonText, isLogin,classButton,classField }) => {
  const form = useForm({
    defaultValues: fields.reduce((acc, f) => ({ ...acc, [f.name]: "" }), {}),
    onSubmit: async ({ value }) => onSubmit(value),
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <FieldGroup>
        {fields.map((field) => (
          <FormInputField
            key={field.name}
            form={form}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            label={field.label}
            classField={classField}
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
      <Button
        className={`w-full max-w-[405px] block text-[rgba(248,250,255,1)]
         text-base font-medium mt-8 !mx-auto  capitalize
          bg-[linear-gradient(90deg,_rgba(102,_126,_234,_1)_0%,_rgba(118,_75,_162,_1)_100%)] 
        hover:shadow-lg shadow-accent-foreground active:scale-105 transition-all ${classButton}`}
        type="submit"
        size="lg"
      >
        {buttonText}
      </Button>
    </form>
  );
};

export default AuthForm;

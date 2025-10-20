// "use client";
// import * as React from "react"
// import { Slot } from "@radix-ui/react-slot"
// import { Controller, FormProvider, useFormContext, useFormState } from "react-hook-form";

// import { cn } from "@/lib/utils"
// import { Label } from "@/components/ui/label"

// const Form = FormProvider

// const FormFieldContext = React.createContext({})

// const FormField = (
//   {
//     ...props
//   }
// ) => {
//   return (
//     <FormFieldContext.Provider value={{ name: props.name }}>
//       <Controller {...props} />
//     </FormFieldContext.Provider>
//   );
// }

// const useFormField = () => {
//   const fieldContext = React.useContext(FormFieldContext)
//   const itemContext = React.useContext(FormItemContext)
//   const { getFieldState } = useFormContext()
//   const formState = useFormState({ name: fieldContext.name })
//   const fieldState = getFieldState(fieldContext.name, formState)

//   if (!fieldContext) {
//     throw new Error("useFormField should be used within <FormField>")
//   }

//   const { id } = itemContext

//   return {
//     id,
//     name: fieldContext.name,
//     formItemId: `${id}-form-item`,
//     formDescriptionId: `${id}-form-item-description`,
//     formMessageId: `${id}-form-item-message`,
//     ...fieldState,
//   }
// }

// const FormItemContext = React.createContext({})

// function FormItem({
//   className,
//   ...props
// }) {
//   const id = React.useId()

//   return (
//     <FormItemContext.Provider value={{ id }}>
//       <div data-slot="form-item" className={cn("grid gap-2", className)} {...props} />
//     </FormItemContext.Provider>
//   );
// }

// function FormLabel({
//   className,
//   ...props
// }) {
//   const { error, formItemId } = useFormField()

//   return (
//     <Label
//       data-slot="form-label"
//       data-error={!!error}
//       className={cn("data-[error=true]:text-destructive", className)}
//       htmlFor={formItemId}
//       {...props} />
//   );
// }

// function FormControl({
//   ...props
// }) {
//   const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

//   return (
//     <Slot
//       data-slot="form-control"
//       id={formItemId}
//       aria-describedby={
//         !error
//           ? `${formDescriptionId}`
//           : `${formDescriptionId} ${formMessageId}`
//       }
//       aria-invalid={!!error}
//       {...props} />
//   );
// }

// function FormDescription({
//   className,
//   ...props
// }) {
//   const { formDescriptionId } = useFormField()

//   return (
//     <p
//       data-slot="form-description"
//       id={formDescriptionId}
//       className={cn("text-muted-foreground text-sm", className)}
//       {...props} />
//   );
// }

// function FormMessage({
//   className,
//   ...props
// }) {
//   const { error, formMessageId } = useFormField()
//   const body = error ? String(error?.message ?? "") : props.children

//   if (!body) {
//     return null
//   }

//   return (
//     <p
//       data-slot="form-message"
//       id={formMessageId}
//       className={cn("text-destructive text-sm", className)}
//       {...props}>
//       {body}
//     </p>
//   );
// }

// export {
//   useFormField,
//   Form,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormDescription,
//   FormMessage,
//   FormField,
// }




<form
  onSubmit={(e) => {
    e.preventDefault()
    form.handleSubmit()
  }}
>
  <FieldGroup>
    <form.Field
      name="title"
      children={(field) => {
        const isInvalid =
          field.state.meta.isTouched && !field.state.meta.isValid
        return (
          <Field data-invalid={isInvalid}>
            <FieldLabel htmlFor={field.name}>Bug Title</FieldLabel>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              aria-invalid={isInvalid}
              placeholder="Login button not working on mobile"
              autoComplete="off"
            />
            <FieldDescription>
              Provide a concise title for your bug report.
            </FieldDescription>
            {isInvalid && <FieldError errors={field.state.meta.errors} />}
          </Field>
        )
      }}
    />
  </FieldGroup>
  <Button type="submit">Submit</Button>
</form>


import * as z from "zod"

const formSchema = z.object({
  title: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
})





import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import * as z from "zod"

const formSchema = z.object({
  // ...
})

export function BugReportForm() {
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      toast.success("Form submitted successfully")
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
    >
      {/* ... */}
    </form>
  )
}
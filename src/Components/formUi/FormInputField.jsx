import React from 'react'
import { Field ,FieldLabel,FieldError} from "@/components/ui/Field"
import {Input} from '@/Components'

const FormInputField = ({form,type,name,placeholder,label,classField}) => {
  return (
    <form.Field
      name={name}
      children={(field) => {
        const isInvalid =
          field.state.meta.isTouched && !field.state.meta.isValid
        return (
          <Field className={classField}data-invalid={isInvalid}>
            <FieldLabel className='sr-only' htmlFor={field.name}>{label}</FieldLabel>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              type={type}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              aria-invalid={isInvalid}
              placeholder={placeholder}
              autoComplete="off"
               className="max-w-[421px] mx-auto pl-0 border-0 border-b
                border-[rgba(0,_0,_0,_0.12)] bg-transparent rounded-none 
                focus-visible:ring-0 transition-colors placeholder:text-lg
                 placeholder:text-[rgba(0,0,0,0.32)] placeholder:font-normal placeholder:capitalize"
            />
            
            {isInvalid && <FieldError errors={field.state.meta.errors} />}
          </Field>
        )
      }}
    />
  )
}

export default FormInputField
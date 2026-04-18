import { FieldSeparator } from '@/Components/ui/field'
import {AuthLayoutPage,HaveAccount,SigninForm, SocialButtons} from '@/features/auth'
import React, { useEffect } from 'react'

const SigninPage = () => {

useEffect(() => {
 const script = document.createElement("script");
 script.src = "https://accounts.google.com/gsi/client";
 script.async = true;
 document.body.appendChild(script);
}, []);


  return (
<AuthLayoutPage imagePosition='right'>
    <h1 className="text-[26px] text-center font-medium capitalize
               text-[rgba(13,4,31,1)] mx-auto">
                login
              </h1>

              <SocialButtons isLogin={true}/>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card 
               max-w-[40px] ext-[rgba(0,0,0,0.32) text-lg mx-auto !mb-[50px]">
                Or
              </FieldSeparator>
              <SigninForm />
              <HaveAccount
                text="Don’t have an account?"
                textLink="Sign up"
                hrf="/signup"
              />
</AuthLayoutPage>  )
}

export default SigninPage
import React from 'react'
import { Outlet } from 'react-router'
import { Section } from '@/Components'
const AuthLayout = () => {
  return (
    <div className='min-h-screen flex justify-center items-center bg-black overflow-hidden'>
      <Outlet/>
    </div>
  )
}

export default AuthLayout
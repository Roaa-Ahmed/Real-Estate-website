import React from 'react'
import { useNavigate } from 'react-router'

const BackButton = () => {
  const navigate=useNavigate();
  const handleGoBack=()=>{
    navigate(-1)
  }
return handleGoBack
}

export default BackButton
import React from 'react'
import { Link } from 'react-router'

const LogoWithLabel = ({Icon,label,classLabel,classIcon,classDiv}) => {
  return (
    <Link to='/' className=' flex  items-center'>
  <div className={`flex items-center  gap-2  ${classDiv}`}>
      <Icon className={classIcon}/>
          <h2
            className={` font-semibold text-2xl text-[rgba(255,255,255,1)] 
                leading-7 tracking-normal font-sans ${classLabel}`}
          >
          {label}
          </h2>
        </div>  
        </Link>
        )
}

export default LogoWithLabel
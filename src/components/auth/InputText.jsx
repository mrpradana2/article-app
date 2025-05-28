import React, { useState } from 'react'
import Image from 'next/image'
import EyeOff from "../../assets/Eye-off.svg" 
import EyeOn from "../../assets/Eye-on.png"

export default function InputText({id, label, type, name, placeholder, validate, message}) {
  const [openEye, setOpenEye] = useState(false);

  return (
    type === "password" ? 
    <>
      <div className='flex flex-col gap-y-1 w-full'>
        <label htmlFor={id} className='font-semibold text-sm'>{label}</label>
        <div className='h-max w-full relative'>
            <input type={`${openEye ? "text" : "password" }`} name={name} id={id} placeholder={placeholder} className='border border-gray-300 rounded-md w-full focus:outline-primary pl-2 pr-8 py-1'/>
            <Image src={openEye ? EyeOff : EyeOn} alt='icon open eye' className='w-4 h-4 absolute right-0 top-0 -translate-x-1/2 translate-y-1/2 pt-0.5 cursor-pointer' onClick={() => {
                setOpenEye((openEye) => {
                    return !openEye;
                })
            }}/>
        </div>
        <p className={`${validate ? "hidden" : "block"} text-sm text-red-500 italic`}>{message}</p>
    </div>
    </>
    : 
    <>
      <div className='flex flex-col gap-y-1'>
          <label htmlFor={id} className='font-semibold text-sm'>{label}</label>
          <input type={type} name={name} id={id} placeholder={placeholder} className='border border-gray-300 rounded-md focus:outline-primary px-2 py-1'/>
          <p className={`${validate ? "hidden" : "block"} text-sm text-red-500 italic`}>{message}</p>
      </div>
    </> 
  )
}

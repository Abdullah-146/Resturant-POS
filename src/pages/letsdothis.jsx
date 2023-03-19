import { Email } from '@mui/icons-material'
import React from 'react'

function Letsdothis() {
  return (
    // main container
    <div  className='bg-white flex flex-1 flex-col justify-center items-center min-w-full h-screen border-4 border-[red] ' >
        <div>
        <p  className='font-Poppins font-bold text-4xl text-[#2F2F2F]'>LOGO</p>
        </div>
        <div className='mt-20 flex flex-col justify-center items-center ' >
        <p  className='font-Poppins font-bold text-4xl text-[#2F2F2F]'>Welcome Back Admin !</p>
        <p  className='font-Poppins font-medium text-xl text-[#2F2F2F] pt-6'>Login to continue view activities </p>
        </div>

        {/* input */}
        {/* Take input with logo of message at start */}
        <div className='flex flex-col justify-center items-center mt-20  border-2 border-[#2F2F2F] rounded-[8px] ' >
        <div className='flex flex-row justify-center items-center ' >
        <span className='text-[#2F2F2F] text-4xl ' >
        <Email />
        </span>
        <input type='text' placeholder='Your Mail?' className='bg-[#ffffff] min-h-[5.6rem] min-w-[12.5rem] w-full p-2 mt-[1rem]  pl-[4.8rem] flex-[7] text-[1.2rem] font-Poppins font-normal border-none ' />
        </div>
        </div>
    </div>
  )
}

export default Letsdothis
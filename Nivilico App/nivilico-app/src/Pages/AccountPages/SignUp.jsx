import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

//icons
import { PiUserCircleThin } from "react-icons/pi";
import { PiPhoneCallThin } from "react-icons/pi";
import { PiLockThin } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";

//images
import frame1 from '../../assets/Signing Forms/rectangle1.png';
import frame2 from '../../assets/Signing Forms/rectangle2.png';
import frame3 from '../../assets/Signing Forms/frame1.png';

const SignUp = () => {
  return (
    <>
      <Helmet>
        <title>Create Account | Nivilico Insurance Agency</title>
      </Helmet>
      <body className='bg-[#F7F8FD] lg:min-h-screen relative font-lato'>
        <div className='absolute top-0 right-0'>
          <img src={frame1} alt="" className='object-contain max-w-[20rem]'/>
        </div>
        <div className='absolute bottom-0 left-0'>
          <img src={frame2} alt="" className='object-contain max-w-[20rem]'/>
        </div>

        {/* Main Section */}
        <section className='flex flex-col justify-center items-center min-h-screen '>
          <div className='bg-white shadow-md md:flex justify-center w-[95%] md:w-[75%] mx-auto rounded-md z-40'>
            {/* Form Side */}
            <div className='flex-none w-[90%] md:w-[64%] p-3 pb-5'>
              <div className='mt-10 mb-5'>
                <h2 className='text-3xl text-center font-bold text-[#640F84]'>Create Account</h2>
              </div>

              {/* Sign Up Form */}
              <form action="" className='w-full md:w-[80%] mx-auto space-y-5'>
                <div className='w-full bg-[#F7F8FD] px-3 py-2 text-[#8B8787] font-lato flex items-center gap-2 text-lg'>
                  <div className='text-4xl'>
                    <PiUserCircleThin />
                  </div>
                  <input 
                    type="text"
                    name=''
                    placeholder='Full Name' 
                    className='bg-[#F7F8FD] outline-none w-full'
                    required
                  />
                </div>

                <div className='w-full bg-[#F7F8FD] px-3 py-2 text-[#8B8787] font-lato flex items-center gap-2 text-lg'>
                  <div className='text-4xl'>
                    <PiPhoneCallThin />
                  </div>
                  <input 
                    type="text"
                    name=''
                    placeholder='Phone Number' 
                    className='bg-[#F7F8FD] outline-none w-full'
                    required
                  />
                </div>

                <div className='w-full bg-[#F7F8FD] px-3 py-2 text-[#8B8787] font-lato flex items-center gap-2 text-lg'>
                  <div className='text-3xl'>
                    <TfiEmail />
                  </div>
                  <input 
                    type="email"
                    name=''
                    placeholder='Email' 
                    className='bg-[#F7F8FD] outline-none w-full'
                    required
                  />
                </div>

                <div className='w-full bg-[#F7F8FD] px-3 py-2 text-[#8B8787] font-lato flex items-center gap-2 text-lg'>
                  <div className='text-4xl'>
                    <PiLockThin />
                  </div>
                  <input 
                    type="password"
                    name=''
                    placeholder='Password' 
                    className='bg-[#F7F8FD] outline-none w-full'
                    required
                  />
                </div>

                <div >
                  <div className='flex justify-center gap-2'>
                    <input 
                      type="checkbox" 
                      name="" 
                      id="" 
                      required
                    />
                    <p className='text-[#8B8787] text-md '>I agree to the terms and conditions</p>
                  </div>
                  
                  <div className='text-[#8B8787] text-center '>
                    <p>Already have an account ? <Link to='/sign-in' className='ml-1 text-[#640F84]'>Sign In</Link></p>
                  </div>
                </div>

              <div className='w-[50%] mx-auto'>
                <button type='submit' className='bg-gradient-to-r from-[#9E0D84] to-[#640F84] text-white text-lg font-medium w-full py-2 rounded-md'>Sign Up</button>
              </div>
              </form>
            </div>

            {/* Pic Side */}
            <div className='hidden md:flex md:flex-grow bg-gradient-to-b from-[#640F84] to-[#17031E] rounded-tr-md rounded-br-md font-lato relative overflow-hidden'>
              <div className='text-white text-right p-5'>
                <p>Don’t leave your future to chance – let us ensure your peace of mind</p>
              </div>
              <div className='absolute flex flex-col justify-center items-center bottom-0'>
                <img src={frame3} alt="" className='max-h-[28.3rem]'/>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  )
}

export default SignUp;
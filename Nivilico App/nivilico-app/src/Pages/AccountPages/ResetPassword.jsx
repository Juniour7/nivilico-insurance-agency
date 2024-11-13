import React from 'react';
import { Helmet } from 'react-helmet-async';

//icons
import { TfiEmail } from 'react-icons/tfi';
import { PiLockThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';

//images
import frame1 from '../../assets/Signing Forms/rectangle1.png';
import frame2 from '../../assets/Signing Forms/rectangle2.png';
import frame3 from '../../assets/Signing Forms/frame3.png'

const ResetPassword = () => {
  return (
    <>
      <Helmet>
        <title>Reset Password | Nivilico Insurance Agency</title>
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
          <div className='bg-white shadow-md md:flex justify-center w-[95%] md:w-[70%] mx-auto rounded-md z-40'>
            {/* Right Side */}
            <div className='hidden md:flex md:flex-grow bg-gradient-to-b from-[#640F84] to-[#17031E] rounded-tl-md rounded-bl-md font-lato relative overflow-hidden'>
              <div className='text-white p-5'>
                <p>Don’t leave your future to chance – let us ensure your peace of mind</p>
              </div>
              <div className='absolute inset-0 flex justify-center items-center'>
                <img src={frame3} alt="" className='max-h-[25.3rem]'/>
              </div>
            </div>
            
            {/* Left Side */}
            <div className='flex-none w-[90%] md:w-[60%] p-3 pb-5 my-24'>
              <div className='mt-10 mb-5 text-center space-y-2'>
                <h2 className='text-3xl text-center font-bold text-[#640F84]'>Forgot Password?</h2>
                <p className='text-[#4B4E51] text-sm'>Forgot your password? Don’t worry, we’ve got you covered!</p>
              </div>

              <form action="" className='w-full md:w-[80%] mx-auto space-y-5'>
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
                    placeholder='New Password' 
                    className='bg-[#F7F8FD] outline-none w-full'
                    required
                  />
                </div>

                <div className='w-[50%] mx-auto'>
                  <button type='submit' className='bg-gradient-to-r from-[#9E0D84] to-[#640F84] text-white text-lg font-medium w-full py-2 rounded-md hover:bg-gradient-to-l transition-all duration-700 ease-in-out'>Reset Password</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </body>
    </>
  )
}

export default ResetPassword;
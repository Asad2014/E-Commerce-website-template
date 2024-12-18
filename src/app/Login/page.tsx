
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-8 lg:px-16 mb-20'>

      {/* Side Image */}
      <div className='mt-10 mb-5 md:mb-0'>
        <img 
          src="/Side Image.png"
          alt="Side Image" 
          width={500} 
          height={500} 
          className="object-contain w-full md:w-[400px] lg:w-[500px]"
        />
      </div>

      {/* Login Form */}
      <div className='w-full md:w-1/2 lg:w-[40%] px-4 md:px-8'>
        <h1 className='text-2xl md:text-3xl font-medium leading-tight text-center md:text-left'>
          Log in to Exclusive
        </h1>
        <p className='text-sm md:text-base font-normal leading-6 pt-4 text-center md:text-left'>
          Enter your details below
        </p>

        <form className='flex flex-col mt-5'>
          <input
            type="email"
            placeholder="Email or Phone Number"
            className='bg-transparent border-b-2 border-gray-300 py-2 mt-4 focus:outline-none focus:border-red-500 w-full'
          />
          <input
            type="password"
            placeholder="Password"
            className='bg-transparent border-b-2 border-gray-300 py-2 mt-4 focus:outline-none focus:border-red-500 w-full'
          />
        </form>

        {/* Buttons and Forgot Password */}
        <div className='flex flex-col md:flex-row items-center justify-between mt-6'>
          <button 
            className='bg-[#DB4444] w-full md:w-auto rounded-md py-2 px-12 text-white hover:bg-red-600 transition duration-300'>
            Log in
          </button>
          <Link 
            href='/forget-password' 
            className='text-[#DB4444] text-sm mt-4 md:mt-0 md:ml-4 hover:underline'>
            Forget Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

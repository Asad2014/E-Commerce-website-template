
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';

const page = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-8 lg:px-16 mb-20'>

      {/* Side Image */}
      <div className='mt-10 mb-5 md:mb-0'>
        <img 
          src="/Side Image.png" 
          alt="SideImage" 
          width={500} 
          height={500} 
          className="object-contain w-full md:w-[400px] lg:w-[500px]"
        />
      </div>

      {/* Form Section */}
      <div className='w-full md:w-1/2 lg:w-[40%] px-4 md:px-8'>
        <h1 className='text-2xl md:text-3xl font-medium leading-tight text-center md:text-left'>
          Create an account
        </h1>
        <p className='text-sm md:text-base font-normal leading-6 pt-4 text-center md:text-left'>
          Enter your details below
        </p>

        <form className='flex flex-col mt-5'>
          <input 
            type="text" 
            placeholder="Name" 
            className='bg-transparent border-b-2 border-gray-300 py-2 mt-4 focus:outline-none focus:border-red-500 w-full'
          />
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

        {/* Buttons */}
        <button 
          className='bg-[#DB4444] rounded-md py-2 w-full mt-6 text-white hover:bg-red-600 transition duration-300'>
          Create Account
        </button>
        <button 
          className='flex items-center justify-center border-2 rounded-md py-2 w-full mt-4 text-black hover:border-gray-300 transition duration-300'>
          <FcGoogle className="mr-2" /> Sign up with Google
        </button>

        {/* Login Link */}
        <p className='text-center mt-6 text-sm'>
          Already have an account? 
          <Link 
            href="Login" 
            className="text-blue-600 hover:underline ml-1">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;

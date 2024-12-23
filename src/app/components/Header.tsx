
"use client";
import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from 'next/link';
import { MdMenu } from "react-icons/md";

const UpperHeader = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-black h-[48px] w-full flex items-center justify-between px-4 md:px-8">
        <span className="text-white text-center text-sm md:text-base mx-auto">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
          <Link href="/home" className="mx-2 underline">
            Shop Now
          </Link>
        </span>
        <div className="hidden md:block">
          <select className="text-white bg-black outline-none">
            <option value="english">English</option>
          </select>
        </div>
      </div>

      {/* Header */}
      <header className="flex flex-wrap items-center justify-between px-4 md:px-8 py-4 border-b-2">
        {/* Logo */}
        <div className="w-full md:w-auto flex justify-center md:justify-start mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-black">Exclusive</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-end items-center px-4 py-2">
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-sm text-black hover:text-gray-700">Home</Link>
            <Link href="/Contact" className="text-sm text-black hover:text-gray-700">Contact</Link>
            <Link href="/About" className="text-sm text-black hover:text-gray-700">About</Link>
            <Link href="/Signup" className="text-sm text-black hover:text-gray-700">Sign Up</Link>
          </nav>
        </div>

        {/* Icons and Search */}
        <div className="flex items-center space-x-4 w-full md:w-auto justify-center md:justify-end">
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded w-full md:w-auto">
            <input 
              type="text"
              placeholder="What are you looking for?" 
              className="bg-transparent outline-none text-sm flex-grow"
            />
            <IoSearchOutline className="text-black text-xl" />
          </div>
          <CiHeart className="text-black text-xl hidden md:block" />
          <Link href="/Cart">
            <MdOutlineShoppingCart className="text-black text-xl cursor-pointer" />
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            <MdMenu size={25}/>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white py-4 px-6">
          <nav className="space-y-4">
            <Link href="/" className="block text-sm" onClick={toggleMenu}>Home</Link>
            <Link href="/Contact" className="block text-sm" onClick={toggleMenu}>Contact</Link>
            <Link href="/About" className="block text-sm" onClick={toggleMenu}>About</Link>
            <Link href="/Signup" className="block text-sm" onClick={toggleMenu}>Sign Up</Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default UpperHeader;

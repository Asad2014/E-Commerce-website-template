import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-center items-center w-full pt-9 mb-5 pl-20">
      {/* Categories Section */}
      <div className="md:pl-8 border-r-0 md:border-r-2 pr-48 md:pr-8 mb-6 md:mb-0">
        <div>
          <Link href="/Woman’s Fashion"
             className="block text-sm md:text-base text-gray-800 hover:text-blue-500 mb-2">
              Woman’s Fashion
          </Link>
          <Link href="/Men’s Fashion"
             className="block text-sm md:text-base text-gray-800 hover:text-blue-500 mb-2">
              Men’s Fashion
          </Link>
          <Link href="/Electronics"
             className="block text-sm md:text-base text-gray-800 hover:text-blue-500 mb-2">
              Electronics
          </Link>
          <Link href="/Home & Lifestyle"
             className="block text-sm md:text-base text-gray-800 hover:text-blue-500 mb-2">
              Home & Lifestyle
          </Link>
          <Link href="/Medicine"
             className="block text-sm md:text-base text-gray-800 hover:text-blue-500 mb-2">
              Medicine
          </Link>
          <Link href="/Sports & Outdoor"
             className="block text-sm md:text-base text-gray-800 hover:text-blue-500 mb-2">
              Sports & Outdoor
            
          </Link>
          <Link href="/Baby’s & Toys"
             className="block text-sm md:text-base text-gray-800 hover:text-blue-500 mb-2">
              Baby’s & Toys
          </Link>
          <Link href="/Groceries & Pets"
             className="block text-sm md:text-base text-gray-800 hover:text-blue-500 mb-2">
              Groceries & Pets
          </Link>
          <Link href="/Health & Beauty"
             className="block text-sm md:text-base text-gray-800 hover:text-blue-500">
              Health & Beauty 
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-2/3 flex justify-center md:justify-center md:mx-auto mr-24">
        <img
          src="Frame 560.png"
          alt="frame"
          className=""
          width={800}
          height={800}
        />
      </div>
    </div>
  );
};

export default Hero;




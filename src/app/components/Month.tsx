
import React from 'react';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Month = () => {
  return (
    <div className="mt-10 pb-10 w-full border-t-2">
      {/* Header Section */}
      <div className="pt-5 flex flex-wrap justify-between items-center mb-5 mt-5 px-5 lg:px-[100px]">
        <div>
          <h3 className="text-red-500 font-bold border-l-4 lg:border-l-8 border-red-400 pl-4">
            This Month
          </h3>
          <h1 className="text-[24px] lg:text-[36px] text-black mt-2">Best Selling Products</h1>
        </div>
        <div className="mt-4 lg:mt-0">
          <button className="bg-[#DB4444] text-white rounded-md px-4 py-2 lg:py-3 hover:bg-red-600">
            View All
          </button>
        </div>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 lg:px-[100px]">
        {/* Product 1 */}
        <div className="text-center">
          <img src="/coat.png" alt="coat" className="mx-auto" />
          <h1 className="text-[16px] leading-[24px] mt-2">The North Coat</h1>
          <span className="text-red-500 font-bold">$260</span>
          <span className="text-gray-400 font-bold line-through ml-2">$360</span>
          <div className="flex justify-center items-center space-x-1 text-yellow-400 text-xs pt-1">
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <span className="text-gray-400">(65)</span>
          </div>
        </div>

        {/* Product 2 */}
        <div className="text-center">
          <img src="/bag.png" alt="bag" className="mx-auto" />
          <h1 className="text-[16px] leading-[24px] mt-2">Gucci Duffle Bag</h1>
          <span className="text-red-500 font-bold">$960</span>
          <span className="text-gray-400 font-bold line-through ml-2">$1160</span>
          <div className="flex justify-center items-center space-x-1 text-yellow-400 text-xs pt-1">
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={regularStar} width={"20px"}/>
            <span className="text-gray-400">(65)</span>
          </div>
        </div>

        {/* Product 3 */}
        <div className="text-center">
          <img src="/speaker.png" alt="speaker" className="mx-auto" />
          <h1 className="text-[16px] leading-[24px] mt-2">RGB Liquid CPU Cooler</h1>
          <span className="text-red-500 font-bold">$160</span>
          <span className="text-gray-400 font-bold line-through ml-2">$170</span>
          <div className="flex justify-center items-center space-x-1 text-yellow-400 text-xs pt-1">
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={regularStar} width={"20px"}/>
            <span className="text-gray-400">(65)</span>
          </div>
        </div>

        {/* Product 4 */}
        <div className="text-center">
          <img src="/shelf.png" alt="shelf" className="mx-auto" />
          <h1 className="text-[16px] leading-[24px] mt-2">Small Bookshelf</h1>
          <span className="text-red-500 font-bold">$360</span>
          <div className="flex justify-center items-center space-x-1 text-yellow-400 text-xs pt-1">
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={regularStar} width={"20px"}/>
            <span className="text-gray-400">(65)</span>
          </div>
        </div>
      </div>

      {/* Footer Image */}
      <div className="flex justify-center mt-10">
        <img src="/Frame 600.png" alt="frame" className="max-w-full px-5" />
      </div>
    </div>
  );
};

export default Month;




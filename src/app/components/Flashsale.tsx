
import React from 'react';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Flashsale = () => {
  return (
    <div className="pt-5 pb-10 w-full">
      {/* Header */}
      <div>
        <h3 className="text-red-500 font-bold border-l-8 border-red-400 pl-4 ml-4 md:ml-28">
          Today&apos;s
        </h3>
        <h1 className="text-[28px] md:text-[36px] text-black pl-4 md:pl-28">
          Flash Sales
        </h1>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-28 mt-8">
        {/* Product 1 */}
        <div className="text-center">
          <img src="gamepad.png" alt="gamepad" className="mx-auto mb-4" />
          <h1 className="text-[16px] leading-[24px] font-medium">
            HAVIT HV-G92 Gamepad
          </h1>
          <span className="text-red-500 font-bold">$120</span>
          <span className="text-gray-400 font-bold line-through ml-2">$160</span>
          <div className="flex justify-center space-x-1 text-yellow-400 text-sm pt-1 mb-5">
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <span className="text-gray-400">(88)</span>
          </div>
        </div>

        {/* Product 2 */}
        <div className="text-center">
          <img src="keybord.png" alt="keybord" className="mx-auto mb-4" />
          <h1 className="text-[16px] leading-[24px] font-medium">
            AK-900 Wired Keyboard
          </h1>
          <span className="text-red-500 font-bold">$120</span>
          <span className="text-gray-400 font-bold line-through ml-2">$160</span>
          <div className="flex justify-center space-x-1 text-yellow-400 text-sm pt-1 mb-5">
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={regularStar} width={"20px"}/>
            <span className="text-gray-400">(88)</span>
          </div>
        </div>

        {/* Product 3 */}
        <div className="text-center">
          <img src="monitor.png" alt="monitor" className="mx-auto mb-4" />
          <h1 className="text-[16px] leading-[24px] font-medium">
            IPS LCD Gaming Monitor
          </h1>
          <span className="text-red-500 font-bold">$120</span>
          <span className="text-gray-400 font-bold line-through ml-2">$160</span>
          <div className="flex justify-center space-x-1 text-yellow-400 text-sm pt-1 mb-5">
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={regularStar} width={"20px"}/>
            <span className="text-gray-400">(88)</span>
          </div>
        </div>

        {/* Product 4 */}
        <div className="text-center">
          <img src="chair.png" alt="chair" className="mx-auto mb-4" />
          <h1 className="text-[16px] leading-[24px] font-medium">
            S-Series Comfort Chair
          </h1>
          <span className="text-red-500 font-bold">$120</span>
          <span className="text-gray-400 font-bold line-through ml-2">$160</span>
          <div className="flex justify-center space-x-1 text-yellow-400 text-sm pt-1 mb-5">
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={regularStar} width={"20px"}/>
            <span className="text-gray-400">(88)</span>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center items-center pt-5">
        <button className="bg-red-500 hover:bg-red-600 text-white rounded-md px-6 py-3 transition">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Flashsale;

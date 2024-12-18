
import React from 'react';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Products = () => {
  return (
    <div className="pt-5 pb-10 w-full">
      {/* Header Section */}
      <div className="px-10 lg:px-[110px]  lg:text-left">
        <h3 className="text-red-500 font-bold border-l-4 lg:border-l-8 pl-4 border-red-400">
          Our Products
        </h3>
        <h1 className="text-2xl lg:text-[36px] text-black mt-2">
          Explore Our Products
        </h1>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 lg:px-[110px] mt-7">
        {/* Product Cards */}
        <div className="text-center">
          <img src="/dogfood.png" alt="food" className="mx-auto" />
          <h1 className="text-[16px] leading-[24px] mt-2">Breed Dry Dog Food</h1>
          <span className="text-red-500 font-bold">$100</span>
          <div className="flex justify-center items-center space-x-1 text-yellow-400 text-sm pt-1 mb-5">
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={regularStar} width={"20px"}/>
            <FontAwesomeIcon icon={regularStar} width={"20px"}/>
            <span className="text-gray-400">(35)</span>
          </div>
        </div>

        <div className="text-center">
          <img src="/canoncamera.png" alt="camera" className="mx-auto" />
          <h1 className="text-[16px] leading-[24px] mt-2">CANON EOS DSLR Camera</h1>
          <span className="text-red-500 font-bold">$360</span>
          <div className="flex justify-center items-center space-x-1 text-yellow-400 text-sm pt-1 mb-5">
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={regularStar} width={"20px"}/>
            <span className="text-gray-400">(55)</span>
          </div>
        </div>

        <div className="text-center">
          <img src="/laptop1.png" alt="laptop" className="mx-auto" />
          <h1 className="text-[16px] leading-[24px] mt-2">ASUS FHD Gaming Laptop</h1>
          <span className="text-red-500 font-bold">$700</span>
          <div className="flex justify-center items-center space-x-1 text-yellow-400 text-sm pt-1 mb-5">
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <span className="text-gray-400">(325)</span>
          </div>
        </div>

        <div className="text-center">
          <img src="/Cart.png" alt="cart" className="mx-auto" />
          <h1 className="text-[16px] leading-[24px] mt-2">Curology Product Set</h1>
          <span className="text-red-500 font-bold">$500</span>
          <div className="flex justify-center items-center space-x-1 text-yellow-400 text-sm pt-1 mb-5">
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={regularStar} width={"20px"}/>
            <span className="text-gray-400">(145)</span>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 lg:px-[110px] mt-7">
        <div className="text-center">
          <img src="/electriccar.png" alt="car" className="mx-auto" />
          <h1 className="text-[16px] leading-[24px] mt-2">Kids Electric Car</h1>
          <span className="text-red-500 font-bold">$960</span>
          <div className="flex justify-center items-center space-x-1 text-yellow-400  pt-1 mb-5">
            <FontAwesomeIcon icon={solidStar} width={"20px"} />
            <FontAwesomeIcon icon={solidStar} width={"20px"} />
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <span className="text-gray-400">(65)</span>
          </div>
        </div>

        <div className="text-center">
          <img src="/shoes.png" alt="shoes" className="mx-auto" />
          <h1 className="text-[16px] leading-[24px] mt-2">Jr. Zoom Soccer Cleats</h1>
          <span className="text-red-500 font-bold">$1160</span>
          <div className="flex justify-center items-center space-x-1 text-yellow-400 text-sm pt-1 mb-5">
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <span className="text-gray-400">(35)</span>
          </div>
        </div>

        <div className="text-center">
          <img src="/usbgamepad.png" alt="pad" className="mx-auto" />
          <h1 className="text-[16px] leading-[24px] mt-2">GP11 Shooter USB Gamepad</h1>
          <span className="text-red-500 font-bold">$660</span>
          <div className="flex justify-center items-center space-x-1 text-yellow-400 text-sm pt-1 mb-5">
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <span className="text-gray-400">(55)</span>
          </div>
        </div>

        <div className="text-center">
          <img src="/jacket.png" alt="jacket" className="mx-auto" />
          <h1 className="text-[16px] leading-[24px] mt-2">Quilted Satin Jacket</h1>
          <span className="text-red-500 font-bold">$660</span>
          <div className="flex justify-center items-center space-x-1 text-yellow-400 text-sm pt-1 mb-5">
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={solidStar} width={"20px"}/>
            <FontAwesomeIcon icon={regularStar} width={"20px"}/>
            <span className="text-gray-400">(55)</span>
          </div>
        </div>
      </div>

      {/* View All Products Button */}
      <div className="flex justify-center items-center pt-5">
        <button className="bg-[#DB4444] text-white rounded-md px-6 py-3 hover:bg-red-600 transition">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Products;




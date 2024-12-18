
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full mb-20 mt-20 px-4">
      {/* Main Section */}
      <div className="grid grid-cols-1 gap-6 mt-5 lg:flex lg:justify-around">
        {/* Product Section */}
        <div className="space-y-6">
          <h1 className="text-lg font-bold">Product</h1>
          <div className="flex items-center gap-4">
            <Image src={"/lcd.png"} width={50} height={50} alt="LCD Monitor" />
            <p>LCD Monitor</p>
          </div>
          <div className="flex items-center gap-4">
            <Image src={"/game.png"} width={50} height={50} alt="H1 Gamepad" />
            <p>H1 Gamepad</p>
          </div>
        </div>

        {/* Price Section */}
        <div className="space-y-6">
          <h1 className="text-lg font-bold">Price</h1>
          <h2>$650</h2>
          <h2>$550</h2>
        </div>

        {/* Quantity Section */}
        <div className="space-y-6">
          <h1 className="text-lg font-bold">Quantity</h1>
          <Image src={"/Quantity1.png"} width={50} height={50} alt="Quantity 1" />
          <Image src={"/Quantity2.png"} width={50} height={50} alt="Quantity 2" />
        </div>

        {/* Subtotal Section */}
        <div className="space-y-6">
          <h1 className="text-lg font-bold">Subtotal</h1>
          <h2>$650</h2>
          <h2>$1100</h2>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="mt-7 flex flex-col gap-4 lg:flex-row lg:justify-between ml-20 mr-20">
        <button className="text-black rounded-md px-4 py-3 border-2">
          Return To Shop
        </button>
        <button className="text-black rounded-md px-4 py-3 border-2">
          Update Cart
        </button>
      </div>

      {/* Coupon and Cart Total Section */}
      <div className="grid grid-cols-1 gap-6 mt-14 lg:flex lg:justify-center">
        {/* Coupon Code */}
        <div className="flex flex-col gap-4 items-start lg:items-start lg:flex-row">
          <input
            type="text"
            placeholder="Coupon Code"
            className="px-4 py-3 border-2 border-black w-full lg:w-auto"
          />
          <button className="bg-[#DB4444] text-white rounded-md px-4 py-3">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total */}
        <div className="border-2 border-black p-5 w-full lg:w-[30%]">
          <h1 className="text-xl font-bold pt-4">Cart Total</h1>
          <div className="flex justify-between border-b-2 border-gray-300 pb-5">
            <h2>Subtotal:</h2>
            <p>$1750</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-300 pb-5">
            <h2>Shipping:</h2>
            <p>Free</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-300 pb-5">
            <h2>Total:</h2>
            <p>$1750</p>
          </div>
          <div className="flex justify-center pt-5">
            <button className="bg-[#DB4444] text-white rounded-md px-4 py-3">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

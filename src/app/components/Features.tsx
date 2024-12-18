
import React from 'react';

const Features = () => {
  return (
    <div className="pb-[70px] w-full">
      {/* Header Section */}
      <div className="lg:px-24 px-8 text-left">
        <h3 className="text-red-500 font-bold border-l-4 lg:border-l-8 pl-4 border-red-400">
          Featured
        </h3>
        <h1 className="text-2xl lg:text-[36px] text-black mt-2">New Arrival</h1>
      </div>

      {/* Featured Products Section */}
      <section className="flex flex-col lg:flex-row justify-center gap-5 px-5 lg:px-0 mt-8">
        {/* PlayStation Image */}
        <div className="flex justify-center">
          <img src="/playstation5.png" alt="playstation" />
        </div>

        {/* Other Images */}
        <div className="flex flex-col gap-5">
          <div className="flex justify-center">
            <img
              src="/womencollection.png"
              alt="collection"
              className=""
            />
          </div>
          <div className="flex justify-center gap-3">
            <img
              src="/bigspeaker.png"
              alt="speaker"
              className="max-w-[170px] lg:max-w-[300px]"
            />
            <img
              src="/perfume.png"
              alt="perfume"
              className="max-w-[170px] lg:max-w-[300px]"
            />
          </div>
        </div>
      </section>

      {/* Features List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5 lg:px-24 mt-[50px] text-center">
        {/* Delivery Feature */}
        <div>
          <div className="flex justify-center items-center">
            <img src="/deliverylogo.png" alt="delivery" className="max-w-[60px] lg:max-w-[80px]" />
          </div>
          <h1 className="text-[18px] lg:text-[20px] leading-[28px] font-bold mt-2">
            FREE AND FAST DELIVERY
          </h1>
          <p className="text-[14px] lg:text-[16px] leading-[21px] font-normal mt-2">
            Free delivery for all orders over $140
          </p>
        </div>

        {/* Customer Service Feature */}
        <div>
          <div className="flex justify-center items-center">
            <img
              src="/customer.png"
              alt="customer"
              className="max-w-[60px] lg:max-w-[80px]"
            />
          </div>
          <h1 className="text-[18px] lg:text-[20px] leading-[28px] font-bold mt-2">
            24/7 CUSTOMER SERVICE
          </h1>
          <p className="text-[14px] lg:text-[16px] leading-[21px] font-normal mt-2">
            Friendly 24/7 customer support
          </p>
        </div>

        {/* Money Back Feature */}
        <div>
          <div className="flex justify-center items-center">
            <img
              src="/moneyback.png"
              alt="moneyback"
              className="max-w-[60px] lg:max-w-[80px]"
            />
          </div>
          <h1 className="text-[18px] lg:text-[20px] leading-[28px] font-bold mt-2">
            MONEY BACK GUARANTEE
          </h1>
          <p className="text-[14px] lg:text-[16px] leading-[21px] font-normal mt-2">
            We return money within 30 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;

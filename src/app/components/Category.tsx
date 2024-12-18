
import React from 'react';

const Category = () => {
  return (
    <div>
      {/* Divider */}
      <div className="w-full border-b-2 pb-4"></div>

      {/* Header Section */}
      <div className="pt-8">
        <h3 className="text-red-500 font-bold border-l-4 md:border-l-8 border-red-400 pl-4 mx-4 md:ml-[120px]">
          Categories
        </h3>
        <h1 className="text-[24px] md:text-[36px] font-semibold leading-[32px] md:leading-[48px] pl-4 md:pl-[120px] mt-2">
          Browse By Category
        </h1>

        {/* Category Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-6 px-4 md:px-[100px]">
          <img
            src="/Category-Phone.png"
            alt="phone"
            className="w-20 h-20 sm:w-24 sm:h-24 mx-auto"
          />
          <img
            src="/Category-Phone (1).png"
            alt="monitor"
            className="w-20 h-20 sm:w-24 sm:h-24 mx-auto"
          />
          <img
            src="/smartwatch.png"
            alt="watch"
            className="w-20 h-20 sm:w-24 sm:h-24 mx-auto"
          />
          <img
            src="/camera.png"
            alt="camera"
            className="w-20 h-20 sm:w-24 sm:h-24 mx-auto"
          />
          <img
            src="/headphones.png"
            alt="headphones"
            className="w-20 h-20 sm:w-24 sm:h-24 mx-auto"
          />
          <img
            src="/gaming.png"
            alt="gaming"
            className="w-20 h-20 sm:w-24 sm:h-24 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;

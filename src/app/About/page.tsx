
import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="w-full px-4">
      {/* Section: Our Story */}
      <div className="flex flex-col lg:flex-row justify-center items-center mt-10 lg:mt-20 gap-8">
        {/* Left Side */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Our Story</h1>
          <p className="pt-4 text-sm md:text-base">
            Launched in 2015, Exclusive is South Asia’s premier online shopping <br />
            marketplace with an active presence in Bangladesh. Supported <br />
            by a wide range of tailored marketing, data, and service solutions, <br />
            Exclusive has 10,500 sellers and 300 brands and serves 3 <br />
            millions customers across the region.
          </p>

          <p className="mt-4 text-sm md:text-base">
            Exclusive has more than 1 million products to offer, growing at a <br />
            very fast pace. Exclusive offers a diverse assortment in categories <br />
            ranging from consumer products.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <Image
            src="/womenpic.png"
            width={500}
            height={600}
            alt="Our Story"
            className="w-full max-w-[400px] lg:max-w-[500px] h-auto"
          />
        </div>
      </div>
  
  <div className="flex flex-wrap items-center justify-center gap-3 mt-20 text-center">
  <div className="w-full sm:w-1/2 md:w-auto flex justify-center">
    <Image 
      src="/Frame 870.png" 
      width={150} 
      height={200} 
      alt="Mobile"
    />
  </div>

  <div className="w-full sm:w-1/2 md:w-auto flex justify-center">
    <Image 
      src="/Frame 871.png" 
      width={150} 
      height={200} 
      alt="Mobile"
    />
  </div>

  <div className="w-full sm:w-1/2 md:w-auto flex justify-center">
    <Image 
      src="/Frame 872.png" 
      width={150} 
      height={200} 
      alt="Mobile"
    />
  </div>

  <div className="w-full sm:w-1/2 md:w-auto flex justify-center">
    <Image 
      src="/Frame 873.png" 
      width={150} 
      height={200} 
      alt="Mobile"
    />
  </div>
</div>


<section className="flex flex-wrap items-center justify-center gap-5 mt-20">
  <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center">
    <Image 
      src="/Frame 888.png"
      width={200}
      height={200}
      alt="Mobile"
    />
  </div>

  <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center">
    <Image 
      src="/Frame 887.png"
      width={200}
      height={200}
      alt="Mobile"
    />
  </div>

  <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center">
    <Image 
      src="/Frame 889.png"
      width={200}
      height={200}
      alt="Mobile"
    />
  </div>
</section>


      {/* Section: Delivery, Customer Service, and Money Back */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10 lg:mt-20 mb-10 lg:mb-20">
        {/* Delivery */}
        <div className="text-center max-w-xs">
          <div className="flex justify-center mb-2">
            <Image src="/deliverylogo.png" width={50} height={50} alt="Delivery" />
          </div>
          <h1 className="text-lg font-semibold">FREE AND FAST DELIVERY</h1>
          <p className="text-sm">Free delivery for all orders over $140</p>
        </div>

        {/* Customer Service */}
        <div className="text-center max-w-xs">
          <div className="flex justify-center mb-2">
            <Image src="/customer.png" width={50} height={50} alt="Customer Service" />
          </div>
          <h1 className="text-lg font-semibold">24/7 CUSTOMER SERVICE</h1>
          <p className="text-sm">Friendly 24/7 customer support</p>
        </div>

        {/* Money Back */}
        <div className="text-center max-w-xs">
          <div className="flex justify-center mb-2">
            <Image src="/moneyback.png" width={50} height={50} alt="Money Back" />
          </div>
          <h1 className="text-lg font-semibold">MONEY BACK GUARANTEE</h1>
          <p className="text-sm">We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default Page;



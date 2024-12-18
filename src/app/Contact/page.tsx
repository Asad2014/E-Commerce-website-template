
import React from 'react';

const Page = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center mb-24 px-10">

      {/* Left Section: Contact Information */}
      <div className="w-full sm:w-1/2 lg:w-1/3 mt-20">
        <div className="border-b-2 space-y-2 pb-8">
          <div className="flex items-center space-x-4 pb-2">
            <img src="/icons-phone.png" alt="Phone Icon" className="w-6 h-6" />
            <h1 className="text-[16px]">Call To Us</h1>
          </div>
          <ul className="space-y-2">
            <li className="text-sm pl-3">We are available 24/7, 7 days a week.</li>
            <li className="text-sm pl-3">Phone: +8801611112222</li>
          </ul>
        </div>

        <div className="space-y-2 pt-8">
          <div className="flex items-center space-x-4 pb-2">
            <img src="/icons-mail.png" alt="Mail Icon" className="w-6 h-6" />
            <h1 className="text-[16px]">Write To Us</h1>
          </div>
          <ul className="space-y-2">
            <li className="text-sm pl-3">Fill out our form and we will contact you within 24 hours.</li>
            <li className="text-sm pl-3">Emails: customer@exclusive.com</li>
            <li className="text-sm pl-3">Emails: support@exclusive.com</li>
          </ul>
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="w-full sm:w-1/2 lg:w-2/3 mt-12 lg:mt-20">
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 w-full bg-[#F5F5F5] rounded-md border border-gray-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 w-full bg-[#F5F5F5] rounded-md border border-gray-300"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="px-4 py-2 w-full bg-[#F5F5F5] rounded-md border border-gray-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="px-4 py-2 w-full bg-[#F5F5F5] h-48 rounded-md border border-gray-300"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#DB4444] text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Page;

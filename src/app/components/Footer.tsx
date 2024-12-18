
import React from 'react';
import { VscSend } from "react-icons/vsc";
import { TiSocialFacebook } from "react-icons/ti";
import { FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  

  return (
    <div className="bg-black w-full">
      <div className="flex flex-col lg:flex-row justify-between px-6 lg:px-10 py-8 gap-y-8 lg:gap-x-8">
        {/* Subscribe Section */}
        <div className="text-white space-y-2 w-full md:w-1/2 lg:w-1/5">
          <h1 className="text-[20px]">Exclusive</h1>
          <h1>Subscribe</h1>
          <p className="text-sm">Get 10% off your first order!</p>
          <div className="relative w-full md:w-48">
            <input
              type="email"
              className="w-full border rounded text-white bg-black px-3 py-2 text-sm"
              placeholder="Enter your email"
              aria-label="Enter your email"
            />
            <button
              className="absolute inset-y-0 right-2 flex items-center text-white px-2 rounded"
              aria-label="Send email"
            >
              <VscSend size={18} />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="text-white space-y-2 w-full md:w-1/2 lg:w-1/5">
          <h1 className="text-[18px]">Support</h1>
          <p className="text-sm">111 Bijoy Sarani, Dhaka, <br /> DH 1515, Bangladesh.</p>
          <p className="text-sm">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div className="text-white space-y-2 w-full md:w-1/2 lg:w-1/5">
          <h1 className="text-[18px]">Account</h1>
          <p className="text-sm">My Account</p>
          <p className="text-sm">Login / Register</p>
          <p className="text-sm">Cart</p>
          <p className="text-sm">Wishlist</p>
          <p className="text-sm">Shop</p>
        </div>

        {/* Quick Links Section */}
        <div className="text-white space-y-2 w-full md:w-1/2 lg:w-1/5">
          <h1 className="text-[18px]">Quick Link</h1>
          <p className="text-sm">Privacy Policy</p>
          <p className="text-sm">Terms Of Use</p>
          <p className="text-sm">FAQ</p>
          <p className="text-sm">Contact</p>
        </div>

        {/* Download App Section */}
        <div className="text-white space-y-2 w-full md:w-1/2 lg:w-1/5">
          <h1 className="text-[18px]">Download App</h1>
          <p className="text-sm">Save $3 with App New User Only</p>
          <div className="flex space-x-3">
            <img src="Qr Code.png" alt="QR code for app download" />
            <img src="Frame 718.png" alt="App download logo" />
          </div>
          <div className="flex space-x-3 pt-2">
            <a href="#" aria-label="Facebook">
              <TiSocialFacebook size={18} />
            </a>
            <a href="#" aria-label="Twitter">
              <FiTwitter size={18} />
            </a>
            <a href="#" aria-label="Instagram">
              <IoLogoInstagram size={18} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-white text-center py-4">
        <div className="flex flex-row sm:flex-row items-center justify-center space-y-0 sm:space-y-0 sm:space-x-2 space-x-2">
          <img src="Group.png" alt="Logo Group" className="w-5" />
          <p className="text-sm">Copyright Rimel. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

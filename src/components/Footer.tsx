import React from "react";
import { Link } from "react-router-dom";
import { text } from "stream/consumers";

const Footer = () => {
  return (
    <div className="bg-[#FFCCD2] text-black h-[300px] w-full flex justify-between items-center space-x-4 pl-20 pr-20">
      <div>
        <p className="text-[14px] font-semibold ">2,000 users registered since  </p>
        <p className="text-[14px] font-semibold mb-[30px] ">January 2023  </p>
        <p className="text-[12px] ">We have created a cake that will help make  </p>
        <p className="text-[12px] mb-[30px]">your occasion look even more special.  </p>
        
        <div className="flex justify-between items-center">
          <div className="relative mr-2">
              <input
                placeholder="Your email"  style={{ fontSize: "12px", height: "30px", width: "150"}}
                className="bg-[#FFCCD2] border border-black rounded-full px-4 py-2 w-full pr-10 placeholder-black"/>
          </div>
          <button className="bg-[#E06386] text-[12px] hover:bg-[#D63484] text-white rounded-[20px] h-[30px] w-[90px]">
            Subscribe
          </button>
        </div>

        <div className="flex justify-between items-center mt-[30px]">
          <p className="text-[12px]">Terms of Service </p>
          <p className="text-[12px]">Privacy Policy</p>
        </div>
      </div>

      <div className="grid gap-y-[15px]">
        <p className="text-[14px] font-semibold ">Category</p>
        <p className="text-[12px]">Birthday cake</p>
        <p className="text-[12px]">Wedding cake</p>
        <p className="text-[12px]">Romantic</p>
        <p className="text-[12px]">Fruit cake</p>
        <p className="text-[12px]">Minimalist cake</p>
        <p className="text-[12px]">Cartoon cake</p>
      </div>

      <div className="grid gap-y-[15px]">
        <p className="text-[14px] font-semibold ">Socials</p>

        <div className="flex justify-left items-center">
          <img src="/InstaBlack.png" alt="Instagram" className="h-[14px] mr-3"/>
          <p className="text-[12px]">@StyleYourCake_</p>
        </div>

        <div className="flex justify-left items-center">
          <img src="/TwitBlack.png" alt="Twitter " className="h-[12px] mr-3"/>
          <p className="text-[12px]">@StyleYourCake_</p>
        </div>

        <div className="flex justify-left items-center">
          <img src="/FaceBlack.png" alt="Facebook" className="h-[13px] mr-3"/>
          <p className="text-[12px]">StyleYourCake_</p>
        </div>

        <div className="flex justify-left items-center">
          <img src="/GoogleBlack.png" alt="Google" className="h-[11px] mr-2"/>
          <p className="text-[12px]">StyleYourCake@gmail.com</p>
        </div>

        <p className="text-[14px] font-semibold">Help</p>

        <div className="flex justify-left items-center">
          <img src="/PhoneBlack.png" alt="Phone number" className="h-[13px] mr-3"/>
          <p className="text-[12px]">091-234-5678</p>
        </div>
      </div>

      <div className="grid gap-y-[15px]">
        <p className="text-[14px] font-semibold">Customer Support Hours</p>
        <p className="text-[12px]">Mon - Fri 08.00-18.00</p>
        <p className="text-[12px]">Sat - Sun  08.00-17.00</p>
        <p className="text-[14px] font-semibold ">Location</p>

        <div className="flex justify-left items-center mb-[67px]">
          <img src="/LocatBlack.png" alt="Location" className="h-[14px] mr-3"/>
          <p className="text-[12px] underline">View on Google Maps</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
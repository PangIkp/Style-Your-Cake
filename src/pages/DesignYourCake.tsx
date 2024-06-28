import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const DesignYourCake = () => {
  return (
    <div>
      <NavBar/>
      <p className="p-10 ml-10 text-[26px] font-semibold">
        Design your cake (option)
      </p>

      <div className="mb-[90px] flex justify-between">
        <div className="ml-20 h-[415px] w-[631px] relative">
          <img
            src="/DesignYourCake1.png"
            alt="DesignYourCake1"
            className="rounded-[20px] w-full h-full object-cover"/>
            
          <div className="ml-10 mt-10 absolute top-0 left-0 w-full h-full flex flex-col">
            <span className="text-[25px] font-bold text-white drop-shadow-lg">
              Decorate the cake
            </span>
            <span className="text-[25px] font-bold text-white drop-shadow-lg">
              with toppings of
            </span>
            <span className="text-[25px] font-bold text-white drop-shadow-lg">
              your choice!
            </span>
            
            <a href="/select">
               <button className="mt-[36px] bg-gradient-to-b from-[#D63484] to-[#E06386] text-[14px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-bold rounded-[20px] h-[35px] w-[180px]">
                 ORDER NOW
               </button>
            </a>

            <span className="text-[10px] mt-[150px] text-black">
                By Drag and Drop method
            </span>

          </div>
        </div>

        <div className="mr-20 h-[415px] w-[631px] relative">
          <img
            src="/DesignYourCake2.png"
            alt="DesignYourCake2"
            className="rounded-[20px] w-full h-full object-cover"/>
            
          <div className="ml-10 mt-10 absolute top-40 right-10 items-end w-full h-full flex flex-col">
            <span className="text-[25px] text-[#E06386] font-bold text-white drop-shadow-lg">
              Write a
            </span>
            <span className="text-[25px] text-[#E06386] font-bold text-white drop-shadow-lg">
              message on
            </span>
            <span className="text-[25px] text-[#E06386] font-bold text-white drop-shadow-lg">
              the Cake
            </span>
            
            <a href="/select">
               <button className="mt-[36px] bg-gradient-to-b from-[#D63484] to-[#E06386] text-[14px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-bold rounded-[20px] h-[35px] w-[180px]">
                 ORDER NOW
               </button>
            </a>
          </div>
        </div>
      </div>
      <Footer/>
      <Copyright/>
    </div>
  );
};

export default DesignYourCake;

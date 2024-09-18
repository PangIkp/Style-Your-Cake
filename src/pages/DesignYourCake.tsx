import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const DesignYourCake = () => {
  return (
    <div>
      <div className="mt-[140px]">
        <div className="fixed top-0 z-10 w-full ">
          <NavBar onSearch={() => {}}/>
        </div>
      </div>
      
      <p className="p-10 ml-10 text-[26px] font-semibold">
        Design your cake (option)
      </p>

      <div className="ml-[65px] mr-[65px] mb-20 relative flex justify-center">
        <img
          src="/DesignYourCake.png"
          alt="DesignYourCake1"
          className="w-full object-cover border border-white border-[10px]"/>
          
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
          <div className="ml-10 mt-10 flex flex-col">
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
          </div>

          {/* Text at the bottom of the image */}
          <span className="text-[10px] mb-10 ml-10 text-black">
            By Drag and Drop method
          </span>
        </div>
      </div>

      <Footer/>
      <Copyright/>
    </div>
  );
};

export default DesignYourCake;

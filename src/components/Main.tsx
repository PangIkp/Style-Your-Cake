import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <a className="relative">
        <img src="/CakeMain.png" alt="Main" className="" />
        <span className="absolute backdrop-blur-md rounded-[25px] bg-opacity-50 top-1/2 left-[425px] transform -translate-x-1/2 -translate-y-1/2 bg-white h-[390px] w-[500px] flex flex-col items-left justify-center">
          <span className="text-[25px] font-bold text-white ml-[48px] ">
            NEW!
          </span>
          <span className="text-[40px] font-extrabold text-black ml-[48px]">
            Create your own
          </span>
          <span className="text-[40px] font-extrabold text-black ml-[48px]">
            style cake
          </span>
          <span className="text-[13px] text-[#503C3C] ml-[48px]">
            Design your dream cake, your way, only at Style Your Cake!
          </span>

          <Link to="/design">
            <button className="ml-[48px] mt-[70px] bg-gradient-to-b from-[#D63484] to-[#E06386] text-[13px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-bold rounded-[20px] h-[43px] w-[150px]">
              Find out more
            </button>
          </Link>
        </span>
      </a>
    </div>
  );
};

export default Main;

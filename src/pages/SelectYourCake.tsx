import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const SelectYourCake: React.FC = () => {
  
  return (
    <div>
      <div className="mt-[140px]">
        <div className="fixed top-0 z-10 w-full ">
          <NavBar />
        </div>
      </div>

      <div className="pl-20 pr-20 pt-10">
        <h1 className="text-[26px] font-semibold mb-9">
          Select Your Cake Details
        </h1>

        <div>
          <h2 className="font-medium mb-5">Select cake shape</h2>

          <div className="flex justify-between">
            <div className="bg-[#FFCCD2] bg-opacity-50 rounded-[10px] pl-20 pr-20 p-5 hover:bg-[#E06386]">
              <img className="w-[240px]" src="Round.png" alt="Round" />
            </div>

            <div className="bg-[#FFCCD2] bg-opacity-50 rounded-[10px] pl-10 pr-10 hover:bg-[#E06386]">
              <img className="w-[300px] mt-8" src="Square.png" alt="Round" />
            </div>

            <div className="bg-[#FFCCD2] bg-opacity-50 rounded-[10px] pl-20 pr-20 p-5 hover:bg-[#E06386]">
              <img className="w-[240px]" src="Hearth.png" alt="Round" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-medium mt-10 mb-5">Select size</h2>
          <div className="flex justify-between">
            <div className="border border-[#9F9F9F] bg-[#FFCCD2] bg-opacity-20  hover:bg-[#E06386] rounded-[10px] text-center pr-[70px] pl-[70px] p-4 space-y-2">
              <p className="text-[14px] font-medium">1/2 pound</p>
              <p className="text-[12px]">For 4 servings</p>
              <p className="text-[14px] font-medium">350 THB</p>
            </div>

            <div className="border border-[#9F9F9F] bg-[#FFCCD2] bg-opacity-40  hover:bg-[#E06386] rounded-[10px] text-center pr-[70px] pl-[70px] p-4 space-y-2">
              <p className="text-[14px] font-medium">1 pound</p>
              <p className="text-[12px]">For 8 servings</p>
              <p className="text-[14px] font-medium">550 THB</p>
            </div>

            <div className="border border-[#9F9F9F] bg-[#FFCCD2] bg-opacity-60  hover:bg-[#E06386] rounded-[10px] text-center pr-[70px] pl-[70px] p-4 space-y-2">
              <p className="text-[14px] font-medium">2 pound</p>
              <p className="text-[12px]">For 12 servings</p>
              <p className="text-[14px] font-medium">650 THB</p>
            </div>

            <div className="border border-[#9F9F9F] bg-[#FFCCD2] bg-opacity-80  hover:bg-[#E06386] rounded-[10px] text-center pr-[70px] pl-[70px] p-4 space-y-2">
              <p className="text-[14px] font-medium">3 pound</p>
              <p className="text-[12px]">For 16 servings</p>
              <p className="text-[14px] font-medium">750 THB</p>
            </div>

            <div className="border border-[#9F9F9F] bg-[#FFCCD2] hover:bg-[#E06386] rounded-[10px] text-center pr-[70px] pl-[70px] p-4 space-y-2">
              <p className="text-[14px] font-medium">4 pound</p>
              <p className="text-[12px]">For 24 servings</p>
              <p className="text-[14px] font-medium">950 THB</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-medium mt-10 mb-5">Select your cake flavour</h2>
          
          <div className="flex justify-between space-x-[38px]">
            <div className="border p-6 rounded-[10px] hover:bg-[#E06386] hover:bg-opacity-50">
              <img src="Lemon.png" alt="Lemon" />
              <div className="text-center">
                <p className="text-[12px] mt-2">Lemon</p>
                <p className="text-[14px] font-medium">120 THB</p>
              </div>
            </div>

            <div className="border p-6 rounded-[10px] hover:bg-[#E06386] hover:bg-opacity-50">
              <img src="Chocolate.png" alt="Chocolate" />
              <div className="text-center">
                <p className="text-[12px] mt-2">Chocolate</p>
                <p className="text-[14px] font-medium">150 THB</p>
              </div>
            </div>

            <div className="border p-6 rounded-[10px] hover:bg-[#E06386] hover:bg-opacity-50">
              <img src="Whitechocolate.png" alt="White chocolate" />
              <div className="text-center">
                <p className="text-[12px] mt-6">White chocolate</p>
                <p className="text-[14px] font-medium">150 THB</p>
              </div>
            </div>

            <div className="border p-6 rounded-[10px] hover:bg-[#E06386] hover:bg-opacity-50">
              <img src="Redvelvet.png" alt="Red Velvet" />
              <div className="text-center">
                <p className="text-[12px] mt-6">Red Velvet</p>
                <p className="text-[14px] font-medium">200 THB</p>
              </div>
            </div>

            <div className="border p-6 rounded-[10px] hover:bg-[#E06386] hover:bg-opacity-50">
              <img src="Cheesecake.png" alt="Cheesecake" />
              <div className="text-center">
                <p className="text-[12px] mt-8">Cheesecake</p>
                <p className="text-[14px] font-medium">250 THB</p>
              </div>
            </div>

          </div>
        </div>

        <Link to="/write" className="flex justify-center mt-10 mb-20">
          <button className="bg-gradient-to-b from-[#D63484] to-[#E06386] text-[13px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-bold rounded-[20px] h-[40px] w-[450px]">
            Next Step
          </button>
        </Link>
      </div>

      <Footer/>
      <Copyright/>

    </div>
  );
};

export default SelectYourCake;

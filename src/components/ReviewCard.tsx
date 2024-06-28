import React from "react";
import { Link } from "react-router-dom";

const ReviewCard = () => {
  return (
    <div>
      <div className="mb-9 mr-9 pl-8 pr-8 pt-8 pb-8 border shadow-md w-[400px]">
        <div className="mb-6 flex items-center">
          <img
            src="/Customer.png"
            alt="Customer"
            className="h-9"
          ></img>
          
          {/* Name of Customer */}
          <div className="ml-2">
            <p className="text-[13px]">Sarah</p>
            <p className="text-[12px]">⭐ ⭐ ⭐ ⭐ ⭐</p>
          </div>
          
           {/* Date of Customer response */}
          <div className="ml-[125px]">
            <p className="text-[13px] font-light">18 May 2024</p>
          </div>

          <div className="ml-2">
            <p className="bg-pink-500 w-px h-9 w-[3px]"></p>
          </div>
        </div>
        
        {/* Customer response */}
        <div className="">
          <p className="text-[13px] font-light">
            Absolutely divine! I ordered the chocolate fudge cake for my son's
            birthday, and it was a hit with everyone. Moist, rich, and decadent.
            Will definitely be ordering again!
          </p>
        </div>
        
        {/* Admin response */}
        <div className="mx-auto mt-6 items-center p-4 border shadow-md rounded-lg w-[335px]">
          <div className="flex items-center">
            <img
              src="/Message.png"
              alt="Message"
              className="h-5">  
            </img>

            <div className="ml-2">
              <p className="text-[13px]">Admin</p>
            </div>
          </div>

          <div className="ml-7">
              <p className="text-[13px] font-light">Thank you for supporting our store!</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

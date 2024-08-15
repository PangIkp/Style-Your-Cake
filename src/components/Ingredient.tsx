import React from "react";
import { Link } from "react-router-dom";

const Ingredient = () => {
  return (
    <div className="bg-white text-black w-full rounded flex justify-center items-center p-2 mb-2">
      <div className="flex space-x-1 items-center">
        <span className="bg-[#D63484] rounded-full h-[18px] w-[18px] flex items-center justify-center">
          <span className="text-[9px] font-medium text-white">2</span>
        </span>
        <p className="text-[10px]">Strawberry (+5 THB)</p>
      </div>
    </div>
  );
};

export default Ingredient;

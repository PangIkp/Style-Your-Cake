import React from "react";

const Slicer = () => {
  return (
    <div>
      <div className="ml-20 pl-4 pt-4 pb-4 border shadow-lg rounded-lg w-[340px]">
        <div className="mb-6">
          <h2 className="p-2 font-semibold text-[14px]">Shop by Price</h2>

          <div className="mt-4 space-y-4 pl-2">

            <label className="flex items-center space-x-4">
              <input
                type="checkbox"
                className="form-checkbox h-[15px] w-[15px]"/>
              <span className="text-[14px]">
                300 - 500 THB
              </span>
            </label>

            <label className="flex items-center space-x-4">
              <input
                type="checkbox"
                className="form-checkbox h-[15px] w-[15px]"/>
              <span className="text-[14px]">
                500 - 1000 THB
              </span>
            </label>

            <label className="flex items-center space-x-4">
              <input
                type="checkbox"
                className="form-checkbox h-[15px] w-[15px]"/>
              <span className="text-[14px]">
                1000 - 1500 THB
              </span>
            </label>

            <label className="flex items-center space-x-4">
              <input
                type="checkbox"
                className="form-checkbox h-[15px] w-[15px]"/>
              <span className="text-[14px]">
                1500 - 1300 THB
              </span>
            </label>

            <label className="flex items-center space-x-4">
              <input
                type="checkbox"
                className="form-checkbox h-[15px] w-[15px]"/>
              <span className="text-[14px]">
                3000 - 5000 THB
              </span>
            </label>

            <label className="flex items-center space-x-4">
              <input
                type="checkbox"
                className="form-checkbox h-[15px] w-[15px]"/>
              <span className="text-[14px]">
                Over 5000 THB
              </span>
            </label>
        </div>

    </div>
        <div>
          <h2 className="p-2 font-semibold text-[14px]">All Product Categories</h2>
          <div className="flex flex-wrap gap-2 mt-2 ml-2">
            <button className="px-3 py-1 bg-white hover:bg-[#FFCCD2] text-[12px] font-light border border-[#9F9F9F] rounded-full ">
              Show All
            </button>

            <button className="px-3 py-1 bg-white hover:bg-[#FFCCD2] border border-[#9F9F9F] text-[13px] font-light rounded-full">
              Birthday cake
            </button>

            <button className="px-3 py-1 bg-white  hover:bg-[#FFCCD2] border border-[#9F9F9F] text-[13px] font-light rounded-full">
              Fruit cake
            </button>

            <button className="px-3 py-1 bg-white  hover:bg-[#FFCCD2] border border-[#9F9F9F] text-[13px] font-light rounded-full">
              Wedding cake
            </button>

            <button className="px-3 py-1 bg-white  hover:bg-[#FFCCD2] border border-[#9F9F9F] text-[13px] font-light rounded-full">
              Minimalist cake
            </button>

            <button className="px-3 py-1 bg-white  hover:bg-[#FFCCD2] border border-[#9F9F9F] text-[13px] font-light rounded-full">
              Cartoon cake
            </button>

            <button className="px-3 py-1 bg-white  hover:bg-[#FFCCD2] border border-[#9F9F9F] text-[13px] font-light rounded-full">
              Romantic
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slicer;

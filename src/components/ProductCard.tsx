import React from "react";

const ProductCard = ({
  id,
  name,
  price,
  category,
  imgUrl,
}: {
  id: string;
  name: string;
  price: number;
  category: string;
  imgUrl: string;
}) => {
  return (
    <div className="ml-[20px] mt-[50px]">
      <img
        src={imgUrl}
        alt={name}
        className="rounded-[20px] h-[300px] w-[308px] border shadow-lg object-cover object-[0%_35%]"
      />

      <div className="pt-3 flex justify-between w-[308px]">
        {/* category of cake */}
        <div className="inline-flex items-center border border-[#D63484] rounded-[20px] h-[35px] mb-2 px-4">
          <img src="/Tag.png" alt="Tag" className="h-[18px] w-[18px] mr-2" />
          <p className="text-[14px] text-[#D63484]">{category}</p>
        </div>
        <p className="text-[14px] text-[#D63484] mb-2">{id}</p>
      </div>

      <div className="flex justify-between w-[308px]">
        <div>
          <h2 className="mt-4 text-[16px] font-semibold mb-2">{name}</h2>
          <p className="mt-4 text-[16px]">{price} THB</p>
        </div>  
        <button className="pl-5 pr-5 flex justify-between items-center mt-10 bg-[#FFCCD2] text-[13px] text-[#503C3C] hover:bg-[#D63484] hover:text-white rounded h-[35px] w-[90px] rounded-[20px] border-[1px] border-[#503C3C]">
            <img src="/Add.png" alt="Add" className="h-[15px]"/>
            ADD
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

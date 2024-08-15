import React from "react";
import { Link } from "react-router-dom";

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
    <div className="ml-[20px] mb-[50px]">
      <Link to="/product" >
        <img
          src={imgUrl}
          alt={name}
          className="rounded-[20px] h-[285px] w-[295px] border shadow-lg object-cover"/>
       </Link>

      <div className="pt-3 flex justify-between w-[295px]">
        {/* category of cake */}
        <div className="inline-flex items-center border border-[#D63484] rounded-[20px] h-[35px] mb-2 px-4">
          <img src="/Tag.png" alt="Tag" className="h-[18px] w-[18px] mr-2" />
          <p className="text-[12px] text-[#D63484]">{category}</p>
        </div>
        <p className="text-[12px] text-[#D63484] mb-2">{id}</p>
      </div>

      <div className="flex justify-between w-[295px]">
        <div>
          <h2 className="mt-4 text-[14px] font-semibold mb-2">{name}</h2>
          <p className="mt-4 text-[14px]">{price} THB</p>
        </div>  
        <button className="pl-5 pr-5 flex justify-between items-center mt-10 bg-[#FFE5E8] text-[12px] text-[#503C3C] hover:bg-[#E06386] hover:text-white rounded h-[35px] w-[90px] rounded-[20px] border-[1px] border-[#503C3C]">
            <img src="/Add.png" alt="Add" className="h-[15px]"/>
            ADD
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

import React, { useState } from "react";
import { ToppingItem } from "../interfaces";

interface SummaryItem {
  image: string;
  name: string;
  size: string;
  productId: string;
  quantity: number;
  price: number;
  details: string;
  options?: string;
  flavour?: string;
  shape?: string;
  topping?: ToppingItem[];
}

const Summary: React.FC<SummaryItem> = ({
  image,
  name,
  size,
  productId,
  quantity,
  price,
  details,
  options,
  shape,
  flavour,
  topping,
}) => {
  const [isDetailsSelected, setIsDetailsSelected] = useState(false);

  return (
    <div className="pb-2 pt-2 flex justify-start space-x-5">
      <img src={image} alt={name} className="w-[120px] border rounded-[10px]" />

      <div className="w-full">
        <div className="flex justify-between mt-6">
          <h2 className="font-semibold text-[13px] mb-5">{name}</h2>
          <p className="text-[12px]">{productId}</p>
        </div>

        <div>
          <p className="text-[#D63484] text-[13px] font-semibold">Detail</p>
          <p className="text-[12px]">{size}</p>
          <p className="text-[12px]">Quantity : {quantity}</p>
        </div>

        <div className="">
          {topping && (
            <p className="text-[#D63484] mt-2 text-[12px] font-semibold">
              Add Toppings
            </p>
          )}
          <ul>
            {topping?.map((item: ToppingItem) => (
              <li key={item.name}>
                <span className="bg-[#D63484] rounded-[5px] text-[11px] text-white p-[0.5px] pl-2 pr-2 mr-1">{`x${item.quantity}`}</span>
                <span className="text-[12px]">{item.name}</span>
              </li>
            ))}
          </ul>

          <p className="text-[12px]"></p>
          {details && (
            <>
              <p className="text-[#D63484] mt-2 font-semibold text-[12px]">
                Optional
              </p>
              <div className="flex items-center">
                <input
                  type="checkbox" // ใช้ state เพื่อตรวจสอบว่า checkbox ถูกเลือกหรือไม่
                  checked={true}
                  onChange={() => setIsDetailsSelected(!isDetailsSelected)} // อัปเดต state เมื่อมีการเปลี่ยนแปลง
                  className="mr-2"
                />
                <p className="text-[12px]">{details}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Summary;

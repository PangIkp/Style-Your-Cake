import React from "react";
import { Link } from "react-router-dom";

const OrderItem = ({
  image,
  title,
  qty,
  productId,
}: {
  image: string;
  title: string;
  qty: number;
  productId: string;
}) => {
  return (
    <div className="flex items-center py-4">
      <img
        src={image}
        alt={title}
        className="object-cover w-[100px] h-[100px] rounded border"
      />
      <div className="ml-8 space-y-3">
        <h2 className="font-medium text-[13px]">{title}</h2>
        <p className="text-[13px]">Qty : {qty}</p>
        <p className="text-[13px]">Product ID : {productId}</p>
      </div>
    </div>
  );
};

const OrderSummary = () => {
  const orderItems = [
    {
      image:
        "https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Celebration Delight",
      qty: 1,
      productId: "BC-01",
    },
    {
      image:
        "https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Design your cake",
      qty: 1,
      productId: "DC-0112",
    },
  ];

  return (
    <div className="bg-white border shadow-lg rounded-[5px] mb-10">
      <div className="p-3 pl-[60px] bg-[#FFE5E8] w-full">
        <div className="flex justify-between items-center">
          <div className="px-4 py-2 bg-[#FFFFFF] rounded-full">
            <h1 className="text-[13px]">Order ID : #123123123</h1>
          </div>
          <div className="flex justify-center items-center px-4 py-2 bg-[#FFFFFF] text-[13px] rounded-full mr-[60px]">
          <img src="/Delivered.png" className="w-[18px] mr-2"></img>
            Delivered
          </div>
        </div>
      </div>
      
      <div className="pl-[60px] pr-[60px] pb-6">
      {orderItems.map((item, index) => (
        <OrderItem key={index} {...item} />
      ))}
      
      <div className="flex justify-end font-semibold text-[13px] mt-4">
        Total price : 2273 THB
      </div>

      <div className="mt-4">
        <div className="flex items-center text-pink-600 text-[13px] font-semibold mb-2">
          <img src="/Review.png" className="mr-2 w-5"></img> Review your order
        </div>

        <p className="text-[12px]">⭐ ⭐ ⭐ ⭐ ⭐</p>

        <div className="flex justify-between items-center">
        <textarea
          className="mt-2 w-[680px] p-2 border rounded text-[12px] text-[#666666]"
          placeholder="Write experience of your order.">
        </textarea>
        <button className="hover:bg-[#FFCCD2]">
        <img src="/Submit.png" className="w-5 h-5"></img>    
        </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default OrderSummary;

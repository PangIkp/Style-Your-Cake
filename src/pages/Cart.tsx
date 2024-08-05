import CartItem from "../components/CartItem";
import React, { useState } from 'react';
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
    const [items, setItems] = useState([
        {
          id: 1,
          image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Celebration Delight",
          size: "1 pound",
          productId: "BC-01",
          quantity: 1,
          price: 1250,
          details: "Size : 1 pound",
          options: "Writing on the cake",
        },
        {
          id: 2,
          image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Design your cake",
          size: "1 pound",
          productId: "DC-01",
          quantity: 1,
          price: 723,
          details: "Shape : Default (Round)",
          shape: "Shape : Round",
          flavour: "Flavour : Chocolate",
          topping: "Strawberry (2), Blueberry (2), Brownie Cube (2)",
        },
      ]);
    
      const handleIncrease = (id: number) => {
        setItems(items.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
      };
    
      const handleDecrease = (id: number) => {
        setItems(items.map(item =>
          item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
      };

      const handleRemove = (id: number) => {
        setItems(items.filter(item => item.id !== id));
      };
    
      const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    
      return (
    <div>
      <div className="mt-[140px]">
        <div className="fixed top-0 z-10 w-full ">
          <NavBar />
        </div>
      </div>

      <div className="container mx-auto py-8">
      <h1 className="text-[26px] font-semibold mb-8 mt-8">Shopping Cart</h1>
      <div className="flex">
        <div className="w-3/4">
          {items.map((item) => (
            <CartItem
              key={item.id}
              {...item}
              onIncrease={() => handleIncrease(item.id)}
              onDecrease={() => handleDecrease(item.id)}
              onRemove={() => handleRemove(item.id)}
            />
          ))}
        </div>
        <div className="w-[500px] h-full p-4 border ml-5">

        <div className="flex justify-between flex items-center">
          <h2 className="text-[18px] font-bold mb-4 mt-[20px]">Summary</h2>

          <div className="px-[8px] py-[0.5px] bg-[#E06386] rounded">
          <span className="text-[14px] text-white">2</span>
          </div>
          </div>

          <ul className="mt-4">
            {items.map((item, index) => (
              <li key={index} className="flex justify-between mb-2">
                <span className="text-[14px]">{item.name}</span>
                <span className="text-[14px]">{item.price * item.quantity} THB</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-between mb-2">
          <span className="text-[14px]">Vat</span>
          <span className="text-[14px]">7%</span>
          </div>

          <div className="border border-[0.5px] border-solid border-[#666666] border-opacity-50 w-full h-[0.5px]" />

          <div className="flex justify-between font-bold mb-4 mt-4">
            <span className="text-[14px]">Subtotal</span>
            <span className="text-[14px]">{subtotal} THB</span>
          </div>

          <div className="border border-[0.5px] border-solid border-[#666666] border-opacity-50 w-full h-[0.5px] mb-4" />

          <button className="bg-gradient-to-b from-[#D63484] to-[#E06386] text-[13px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-bold rounded-[20px] w-full h-[35px]">CHECKOUT</button>
        </div>
      </div>
    </div>

      <Footer />
      <Copyright />
    </div>
  );
};

export default Cart;

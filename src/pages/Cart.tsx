// Cart.tsx
import React from "react";
import CartItem from "../components/CartItem";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { useMainStore } from "../mainStore";

const Cart: React.FC = () => {
  // const { items, removeItem, updateItemQuantity } = useCart();
  const { items , setItems, updateItemQuantity, removeItem} = useMainStore();

  const navigate = useNavigate();

  const handleCheckout = () => {
    const subtotal = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const totalWithVAT = (subtotal * 1.07).toFixed(2);
    const shippingFee = 300; // Example shipping fee
    setItems([]);

    navigate("/payment", {
      state: {
        items,
        subtotal,
        totalWithVAT: parseFloat(totalWithVAT) + shippingFee, // Calculate total with shipping fee
      },
    });
  };

  const handleIncrease = (id: string) => {
    // console.log(items);
    updateItemQuantity(
      id,
      items.find((item) => item.id === id)!.quantity + 1
    );
    console.log(JSON.stringify(items));
  };

  const handleDecrease = (id: string) => {
    const item = items.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateItemQuantity(id, item.quantity - 1);
    }
  };

  const handleRemove = (id: string) => {
    removeItem(id);
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // รวม VAT 7% โดยตรงกับ subtotal
  const totalWithVAT = (subtotal * 1.07).toFixed(2);

  return (
    <div>
      <div className="mt-[140px]">
        <div className="fixed top-0 z-10 w-full ">
          <NavBar onSearch={() => {}} />
        </div>
      </div>

      <div className="container mx-auto py-8">
        <h1 className="text-[26px] font-semibold mb-8 mt-8">Shopping Cart</h1>
        <div className="flex">
          <div className="w-3/4">
            {items.length > 0 ? (
              items.map((item) => (
                <CartItem
                  key={item.id}
                  {...item}
                  onIncrease={() => handleIncrease(item.id)}
                  onDecrease={() => handleDecrease(item.id)}
                  onRemove={() => handleRemove(item.id)}
                />
              ))
            ) : (
              <p>No items in the cart.</p>
            )}
          </div>
          <div className="w-[500px] h-full p-4 border ml-5">
            <div className="flex justify-between flex items-center">
              <h2 className="text-[18px] font-bold mb-4 mt-[20px]">Summary</h2>

              <div className="px-[8px] py-[0.5px] bg-[#E06386] rounded">
                <span className="text-[14px] text-white">{items.length}</span>
              </div>
            </div>

            <ul className="mt-4">
              {items.map((item, index) => (
                <li key={index} className="flex justify-between mb-2">
                  <span className="text-[14px]">{item.name}</span>
                  <span className="text-[14px]">
                    {item.price * item.quantity} THB
                  </span>
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
              <span className="text-[14px]">{totalWithVAT} THB</span>
            </div>

            <div className="border border-[0.5px] border-solid border-[#666666] border-opacity-50 w-full h-[0.5px] mb-4" />

            {/* <Link to="/payment"> */}
              <button
                onClick={handleCheckout} // Use handleCheckout here
                className="bg-gradient-to-b from-[#D63484] to-[#E06386] text-[13px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-bold rounded-[20px] w-full h-[35px]"
              >
                CHECKOUT
              </button>
            {/* </Link> */}
          </div>
        </div>
      </div>

      <Footer />
      <Copyright />
    </div>
  );
};

export default Cart;

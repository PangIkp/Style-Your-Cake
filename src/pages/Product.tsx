import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import Copyright from "../components/Copyright";

const Product: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState<number>(1250);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const sizes = [
    { weight: "1/2 pound", servings: 4, price: 150 },
    { weight: "1 pound", servings: 8, price: 300 },
    { weight: "2 pound", servings: 12, price: 600 },
    { weight: "3 pound", servings: 16, price: 900 },
    { weight: "4 pound", servings: 20, price: 1200 },
  ];

  return (
    <div>
      <div className="mt-[140px]">
        <div className="fixed top-0 z-10 w-full ">
          <NavBar/>
        </div>
      </div>
      
      <div className="container pt-[80px] mx-auto mb-20">
        <div className="flex flex-wrap -mx-4">
          {/* Image Gallery */}
          <div className="px-4">
            <img
              src="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Celebration Delight"
              className="w-[420px] h-[620px] rounded-lg mb-4 border shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div className="w-[860px] px-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold mb-2">Jubilant Occasion</h1>
              <p className="text-[#E06386] font-semibold text-[14px]">
                {" "}
                BC-01{" "}
              </p>
            </div>

            <div className="inline-flex items-center border border-[#D63484] rounded-[20px] h-[35px] mb-10 px-4">
              <img
                src="/Tag.png"
                alt="Tag"
                className="h-[18px] w-[18px] mr-2"
              />
              <p className="text-[12px] text-[#D63484]">Birthday cake</p>
            </div>

            <div className="mb-10">
              <h2 className="text-lg font-semibold mb-2 text-[16px]">
                Select size
              </h2>
              <div className="flex space-x-4">
                {sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`${
                      selectedSize === index
                        ? "bg-[#E06386] bg-opacity-60"
                        : "bg-[#FFCCD2] bg-opacity-50 hover:bg-[#E06386] hover:bg-opacity-60"
                    } border-[1px] border-[#9F9F9F] py-2 px-4 rounded-[20px] w-[160px]`}
                    onClick={() => {
                      setPrice(size.price);
                      setSelectedSize(index);
                    }}
                  >
                    <span className="text-[14px] font-semibold">
                      {size.weight}
                    </span>
                    <br />
                    <span className="text-[12px]">
                      For {size.servings} servings
                    </span>
                    <br />
                    <span className="text-[12px] font-semibold">
                      {size.price} THB
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-10">
              <h2 className="text-lg font-semibold mb-3 text-[16px]">
                Writing on the cake
              </h2>

              <p className="text-[13px] mb-5 text-[#666666]">
                (You can write on the cake | Optional)
              </p>
              <textarea
                className="w-full border-[1px] border-gray-300 p-5 rounded-lg text-[14px]"
                placeholder="100 characters"
                maxLength={100}
              ></textarea>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-[16px]">
                SUBTOTAL
              </span>
              <span className="text-lg font-semibold">
                {price * quantity} THB
              </span>
            </div>
            <div className="items-center space-x-7 ">
              <button
                className="bg-[#FFCCD2] bg-opacity-50 hover:bg-[#E06386] hover:bg-opacity-60 border-[1px] border-[#666666] text-gray-700 py-2 px-4 rounded-full"
                onClick={decrementQuantity}
              >
                -
              </button>

              <span className="text-[16px]">{quantity}</span>

              <button
                className="bg-[#FFCCD2] bg-opacity-50 hover:bg-[#E06386] hover:bg-opacity-60 border-[1px] border-[#666666] text-gray-700 py-2 px-4 rounded-full"
                onClick={incrementQuantity}
              >
                +
              </button>

              <button className="mt-6 mb-6 bg-gradient-to-b from-[#D63484] to-[#E06386] text-[14px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-bold rounded-[20px] h-[45px] w-[640px]">
                Add to cart
              </button>
            </div>
          </div>

          <h1 className="text-2xl font-semibold mt-10 mb-5">Related Product</h1>

          <div className="flex flex-wrap">
            <ProductCard
              id="Bc-01"
              name="Jubilant Occasion"
              price={800}
              category="Birthday cake"
              imgUrl="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <ProductCard
              id="Bc-01"
              name="Jubilant Occasion"
              price={800}
              category="Birthday cake"
              imgUrl="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <ProductCard
              id="Bc-01"
              name="Jubilant Occasion"
              price={800}
              category="Birthday cake"
              imgUrl="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <ProductCard
              id="Bc-01"
              name="Jubilant Occasion"
              price={800}
              category="Birthday cake"
              imgUrl="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </div>
      <Footer/>
      <Copyright/>
    </div>
  );
};

export default Product;

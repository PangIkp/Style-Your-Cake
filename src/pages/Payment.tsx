import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SummaryItem from "./Summary";
import { CartItemType } from "../components/CartContext";

const Payment: React.FC = () => {
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [totalWithVAT, setTotalWithVAT] = useState(0);

  useEffect(() => {
    // ตรวจสอบว่า location.state มีข้อมูลหรือไม่
    if (location.state) {
      const { items, subtotal, totalWithVAT } = location.state;
      setItems(items);
      setSubtotal(subtotal);
      setTotalWithVAT(totalWithVAT);
    }
  }, [location.state]);


  return (
    <div>
      <div className="mt-[140px]">
        <div className="fixed top-0 z-10 w-full ">
          <NavBar onSearch={() => {}} />
        </div>
      </div>

      <div className="flex space-x-10 pl-20 pr-20 pt-10 pb-10">
        <div className="w-3/5">
          {/* ข้อมูลสำหรับการกรอกข้อมูลการจัดส่งและการชำระเงิน */}
          <div className="">
            <h1 className="text-[26px] font-semibold mb-8">Checkout</h1>
            <div className="mb-5 border border-[0.5px] border-solid border-gray-400 w-full h-[0.5px]" />

            <div className="flex items-center space-x-2 mb-5">
              <img src="/Shipping.png" alt="Shipping" className="w-5"></img>
              <p className="font-semibold text-[15px]">Shipping Details</p>
            </div>

            <p className="font-medium text-[14px] mb-5">Customer Information</p>

            <div className="space-y-4">
              <div className="flex justify-between space-x-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="text-[12px] w-full border rounded rounded-[7px] p-3"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="text-[12px] w-full border rounded rounded-[7px] p-3"
                />
              </div>

              <div className="flex justify-between space-x-4">
                <input
                  type="text"
                  placeholder="Email address"
                  className="text-[12px] w-full border rounded rounded-[7px] p-3"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="text-[12px] w-full border rounded rounded-[7px] p-3"
                />
              </div>
            </div>

            <p className="font-medium text-[14px] mt-5 mb-5">
              Customer Address
            </p>

            <textarea
              id="message"
              className="w-full mb-2 p-3 border text-[12px] rounded-[7px]"
              maxLength={100}
              placeholder="Address Detail such as House number, Apartment name, Condo, Village name "
            ></textarea>

            <div className="space-y-4">
              <div className="flex space-x-4">
                <select className="text-gray-400 border text-[12px] rounded-[7px] p-3 w-full">
                  <option>Province</option>
                </select>

                <select className="text-gray-400 border text-[12px] rounded-[7px] p-3 w-full">
                  <option>District</option>
                </select>
              </div>

              <div className="flex space-x-4">
                <select className="text-gray-400 border text-[12px] rounded-[7px] p-3 w-full">
                  <option>Subdistrict</option>
                </select>

                <select className="text-gray-400 border text-[12px] rounded-[7px] p-3 w-full">
                  <option>Postal code</option>
                </select>
              </div>
            </div>

            <div className="">
              <div className="mb-5 mt-5 border border-[0.5px] border-solid border-gray-400 w-full h-[0.5px]" />
              <div className="flex items-center space-x-2 mb-5">
                <img src="/Payment.png" alt="Shipping" className="w-5"></img>
                <p className="font-semibold text-[15px]">Payment Method</p>
              </div>

              <div className="flex space-x-4">
                <div className="content-center space-y-4 bg-[#FFCCD2] bg-opacity-50 p-[80px] rounded rounded-[20px] text-center">
                  <img
                    src="/QrScan.png"
                    alt="Thai QR Payment"
                    className="w-full"
                  />
                  <p className="font-medium">Pay by scanning here!</p>
                </div>

                <div className="content-center space-y-4 bg-[#FFCCD2] bg-opacity-50 p-[80px] rounded rounded-[20px] text-center">
                  <img
                    src="/QrLine.png"
                    alt="Send proof of payment online"
                    className="w-full"
                  />
                  <p className="font-medium">Send proof of payment online</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[12px] mt-8">
            <p className="font-semibold">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="ml-2">
              <p>
                1. Gravida aliquam sit laoreet sem nunc morbi gravida purus
                lacinia.{" "}
              </p>
              <p>2. Vel tortor sapien eu dignissim elit nullam. </p>
              <p>
                3. Elementum risus nulla arcu aliquam. Sollicitudin urna nisi
                duis congue mollis viverra.{" "}
              </p>
              <p>
                4. Sapien quis in massa vel nibh. Eu est arcu eget viverra
                aenean quisque pretium.{" "}
              </p>
              <p>5. Sapien ac nisl sed leo.</p>
            </div>
          </div>

          <Link to="/">
            <button className="mt-5 mb-5 bg-gradient-to-b from-[#D63484] to-[#E06386] text-[14px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-bold rounded-[20px] h-[40px] w-full">
              Confirm transection
            </button>
          </Link>
        </div>

        {/*ข้อมูลจากตระกร้าสินค้า*/}
        <div className="w-2/5">
          <div className="w-full h-auto border border-gray-300 shadow-md rounded p-5 sticky top-10">
            <h2 className="font-semibold text-[16px]">In your Cart</h2>
            <div className="mt-2 bg-[#E06386] p-1 w-[95px] rounded text-center">
              <p className="text-white text-[13px] font-medium">
                Quantity : {" "}
                {items.reduce(
                  (acc: number, item: CartItemType) => acc + item.quantity,
                  0
                )}
              </p>
            </div>

            <div className="mt-4">
              {items.map(
                (
                  item: CartItemType // Specify the type for item
                ) => (
                  <SummaryItem key={item.id} {...item} />
                )
              )}
            </div>
            <div className="mt-10 space-y-2">
              <p className="font-semibold text-[15px]">Price</p>
              <div className="flex justify-between mb-2">
                <span className="text-[14px]">Subtotal</span>
                <span className="text-[14px]">{subtotal} THB</span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-[14px]">Shipping fee</span>
                <span className="text-[14px">300 THB</span>{" "}
                {/* Adjust if necessary */}
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-[14px]">Vat</span>
                <span className="text-[14px]">7%</span>
              </div>

              <div className="border border-[0.5px] border-solid border-[#666666] border-opacity-50 w-full h-[0.5px]" />

              <div className="flex justify-between mb-2">
                <span className="font-semibold text-[15px]">Total</span>
                <span className="font-semibold text-[14px]">
                  {totalWithVAT} THB
                </span>{" "}
                {/* Display total */}
              </div>

              <div className="border border-[0.5px] border-solid border-[#666666] border-opacity-50 w-full h-[0.5px]" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default Payment;

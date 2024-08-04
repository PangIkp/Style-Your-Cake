import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div>
      <div className="mt-[140px]">
        <div className="fixed top-0 z-10 w-full ">
          <NavBar />
        </div>
      </div>
      <div className="flex flex-col p-20">
        <div className="flex items-center">
          <h1 className="flex items-center">
            <span className="text-[28px] font-semibold">Account</span>
            <span className="text-[28px] font-light mx-1">|</span>
            <span className="font-semibold text-[16px]">Order History</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row mt-8">
          <div className="md:w-1/3 flex flex-col space-y-4">
            <div className="p-5 border rounded space-y-5">
            <Link
                to="/Account"
                className="p-4 hover:bg-[#FFE5E8] hover:cursor-pointer border-r-4 border-r-[#D63484] border-t border-b border-l rounded-[8px] flex items-center"
              >
                <div className="mr-2"></div>
                <img src="/Account.png" alt="account" className="w-6 mr-4"></img>
                <div>
                  <h3 className="text-[14px] font-semibold">Your Information</h3>
                </div>
              </Link>

              <div className="p-4 bg-[#FFE5E8] border-r-4 border-[#D63484] rounded-[8px] flex items-center">
                <div className="mr-2"></div>
                <img
                  src="/Order.png"
                  alt="order"
                  className="w-6 mr-4"
                ></img>
                <div>
                  <h3 className="text-[14px] font-semibold">
                    Order History
                  </h3>
                </div>
              </div>

              <Link
                to="/Login"
                className="p-4 hover:bg-[#FFE5E8] hover:cursor-pointer border-r-4 border-r-[#D63484] border-t border-b border-l rounded-[8px] flex items-center"
              >
                <div className="mr-2"></div>
                <img src="/Logout.png" alt="account" className="w-6 mr-4"></img>
                <div>
                  <h3 className="text-[14px] text-[#D63484] font-semibold">
                    Logout
                  </h3>
                </div>
              </Link>
            </div>
          </div>

          <div className="md:w-2/3 md:ml-8 mt-8 md:mt-0">
            <h2 className="text-[14px] font-semibold">Customer Information</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-7">
              <div>
                <label className="block text-[13px] font-medium">
                  Username
                </label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:border-[#D63484] sm:text-[12px]"
                  value="Naomill69969966"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:border-[#D63484] sm:text-[12px]"
                  value="Saralee.yees@bumail.net"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:border-[#D63484] sm:text-[12px]"
                  value="Saralee"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:border-[#D63484] sm:text-[12px]"
                  value="Yeesaeng"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-[13px] font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="mt-1 p-4 block w-full border border-gray-300 rounded-md shadow-sm focus:border-[#D63484] sm:text-[12px]"
                  value="097-993-3784"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  // type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-b from-[#D63484] to-[#E06386] text-[15px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-semibold rounded-[20px]"
                >
                  <div className="flex justify-center items-center">
                    <img
                      src="/Save.png"
                      alt="account"
                      className="w-4 mr-2"
                    />
                    <p> Save </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default Order;

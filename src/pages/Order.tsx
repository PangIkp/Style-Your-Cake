import { useLocation } from "react-router-dom";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import OrderSummary from "../components/OrderItem";

const Order: React.FC = () => {

  return (
    <div>
      <div className="mt-[140px]">
        <div className="fixed top-0 z-10 w-full ">
          <NavBar onSearch={() => {}} />
        </div>
      </div>
      <div className="flex flex-col p-20">
        <div className="flex items-center">
          <h1 className="flex items-center">
            <span className="text-[26px] font-semibold">Account</span>
            <span className="text-[26px] font-light mx-1">|</span>
            <span className="font-semibold text-[16px]">Order History</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row mt-8">
          <div className="md:w-1/3 flex flex-col space-y-4">
            <div className="p-5 border shadow-lg rounded-[5px] space-y-5">
              <Link
                to="/Account"
                className="p-4 hover:bg-[#FFE5E8] hover:cursor-pointer border-r-4 border-r-[#D63484] border-t border-b border-l rounded-[8px] flex items-center"
              >
                <div className="mr-2"></div>
                <img
                  src="/Account.png"
                  alt="account"
                  className="w-6 mr-4"
                ></img>
                <div>
                  <h3 className="text-[13px] font-semibold">
                    Your Information
                  </h3>
                </div>
              </Link>

              <div className="p-4 bg-[#FFE5E8] border-r-4 border-[#D63484] rounded-[8px] flex items-center">
                <div className="mr-2"></div>
                <img src="/Order.png" alt="order" className="w-6 mr-4"></img>
                <div>
                  <h3 className="text-[13px] font-semibold">Order History</h3>
                </div>
              </div>

              <Link
                to="/Login"
                className="p-4 hover:bg-[#FFE5E8] hover:cursor-pointer border-r-4 border-r-[#D63484] border-t border-b border-l rounded-[8px] flex items-center"
              >
                <div className="mr-2"></div>
                <img src="/Logout.png" alt="account" className="w-6 mr-4"></img>
                <div>
                  <h3 className="text-[13px] text-[#D63484] font-semibold">
                    Logout
                  </h3>
                </div>
              </Link>
            </div>
          </div>

          <div className="md:w-2/3 md:ml-8 mt-8 md:mt-0">
          <OrderSummary />
        
           
       
          </div>
        </div>
      </div>

      <Footer />
      <Copyright />
    </div>
  );
};

export default Order;

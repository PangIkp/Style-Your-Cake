import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import OrderSummary from "../components/OrderItem";

const WriteOnCake = () => {
  return (
    <div>
      <div className="mt-[140px]">
        <div className="fixed top-0 z-10 w-full ">
          <NavBar />
        </div>
      </div>

      <Footer />
      <Copyright />
    </div>
  );
};

export default WriteOnCake;

import React from "react";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import { dbConnect } from "../db/dbConnect";
import { Link } from "react-router-dom";

const Landing = () => {
  // const connect = async () => {
  //   try {
  //       await dbConnect()
  //   }
  //   catch(error) {
  //       console.log(error)
  //   }}
  //   connect();
  return (
    <div>
      <div className="mt-[140px]">
        <div className="fixed top-0 z-10 w-full ">
          <NavBar />
        </div>
        <Main />

        {/* Top Selling */}
        <p className="text-[26px] font-semibold flex items-center justify-center mt-[60px]">
          Top Selling
        </p>

        <p className="text-[#666666] flex items-center justify-center">
          Discover our top-selling creations.
        </p>

        <div className="flex ml-[50px]">
          <ProductCard
            id="Bc-01"
            name="Jubilant Occasion"
            price={800}
            category="Birthday Cake"
            imgUrl="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <ProductCard
            id="Bc-01"
            name="Jubilant Occasion"
            price={800}
            category="Birthday Cake"
            imgUrl="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <ProductCard
            id="Bc-01"
            name="Jubilant Occasion"
            price={800}
            category="Birthday Cake"
            imgUrl="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <ProductCard
            id="Bc-01"
            name="Jubilant Occasion"
            price={800}
            category="Birthday Cake"
            imgUrl="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>

      <div className="flex justify-center mt-[40px] mb-[40px]">
        <Link to="/category">
          <button className="pl-12 pr-12 flex justify-between items-center bg-gradient-to-b from-[#D63484] to-[#E06386] text-[18px] font-semibold hover:from-[#D63484] hover:to-[#FFCCD2] text-white rounded-[20px] h-[45px] w-[220px]">
            View more
            <img src="/View.png" alt="View more" className="h-[12px]" />
          </button>
        </Link>
      </div>

      <div className="border border-[0.5px] border-solid border-black w-full h-[0.5px]" />

      {/* Recommendation */}
      <p className="text-[26px] font-semibold flex items-center justify-center mt-[60px]">
        Recommendation
      </p>

      <p className="text-[#666666] flex items-center justify-center">
        Our recommended creations or design your own masterpiece.
      </p>

      <div className="flex ml-[50px] flex-wrap">
        <ProductCard
          id="Bc-01"
          name="Jubilant Occasion"
          price={800}
          category="Birthday Cake"
          imgUrl="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <ProductCard
          id="Bc-01"
          name="Jubilant Occasion"
          price={800}
          category="Birthday Cake"
          imgUrl="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <ProductCard
          id="Bc-01"
          name="Jubilant Occasion"
          price={800}
          category="Birthday Cake"
          imgUrl="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <ProductCard
          id="Bc-01"
          name="Jubilant Occasion"
          price={800}
          category="Birthday Cake"
          imgUrl="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <ProductCard
          id="Bc-01"
          name="Jubilant Occasion"
          price={800}
          category="Birthday Cake"
          imgUrl="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <ProductCard
          id="Bc-01"
          name="Jubilant Occasion"
          price={800}
          category="Birthday Cake"
          imgUrl="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <ProductCard
          id="Bc-01"
          name="Jubilant Occasion"
          price={800}
          category="Birthday Cake"
          imgUrl="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <ProductCard
          id="Bc-01"
          name="Jubilant Occasion"
          price={800}
          category="Birthday Cake"
          imgUrl="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>

      <div className="flex justify-center mt-[40px] mb-[40px]">
        <Link to="/category">
          <button className="pl-12 pr-12 flex justify-between items-center bg-gradient-to-b from-[#D63484] to-[#E06386] text-[18px] font-semibold hover:from-[#D63484] hover:to-[#FFCCD2] text-white rounded-[20px] h-[45px] w-[220px]">
            View more
            <img src="/View.png" alt="View more" className="h-[12px]" />
          </button>
        </Link>
      </div>

      <div className="border border-[0.5px] border-solid border-black w-full h-[0.5px]" />

      {/* How to order */}

      <p className="text-[26px] font-semibold flex items-center justify-center mt-[60px]">
        How to order
      </p>

      <p className="text-[#666666] flex items-center justify-center">
        Here's a step-by-step guide on how to place an order.
      </p>

      <div className="flex justify-between items-center mt-[40px] mb-[40px] ml-[180px] mr-[200px] ">

          <div className="flex flex-col items-center">
            <img src="/HowTo1.png" alt="Sign Up or Log In" className="h-[120px]"/>
            <p className="text-[#D63484] mt-3 mb-3 font-semibold"> Sign Up or Log In </p>
            <p className="text-[#503C3C] text-[13px]"> Before you can start adding cakes to your cart,</p>
            <p className="text-[#503C3C] text-[13px]"> you need to either Sign up for an account or </p>
            <p className="text-[#503C3C] text-[13px]"> Login if you're an existing customer. </p>
            <img src="/1To2.png" alt="1 to 2" className="mt-[45px] h-[25px] w-[250px] transform scale-200 absolute left-[405px]"/>
          </div>

          <div className="flex flex-col items-center">
            <img src="/HowTo2.png" alt="Sign Up or Log In" className="h-[120px]"/>
            <p className="text-[#D63484] mt-3 mb-3 font-semibold"> Add Cakes to Cart </p>
            <p className="text-[#503C3C] text-[13px]"> When you've found a cake you'd like to order,</p>
            <p className="text-[#503C3C] text-[13px]"> click on the "Add to Cart" button to add the </p>
            <p className="text-[#503C3C] text-[13px]"> cake to your shopping cart. </p>
            <img src="/2To3.png" alt="1 to 2" className="mt-[45px] h-[25px] w-[250px] transform scale-200 absolute right-[400px]"/>
          </div>

          <div className="flex flex-col items-center">
            <img src="/HowTo3.png" alt="Sign Up or Log In" className="h-[120px]"/>
            <p className="text-[#D63484] mt-3 mb-3 font-semibold"> Review Cart</p>
            <p className="text-[#503C3C] text-[13px]"> Make sure all the cakes and quantities are </p>
            <p className="text-[#503C3C] text-[13px] mb-5 "> correct before proceeding to checkout. </p>
          </div>
       </div>

       <div className="flex justify-between items-center mt-[100px] ml-[180px] mr-[200px] ">
          <div className="flex flex-col items-center">
            <img src="/HowTo4.png" alt="Sign Up or Log In" className="h-[120px]"/>
            <p className="text-[#D63484] mt-3 mb-3 font-semibold"> Checkout </p>
            <p className="text-[#503C3C] text-[13px]"> Choose your preferred delivery or pickup options</p>
            <p className="text-[#503C3C] text-[13px]"> and provide any necessary delivery details. </p>
            <img src="/4To5.png" alt="1 to 2" className="mt-[45px] h-[25px] w-[250px] transform scale-200 absolute left-[405px]"/>
          </div>

          <div className="flex flex-col items-center">
            <img src="/HowTo5.png" alt="Sign Up or Log In" className="h-[120px]"/>
            <p className="text-[#D63484] mt-3 mb-3 font-semibold"> Payment </p>
            <p className="text-[#503C3C] text-[13px]"> Pay with Qr code and send proof of </p>
            <p className="text-[#503C3C] text-[13px]"> payment using the Line application. </p>
            <img src="/5To6.png" alt="1 to 2" className="mt-[45px] h-[25px] w-[250px] transform scale-200 absolute right-[400px]"/>
          </div>

          <div className="flex flex-col items-center mt-4">
            <img src="/HowTo6.png" alt="How to 6" className="h-[120px] ml-3"/>
            <p className="text-[#D63484] mt-3 mb-3  ml-3 font-semibold"> Confirmation</p>
            <p className="text-[#503C3C] text-[13px]"> After successfully placing your order, you'll  </p>
            <p className="text-[#503C3C] text-[13px]"> receive an order confirmation Line message </p>
            <p className="text-[#503C3C] text-[13px] "> with all the details of your purchase. </p>
          </div>
       </div>

      <div className="flex justify-center items-center mt-[50px] mb-[70px]">
        <div className="rounded-[15px] bg-[#E06386] text-white h-[70px] w-[1250px] flex justify-center items-center space-x-4">
          <img src="/Callcenter.png" alt="Callcenter" className="h-[20px] ml-[20px]" />
          <span className="font-semibold text-[14px]"> If you have any questions or need assistance at any point during the ordering process, feel free to contact our customer support team for help.</span>
        </div>
      </div>

      <div className="border border-[0.5px] border-solid border-black w-full h-[0.5px]" />

      {/* Overview */}
      <p className="text-[26px] font-semibold flex items-center justify-center mt-[60px]">
        #StyleYourCake
      </p>

      <p className="text-[#666666] flex items-center justify-center ">
        Indulge in sweet perfection with our exquisite cakes!
      </p>


      <div className="flex justify-center mt-[60px] mb-[180px] overflow-x-auto">
        <div className="flex overflow-x-auto space-x-[20px] pr-[70px] pl-[70px]">
          <img src="/Overview1.webp" alt="Overview1" className="h-[460px] w-[320px] rounded-[15px] inline-block" />
          <img src="/Overview2.png" alt="Overview2" className="h-[460px] w-[320px] rounded-[15px] inline-block" />
          <img src="/Overview3.png" alt="Overview3" className="h-[460px] w-[320px] rounded-[15px] inline-block" />
          <img src="/Overview4.webp" alt="Overview4" className="h-[460px] w-[320px] rounded-[15px] inline-block" />
          <img src="/Overview5.png" alt="Overview5" className="h-[460px] w-[320px] rounded-[15px] inline-block" />
          <img src="/Overview6.png" alt="Overview6" className="h-[460px] w-[320px] rounded-[15px] inline-block" />
          <img src="/Overview7.png" alt="Overview7" className="h-[460px] w-[320px] mr-[70px] rounded-[15px] inline-block" />
        </div>
      </div>

      <Footer/>

      <Copyright/>
    </div>
  );
};

export default Landing;

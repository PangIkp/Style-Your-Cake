import React from "react";
import NavBar from "../components/NavBar";
import Slicer from "../components/Slicer";
import ProductCard from "../components/ProductCard";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const Category = () => {
  return (
    <div>
      <div className="mt-[140px]">
        <div className="fixed top-0 z-10 w-full ">
          <NavBar/>
        </div>

        <div className="flex justify-between items-center p-10 ml-10">
          <div className="flex items-center">
            <p className="text-[26px] font-semibold">Category</p>
            <p className="px-3 text-[26px]">|</p>
            <p className="text-[15px] text-[#666666]">All Product</p>
          </div>

          <div className="flex items-center mr-10">
            <p className="text-[15px] mr-3 font-semibold">Sort by :</p>
            <Dropdown />
          </div>
        </div>

        <div className="flex justify-between items-start">
          <Slicer />

          {/* ProductCard */}
          <div className="flex flex-wrap">
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
        </div>
        <Footer/>

        <Copyright/>
      </div>
    </div>
  );
};

export default Category;

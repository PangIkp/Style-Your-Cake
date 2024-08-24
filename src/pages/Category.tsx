import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Slicer from "../components/Slicer";
import ProductCard from "../components/ProductCard";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import axios from "axios";
import { ProductItem } from "../interfaces";

const Category = () => {
  const [cakeDetail, setCakeDetail] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/v1/products");
        // Handle the response data
        setLoading(false);
        setCakeDetail(response.data.data);
      } catch (error) {
        // Handle any errors
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  if (loading) return <div>Loading</div>;
  return (
    <div>
      <div className="mt-[140px]">
        <div className="fixed top-0 z-10 w-full ">
          <NavBar />
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
          {cakeDetail.map((product, index) => (
              <ProductCard
                key={index}
                id={product.id}
                name={product.productName}
                price={product.price}
                category={product.category}
                imgUrl={product.productPic}
              />
          ))}
            {/* <ProductCard
              id="Bc-01"
              name="Jubilant Occasion"
              price={800}
              category="Birthday cake"
              imgUrl="https://drive.google.com/thumbnail?id=1_-KeE95-m1DNrTIHSRTSpd2f9gAgE5jy&sz=w1000"
            /> */}
           
          </div>
        </div>
        <Footer />

        <Copyright />
      </div>
    </div>
  );
};

export default Category;

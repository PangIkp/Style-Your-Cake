import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Slicer from "../components/Slicer";
import ProductCard from "../components/ProductCard";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import axios from "axios";
import { ProductItem } from "../interfaces";

interface FilterOptions {
  category?: string;
  priceRange?: string;
}

const Category = () => {
  const [cakeDetail, setCakeDetail] = useState<ProductItem[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("asc");

  useEffect(() => {
    const loadImage = (imageUrl: string) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = imageUrl;
        loadImg.onload = () => setTimeout(() => resolve(imageUrl), 2000);
        loadImg.onerror = (err) => reject(err);
      });
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/v1/products"
        );
        const products = response.data.data;

        // Preload all product images
        const imagePreloadPromises = products.map((product: ProductItem) =>
          loadImage(product.productPic)
        );

        // Wait for all images to be preloaded
        await Promise.all(imagePreloadPromises);

        // Once images are preloaded, update the state
        setLoading(false);
        setCakeDetail(products);
        setFilteredProducts(products); // Display all products by default
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = ({ category, priceRange }: FilterOptions) => {
    let filtered = cakeDetail;

    if (category) {
      setSelectedCategory(category);
      if (category !== "All") {
        filtered = filtered.filter((product) => product.category === category);
      }
    } else if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (priceRange && priceRange.length > 0) {
      setSelectedPriceRange(priceRange);
      filtered = filtered.filter((product) => {
        const productPrice = product.price;
        const [min, max] = priceRange.split("-").map(Number);
        return (
          productPrice >= min &&
          (max ? productPrice <= max : productPrice > min)
        );
      });
    } else if (selectedPriceRange && selectedPriceRange.length > 0) {
      filtered = filtered.filter((product) => {
        const productPrice = product.price;
        const [min, max] = selectedPriceRange.split("-").map(Number);
        return (
          productPrice >= min &&
          (max ? productPrice <= max : productPrice > min)
        );
      });
    }

    let sortedProducts = [...filtered];
    if (sortBy == "asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    }
    if (sortBy == "desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };

  const handleSort = ({ sortBy }: { sortBy: string }) => {
    let sortedProducts = [...filteredProducts];
    if (sortBy == "asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
      setSortBy(sortBy);
    }
    if (sortBy == "desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
      setSortBy(sortBy);
    }

    setFilteredProducts(sortedProducts);
  };

  if (loading) return <div>Loading...</div>;

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
        </div>

        <div className="flex justify-between items-start px-[50px] mb-[50px]">
          <div>
            <div className="flex items-center px-[25px] mb-[20px]">
              <p className="text-[15px] mr-3 font-semibold">Sort by :</p>
              <Dropdown onSelect={handleSort} />
            </div>

            <div className="">
              <Slicer onChange={handleChange} />
            </div>
          </div>

          {/* ProductCard */}
          <div className="grid grid-cols-3 gap-4">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                id={product.id}
                name={product.productName}
                price={product.price}
                category={product.category}
                imgUrl={product.productPic}
              />
            ))}
          </div>
        </div>
        <Footer />

        <Copyright />
      </div>
    </div>
  );
};

export default Category;

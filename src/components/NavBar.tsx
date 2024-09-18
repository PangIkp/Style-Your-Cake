import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; 

interface NavBarProps {
  onSearch: (query: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [scroll, setScroll] = useState(0);
  const navigate = useNavigate(); 

  const { items } = useCart();

  // Calculate the number of unique items in the cart
  const totalUniqueItems = new Set(items.map(item => item.id)).size;


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query); // Call the onSearch function passed as prop
  };

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  const handleSearchClick = () => {
    navigate('/category'); // Change this path to your actual Category Page path
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [barMargin, setBarMargin] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setBarMargin(0);
      } else {
        setBarMargin(60);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`w-full ${scroll > 100 ? "translate-y-[-60px]" : ""}`}>
      {/* Top bar */}
      <div className="bg-[#E06386] text-white flex justify-between items-center p-4 px-20 ">
        <div className="flex items-center space-x-4">
          <span className="font-bold text-[14px] mr-[30px]">Contact us</span>

          <Link to="/">
            <img src="/Facebook.png" alt="Logo" className="h-[15px] ml-[50px]" />
          </Link>

          <Link
            to="https://www.facebook.com/?stype=lo&deoia=1&jlou=Afd1rvbV2APaxeW4XfucNrsCAutYizDNypiQkKm3ZbcUAlwwT0SUQs9Ejx7UVyOs5WZbzBowtPL5zvghEUAo1XNW28sLOhrUepORjfU3hZyaQA&smuh=9845&lh=Ac8p80tDkNWY5sfpYKo"
            className="text-[14px] mr-[30px] underline"
          >
            @StyleYourCake_
          </Link>

          <div className="border border-[0.5px] border-solid border-white h-4" />

          <img
            src="/Insta.png"
            alt="Instagram"
            className="h-[15px] ml-[30px]"
          />
          <Link to="https://www.instagram.com/" className="text-[14px] underline">
            @StyleYourCake_
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <span className="font-bold text-[14px] mr-[12px]">Help</span>
          <img src="/Phone.png" alt="Phone" className="h-[12px] ml-[50px]" />
          <span className="text-[14px]">091-234-5678</span>
        </div>
      </div>

      {/* Main NavBar */}
      <div className="bg-white flex justify-between items-center p-4 px-20 shadow-md">
        <Link to="/" className="flex items-center space-x-4">
          <img src="/Logo.png" alt="Logo" className="h-[60px] w-[200px]" />
        </Link>

        <div className="flex justify-start items-center">
          <div className="flex items-center space-x-[20px] ml-[30px]">
          <Link to="/category" className="text-[#503C3C] text-[14px] hover:text-[#D63484] cursor-pointer">
              Category
            </Link>

            <div className="border border-[0.5px] border-solid border-[#503C3C] h-6" />

            <div className="flex items-center space-x-2">
              <Link to="/design" className="text-[#503C3C] text-[14px] hover:text-[#D63484] cursor-pointer">
                Design Your Cake
              </Link>
              <img src="/Wink.png" alt="Wink" className="h-[15px]" />
            </div>
            <div className="border border-[0.8px] border-solid border-[#503C3C] h-6" />

            <Link to="/reviews" className="text-[#503C3C] text-[14px] hover:text-[#D63484] cursor-pointer">
              Reviews
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4 ml-[30px]">
          <div className="relative w-[350px]">
            <input
              value={searchQuery}
              onChange={handleSearchChange}
              onClick={handleSearchClick} 
              placeholder="Search for cakes"
              className="border rounded-full px-4 py-2 w-full pr-10 text-[14px]"
            />
            <img
              src="/Search.png"
              alt="Search"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-[18px]"
            />
          </div>

          <Link to="/cart" className="relative">
            <img
              src="/Cart.png"
              alt="Cart"
              className="h-[26px] w-[28px] ml-5 hover:bg-[#FFCCD2]"
            />
            <span className="absolute top-4 right-0 bg-[#503C3C] rounded-full h-[17px] w-[17px] flex items-center justify-center">
              <span className="text-[9px] font-bold text-white">{totalUniqueItems}</span>
            </span>
          </Link>

          <Link to="/login">
            <button className="bg-gradient-to-b from-[#D63484] to-[#E06386] text-[13px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-bold rounded-[20px] h-[35px] w-[100px]">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="bg-white text-[13px] text-[#503C3C] hover:bg-[#FFCCD2] font-bold rounded h-[35px] w-[100px] rounded-[20px] border-[1px] border-[#503C3C]">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

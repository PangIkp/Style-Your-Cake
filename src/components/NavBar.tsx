import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      console.log(prevScrollPos, currentScrollPos);
      if (prevScrollPos > currentScrollPos) {
        setBarMargin(0);
        // console.log(barMargin);
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

  const [barMargin, setBarMargin] = useState(0);

  return (
    <div className={`w-full ${scroll > 100 && location.pathname == "/"
    ? "translate-y-[-60px]"
    : ""}`}>
      {/* Top bar */}
      <div className="bg-[#E06386] text-white flex justify-between items-center p-4 px-20 ">
        <div className="flex items-center space-x-4">
          <span className="font-bold text-[14px] mr-[30px]">Contact us</span>

          <Link to="/">
          <img src="/Facebook.png" alt="Logo" className="h-[15px] ml-[50px]" />
          </Link>
           
          <a href = "https://www.facebook.com/?stype=lo&deoia=1&jlou=Afd1rvbV2APaxeW4XfucNrsCAutYizDNypiQkKm3ZbcUAlwwT0SUQs9Ejx7UVyOs5WZbzBowtPL5zvghEUAo1XNW28sLOhrUepORjfU3hZyaQA&smuh=9845&lh=Ac8p80tDkNWY5sfpYKo" 
             className="text-[14px] mr-[30px] underline">
            @StyleYourCake_
          </a>

          <div className="border border-[0.5px] border-solid border-white h-4 "/>

          <img
            src="/Insta.png"
            alt="Instagram"
            className="h-[15px] ml-[30px]"
          />
          <a href = "https://www.instagram.com/" className="text-[14px] underline">@StyleYourCake_</a>

        </div>
        <div className="flex items-center space-x-4">
          <span className="font-bold text-[14px] mr-[12px]">Help</span>
          <img src="/Phone.png" alt="Phone" className="h-[12px] ml-[50px]" />
          <span className="text-[14px]">091-234-5678</span>
        </div>
      </div>

      {/* Main NavBar */}
      <div className="bg-white flex justify-between items-center p-4 px-20 shadow-md">
        <button className="flex items-center space-x-4">
          <img src="/Logo.png" alt="Logo" className="h-[60px] w-[200px]" />
        </button>

        <div className="flex justify-start items-center">
          <div className="flex items-center space-x-[20px] ml-[30px]">
            <a  href="/category" className="text-[#503C3C] text-[14px] hover:text-[#D63484] cursor-pointer">
              Category
            </a>

            <div className="border border-[0.5px] border-solid border-[#503C3C] h-6" />

            <div className="flex items-center space-x-2">
              <a href="/design" className="text-[#503C3C] text-[14px]  hover:text-[#D63484] cursor-pointer">
                Design Your Cake
              </a>
              <img src="/Wink.png" alt="Wink" className="h-[15px]" />
            </div>
            <div className="border border-[0.8px] border-solid border-[#503C3C] h-6" />

            <a href="/reviews" className="text-[#503C3C] text-[14px] hover:text-[#D63484] cursor-pointer">
              Reviews
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4  ml-[30px]">
          <div className="relative w-[350px]">
            <input
              placeholder="Search for cakes"
              className="border rounded-full px-4 py-2 w-full pr-10 text-[14px] "
            />
            <img
              src="/Search.png"
              alt="Search"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-[18px]"
            />
          </div>

          <button className="relative">
            <img
              src="/Cart.png"
              alt="Cart"
              className="h-[26px] w-[28px] ml-5 hover:bg-[#FFCCD2]"
            />

            <span className="absolute top-4 right-0 bg-[#503C3C] rounded-full h-[14px] w-[14px] flex items-center justify-center">
            <span className="text-[7px] font-bold text-white">0</span>
            </span>
          </button>

          {/* <div className='flex items-center space-x-2'>
            <img src="/Profile.png" alt='Logo' className='h-[20px]'/>
            <span className='text-[#D63484] text-[14px]'>Naomill</span>
          </div> */}


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

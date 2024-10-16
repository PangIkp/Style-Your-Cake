import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const SelectYourCake: React.FC = () => {
  const [selectedShape, setSelectedShape] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigate = useNavigate();

  const handleShapeClick = (shape: string) => {
    setSelectedShape(shape);
  };

  const handleSizeClick = (index: number) => {
    setSelectedSize(index);
  };

  const handleFlavorClick = (flavor: string) => {
    setSelectedFlavor(flavor);
  };

  const handleSubmit = () => {
    if (!selectedShape || !selectedSize || !selectedFlavor) {
        alert("Please choose the shape, size, and flavor of your cake."); // แสดง pop-up
    } else {
        setErrorMessage("");
        const confirmationMessage = `You have chosen the cake.\nShape : ${selectedShape}\nSize : ${selectedSize}\nFlavor : ${selectedFlavor}`;
        alert(confirmationMessage); // แสดง pop-up
        setErrorMessage(""); // ล้างข้อความ error
        navigate("/decorate");
    }
  };

  return (
    <div>
      <div className="mt-[140px]">
        <div className="fixed top-0 z-10 w-full ">
          <NavBar onSearch={() => {}} />
        </div>
      </div>

      <div className="pl-20 pr-20 pt-10">
        <h1 className="text-[26px] font-semibold mb-9">
          Select Your Cake Details
        </h1>

        <div>
          <h2 className="font-medium mb-5">Select cake shape</h2>

          <div className="flex justify-between">
            <div className="flex justify-between space-x-12">
              {/* Round Shape */}
              <div
                className={`${
                  selectedShape === "round"
                    ? "bg-[#E06386]" // สีที่ใช้เมื่อเลือกแล้ว
                    : "bg-[#FFCCD2] bg-opacity-50 hover:bg-[#E06386]" // สีพื้นฐานพร้อม hover
                } hover:cursor-pointer rounded-[10px] pl-20 pr-20 p-5`}
                onClick={() => handleShapeClick("round")}
              >
                <img className="w-[240px]" src="Round.png" alt="Round" />
              </div>

              {/* Square Shape */}
              <div
                className={`${
                  selectedShape === "square"
                    ? "bg-[#E06386]" // สีที่ใช้เมื่อเลือกแล้ว
                    : "bg-[#FFCCD2] bg-opacity-50 hover:bg-[#E06386]" // สีพื้นฐานพร้อม hover
                } hover:cursor-pointer rounded-[10px] pl-10 pr-10 p-5`}
                onClick={() => handleShapeClick("square")}
              >
                <img className="w-[300px] mt-8" src="Square.png" alt="Square" />
              </div>

              {/* Heart Shape */}
              <div
                className={`${
                  selectedShape === "heart"
                    ? "bg-[#E06386]" // สีที่ใช้เมื่อเลือกแล้ว
                    : "bg-[#FFCCD2] bg-opacity-50 hover:bg-[#E06386]" // สีพื้นฐานพร้อม hover
                } hover:cursor-pointer rounded-[10px] pl-20 pr-20 p-5`}
                onClick={() => handleShapeClick("heart")}
              >
                <img className="w-[240px]" src="Hearth.png" alt="Heart" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-medium mt-10 mb-5">Select size</h2>
          <div className="flex justify-between">
            {/* 1/2 pound */}
            <div
              className={`${
                selectedSize === 0
                  ? "bg-[#E06386] bg-opacity-60" // สีที่ใช้เมื่อเลือกแล้ว
                  : "bg-[#FFCCD2] bg-opacity-20 hover:bg-[#E06386] hover:bg-opacity-60" // สีพื้นฐานพร้อม hover
              } border border-[#9F9F9F] rounded-[10px] text-center pr-[70px] pl-[70px] p-4 space-y-2 hover:cursor-pointer`}
              onClick={() => handleSizeClick(0)}
            >
              <p className="text-[14px] font-medium">1/2 pound</p>
              <p className="text-[12px]">For 4 servings</p>
              <p className="text-[14px] font-medium">350 THB</p>
            </div>

            {/* 1 pound */}
            <div
              className={`${
                selectedSize === 1
                  ? "bg-[#E06386] bg-opacity-60" // สีที่ใช้เมื่อเลือกแล้ว
                  : "bg-[#FFCCD2] bg-opacity-40 hover:bg-[#E06386] hover:bg-opacity-60" // สีพื้นฐานพร้อม hover
              } border border-[#9F9F9F] rounded-[10px] text-center pr-[70px] pl-[70px] p-4 space-y-2 hover:cursor-pointer`}
              onClick={() => handleSizeClick(1)}
            >
              <p className="text-[14px] font-medium">1 pound</p>
              <p className="text-[12px]">For 8 servings</p>
              <p className="text-[14px] font-medium">550 THB</p>
            </div>

            {/* 2 pound */}
            <div
              className={`${
                selectedSize === 2
                  ? "bg-[#E06386] bg-opacity-60" // สีที่ใช้เมื่อเลือกแล้ว
                  : "bg-[#FFCCD2] bg-opacity-60 hover:bg-[#E06386] hover:bg-opacity-60" // สีพื้นฐานพร้อม hover
              } border border-[#9F9F9F] rounded-[10px] text-center pr-[70px] pl-[70px] p-4 space-y-2 hover:cursor-pointer`}
              onClick={() => handleSizeClick(2)}
            >
              <p className="text-[14px] font-medium">2 pound</p>
              <p className="text-[12px]">For 12 servings</p>
              <p className="text-[14px] font-medium">650 THB</p>
            </div>

            {/* 3 pound */}
            <div
              className={`${
                selectedSize === 3
                  ? "bg-[#E06386] bg-opacity-60" // สีที่ใช้เมื่อเลือกแล้ว
                  : "bg-[#FFCCD2] bg-opacity-80 hover:bg-[#E06386] hover:bg-opacity-60" // สีพื้นฐานพร้อม hover
              } border border-[#9F9F9F] rounded-[10px] text-center pr-[70px] pl-[70px] p-4 space-y-2 hover:cursor-pointer`}
              onClick={() => handleSizeClick(3)}
            >
              <p className="text-[14px] font-medium">3 pound</p>
              <p className="text-[12px]">For 16 servings</p>
              <p className="text-[14px] font-medium">750 THB</p>
            </div>

            {/* 4 pound */}
            <div
              className={`${
                selectedSize === 4
                  ? "bg-[#E06386] bg-opacity-60" // สีที่ใช้เมื่อเลือกแล้ว
                  : "bg-[#FFCCD2] bg-opacity-100 hover:bg-[#E06386] hover:bg-opacity-60" // สีพื้นฐานพร้อม hover
              } border border-[#9F9F9F] rounded-[10px] text-center pr-[70px] pl-[70px] p-4 space-y-2 hover:cursor-pointer`}
              onClick={() => handleSizeClick(4)}
            >
              <p className="text-[14px] font-medium">4 pound</p>
              <p className="text-[12px]">For 24 servings</p>
              <p className="text-[14px] font-medium">950 THB</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-medium mt-10 mb-5">Select your cake flavour</h2>

          <div className="flex justify-between space-x-[38px]">
            {/* Lemon */}
            <div
              className={`${
                selectedFlavor === "lemon"
                  ? "bg-[#E06386] bg-opacity-50" // สีที่ใช้เมื่อเลือกแล้ว
                  : "hover:bg-[#E06386] hover:bg-opacity-50" // สีพื้นฐานพร้อม hover
              } border p-6 rounded-[10px] hover:cursor-pointer`}
              onClick={() => handleFlavorClick("lemon")}
            >
              <img src="Lemon.png" alt="Lemon" />
              <div className="text-center">
                <p className="text-[12px] mt-2">Lemon</p>
                <p className="text-[14px] font-medium">120 THB</p>
              </div>
            </div>

            {/* Chocolate */}
            <div
              className={`${
                selectedFlavor === "chocolate"
                  ? "bg-[#E06386] bg-opacity-50" // สีที่ใช้เมื่อเลือกแล้ว
                  : "hover:bg-[#E06386] hover:bg-opacity-50" // สีพื้นฐานพร้อม hover
              } border p-6 rounded-[10px] hover:cursor-pointer`}
              onClick={() => handleFlavorClick("chocolate")}
            >
              <img src="Chocolate.png" alt="Chocolate" />
              <div className="text-center">
                <p className="text-[12px] mt-2">Chocolate</p>
                <p className="text-[14px] font-medium">150 THB</p>
              </div>
            </div>

            {/* White Chocolate */}
            <div
              className={`${
                selectedFlavor === "white-chocolate"
                  ? "bg-[#E06386] bg-opacity-50" // สีที่ใช้เมื่อเลือกแล้ว
                  : "hover:bg-[#E06386] hover:bg-opacity-50" // สีพื้นฐานพร้อม hover
              } border p-6 rounded-[10px] hover:cursor-pointer`}
              onClick={() => handleFlavorClick("white-chocolate")}
            >
              <img src="Whitechocolate.png" alt="White chocolate" />
              <div className="text-center">
                <p className="text-[12px] mt-6">White chocolate</p>
                <p className="text-[14px] font-medium">150 THB</p>
              </div>
            </div>

            {/* Red Velvet */}
            <div
              className={`${
                selectedFlavor === "red-velvet"
                  ? "bg-[#E06386] bg-opacity-50" // สีที่ใช้เมื่อเลือกแล้ว
                  : "hover:bg-[#E06386] hover:bg-opacity-50" // สีพื้นฐานพร้อม hover
              } border p-6 rounded-[10px] hover:cursor-pointer`}
              onClick={() => handleFlavorClick("red-velvet")}
            >
              <img src="Redvelvet.png" alt="Red Velvet" />
              <div className="text-center">
                <p className="text-[12px] mt-6">Red Velvet</p>
                <p className="text-[14px] font-medium">200 THB</p>
              </div>
            </div>

            {/* Cheesecake */}
            <div
              className={`${
                selectedFlavor === "cheesecake"
                  ? "bg-[#E06386] bg-opacity-50" // สีที่ใช้เมื่อเลือกแล้ว
                  : "hover:bg-[#E06386] hover:bg-opacity-50" // สีพื้นฐานพร้อม hover
              } border p-6 rounded-[10px] hover:cursor-pointer`}
              onClick={() => handleFlavorClick("cheesecake")}
            >
              <img src="Cheesecake.png" alt="Cheesecake" />
              <div className="text-center">
                <p className="text-[12px] mt-8">Cheesecake</p>
                <p className="text-[14px] font-medium">250 THB</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex justify-center mt-10 mb-20"
          onClick={() => window.scrollTo(0, 0)}
        >
          <button onClick={handleSubmit} className="bg-gradient-to-b from-[#D63484] to-[#E06386] text-[13px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-bold rounded-[20px] h-[40px] w-[450px]">
            Next Step
          </button>
        </div>
      </div>

      <Footer />
      <Copyright />
    </div>
  );
};

export default SelectYourCake;

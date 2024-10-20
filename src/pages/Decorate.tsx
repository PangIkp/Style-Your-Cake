import CircleShape from "../components/CircleShape";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Ingredient from "../components/Ingredient";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { useMainStore } from "../mainStore";

const Decorate = () => {
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]); // ใช้ array ของ string
  const [color, setColor] = useState<number>(0xF4A460); // ใช้ state สำหรับสีเริ่มต้น
  const { flavorColor } = useMainStore();

  const handleToppingClick = (topping: string) => {
    // ตรวจสอบว่า topping ถูกเลือกแล้วหรือไม่
    if (selectedToppings.includes(topping)) {
      // ถ้าเลือกแล้ว ให้ลบออกจาก array
      setSelectedToppings(selectedToppings.filter((item) => item !== topping));
    } else {
      // ถ้าไม่ใช่ ให้เพิ่มเข้าไปใน array
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  const [selectedFont, setSelectedFont] = useState<string | null>(null); // ใช้ state เพื่อเก็บปุ่มที่ถูกเลือก

  const handleFontClick = (font: string) => {
    setSelectedFont(font); // อัปเดต font ที่ถูกเลือก
  };

  return (
    <div>
      <div className="mt-[140px]">
        <div className="fixed top-0 z-10 w-full ">
          <NavBar onSearch={() => {}} />
        </div>
      </div>

      <div className="pl-20 pr-20 mb-40">
        <div className="flex items-center space-x-1 mb-10 pt-10">
          <h1 className="mr-2 text-[26px] font-semibold">Design Your Cake</h1>
          <img src="/Wink.png" alt="Wink" className="h-[25px]" />
        </div>
        <div>
          <div className="flex">
            <div
              className="max-h-[490px] w-[15vw] p-4 overflow-y-auto w-1/4 bg-[#E06386] border border-r-[#E06386] border-l-[#9F9F9F] border-t-[#9F9F9F] border-b-[#9F9F9F] shadow-lg"
              style={{
                scrollbarColor: "white #E06386",
                scrollbarWidth: "thin",
              }}
            >
              <Ingredient />
              <Ingredient />
            </div>

            {/* Cake Image Section */}
            <div className="mr-10  bg-[#FFCCD2] bg-opacity-50 border border-r-[#9F9F9F] border-t-[#9F9F9F] border-b-[#9F9F9F] shadow-lg flex -cneter">
             <CircleShape color={flavorColor} />
            </div>

        
            {/* scrollbar-color: rebeccapurple green; */}
            {/* Cake Details and Customization Section */}
            <div className="flex flex-col justify-between">
              <div
                className="max-h-[430px] overflow-y-auto p-6 bg-white rounded-lg shadow-lg border flex flex-col"
                style={{ scrollbarColor: "#D63484 white" }}
              >
                <div className="mb-6">
                  <h2 className="text-[12px] font-semibold">Cake details</h2>
                  <p className="mt-2 text-[12px]">
                    <span className="text-[#D63484]">Cake shape :</span> Heart
                  </p>
                  <p className="mt-2 text-[12px]">
                    <span className="text-[#D63484]">Cake size:</span> 1 pound
                  </p>
                  <p className="mt-2 text-[12px]">
                    <span className="text-[#D63484]">Cake flavour:</span>{" "}
                    Chocolate
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-[14px] font-semibold">Add toppings </p>
                </div>

                <div className="mb-4">
                  <p className="text-[12px] font-semibold">Fruit</p>
                  <div className="flex justify-between mt-4 space-x-1">
                    {/* Strawberry */}
                    <button
                      className={`w-28 h-28 p-6 border border-gray-300 rounded-md flex flex-col items-center ${
                        selectedToppings.includes("strawberry")
                          ? "bg-[#FFCCD2]" // สีที่ใช้เมื่อเลือกแล้ว
                          : "hover:bg-[#FFCCD2]" // สีพื้นฐานพร้อม hover
                      }`}
                      onClick={() => handleToppingClick("strawberry")}
                    >
                      <img
                        className="w-12"
                        src="/Strawberry.png"
                        alt="Strawberry"
                      />
                      <span className="text-[10px] mt-2">Strawberry</span>
                    </button>

                    {/* Blueberry */}
                    <button
                      className={`w-28 h-28 p-7 border border-gray-300 rounded-md flex flex-col items-center ${
                        selectedToppings.includes("blueberry")
                          ? "bg-[#FFCCD2]" // สีที่ใช้เมื่อเลือกแล้ว
                          : "hover:bg-[#FFCCD2]" // สีพื้นฐานพร้อม hover
                      }`}
                      onClick={() => handleToppingClick("blueberry")}
                    >
                      <img
                        className="w-full"
                        src="/Blueberry.png"
                        alt="Blueberry"
                      />
                      <span className="text-[10px] mt-2">Blueberry</span>
                    </button>

                    {/* Cherry */}
                    <button
                      className={`w-28 h-28 p-5 border border-gray-300 rounded-md flex flex-col items-center ${
                        selectedToppings.includes("cherry")
                          ? "bg-[#FFCCD2]" // สีที่ใช้เมื่อเลือกแล้ว
                          : "hover:bg-[#FFCCD2]" // สีพื้นฐานพร้อม hover
                      }`}
                      onClick={() => handleToppingClick("cherry")}
                    >
                      <img className="w-10" src="/Cherry.png" alt="Cherry" />
                      <span className="text-[10px] mt-2">Cherry</span>
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-[12px] font-semibold">Flower (edible)</p>
                  <div className="flex mt-4 space-x-1">
                    {/* Chamomile */}
                    <button
                      className={`w-28 h-28 p-5 border border-gray-300 rounded-md flex flex-col items-center justify-center ${
                        selectedToppings.includes("chamomile")
                          ? "bg-[#FFCCD2]" // สีที่ใช้เมื่อเลือกแล้ว
                          : "hover:bg-[#FFCCD2]" // สีพื้นฐานพร้อม hover
                      }`}
                      onClick={() => handleToppingClick("chamomile")}
                    >
                      <img
                        className="w-full"
                        src="/Chamomile.png"
                        alt="Chamomile"
                      />
                      <span className="text-[10px] mt-2">Chamomile</span>
                    </button>

                    {/* Butterfly Pea */}
                    <button
                      className={`w-28 h-28 p-5 border border-gray-300 rounded-md flex flex-col items-center justify-center ${
                        selectedToppings.includes("butterflyPea")
                          ? "bg-[#FFCCD2]" // สีที่ใช้เมื่อเลือกแล้ว
                          : "hover:bg-[#FFCCD2]" // สีพื้นฐานพร้อม hover
                      }`}
                      onClick={() => handleToppingClick("butterflyPea")}
                    >
                      <img
                        className="w-full"
                        src="/ButterflyPea.png"
                        alt="Butterfly pea"
                      />
                      <span className="text-[10px] mt-2">Butterfly pea</span>
                    </button>
                  </div>
                </div>

                <div>
                  <div>
                    <p className="mb-4 text-[12px] font-semibold">Toppings</p>

                    {/* Row 1 with 3 buttons */}
                    <div className="flex mt-1 space-x-1">
                      {/* Chocolate */}
                      <button
                        className={`w-28 h-28 p-5 border border-gray-300 rounded-md flex flex-col items-center ${
                          selectedToppings.includes("chocolate")
                            ? "bg-[#FFCCD2]" // สีที่ใช้เมื่อเลือกแล้ว
                            : "hover:bg-[#FFCCD2]"
                        }`}
                        onClick={() => handleToppingClick("chocolate")}
                      >
                        <img
                          className="w-13"
                          src="/Choco.png"
                          alt="Chocolate"
                        />
                        <span className="text-[10px] mt-4">Chocolate</span>
                      </button>

                      {/* Brownie cube */}
                      <button
                        className={`w-28 h-28 p-5 border border-gray-300 rounded-md flex flex-col items-center justify-center ${
                          selectedToppings.includes("brownie")
                            ? "bg-[#FFCCD2]" // สีที่ใช้เมื่อเลือกแล้ว
                            : "hover:bg-[#FFCCD2]"
                        }`}
                        onClick={() => handleToppingClick("brownie")}
                      >
                        <img
                          className="w-full"
                          src="/Brownie.png"
                          alt="Brownie cube"
                        />
                        <span className="text-[10px] mt-2">Brownie cube</span>
                      </button>

                      {/* Marshmallow */}
                      <button
                        className={`w-28 h-28 p-5 border border-gray-300 rounded-md flex flex-col items-center justify-center ${
                          selectedToppings.includes("marshmallow")
                            ? "bg-[#FFCCD2]" // สีที่ใช้เมื่อเลือกแล้ว
                            : "hover:bg-[#FFCCD2]"
                        }`}
                        onClick={() => handleToppingClick("marshmallow")}
                      >
                        <img
                          className="w-full"
                          src="/Marshmellow.png"
                          alt="Marshmallow"
                        />
                        <span className="text-[10px] mt-2">Marshmallow</span>
                      </button>
                    </div>

                    {/* Row 2 */}
                    <div className="flex justify-start mt-1 space-x-1">
                      {/* Macaron */}
                      <button
                        className={`w-28 h-28 p-5 border border-gray-300 rounded-md flex flex-col items-center ${
                          selectedToppings.includes("macaron")
                            ? "bg-[#FFCCD2]" // สีที่ใช้เมื่อเลือกแล้ว
                            : "hover:bg-[#FFCCD2]"
                        }`}
                        onClick={() => handleToppingClick("macaron")}
                      >
                        <img
                          className="w-full"
                          src="/Macaron.png"
                          alt="Macaron"
                        />
                        <span className="text-[10px] mt-5">Macaron</span>
                      </button>

                      {/* Sprinkles */}
                      <button
                        className={`w-28 h-28 p-5 border border-gray-300 mb-4 rounded-md flex flex-col items-center justify-center ${
                          selectedToppings.includes("sprinkles")
                            ? "bg-[#FFCCD2]" // สีที่ใช้เมื่อเลือกแล้ว
                            : "hover:bg-[#FFCCD2]"
                        }`}
                        onClick={() => handleToppingClick("sprinkles")}
                      >
                        <img
                          className="w-full"
                          src="/Sprinkle.png"
                          alt="Sprinkles"
                        />
                        <span className="text-[10px] mt-2">Sprinkles</span>
                      </button>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="text-[12px] font-semibold"
                      >
                        Enter your message
                      </label>
                      <textarea
                        id="message"
                        className="mt-2 mb-2 w-full p-2 border border-gray-300 text-[12px] rounded-md"
                        maxLength={100}
                        placeholder="20 characters"
                      ></textarea>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="font"
                        className="text-[12px] font-semibold"
                      >
                        Select font Size
                      </label>
                      <select
                        id="font"
                        className="mt-2 w-full p-2 border border-gray-300 rounded-md text-[12px]"
                      >
                        <option value="12">12px - Small</option>
                        <option value="14">14px - Regular</option>
                        <option value="16">16px - Medium</option>
                        <option value="18">18px - Large</option>
                        <option value="20">20px - Extra Large</option>
                        <option value="24">24px - Huge</option>
                      </select>

                      <div className="flex justify-between mt-2 space-x-2">
                        {/* Button 1: Normal */}
                        <button
                          className={`w-full h-16 border border-gray-300 rounded-md flex flex-col items-center justify-center ${
                            selectedFont === "normal"
                              ? "bg-[#FFCCD2]"
                              : "hover:bg-[#FFCCD2]"
                          }`}
                          onClick={() => handleFontClick("normal")}
                        >
                          <span className="text-[13px]">Aa</span>
                          <span className="text-[13px]">สวัสดี</span>
                        </button>

                        {/* Button 2: Medium */}
                        <button
                          className={`w-full h-16 border border-gray-300 rounded-md flex flex-col items-center justify-center font-medium ${
                            selectedFont === "medium"
                              ? "bg-[#FFCCD2]"
                              : "hover:bg-[#FFCCD2]"
                          }`}
                          onClick={() => handleFontClick("medium")}
                        >
                          <span className="text-[13px]">Aa</span>
                          <span className="text-[13px]">สวัสดี</span>
                        </button>

                        {/* Button 3: Bold */}
                        <button
                          className={`w-full h-16 border border-gray-300 rounded-md flex flex-col items-center justify-center font-bold ${
                            selectedFont === "bold"
                              ? "bg-[#FFCCD2]"
                              : "hover:bg-[#FFCCD2]"
                          }`}
                          onClick={() => handleFontClick("bold")}
                        >
                          <span className="text-[13px]">Aa</span>
                          <span className="text-[13px]">สวัสดี</span>
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[12px] font-semibold mb-2">Colors</h3>
                      {/* Add your color picker or color options here */}
                      <div className="flex justify-between mt-4 space-x-3">
                        <button className="w-full h-7 bg-white border border-gray-200 hover:border-[#D63484] hover:border-[2px]"></button>

                        <button className="w-full h-7 bg-[#DB7093] hover:outline outline-[#D63484] hover:outline-[2px]"></button>

                        <button className="w-full h-7 bg-[#DDA0DD] hover:outline outline-[#D63484] hover:outline-[2px]"></button>

                        <button className="w-full h-7 bg-[#FFFF33] hover:outline outline-[#D63484] hover:outline-[2px]"></button>

                        <button className="w-full h-7 bg-[#99FFCC] hover:outline outline-[#D63484] hover:outline-[2px]"></button>

                        <button className="w-full h-7 bg-[#33CCFF] hover:outline outline-[#D63484] hover:outline-[2px]"></button>

                        <button className="w-full h-7 bg-[#FF6347] hover:outline outline-[#D63484] hover:outline-[2px]"></button>

                        <button className="w-full h-7 bg-[#CC0033] hover:outline outline-[#D63484] hover:outline-[2px]"></button>

                        <button className="w-full h-7 bg-[#996633] hover:outline outline-[#D63484] hover:outline-[2px]"></button>

                        <button className="w-full h-7 bg-black hover:outline outline-[#D63484] hover:outline-[2px]"></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button Section */}
              <div className="">
                <button className="bg-gradient-to-b from-[#D63484] to-[#E06386] text-[14px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-bold rounded-[20px] w-full h-[40px] mt-5">
                  Add to cart
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

export default Decorate;

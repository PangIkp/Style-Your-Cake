import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const WriteOnCake = () => {
  return (
    <div>
      <div className="mt-[140px]">
        <div className="fixed top-0 z-10 w-full ">
          <NavBar />
        </div>
      </div>

      <div className="pl-20 pr-20 mb-40">
        <div className="flex items-center space-x-1 mb-10 pt-10">
          <h1 className="mr-2 text-[26px] font-semibold">Design Your Cake</h1>
          <img src="/Wink.png" alt="Wink" className="h-[25px]" />
        </div>

        <div className="flex flex-col">
          <div className="flex space-x-8">
            {/* Cake Image Section */}
            <div className="w-full bg-[#FFCCD2] bg-opacity-50 border border-[#9F9F9F] shadow-lg flex items-center justify-center">
              <img
                src="/Hearth.png"
                alt="Wink"
                className="w-[400px] flex items-center"
              />
            </div>

            {/* Cake Details and Customization Section */}
            <div className="flex flex-col justify-between w-1/2">
              <div className="p-6 bg-white rounded-lg shadow-lg border flex flex-col">
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
                  <label
                    htmlFor="message"
                    className="text-[12px] font-semibold"
                  >
                    Enter your message
                  </label>
                  <textarea
                    id="message"
                    className="mt-2 w-full p-2 border border-gray-300 text-[12px] rounded-md"
                    maxLength={100}
                    placeholder="20 characters"
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label htmlFor="font" className="text-[12px] font-semibold">
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

                  <div className="flex justify-between mt-4 space-x-2">
                    <button className="w-full h-16 border border-gray-300 rounded-md flex flex-col items-center justify-center hover:bg-[#FFCCD2]">
                      <span className="text-[13px]">Aa</span>
                      <span className="text-[13px]">สวัสดี</span>
                    </button>

                    <button className="w-full h-16 border border-gray-300 rounded-md flex flex-col items-center justify-center font-medium hover:bg-[#FFCCD2]">
                      <span className="text-[13px]">Aa</span>
                      <span className="text-[13px]">สวัสดี</span>
                    </button>

                    <button className="w-full h-16 border border-gray-300 rounded-md flex flex-col items-center justify-center font-bold hover:bg-[#FFCCD2]">
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

              {/* Add to Cart Button Section */}
              <div className="mt-7">
                <button className="bg-gradient-to-b from-[#D63484] to-[#E06386] text-[14px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-bold rounded-[20px] w-full h-[40px]">
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

export default WriteOnCake;

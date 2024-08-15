import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Ingredient from "../components/Ingredient";
import NavBar from "../components/NavBar";

const Decorate = () => {
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
        <div>
          <div className="flex">
            <div
              className="max-h-[490px] p-4 overflow-y-auto w-1/4 bg-[#E06386] border border-r-[#E06386] border-l-[#9F9F9F] border-t-[#9F9F9F] border-b-[#9F9F9F] shadow-lg"
              style={{
                scrollbarColor: "white #E06386",
                scrollbarWidth: "thin",
              }}
            >
              <Ingredient />
              <Ingredient />
              <Ingredient />
              <Ingredient />
              <Ingredient />
              <Ingredient />
              <Ingredient />
              <Ingredient />
              <Ingredient />
              <Ingredient />
              <Ingredient />
              <Ingredient />
              <Ingredient />
              <Ingredient />
            </div>

            {/* Cake Image Section */}
            <div className="w-full mr-10 bg-[#FFCCD2] bg-opacity-50 border border-r-[#9F9F9F] border-t-[#9F9F9F] border-b-[#9F9F9F] shadow-lg flex items-center justify-center">
              <img
                src="/Hearth.png"
                alt="Wink"
                className="w-[320px] flex items-center"
              />
            </div>
            {/* scrollbar-color: rebeccapurple green; */}
            {/* Cake Details and Customization Section */}
            <div className="flex flex-col justify-between w-1/2">
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
                    <button className="w-28 h-28 p-6 border border-gray-300 rounded-md flex flex-col items-center hover:bg-[#FFCCD2]">
                      <img className="w-12" src="/Strawberry.png"></img>
                      <span className="text-[10px] mt-2">Strawberry</span>
                    </button>

                    <button className="w-28 h-28 p-7 border border-gray-300 rounded-md flex flex-col items-center hover:bg-[#FFCCD2]">
                      <img className="w-full" src="/Blueberry.png"></img>
                      <span className="text-[10px] mt-2">Blueberry</span>
                    </button>

                    <button className="w-28 h-28 p-5 border border-gray-300 rounded-md flex flex-col items-center hover:bg-[#FFCCD2]">
                      <img className="w-10" src="/Cherry.png"></img>
                      <span className="text-[10px] mt-2">Cherry</span>
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-[12px] font-semibold">Flower (edible)</p>
                  <div className="flex mt-4 space-x-1">
                    <button className="w-28 h-28 p-5 border border-gray-300 rounded-md flex flex-col items-center justify-center hover:bg-[#FFCCD2]">
                      <img className="w-full" src="/Chamomile.png"></img>
                      <span className="text-[10px] mt-2">Chamomile</span>
                    </button>

                    <button className="w-28 h-28 p-5 border border-gray-300 rounded-md flex flex-col items-center justify-center hover:bg-[#FFCCD2]">
                      <img className="w-full" src="/ButterflyPea.png"></img>
                      <span className="text-[10px] mt-2">Butterfly pea</span>
                    </button>
                  </div>
                </div>

                <div>
                  <div>
                    <p className="mb-4 text-[12px] font-semibold">Toppings</p>

                    {/* Row 1 with 3 buttons */}
                    <div className="flex mt-1 space-x-1">
                      <button className="w-28 h-28 p-5 border border-gray-300 rounded-md flex flex-col items-center hover:bg-[#FFCCD2]">
                        <img className="w-13" src="/Choco.png"></img>
                        <span className="text-[10px] mt-4">Chocolate</span>
                      </button>

                      <button className="w-28 h-28 p-5 border border-gray-300 rounded-md flex flex-col items-center justify-center hover:bg-[#FFCCD2]">
                        <img className="w-full" src="/Brownie.png"></img>
                        <span className="text-[10px] mt-2">Brownie cube</span>
                      </button>

                      <button className="w-28 h-28 p-5 border border-gray-300 rounded-md flex flex-col items-center justify-center hover:bg-[#FFCCD2]">
                        <img className="w-full" src="/Marshmellow.png"></img>
                        <span className="text-[10px] mt-2">Marshmallow</span>
                      </button>
                    </div>

                    {/* Row 2 with 2 buttons */}
                    <div className="flex justify-start mt-1 space-x-1">
                    <button className="w-28 h-28 p-5 border border-gray-300 rounded-md flex flex-col items-center hover:bg-[#FFCCD2]">
                        <img className="w-full" src="/Macaron.png"></img>
                        <span className="text-[10px] mt-5">Macaron</span>
                      </button>

                      <button className="w-28 h-28 p-5 border border-gray-300 rounded-md flex flex-col items-center justify-center hover:bg-[#FFCCD2]">
                        <img className="w-full" src="/Sprinkle.png"></img>
                        <span className="text-[10px] mt-2">Sprinkles</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button Section */}
              <div className="">
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

export default Decorate;

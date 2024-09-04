import React, { useState, useEffect } from "react";

interface FilterOptions {
  category?: string;
  priceRange?: string;
}

interface SlicerProps {
  onChange: ({ category, priceRange }: FilterOptions) => void;
}

const Slicer: React.FC<SlicerProps> = ({ onChange }) => {
  // const [checked, setChecked] = useState<boolean>(false);

  const [index, setIndex] = useState<number>(0);

  const [category, setCategory] = useState<string>("all");

  return (
    <div>
      <div className="pl-4 pt-4 pb-4 border shadow-lg rounded-lg w-[340px]">
        <div className="mb-6">
          <h2 className="p-2 font-semibold text-[14px]">Shop by Price</h2>

          <div className="mt-4 space-y-4 pl-2">
            <label className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={index == 1}
                onClick={() => {
                  if (index != 1) {
                    setIndex(1);
                    onChange({ priceRange: "300-500" });
                  } else {
                    setIndex(0);
                    onChange({ priceRange: "0-" });
                  }
                }}
                name="priceRange"
                value="300-500"
                className="form-radio h-[15px] w-[15px]"
              />
              <span className="text-[14px]">300 - 500 THB</span>
            </label>

            <label className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={index == 2}
                onClick={() => {
                  if (index != 2) {
                    setIndex(2);
                    onChange({ priceRange: "500-1000" });
                  } else {
                    setIndex(0);
                    onChange({ priceRange: "0-" });
                  }
                }}
                name="priceRange"
                value="500-1000"
                className="form-radio h-[15px] w-[15px]"
              />
              <span className="text-[14px]">500 - 1000 THB</span>
            </label>

            <label className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={index == 3}
                onClick={() => {
                  if (index != 3) {
                    setIndex(3);
                    onChange({ priceRange: "1000-1500" });
                  } else {
                    setIndex(0);
                    onChange({ priceRange: "0-" });
                  }
                }}
                name="priceRange"
                value="1000-1500"
                className="form-radio h-[15px] w-[15px]"
              />
              <span className="text-[14px]">1000 - 1500 THB</span>
            </label>

            <label className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={index == 4}
                onClick={() => {
                  if (index != 4) {
                    setIndex(4);
                    onChange({ priceRange: "1500-2000" });
                  } else {
                    setIndex(0);
                    onChange({ priceRange: "0-" });
                  }
                }}
                name="priceRange"
                value="1500-2000"
                className="form-radio h-[15px] w-[15px]"
              />
              <span className="text-[14px]">1500 - 2000 THB</span>
            </label>

            <label className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={index == 5}
                onClick={() => {
                  if (index != 5) {
                    setIndex(5);
                    onChange({ priceRange: "2000-2500" });
                  } else {
                    setIndex(0);
                    onChange({ priceRange: "0-" });
                  }
                }}
                name="priceRange"
                value="2000-2500"
                className="form-radio h-[15px] w-[15px]"
              />
              <span className="text-[14px]">2000 - 2500 THB</span>
            </label>

            <label className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={index == 6}
                onClick={() => {
                  if (index != 6) {
                    setIndex(6);
                    onChange({ priceRange: "2500-3000" });
                  } else {
                    setIndex(0);
                    onChange({ priceRange: "0-" });
                  }
                }}
                name="priceRange"
                value="2500-3000"
                className="form-radio h-[15px] w-[15px]"
              />
              <span className="text-[14px]">2500 - 3000 THB</span>
            </label>

            <label className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={index == 7}
                onClick={() => {
                  if (index != 7) {
                    setIndex(7);
                    onChange({ priceRange: "3000-" });
                  } else {
                    setIndex(0);
                    onChange({ priceRange: "0-" });
                  }
                }}
                name="priceRange"
                value="over-3000"
                className="form-radio h-[15px] w-[15px]"
              />
              <span className="text-[14px]">Over 3000 THB</span>
            </label>
          </div>
        </div>

        <div>
          <h2 className="p-2 font-semibold text-[14px]">
            All Product Categories
          </h2>

          <div className="flex flex-wrap gap-2 mt-2 ml-2">
            <button
              onClick={() => {
                onChange({ category: "All" });
                setCategory("all");
              }}
              className={`px-3 py-1 hover:bg-[#FFE5E8] text-[12px] font-light border border-[#9F9F9F] rounded-full ${
                category == "all" ? "bg-[#FFE5E8]" : "bg-white"
              }`}
            >
              Show All
            </button>

            <button
              onClick={() => {
                onChange({ category: "Birthday cake" });
                setCategory("birthday-cake");
              }}
              className={`px-3 py-1 hover:bg-[#FFE5E8] text-[12px] font-light border border-[#9F9F9F] rounded-full ${
                category == "birthday-cake" ? "bg-[#FFE5E8]" : "bg-white"
              }`}
            >
              Birthday cake
            </button>

            <button
              onClick={() => {
                onChange({ category: "Fruit cake" });
                setCategory("fruit-cake");
              }}
              className={`px-3 py-1 hover:bg-[#FFE5E8] text-[12px] font-light border border-[#9F9F9F] rounded-full ${
                category == "fruit-cake" ? "bg-[#FFE5E8]" : "bg-white"
              }`}
            >
              Fruit cake
            </button>

            <button
              onClick={() => {
                onChange({ category: "Wedding cake" });
                setCategory("wedding-cake");
              }}
              className={`px-3 py-1 hover:bg-[#FFE5E8] text-[12px] font-light border border-[#9F9F9F] rounded-full ${
                category == "wedding-cake" ? "bg-[#FFE5E8]" : "bg-white"
              }`}
            >
              Wedding cake
            </button>

            <button
              onClick={() => {
                onChange({ category: "Minimal cake" });
                setCategory("minimal-cake");
              }}
              className={`px-3 py-1 hover:bg-[#FFE5E8] text-[12px] font-light border border-[#9F9F9F] rounded-full ${
                category == "minimal-cake" ? "bg-[#FFE5E8]" : "bg-white"
              }`}
            >
              Minimal cake
            </button>

            <button
              onClick={() => {
                onChange({ category: "Cartoon cake" });
                setCategory("cartoon-cake");
              }}
              className={`px-3 py-1 hover:bg-[#FFE5E8] text-[12px] font-light border border-[#9F9F9F] rounded-full ${
                category == "cartoon-cake" ? "bg-[#FFE5E8]" : "bg-white"
              }`}
            >
              Cartoon cake
            </button>

            <button
              onClick={() => {
                onChange({ category: "Romantic cake" });
                setCategory("romantic-cake");
              }}
              className={`px-3 py-1 hover:bg-[#FFE5E8] text-[12px] font-light border border-[#9F9F9F] rounded-full ${
                category == "romantic-cake" ? "bg-[#FFE5E8]" : "bg-white"
              }`}
            >
              Romantic
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slicer;

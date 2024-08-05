import React, { useState } from 'react';

interface CartItemProps {
  image: string;
  name: string;
  size: string;
  productId: string;
  quantity: number;
  price: number;
  details: string;
  options?: string;
  flavour?: string;
  shape?: string;
  topping?: string;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}
const CartItem: React.FC<CartItemProps> = ({
  image,
  name,
  size,
  productId,
  quantity,
  price,
  details,
  options,
  shape,
  flavour,
  topping,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  return (
    <div className="flex justify-between p-4 border mb-3">
        <button onClick={onRemove} className="text-pink-500">
       <img src="/Bin.png" className="w-8 mr-4"></img>
      </button>
      <img
        src={image}
        alt={name}
        className="w-[240px] h-[230px] object-cover border rounded-[20px]"
      />

      <div className="ml-4 flex-1 mt-6 space-y-2">
        <h2 className="font-semibold text-[13px] mb-5">{name}</h2>
        {details && (
          <p className="text-[#D63484] text-[13px] font-semibold">Detail</p>
        )}
        <p className="text-[12px]">{shape}</p>
        <p className="text-[12px]">Size : {size}</p>
        <p className="text-[12px]">{flavour}</p>

        <div className="flex items-center pt-5">
          <button
            onClick={onDecrease}
            className="font-light px-2 py-[1px] bg-[#FFE5E8] border-l-[0.8px] border-t-[0.8px] border-b-[0.8px]  border-[#666666] rounded-l-full"
          >
            -
          </button>
          <span className="px-3 py-[3.1px] border-[0.8px] border-black text-[13px]">
            {quantity}
          </span>
          <button
            onClick={onIncrease}
            className="font-light px-2 py-[1px] bg-[#FFE5E8] border-r-[0.8px] border-t-[0.8px] border-b-[0.8px] border-[#666666] rounded-r-full"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex-1">
      <div className="mt-[64px] space-y-2">
      {topping && (
          <p className="text-[#D63484] text-[12px] font-semibold">Add Toppings</p>
        )}
        <p className="text-[12px]">{topping}</p>

        </div>
        

        {/* {
            if options is true 
            return p
            else return null

            options  ? <p></p> : null
        } */}
          {options && (
            <div className="flex-1 space-y-2">
            <p className="text-[#D63484] font-semibold text-[12px]">Optional</p>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                checked={isOptionSelected} 
                onChange={() => setIsOptionSelected(!isOptionSelected)} 
                className="mr-2" 
              />
              <p className="text-[12px]">{options}</p>
            </div>
            </div>
          )}
        </div>

      <div className="space-y-[150px]">
        <div className="border rounded-full p-1 w-[70px] mt-5 flex justify-center items-center">
          <p className="text-[12px]">{productId}</p>
        </div>

        <p className="font-semibold text-[14px] ml-3">{price} THB</p>
      </div>
    </div>
  );
};

export default CartItem;

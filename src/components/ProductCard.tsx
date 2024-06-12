import React from 'react'

const ProductCard = ({name,price,detail,imgUrl}:{name:string,price:number,detail:string,imgUrl:string}) => {
    return (
        <div className="border rounded-lg shadow-lg p-4 m-4 max-w-xs">
          <img src={imgUrl} alt={name} className="w-full h-auto rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <p className="text-lg text-red-600 mb-2">{price} THB</p>
            <p className="text-base text-gray-700">{detail}</p>
          </div>
        </div>
      );
    }
    
    export default ProductCard;
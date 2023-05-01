import React from "react";
import AddCartBtn from "./AddCartBtn";

const ItemCard = ({ id, title, price, imageUrl, handleAddToCart }) => {
  const product = {
    id,
    title,
    price,
    imageUrl,
  };

  return (
    <div className="bg-slate-100 shadow-lg rounded-lg dark:bg-slate-600 dark:text-white overflow-hidden">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="flex justify-between">
        <div className="p-3">
          <h2 className="font-bold text-sm mb-2">{title}</h2>
          <p className="text-gray-700 dark:text-white text-sm">${price}</p>
        </div>
        <AddCartBtn handleAddToCart={handleAddToCart} product={product} />
      </div>
    </div>
  );
};

export default ItemCard;

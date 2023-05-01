import React, { useState } from "react";

const AddCartBtn = () => {
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleClick = () => {
    setIsAddingToCart(true);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (isAddingToCart) {
    return (
      <div className="flex items-center border border-gray-300 rounded">
        <button className="p-2" onClick={handleDecrease}>
          -
        </button>
        <span className="px-2">{quantity}</span>
        <button className="p-2" onClick={handleIncrease}>
          +
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xs px-4 rounded h-8"
        onClick={handleClick}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddCartBtn;

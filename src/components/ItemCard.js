import React from 'react';

const ItemCard = ({ title, price, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">${price}</p>
      </div>
    </div>
  );
};

export default ItemCard;

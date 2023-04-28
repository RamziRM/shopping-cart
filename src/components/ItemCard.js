import React from "react";

const ItemCard = ({ item }) => {
    return (
        <div className="flex flex-col justify-center items-center w-1/4 p-5 shadow-md">
            <img src={item.img} alt={item.name} className="w-1/2"/>
            <h1 className="text-2xl">{item.name}</h1>
            <h2 className="text-xl">{item.price}</h2>
        </div>
    );
}

export default ItemCard;
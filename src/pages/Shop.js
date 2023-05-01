import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import Cart from "../components/Cart";

const Shop = ({ darkMode, cartOpen, toggleCart }) => {
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setCartTotal(cartTotal + product.price);
  };

  // An array of 12 mock products
  const products = [
    {
      id: 1,
      title: "Product 1",
      price: 10,
      imageUrl: "https://picsum.photos/204",
    },
    {
      id: 2,
      title: "Product 2",
      price: 22,
      imageUrl: "https://picsum.photos/202",
    },
    {
      id: 3,
      title: "Product 3",
      price: 22,
      imageUrl: "https://picsum.photos/207",
    },
    {
      id: 4,
      title: "Product 4",
      price: 11,
      imageUrl: "https://picsum.photos/211",
    },
    {
      id: 5,
      title: "Product 5",
      price: 17,
      imageUrl: "https://picsum.photos/209",
    },
    {
      id: 6,
      title: "Product 6",
      price: 266,
      imageUrl: "https://picsum.photos/222",
    },
  ];

  return (
    <div className="h-screen dark:bg-gray-900 p-7">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
        {products.map((product) => (
          <ItemCard
            key={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <Cart
        cartItems={cartItems}
        total={cartTotal}
        cartOpen={cartOpen}
        toggleCart={toggleCart}
      />
    </div>
  );
};

export default Shop;

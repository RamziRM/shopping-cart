import React, { useEffect } from 'react';
import ItemCard from '../components/ItemCard';

const Shop = ({ darkMode }) => {
  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // An array of 12 mock products
  const products = [
    {
      id: 1,
      title: 'Product 1',
      price: 10.99,
      imageUrl: 'https://picsum.photos/204',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 20.99,
      imageUrl: 'https://picsum.photos/202',
    },
    // Add more products here
  ];

  return (
    <div className="h-screen dark:bg-gray-900">
      <h1 className="text-4xl dark:text-white">Shop</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ItemCard
            key={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;

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
    {
        id: 3,
        title: 'Product 3',
        price: 20.99,
        imageUrl: 'https://picsum.photos/207',
    },
    {
        id: 4,
        title: 'Product 4',
        price: 10.99,
        imageUrl: 'https://picsum.photos/211',
    },
    {
        id: 5,
        title: 'Product 5',
        price: 20.99,
        imageUrl: 'https://picsum.photos/209',
    },
    {
        id: 6,
        title: 'Product 6',
        price: 20.99,
        imageUrl: 'https://picsum.photos/222',
    },
  ];

  return (
    <div className="h-screen dark:bg-gray-900 p-7">
      <h1 className="text-4xl dark:text-white">Shop</h1>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
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

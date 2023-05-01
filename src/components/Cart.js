import React from "react";

const Cart = ({ cartItems, total, cartOpen, toggleCart }) => {
  return (
    <div
      className={`fixed right-0 top-0 h-full w-64 bg-white z-50 shadow-lg transform ${
        cartOpen ? "" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <header
        className="p-4 border-b border-gray-300 flex items-center justify-between"
        onClick={toggleCart}
      >
        <span className="text-lg font-bold">Cart</span>
        <div className="flex items-center">
          <i className="fas fa-shopping-cart"></i>
          <span className="ml-2 ">{cartItems.length}</span>
        </div>
      </header>
      <div className="p-4">
        <ul className="">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center py-2"
            >
              <div>
                <span className="mr-9">{item.title}</span>
                <span className="ml-10">${item.price}</span>
              </div>
              <div className="">{item.quantity}</div>
            </li>
          ))}
        </ul>
        <div className="text-right mt-4">
          <span>Total:</span>
          <span className="ml-2">${total}</span>
        </div>
        <button
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md"
          onClick={toggleCart}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

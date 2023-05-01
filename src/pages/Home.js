import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = ({ darkMode }) => {
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="dark:bg-gray-900">
      <div className="flex flex-col w-screen h-screen text-center p-10 font-medium">
        <h1 className="text-5xl py-3 dark:text-white">
          Welcome to <span className="text-blue-700 font-bold">JustShop</span>
        </h1>
        <h4 className="text-xl pt-3 pb-5 dark:text-white">
          Shop for your favorite non existing items!!
        </h4>
        <div className="py-2">
          <Link to="/shop">
            <button className="text-2xl p-4 bg-blue-500 w-fit text-white rounded-lg">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

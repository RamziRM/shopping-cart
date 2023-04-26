import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col text-center p-10 font-medium">
        <h1 className="text-5xl py-3">Welcome to <span className="text-blue-700 font-bold">JustShop</span></h1>
        <h4 className="text-xl pt-3 pb-5">Shop for your favorite non existing items!!</h4>
        <div>
            <button className="text-2xl p-4 bg-blue-500 w-fit text-white rounded-lg">Shop Now</button>
        </div>
    </div>
  )};

export default Home;
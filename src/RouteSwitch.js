import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
            {/* <Route path="/shop" element={Shop} /> */}
            </Routes>
      </BrowserRouter>
    );    
};

export default RouteSwitch;

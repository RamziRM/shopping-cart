import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={Home} />
            {/* <Route path="/shop" element={Shop} /> */}
            </Routes>
      </BrowserRouter>
    );    
};

export default RouteSwitch;

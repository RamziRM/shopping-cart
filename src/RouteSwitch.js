import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";

const RouteSwitch = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <BrowserRouter>
            <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Routes>
                <Route exact path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode}/>} />
                <Route path="/shop" element={<Shop darkMode={darkMode} setDarkMode={setDarkMode}/>} />
                <Route path="/about" element={<About darkMode={darkMode} setDarkMode={setDarkMode}/>} />
            </Routes>
      </BrowserRouter>
    );    
};

export default RouteSwitch;

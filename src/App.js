import React from "react";
import { Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import "./App.css";


const App = () => {
    return (
        <CartProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </CartProvider>
    );
};


export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterProvider from "./contexts/RegisterProvider";
import CartProvider from "./contexts/CartProvider";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import "./App.css";


const App = () => {
    return (
        <RegisterProvider>
        <CartProvider>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </CartProvider>
        </RegisterProvider>
    );
};


export default App;
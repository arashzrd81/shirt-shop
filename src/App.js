import React from "react";
import { Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import Home from "./components/pages/Home";
import "./App.css";


const App = () => {
    return (
        <CartProvider>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </CartProvider>
    );
};


export default App;
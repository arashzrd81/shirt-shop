import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import "./App.css";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};


export default App;
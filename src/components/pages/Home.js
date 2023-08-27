import React from "react";
import Header from "../shared/Header";
import Hero from "../shared/Hero";
import Shirts from "../shared/Shirts";


const Home = () => {
    return (
        <div className="container">
            <Header />
            <Hero />
            <Shirts />
        </div>
    );
};


export default Home;
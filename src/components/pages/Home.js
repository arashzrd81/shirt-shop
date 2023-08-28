import React from "react";
import Header from "../shared/Header";
import Hero from "../shared/Hero";
import Shirts from "../shared/Shirts";
import Discount from "../shared/Discount";
import Feedbacks from "../shared/Feedbacks";


const Home = () => {
    return (
        <div className="container">
            <Header />
            <Hero />
            <Shirts />
            <Discount />
            <Feedbacks />
        </div>
    );
};


export default Home;
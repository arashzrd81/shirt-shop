import React from "react";
import Header from "../shared/Header";
import Hero from "../shared/Hero";
import Shirts from "../shared/Shirts";
import Discount from "../shared/Discount";
import Feedbacks from "../shared/Feedbacks";
import Features from "../shared/Features";
import Footer from "../shared/Footer";


const Home = () => {
    return (
        <div className="container">
            <Header />
            <Hero />
            <Shirts />
            <Discount />
            <Feedbacks />
            <Features />
            <Footer />
        </div>
    );
};


export default Home;
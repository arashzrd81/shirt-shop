import React, { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { RegisterContext } from "../contexts/RegisterProvider";
import { CartContext } from "../contexts/CartProvider";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Shirts from "../components/Shirts";
import Discount from "../components/Discount";
import Feedbacks from "../components/Feedbacks";
import Features from "../components/Features";
import Footer from "../components/Footer";
import { showToast } from "../helper/showToast";


const Home = () => {

    const {isRegistered, setIsRegistered} = useContext(RegisterContext);
    const {state: {checkout}} = useContext(CartContext);

    useEffect(() => {
        if (isRegistered === 1) {
            showToast("success", "You registered successfully!");
            setIsRegistered(2);
        }
        checkout && showToast("success", "You checked out successfully!");
    }, [isRegistered, setIsRegistered, checkout]);

    return (
        <div id="container">
            <Header />
            <Hero />
            <Shirts />
            <Discount />
            <Feedbacks />
            <Features />
            <Footer />
            <ToastContainer className="toast" />
        </div>
    );
};


export default Home;
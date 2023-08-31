import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RegisterContext } from "../contexts/RegisterProvider";
import { CartContext } from "../contexts/CartProvider";
import { showToast } from "../helper/showToast";
import "../assets/styles/Header.css";


const Header = () => {

    const {isRegistered, userData: {username}} = useContext(RegisterContext);
    const {state: {shirtsCount, totalPurchase}} = useContext(CartContext);
    const [redirect, setRedirect] = useState();
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        isRegistered ? setRedirect(true) : setRedirect(false);
        shirtsCount ? setRedirect(true) : setRedirect(false);
    }, [isRegistered, shirtsCount]);

    const onClick = () => {
        if (!isRegistered) {
            showToast("error", "You are not registered!");
        } else if (!shirtsCount) {
            showToast("error", "You have not selected any shirt!");
        }
    };

    return (
        <header>
            <section className="header-sec">
                <div className="logo-name">
                    <i className="fa-solid fa-shirt"></i>
                    <h1>SHIRT SHOP</h1>
                </div>
                <div className="right-part">
                    <Link className="cart" to={redirect ? "/cart" : undefined} onClick={onClick}>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="counter">{shirtsCount}</span>
                        <span className="total-purchase">${totalPurchase}</span>
                    </Link>
                    <div
                        className={showNavbar ? "lines cross" : "lines"}
                        onClick={() => setShowNavbar(!showNavbar)}>
                        {
                            Array(3).fill().map(
                                (item, index) => <span key={index}></span>
                            )
                        }
                    </div>
                    <div className={showNavbar ? "navbar navbar-visible" : "navbar"}>
                        <nav>
                            <Link to="/">Home</Link>
                            <a href="#shirts">Buy Shirts</a>
                            <a href="#discount">Get Discount</a>
                        </nav>
                        {
                            isRegistered ?
                            <h3 className="username">{username}</h3> :
                            <Link to="/register" >
                                <button className="register-btn">Register</button>
                            </Link>
                        }
                    </div>
                </div>
            </section>
        </header>
    );
};


export default Header;
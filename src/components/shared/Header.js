import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";
import "../../assets/styles/Header.css";


const Header = () => {

    const {state: {shirtsCount, totalPurchase}} = useContext(CartContext);
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <header>
            <section className="header">
                <div className="logo-name">
                    <i className="fa-solid fa-shirt"></i>
                    <h1>Shirt Shop</h1>
                </div>
                <div className="right-part">
                    <div className="cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="counter">{shirtsCount}</span>
                        <span className="total-purchase">${totalPurchase.toFixed(2)}</span>
                    </div>
                    <div className={showNavbar ? "lines cross" : "lines"} onClick={() => setShowNavbar(!showNavbar)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav className={showNavbar ? "navbar" : undefined}>
                        <Link to="/">Home</Link>
                        <Link to="/">Buy Shirts</Link>
                        <Link to="/">Discounts</Link>
                        <button className="login-btn">Login</button>
                    </nav>
                </div>
            </section>
        </header>
    );
};


export default Header;
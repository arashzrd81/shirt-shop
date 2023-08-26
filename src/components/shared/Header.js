import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/Header.css";


const Header = () => {

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
                        <span className="counter">25</span>
                        <span className="total-purchase">$1835.94</span>
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
                        <button>Login</button>
                    </nav>
                </div>
            </section>
        </header>
    );
};


export default Header;
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import "../../assets/styles/Header.css";


const Header = () => {

    const {state: {shirtsCount, totalPurchase}} = useContext(CartContext);
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <header>
            <section className="header-sec">
                <div className="logo-name">
                    <i className="fa-solid fa-shirt"></i>
                    <h1>SHIRT SHOP</h1>
                </div>
                <div className="right-part">
                    <Link className="cart" to="/cart">
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
                        <Link to="/" >
                            <button className="login-btn">Login</button>
                        </Link>
                    </div>
                </div>
            </section>
        </header>
    );
};


export default Header;
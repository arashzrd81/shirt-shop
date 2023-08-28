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
                        {
                            Array(3).fill().map(() => (
                                <span></span>
                            ))
                        }
                    </div>
                    <div className={showNavbar ? "navbar navbar-visible" : "navbar"}>
                        <nav>
                            <Link to="/">Home</Link>
                            <Link to="/">Buy Shirts</Link>
                            <Link to="/">Get Discount</Link>
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
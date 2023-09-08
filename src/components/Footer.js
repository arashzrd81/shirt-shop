import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../assets/styles/Footer.css";


const Footer = () => {
    return (
        <footer>
            <section className="footer-sec">
                <div className="info">
                    <div className="logo-name">
                        <i className="fa-solid fa-shirt"></i>
                        <h1>SHIRT SHOP</h1>
                    </div>
                    <h3>&copy; Shirt Shop 2023 | All Rights Reserved</h3>
                </div>
                <nav>
                    <h2>SHIRTS</h2>
                    <Link to="/#shirts">T-Shirt</Link>
                    <Link to="/#shirts">Polo Shirt</Link>
                    <Link to="/#shirts">Hoodie</Link>
                    <Link to="/#shirts">Sweat Shirt</Link>
                </nav>
                <nav>
                    <h2>ABOUT</h2>
                    <Link to="/#container">Help</Link>
                    <Link to="/#container">Contact us</Link>
                    <Link to="/#container">Terms</Link>
                    <Link to="/#container">Privacy Policy</Link>
                </nav>
                <div className="social-media">
                    <h2>SOCIAL MEDIA</h2>
                    <nav>
                        <Link to="/#container">
                            <i className="fa-brands fa-instagram"></i>
                        </Link>
                        <Link to="/#container">
                            <i className="fa-brands fa-telegram"></i>
                        </Link>
                        <Link to="/#container">
                            <i className="fa-brands fa-x-twitter"></i>
                        </Link>
                    </nav>
                    <div className="contact-info">
                        <i className="fa-solid fa-phone-volume"></i>
                        <span className="phone-number">+(00)-000-000-0000</span>
                    </div>
                    <div className="contact-info">
                        <i className="fa-solid fa-envelope"></i>
                        <span className="email-address">example@test.com</span>
                    </div>
                </div>
            </section>
        </footer>
    );
};


export default Footer;
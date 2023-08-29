import React from "react";
import "../../assets/styles/Footer.css";


const Footer = () => {
    return (
        <footer>
            <section className="footer">
                <div className="info">
                    <div className="logo-name">
                        <i className="fa-solid fa-shirt"></i>
                        <h1>Shirt Shop</h1>
                    </div>
                    <h3>&copy; Shirt Shop 2023 | All Rights Reserved</h3>
                </div>
                <nav>
                    <h2>SHIRTS</h2>
                    <a href="#">T-Shirt</a>
                    <a href="#">Polo Shirt</a>
                    <a href="#">Hoodie</a>
                    <a href="#">Sweat Shirt</a>
                </nav>
                <nav>
                    <h2>ABOUT</h2>
                    <a href="#">Help</a>
                    <a href="#">Contact us</a>
                    <a href="#">Terms</a>
                    <a href="#">Privacy Policy</a>
                </nav>
                <div className="social-media">
                    <h2>SOCIAL MEDIA</h2>
                    <nav>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-telegram"></i></a>
                        <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
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
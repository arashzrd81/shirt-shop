import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import "../assets/styles/Hero.css";


const seasons = ["Winter", "Spring", "Summer", "Autumn"];

const Hero = () => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex((index) => index + 1), 1500
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <main id="hero">
            <section className="hero-sec">
                <div className="intro">
                    <h2>Starting At Only $0.5</h2>
                    <h1>
                        <TextTransition className="season" springConfig={presets.wobbly}>
                            {seasons[index % seasons.length]}
                        </TextTransition>
                        <span>Special Collection</span>
                    </h1>
                    <p>Brand day flat 20% off and free shipping</p>
                    <div className="info">
                        <a href="#shirts">
                            <button className="shop-now-btn">Shop Now</button>
                        </a>
                        <div className="contact-info">
                            <i className="fa-solid fa-phone-volume"></i>
                            <span className="phone-number">+(00)-000-000-0000</span>
                        </div>
                    </div>
                </div>
                <div className="banner">
                    <img src="https://i.postimg.cc/DwmT3RDg/banner.png" alt="banner" />
                    <h1>SHIRT SHOP</h1>
                </div>
                <div className="shapes">
                    <div className="orange-circles">
                        {
                            Array(4).fill().map(
                                (item, index) => <span key={index}></span>
                            )
                        }
                    </div>
                    <div className="shirt-icon">
                        <i className="fa-solid fa-shirt"></i>
                    </div>
                </div>
            </section>
        </main>
    );
};


export default Hero;
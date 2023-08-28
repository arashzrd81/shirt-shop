import React from "react";
import "../../assets/styles/Discount.css";


const Discount = () => {
    return (
        <main>
            <section className="discount">
                <img src="https://i.postimg.cc/G2t741F7/shopping.png" alt="shopping" />
                <div className="subscribe">
                    <h2>20% discount</h2>
                    <h1>Subscribe & Get 20% Discount code</h1>
                    <h3>Looking for a discount code for Your suprise?</h3>
                    <form>
                        <input type="text" placeholder="Email Address" />
                        <button className="subscribe-btn">Subscribe</button>
                    </form>
                    <p>
                        Sign up for our newsletter below to receive
                        the latest discount codes for your surprise.
                    </p>
                </div>
            </section>
        </main>
    );
};


export default Discount;
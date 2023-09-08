import React, { useContext, useEffect, useState, useRef } from "react";
import { RegisterContext } from "../contexts/RegisterProvider";
import { CartContext } from "../contexts/CartProvider";
import { showToast } from "../helper/showToast";
import "../assets/styles/Discount.css";


const Discount = () => {

    const {userData: {email}} = useContext(RegisterContext);
    const {state: {discountRatio}, dispatch} = useContext(CartContext);
    const [showError, setShowError] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        try {
            inputRef.current.value = email ? email : "";
        } catch {
            return;
        }
    }, [email]);

    const onSubmit = event => {
        event.preventDefault();
        if (/^[A-Za-z0-9]+[@][a-z]+[.][a-z]{2,3}$/.test(inputRef.current.value)) {
            dispatch({
                type: "DISCOUNTED"
            });
            showToast("success", "Congratulations! Shirts are 20% off!")
        } else {
            setShowError(true);
        }
    };

    return (
        <main id="discount">
            <section className="discount-sec">
                <img src="https://i.postimg.cc/G2t741F7/shopping.png" alt="shopping" />
                <div className="subscribe">
                    <h2>20% discount</h2>
                    <h1>Subscribe & Get 20% Discount Code</h1>
                    <h3>Looking for a discount code for your suprise?</h3>
                    {
                        discountRatio === 1 ?
                        <form onSubmit={onSubmit}>
                            <div className="input-error">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Email Address"
                                    style={{border: showError && "1px solid var(--red)"}}
                                />
                                <span className="error">
                                    {showError && "Invalid email address!"}
                                </span>
                            </div>
                            <button className="subscribe-btn" type="submit">Subscribe</button>
                        </form> :
                        <div className="applied-discount">
                            <i className="fa-solid fa-tag"></i>
                            <span>
                                Congratulations! Now you can buy any shirt with 20% off!
                            </span>
                        </div>
                    }
                    <p>
                        Subscribe for our newsletter below to receive
                        the latest discount codes for your surprise.
                    </p>
                </div>
            </section>
        </main>
    );
};


export default Discount;
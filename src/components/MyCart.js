import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { CartContext } from "../contexts/CartProvider";
import Prices from "./Prices";
import Counter from "./Counter";
import "../assets/styles/MyCart.css";


const MyCart = () => {

    const {state: {selectedShirts, shirtsCount, totalPurchase}, dispatch} = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        !shirtsCount && navigate("/", {replace: true});
    }, [navigate, shirtsCount]);

    const profitCalculator = () => {
        const profit = selectedShirts.reduce(
            (total, shirt) => total + shirt.quantity * shirt.price, 0
        ) - totalPurchase;
        return profit;
    };

    return (
        <main id="my-cart">
            <section className="my-cart-sec">
                <div className="cards">
                    <div className="title">
                        <h1>My Cart</h1>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                    {
                        selectedShirts.map(
                            selectedShirt => <Shirt key={selectedShirt.id} shirtData={selectedShirt} />
                        )
                    }
                </div>
                <div className="checkout">
                    <div className="shirts-count">
                        <span>Total Shirts Count</span>
                        <span>{shirtsCount}</span>
                    </div>
                    <div className="total-purchase">
                        <span>Total Purchase</span>
                        <span>${totalPurchase.toFixed(2)}</span>
                    </div>
                    <div className="purchase-profit">
                        <span>Your Purchase Profit</span>
                        <span style={{color: "var(--green)"}}>
                            ${profitCalculator().toFixed(2)}
                        </span>
                    </div>
                    <div className="buttons">
                        <Link to="/#container" onClick={() => dispatch({type: "CHECKOUT"})}>
                            <button className="checkout-btn">CHECKOUT</button>
                        </Link>
                        <Link to="/#shirts">
                            <button className="back-to-shop-btn">BACK TO SHOP</button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};


const Shirt = ({shirtData}) => {

    const {state: {discountRatio}, dispatch} = useContext(CartContext);
    const {title, image, price, quantity} = shirtData;

    const onClick = actionType => {
        dispatch({
            type: actionType,
            payload: shirtData
        });
    };

    return (
        <div className="card">
            <img src={image} alt="shirt" />
            <div className="info">
                <div className="left-part">
                    <h3>{title}</h3>
                    <Prices discountRatio={discountRatio} price={price} />
                </div>
                <div className="right-part">
                    <Counter quantity={quantity} onClick={onClick} />
                    <h4>Total: ${(quantity * price * discountRatio).toFixed(2)}</h4>
                </div>
            </div>
        </div>
    );
};


export default MyCart;
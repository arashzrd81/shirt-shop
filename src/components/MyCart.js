import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartProvider";
import "../assets/styles/MyCart.css";


const MyCart = () => {

    const {state: {selectedShirts, shirtsCount, totalPurchase}, dispatch} = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        !shirtsCount && navigate("/", {replace: true});
    }, [navigate, shirtsCount]);

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
                        <span>${totalPurchase}</span>
                    </div>
                    <div className="purchase-profit">
                        <span>Your Purchase Profit</span>
                        <span style={{color: "green"}}>+ $125</span>
                    </div>
                    <div className="buttons">
                        <Link to="/" onClick={() => dispatch({type: "CHECKOUT"})}>
                            <button className="checkout-btn">CHECKOUT</button>
                        </Link>
                        <Link to="/">
                            <button className="back-to-shop-btn">BACK TO SHOP</button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};


const Shirt = ({shirtData}) => {

    const {dispatch} = useContext(CartContext);
    const {title, image, price, offPrice, quantity} = shirtData;

    const onClick = (actionType) => {
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
                    <div className="prices">
                        <span className="price">${price.toFixed(2)}</span>
                        <span className="off-price">${offPrice.toFixed(2)}</span>
                    </div>
                </div>
                <div className="right-part">
                    <div className="counter">
                        <button
                            className="change-quantity-btn"
                            onClick={() => onClick("INCREASE")}>
                            +
                        </button>
                        <span className="quantity">{quantity}</span>
                        <button
                            className="change-quantity-btn"
                            onClick={() => onClick("DECREASE")}>
                            -
                        </button>
                    </div>
                    <h4>Total: ${(quantity * offPrice).toFixed(2)}</h4>
                </div>
            </div>
        </div>
    );
};


export default MyCart;
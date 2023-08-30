import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import "../../assets/styles/MyCart.css";


const MyCart = () => {

    const {state} = useContext(CartContext);

    return (
        <main id="my-cart">
            <section className="my-cart-sec">
                <div className="cards">
                    <div className="title">
                        <h1>My Cart</h1>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    {
                        state.selectedShirts.map(
                            selectedShirt => <Shirt key={selectedShirt.id} shirtData={selectedShirt} />
                        )
                    }
                </div>
                <div className="checkout">
                    <div className="shirts-count">
                        <span>Total Shirts Count</span>
                        <span>{state.shirtsCount}</span>
                    </div>
                    <div className="total-purchase">
                        <span>Total Purchase</span>
                        <span>${state.totalPurchase}</span>
                    </div>
                    <div className="purchase-profit">
                        <span>Your Purchase Profit</span>
                        <span style={{color: "green"}}>+ $125</span>
                    </div>
                    <div className="buttons">
                        <Link to="/">
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

    const handleClick = (actionType) => {
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
                            onClick={() => handleClick("INCREASE")}>
                            +
                        </button>
                        <span className="quantity">{quantity}</span>
                        <button
                            className="change-quantity-btn"
                            onClick={() => handleClick("DECREASE")}>
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
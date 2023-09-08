import React from "react";


const Counter = ({quantity, onClick}) => {
    return (
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
    );
};


export default Counter;
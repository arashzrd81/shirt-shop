import React from "react";


const Prices = ({discountRatio, price}) => {
    return (
        <div className="prices">
            <span className={discountRatio === 0.8 ? "old-price" : "new-price"}>
                ${price.toFixed(2)}
            </span>
            {
                discountRatio === 0.8 &&
                <span className="new-price">${(price * 0.8).toFixed(2)}</span>
            }
        </div>
    );
};


export default Prices;
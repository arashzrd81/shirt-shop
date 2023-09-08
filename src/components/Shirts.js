import React, { useContext, useReducer } from "react";
import shirtsData from "../service/shirtsData.json";
import { RegisterContext } from "../contexts/RegisterProvider";
import { CartContext } from "../contexts/CartProvider";
import Prices from "./Prices";
import Counter from "./Counter";
import { showToast } from "../helper/showToast";
import "../assets/styles/Shirts.css";


const initialSate = {
    displayedShirts: shirtsData,
    all: true,
    tShirt: false,
    poloShirt: false,
    hoodie: false,
    sweatShirt: false
};

const filterReducer = (state, buttonName) => {
    if (buttonName === "all") {
        return {...initialSate};
    } else {
        if (state[buttonName]) {
            const newDisplayedShirts = state.displayedShirts.filter(
                shirt => shirt.category !== buttonName
            );
            if (newDisplayedShirts.length) {
                return {
                    ...state,
                    displayedShirts: newDisplayedShirts,
                    [buttonName]: false
                };
            } else {
                return {...initialSate};
            }
        } else {
            const newDisplayedShirts = shirtsData.filter(
                shirt => shirt.category === buttonName
            );
            const newState = {
                ...state,
                all: false,
                [buttonName]: true
            };
            if (state.all) {
                return {
                    ...newState,
                    displayedShirts: newDisplayedShirts
                };
            } else {
                return {
                    ...newState,
                    displayedShirts: [...newDisplayedShirts, ...state.displayedShirts]
                };
            }
        }
    }
};

const Shirts = () => {

    const [state, dispatch] = useReducer(filterReducer, initialSate);

    return (
        <main id="shirts">
            <section className="shirts-sec">
                <h2>Just For You</h2>
                <div className="filter-buttons">
                    <button
                        className={state.all ? "active" : undefined}
                        onClick={() => dispatch("all")}>
                        All
                    </button>
                    <button
                        className={state.tShirt ? "active" : undefined}
                        onClick={() => dispatch("tShirt")}>
                        T-Shirt
                    </button>
                    <button
                        className={state.poloShirt ? "active" : undefined}
                        onClick={() => dispatch("poloShirt")}>
                        Polo Shirt
                    </button>
                    <button
                        className={state.hoodie ? "active" : undefined}
                        onClick={() => dispatch("hoodie")}>
                        Hoodie
                    </button>
                    <button
                        className={state.sweatShirt ? "active" : undefined}
                        onClick={() => dispatch("sweatShirt")}>
                        Sweat Shirt
                    </button>
                </div>
                <div className="cards">
                    {
                        state.displayedShirts.map(
                            shirtData => <Shirt key={shirtData.id} shirtData={shirtData} />
                        )
                    }
                </div>
            </section>
        </main>
    );
};


const Shirt = ({shirtData}) => {

    const {isRegistered} = useContext(RegisterContext);
    const {state: {selectedShirts, discountRatio}, dispatch} = useContext(CartContext);
    const {id, title, image, price, score} = shirtData;

    const checkQuantity = id => {
        const index = selectedShirts.findIndex(
            shirt => shirt.id === id
        );
        return index === -1 ? false : true;
    };

    const getQuantity = id => {
        const selectedShirt = selectedShirts.find(
            shirt => shirt.id === id
        );
        return selectedShirt.quantity;
    };

    const onClick = actionType => {
        isRegistered ?
        dispatch({
            type: actionType,
            payload: shirtData
        }) :
        showToast("error", "You are not registered!");
    };

    return (
        <div className="card">
            <img src={image} alt="shirt" />
            <h3>{title}</h3>
            <Prices discountRatio={discountRatio} price={price} />
            <div className="score-buttons">
                <div className="score">
                    <i className="fa-solid fa-star"></i>
                    <span>{score}</span>
                </div>
                {
                    checkQuantity(id) ?
                    <Counter quantity={getQuantity(id)} onClick={onClick} /> :
                    <div className="counter">
                        <button
                            className="add-to-cart-btn"
                            onClick={() => onClick("ADD")}>
                            Add to Cart
                        </button>
                    </div>
                }
            </div>
        </div>
    );
};


export default Shirts;
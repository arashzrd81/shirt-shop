import React, { useReducer } from "react";


const initialState = {
    selectedShirts: [],
    shirtsCount: 0,
    totalPurchase: 0,
    discountRatio: 1,
    checkout: false
};

const calculator = (selectedShirts, discountRatio) => {
    const shirtsCount = selectedShirts.reduce(
        (total, shirt) => total + shirt.quantity, 0
    );
    const totalPurchase = selectedShirts.reduce(
        (total, shirt) => total + shirt.quantity * shirt.price * discountRatio, 0
    );
    return {shirtsCount, totalPurchase};
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            const selectedShirt = {
                ...action.payload,
                quantity: 1
            };
            state.selectedShirts.push(selectedShirt);
            return {
                ...state,
                selectedShirts: state.selectedShirts,
                ...calculator(state.selectedShirts, state.discountRatio),
                checkout: false
            };
        case "INCREASE":
            const indexI = state.selectedShirts.findIndex(
                shirt => shirt.id === action.payload.id
            );
            state.selectedShirts[indexI].quantity++;
            return {
                ...state,
                ...calculator(state.selectedShirts, state.discountRatio)
            };
        case "DECREASE":
            const indexD = state.selectedShirts.findIndex(
                shirt => shirt.id === action.payload.id
            );
            if (state.selectedShirts[indexD].quantity === 1) {
                const newSelectedShirts = state.selectedShirts.filter(
                    shirt => shirt.id !== action.payload.id
                );
                return {
                    ...state,
                    selectedShirts: newSelectedShirts,
                    ...calculator(newSelectedShirts, state.discountRatio)
                };
            } else {
                state.selectedShirts[indexD].quantity--;
                return {
                    ...state,
                    ...calculator(state.selectedShirts, state.discountRatio)
                };
            }
        case "DISCOUNTED":
            return {
                ...state,
                ...calculator(state.selectedShirts, 0.8),
                discountRatio: 0.8
            }
        case "CHECKOUT":
            return {
                selectedShirts: [],
                shirtsCount: 0,
                totalPurchase: 0,
                discountRatio: state.discountRatio,
                checkout: true
            };
        default:
            return state;
    }
};

export const CartContext = React.createContext();

const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};


export default CartProvider;
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const productInCart = state.cart.find((product) => product.id === action.payload.id);
            if (productInCart) {
                productInCart.quantity++;
            } else {
                state.cart.push({...action.payload, quantity: 1});
            }
        },
        incrementProduct: (state, action) => {
            const product = state.cart.find((product) => product.id === action.payload);
            product.quantity++;
        },
        decrementProduct: (state, action) => {
            const product = state.cart.find((product) => product.id === action.payload);
            if (product.quantity === 1) {
                product.quantity = 1;
            } else {
                product.quantity--;
            }
        },
        removeProduct: (state, action) => {
            const removeProduct = state.cart.filter((product) => product.id !== action.payload);
            state.cart = removeProduct;
        },
    },
});

export const {
    addToCart,
    incrementProduct,
    decrementProduct,
    removeProduct,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
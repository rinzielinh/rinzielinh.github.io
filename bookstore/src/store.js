import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slices/cart.slice";

// tich hop san redux-thunk, re-select

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;
import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getById, getBestById } from "../books";


const cartSlice = createSlice({
    name: "cart",
    initialState: localStorage.getItem("cart") ?
        JSON.parse(localStorage.getItem("cart")) : [],
    reducers: {
        addItem(state, action) {
            const item = state.find((book) => book.bookId == action.payload);
            if (item) item.quantity += 1;
            else {
                const book = getById(action.payload);
                state.push({...book, quantity: 1 });
            }
            localStorage.setItem("cart", JSON.stringify(state));

        },

        addBest(state, action) {
            const item = state.find((book) => book.bookId == action.payload);
            if (item) item.quantity += 1;
            else {
                const book = getBestById(action.payload);
                state.push({...book, quantity: 1 });
            }
            localStorage.setItem("cart", JSON.stringify(state));

        },

        removeItem(state, action) {
            const idx = state.findIndex((book) => (book.bookId == action.payload));
            state.splice(idx, 1);
            localStorage.setItem("cart", JSON.stringify(state));
        },

        decreaseItem(state, action) {
            const item = state.find((book) => book.bookId == action.payload);
            if (item.quantity === 1) {
                alert("If you want to delete the book, please use delete button!")

            } else {
                item.quantity -= 1;
                localStorage.setItem("cart", JSON.stringify(state));
            }
        }



    },

});

export default cartSlice.reducer;
export const { addItem, addBest, removeItem, decreaseItem } = cartSlice.actions;

const selectCartItems = (state) => state.cart;

const selectTotalItems = createSelector(
    selectCartItems,
    (items) => items.reduce((total, item) => (total += item.quantity), 0)
);

const selectTotalPrice = createSelector(selectCartItems, (items) => items.reduce((total, item) => (total += item.price * item.quantity), 0))
export { selectTotalItems, selectTotalPrice };
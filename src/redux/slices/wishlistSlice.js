import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlist: [],
    count: 0,
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addItemToWishlist: (state, action) => {
            state.wishlist.push({ ...action.payload, numTickets: 1, totalPrice: action.payload.price });
            state.count += 1;
        },
        updateWishlistItem: (state, action) => {
            const { id, numTickets } = action.payload;
            const item = state.wishlist.find((item) => item.id === id);
            if (item) {
                item.numTickets = numTickets;
                item.totalPrice = item.price * numTickets;
            }
        },
        removeItemFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);
            state.count -= 1;
        },
    },
});

export const { addItemToWishlist, updateWishlistItem, removeItemFromWishlist } = wishlistSlice.actions;
export const selectWishlist = (state) => state.wishlist.wishlist;
export const selectWishlistCount = (state) => state.wishlist.count;
export const selectTotalPrice = (state) => state.wishlist.wishlist.reduce((total, item) => total + item.totalPrice, 0);
export default wishlistSlice.reducer;

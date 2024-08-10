import { createSlice } from '@reduxjs/toolkit';

// Helper function to get the cart from localStorage
const loadCartFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        if (serializedState === null) return [];
        return JSON.parse(serializedState);
    } catch (err) {
        return [];
    }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: loadCartFromLocalStorage(), // Load cart from localStorage
    },
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                // If the item already exists in the cart, update its quantity or other properties
                state.items[itemIndex] = { ...state.items[itemIndex], ...action.payload };
            } else {
                // If it's a new item, add it to the cart
                state.items.push(action.payload);
            }
            // Save updated cart to localStorage
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            // Save updated cart to localStorage
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        clearCart: (state) => {
            state.items = [];
            // Remove cart from localStorage
            localStorage.removeItem('cart');
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

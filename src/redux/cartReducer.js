// // redux/cartReducer.js
// const initialState = {
//     items: [], // Initialize the items property
//     // Other state properties if any
// };

// const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//         // Handle actions
//         case 'ADD_TO_CART':
//             return {
//                 ...state,
//                 items: [...state.items, action.payload],
//             };
//         case 'REMOVE_FROM_CART':
//             return {
//                 ...state,
//                 items: state.items.filter(item => item.id !== action.payload.id),
//             };
//         // Add other cases as needed
//         default:
//             return state;
//     }
// };

// export default cartReducer;

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_QTY":
      return {
        ...state,
        // product id, and new qty
        cart: state.cart.filter((prod) =>
          prod.id == action.payload.id
            ? (prod.qty = action.payload.qty)
            : prod.qty
        ),
      };
    default:
      return state;
  }
};

import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectedCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accum, item) => accum + item.quantity, 0)
);

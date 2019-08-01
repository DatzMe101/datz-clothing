import { CART_ACTION_TYPES } from "./cart.types";

export const toggleCartHidden = () => ({
  type: CART_ACTION_TYPES.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CART_ACTION_TYPES.ADD_ITEM,
  payload: item
});

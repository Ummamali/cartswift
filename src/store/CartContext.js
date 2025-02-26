import { createContext } from "react";

// ----------- Context
export const CartContext = createContext({
  cart: {},
  addToCart: () => {},
  decrementFromCart: () => {},
  clearCart: () => {},
});

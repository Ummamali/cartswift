import React, { useRef, useState, useEffect, useReducer } from "react";
import { CartContext } from "./CartContext";

export const actionTypes = {
  added: "added",
  removed: "removed",
  cleared: "cleared",
  loadedFromLS: "loadedFromLS",
};

function cartReducer(state, action) {
  if (action.type === actionTypes.added) {
    const itemId = action.itemId;
    if (itemId in state) {
      return { ...state, [itemId]: state[itemId] + 1 };
    } else {
      return { ...state, [itemId]: 1 };
    }
  } else if (action.type === actionTypes.removed) {
    const itemId = action.itemId;
    if (itemId in state && state[itemId] > 1) {
      return { ...state, [itemId]: state[itemId] - 1 };
    } else if (itemId in state) {
      const newState = { ...state };
      delete newState[itemId];
      return newState;
    }
  } else if (action.type === actionTypes.cleared) {
    return {};
  } else if (action.type === actionTypes.loadedFromLS) {
    return action.data;
  }
  return state;
}

// ------------ Component
export default function CartContextProvider({ children }) {
  const isFirstRender = useRef(true);

  const [cart, dispatchCart] = useReducer(cartReducer, {});

  // Hooks below for using local storage
  useEffect(() => {
    if (localStorage.getItem("cart") !== null) {
      dispatchCart({
        type: actionTypes.loadedFromLS,
        data: JSON.parse(localStorage.getItem("cart")),
      });
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; // Mark as rendered
      return; // Skip execution on first render
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext
      value={{
        cart,
        addToCart: (itemId) =>
          dispatchCart({ type: actionTypes.added, itemId }),
        decrementFromCart: (itemId) =>
          dispatchCart({ type: actionTypes.removed, itemId }),
        clearCart: () => dispatchCart({ type: actionTypes.cleared }),
      }}
    >
      {children}
    </CartContext>
  );
}

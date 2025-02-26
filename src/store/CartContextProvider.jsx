import React, { useRef, useState, useEffect } from "react";
import { CartContext } from "./CartContext";

// ------------ Component
export default function CartContextProvider({ children }) {
  const isFirstRender = useRef(true);

  const [cart, setCart] = useState({});

  // Features for this state
  function addToCart(itemId) {
    if (itemId in cart) {
      setCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    } else {
      setCart((prev) => ({ ...prev, [itemId]: 1 }));
    }
  }

  function decrementFromCart(itemId) {
    if (itemId in cart && cart[itemId] > 1) {
      setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    } else if (itemId in cart) {
      setCart((prev) => {
        const newState = { ...prev };
        delete newState[itemId];
        return newState;
      });
    }
  }

  function clearCart() {
    setCart({});
  }

  // Hooks below for using local storage
  useEffect(() => {
    if (localStorage.getItem("cart") !== null) {
      setCart(JSON.parse(localStorage.getItem("cart")));
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
    <CartContext value={{ cart, addToCart, decrementFromCart, clearCart }}>
      {children}
    </CartContext>
  );
}

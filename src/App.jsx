import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import ItemShowcase from "./Components/ItemSHowcase";
import Modal from "./Components/util/Modal";
import CartItems from "./Components/CartItems/CartItems";

export default function App() {
  const isFirstRender = useRef(true);
  const [cart, setCart] = useState({});
  const [listModal, setListModal] = useState(false);

  // Hooks below
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

  function showListModal() {
    setListModal(true);
  }

  function closeListModal() {
    setListModal(false);
  }

  return (
    <main className="max-w-5xl mx-auto">
      {listModal && (
        <Modal close={closeListModal}>
          <CartItems
            cart={cart}
            addToCart={addToCart}
            decrementFromCart={decrementFromCart}
          />
        </Modal>
      )}
      <Header
        itemCount={Object.values(cart).reduce((prev, curr) => prev + curr, 0)}
        showListModal={showListModal}
      />
      <ItemShowcase addToCart={addToCart} />
    </main>
  );
}

import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import ItemShowcase from "./Components/ItemSHowcase";
import Modal from "./Components/util/Modal";
import CartItems from "./Components/CartItems/CartItems";
import Flash from "./Components/util/Flash";
import CartContextProvider from "./store/CartContextProvider";

export default function App() {
  const [listModal, setListModal] = useState(false);
  const [flash, setFlash] = useState({ message: null });

  function showListModal() {
    setListModal(true);
  }

  function closeListModal() {
    setListModal(false);
  }

  return (
    <main className="max-w-5xl mx-auto">
      <CartContextProvider>
        {listModal && (
          <Modal close={closeListModal}>
            <CartItems setFlash={setFlash} />
          </Modal>
        )}
        <Flash flash={flash} />
        <Header showListModal={showListModal} />
        <ItemShowcase />
      </CartContextProvider>
    </main>
  );
}

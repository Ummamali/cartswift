import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../store/CartContext";

export default function Header({ showListModal }) {
  const [jump, setJump] = useState(false);
  const cartCtx = useContext(CartContext);
  const itemCount = Object.values(cartCtx.cart).reduce(
    (prev, curr) => prev + curr,
    0
  );

  useEffect(() => {
    setJump(true);
  }, [itemCount]);
  return (
    <header className="flex items-center justify-between p-4 mb-8 sticky top-0 bg-white">
      <div className="flex items-center">
        <img src="./logo.jpg" alt="Main Logo" width={80} />
      </div>

      <button
        className={
          "py-2 px-8 border bg-black text-white/90 rounded-sm cursor-pointer " +
          (jump ? "jump" : "")
        }
        onAnimationEnd={() => setJump(false)}
        onClick={showListModal}
      >
        Cart ({itemCount})
      </button>
    </header>
  );
}

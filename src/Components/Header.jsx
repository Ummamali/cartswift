import React, { useEffect, useState } from "react";

export default function Header({ itemCount, showListModal }) {
  const [jump, setJump] = useState(false);

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

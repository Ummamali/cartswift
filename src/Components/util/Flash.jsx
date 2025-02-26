import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Flash({ flash, timeout = 3000 }) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (flash.message !== null) {
      setIsVisible(true);
    }

    setTimeout(() => {
      setIsVisible(false);
    }, timeout);
  }, [flash, timeout]);
  return createPortal(
    <div
      className={`fixed z-10 bottom-6 py-4 px-6 min-w-xs text-black/80 bg-gray-50 border border-gray-400 shadow-sm rounded-sm transition-transform ${
        isVisible ? "translate-x-0 right-6" : "translate-x-full right-0"
      }`}
    >
      <p>{flash.message}</p>
      <p className="text-right">
        <small>Just Now</small>
      </p>
    </div>,
    document.getElementById("flash")
  );
}

import React from "react";
import { itemsDatabase } from "../../data";

export default function ListRow({
  itemId,
  amount,
  addToCart,
  decrementFromCart,
}) {
  return (
    <div className="flex items-center justify-between border border-gray-300 px-3 py-2 rounded-sm">
      <div>
        <p className="">{itemsDatabase[itemId].title}</p>
        <p className="text-black/70">${itemsDatabase[itemId].price}</p>
      </div>
      <div className="flex items-center">
        <button
          className="w-8 h-8 bg-black/90 text-white/80 rounded-sm cursor-pointer"
          onClick={() => addToCart(itemId)}
        >
          +
        </button>
        <p className="w-12 text-center">
          {amount < 10 ? `0${amount}` : `${amount}`}
        </p>
        <button
          className="w-8 h-8 bg-black/90 text-white/80 rounded-sm cursor-pointer"
          onClick={() => decrementFromCart(itemId)}
        >
          -
        </button>
      </div>
    </div>
  );
}

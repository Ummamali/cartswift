import React, { useContext } from "react";
import { CartContext } from "../store/CartContext";

export default function ItemCard({ item, itemId }) {
  const cartCtx = useContext(CartContext);
  return (
    <div className="flex flex-col justify-between bg-gray-100 pb-4">
      <div className="mb-4">
        <img
          src={item.image}
          alt={`Image for ${item.title}`}
          className="mb-2"
        />
        <div className="px-4">
          <h3 className="text-lg font-medium">{item.title}</h3>
          <p className="text-md mb-2 font-medium text-gray-700">
            ${item.price}
          </p>
          <p className="text-gray-700">{item.description}</p>
        </div>
      </div>
      <button
        className="mx-4 py-2 px-8 bg-black text-white rounded-sm text-sm cursor-pointer hover:opacity-90"
        onClick={() => cartCtx.addToCart(itemId)}
      >
        Add To Cart
      </button>
    </div>
  );
}

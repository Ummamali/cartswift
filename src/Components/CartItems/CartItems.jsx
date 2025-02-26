import React from "react";
import ListRow from "./ListRow";
import { itemsDatabase } from "../../data";

export default function CartItems({ cart, addToCart, decrementFromCart }) {
  const cartEntries = Object.entries(cart);
  let total = 0;
  for (const [itemId, amount] of cartEntries) {
    total += itemsDatabase[itemId].price * amount;
  }
  return (
    <div>
      <h3 className="text-xl mb-4">Your Cart</h3>
      <div className="space-y-4 mb-4">
        {cartEntries.length === 0 && (
          <p className="text-center text-gray-700">
            Oops! No items in your cart. Add something awesome!
          </p>
        )}
        {cartEntries.map(([itemId, amount]) => (
          <ListRow
            itemId={itemId}
            amount={amount}
            key={itemId}
            addToCart={addToCart}
            decrementFromCart={decrementFromCart}
          />
        ))}
      </div>
      <div className="text-right">
        <h3 className="text-lg mb-1">Total: ${total.toFixed(2)}</h3>
        <p className="leading-1 text-black/60">
          <small>*Total amount includes all applicable taxes and fees.</small>
        </p>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import ListRow from "./ListRow";
import { itemsDatabase } from "../../data";
import ConfirmationButton from "../util/ConfirmationButton";
import { CartContext } from "../../store/CartContext";

export default function CartItems({ setFlash }) {
  const cartCtx = useContext(CartContext);
  const cartEntries = Object.entries(cartCtx.cart);
  let total = 0;
  for (const [itemId, amount] of cartEntries) {
    total += itemsDatabase[itemId].price * amount;
  }
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl">Your Cart</h3>
        <ConfirmationButton
          className="hover:text-red-600"
          onConfirmedClick={() => {
            cartCtx.clearCart();
            setFlash({ message: "Your cart has been cleared!" });
          }}
        >
          Clear All
        </ConfirmationButton>
      </div>
      <div className="space-y-4 mb-4">
        {cartEntries.length === 0 && (
          <p className="text-center text-gray-700 my-10">
            Oops! No items in your cart. Add something awesome!
          </p>
        )}
        {cartEntries.map(([itemId, amount]) => (
          <ListRow itemId={itemId} amount={amount} key={itemId} />
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

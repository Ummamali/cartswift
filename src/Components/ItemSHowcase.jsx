import React from "react";
import { itemsDatabase } from "../data";
import ItemCard from "./ItemCard";

export default function ItemShowcase() {
  return (
    <div className="px-4 pb-8">
      <h1 className="text-xl mb-4">Famous Items</h1>
      <div className="grid grid-cols-3 gap-6">
        {Object.entries(itemsDatabase).map(([itemId, item]) => (
          <ItemCard item={item} key={itemId} itemId={itemId} />
        ))}
      </div>
    </div>
  );
}

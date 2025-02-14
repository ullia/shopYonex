import React from "react";
import useCart from "../hooks/useCart";

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();
  console.log(products);

  return (
    <div className="flex items-center">
      cart
      {products && (
        <p className="w-5 h-5 text-center bg-brand text-white text-sm font-bold rounded-full ml-1">
          {products.length}
        </p>
      )}
    </div>
  );
}

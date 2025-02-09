import React from "react";

export default function PriceCard({ text, price }) {
  return (
    <div className="flex justify-between items-end w-full text-sm md:text-md">
      <p>{text}</p>
      <p className="font-bold text-lg text-brand">{price} 원</p>
    </div>
  );
}

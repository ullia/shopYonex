import React from "react";

export default function Button({ text, onClick, width, noneStyle }) {
  const Basic = "bg-brand py-2 px-4 text-white rounded-sm";
  const nostyle = "";
  return (
    <button
      className={`${noneStyle ? nostyle : Basic} hover:brightness-110 ${width}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

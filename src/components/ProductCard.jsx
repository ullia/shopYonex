import React from "react";
import { useNavigate } from "react-router-dom";
export default function ProductCard({
  product,
  product: { id, image, title, price, description, colors },
}) {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
      className="rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105"
    >
      <div
        className="image-area relative w-full pt-[100%] overflow-hidden"
        style={{ backgroundColor: "#eee" }}
      >
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col mt-2 px-2 text-lg flex justify-between items-center">
        <h3 className="truncate font-bold">{title}</h3>
        <h4 className="text-sm font-semibold text-gray-400">{id.slice(0, 10)}</h4>
        <p className="truncate text-sm pt-2">{description}</p>
        <p className="font-medium text-brand ml-auto pt-2">
          {price}
          <span className="text-sm pl-0.5">원</span>
        </p>
      </div>
      <div className="flex justify-center mt-2 p-2 border-t border-t-gray-300">
        {colors.map(color => (
          <span
            className="inline-block w-3 h-3 mr-2"
            key={color}
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>
    </li>
  );
}

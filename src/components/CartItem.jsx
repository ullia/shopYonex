import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import useCart from "../hooks/useCart";

const ICON_CLASS = "transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1";
export default function CartItem({
  product,
  product: { id, image, title, category, price, size, colors, quantity },
}) {
  const { addOrUpdateToItem, removeItem } = useCart();
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handlePlus = () => {
    addOrUpdateToItem.mutate({ ...product, quantity: quantity + 1 });
  };
  const handleDelete = () => {
    removeItem.mutate(id);
  };

  return (
    <li className="flex justify-between my-2 items-center">
      <img className="w-24 md:w-48 rounded-lg" src={image} alt="" />
      <div className="flex flex-1 justify-between">
        <div className="w-7/12">
          <p className="text-lg">{title}</p>
          <p className="text-xl font-bold text-brand">{size}</p>
          <p>{colors}</p>
        </div>

        <div className="w-3/12 flex items-center">
          <p>{price} 원</p>
        </div>

        <div className="text-2xl flex items-center w-2/12 min-w-24">
          <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
          <IoCloseOutline className={`${ICON_CLASS} ml-auto`} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}

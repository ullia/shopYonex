import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";

export default function ProductDetail() {
  const {
    state: {
      product: { id, image, title, description, category, price, colors },
    },
  } = useLocation();
  const [selected, setSelected] = useState(colors && colors[0]);
  const handleSelect = e => {
    setSelected(e.target.value);
  };
  const handleClick = e => {
    // 장바구니 추가하기
  };

  return (
    <section>
      <p className="mx-12 mt-4 text-gray-700">{category}</p>
      <section className="flex flex-col md:flex-row p-4">
        <img className="w-full px-4 basis-7/12" src={image} alt={title} />
        <div className="w-full basis-5/12 flex flex-col p-4">
          <h2 className="text-3xl font-bold py-2 border-gray-400">{title}</h2>
          <p className="text-2xl font-bold py-2 border-b border-gray-400">{price} 원</p>
          <p className="text-lg py-4">{description}</p>
          <div className="flex items-center">
            <label className="text-brand font-bold" htmlFor="select">
              색상:
            </label>
            <select
              className="p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none"
              onChange={handleSelect}
              value={selected}
              name=""
              id="select"
            >
              {colors &&
                colors.map((color, index) => {
                  return (
                    <option value={color} key={index}>
                      {color}
                    </option>
                  );
                })}
            </select>
          </div>

          <Button text="장바구니에 추가" onClick={handleClick}></Button>
        </div>
      </section>
    </section>
  );
}

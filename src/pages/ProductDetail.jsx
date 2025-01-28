import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import { useAuthContext } from "../context/AuthContext";
import { addOrUpdateToCart } from "../api/firebase";

export default function ProductDetail() {
  const { uid } = useAuthContext();
  const {
    state: {
      product: { id, image, title, description, category, price, size, colors },
    },
  } = useLocation();
  const [sizeSelected, setSizeSelected] = useState(size && size[0]);
  const [colorSelected, setColorSelected] = useState(colors && colors[0]);
  const handleSelect = e => {
    // console.log(e.target.id);
    let selectType = e.target.id;
    switch (selectType) {
      case "select-color":
        setColorSelected(e.target.value);
        break;
      case "select-size":
        setSizeSelected(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleClick = e => {
    // 장바구니 추가하기
    const product = {
      id,
      image,
      title,
      price,
      size: sizeSelected,
      colors: colorSelected,
      quantity: 1,
    };
    // console.log(product);
    addOrUpdateToCart(uid, product);
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
            <label className="text-brand font-bold" htmlFor="select-size">
              사이즈:
            </label>
            <select
              className="p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none"
              onChange={handleSelect}
              value={sizeSelected}
              name=""
              id="select-size"
            >
              {size &&
                size.map((size, index) => {
                  return (
                    <option value={size} key={index}>
                      {size}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="flex items-center">
            <label className="text-brand font-bold" htmlFor="select-color">
              색상:
            </label>
            <select
              className="p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none"
              onChange={handleSelect}
              value={colorSelected}
              name=""
              id="select-color"
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

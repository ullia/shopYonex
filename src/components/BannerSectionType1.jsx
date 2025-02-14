import React, { useState } from "react";
import MiniBanner from "./MiniBanner";
import { Link } from "react-router-dom";

export default function BannerSectionType1() {
  const [bigCategory, setBigCategory] = useState([
    "tennis",
    "badminton",
    "golf",
    "wears",
    "bag_acc",
  ]);
  return (
    <section className="flex flex-col justify-center mt-32">
      <h3 className="text-center font-bold text-3xl">YONEX KOREA</h3>
      <h4 className="text-center pt-3 opacity-70">요넥스의 다양한 상품들을 만나보세요.</h4>
      <ul className="w-9/12 flex justify-center items-center m-auto mt-10">
        {bigCategory.map((category, index) => {
          return (
            <li key={index} className="mr-1">
              <Link to={`/products`}>
                <img src={`assets/images/icon_${category}.png`} alt="" />
              </Link>
              <p className="hidden text-center text-sm text-gray-500">{category}</p>
            </li>
          );
        })}
      </ul>
      <MiniBanner />
    </section>
  );
}

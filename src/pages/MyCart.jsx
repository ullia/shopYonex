import React from "react";
import CartItem from "../components/CartItem";
import PriceCard from "../components/PriceCard";
import Button from "../components/ui/Button";
import useCart from "../hooks/useCart";

const SHIPPING = 3000;

export default function MyCart() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

  if (isLoading) return <div>Loading...</div>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce((prev, current) => prev + parseInt(current.price) * current.quantity, 0);

  return (
    <section className="p-4 md:p-8 md:pb-36" style={{ minHeight: "70vh" }}>
      <p className="text-2xl text-left font-bold pb-4 border-b border-gray-500">Cart</p>
      {!hasProducts && (
        <div className="flex justify-center py-24">
          <p>장바구니에 상품이 없습니다.</p>
        </div>
      )}
      {hasProducts && (
        <div className="flex flex-col md:flex-row justify-between">
          <ul className="border-b border-gray-300 mb-8 p-0 md:pr-8 w-full md:w-10/12">
            {products.map(product => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
          <div className="dkmd flex flex-col justify-center items-center mb-6 md:px-8 bg-gray-100 py-6 px-6 w-full md:w-2/12 md:min-w-72 h-fit">
            <h3 className="font-bold text-xl mb-4">Order Summary</h3>
            <PriceCard text="상품 총액" price={totalPrice} />

            <PriceCard text="배송액" price={SHIPPING} />

            <PriceCard text="총가격" price={totalPrice + SHIPPING} />
            <div className="w-full h-auto my-6 border-b border-gray-300" />
            <Button width="w-full" text="주문하기" />
          </div>
        </div>
      )}
    </section>
  );
}

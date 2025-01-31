import React from "react";
import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";

export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();
  return (
    <>
      {isLoading && <p>로딩중...</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-col-1s md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products && products.map(product => <ProductCard key={product.id} product={product} />)}
      </ul>
    </>
  );
}

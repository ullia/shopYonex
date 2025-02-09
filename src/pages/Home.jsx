import React from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import SimpleSlider from "../components/ui/SimpleSlider";

export default function Home() {
  return (
    <section>
      <SimpleSlider />
      <Banner />
      <Products />
    </section>
  );
}

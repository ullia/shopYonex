import React from "react";
import Products from "../components/Products";
import SimpleSlider from "../components/ui/SimpleSlider";
import BannerSectionType1 from "../components/BannerSectionType1";

export default function Home() {
  return (
    <section className="overflow-hidden">
      <SimpleSlider />
      <BannerSectionType1 />
      <Products />
    </section>
  );
}

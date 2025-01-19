import React from "react";

export default function Banner() {
  return (
    <section className="h-96 bg-black relative">
      <div className="w-full h-full bg-cover bg-banner opacity-90"></div>
      <div className="absolute w-full top-32 text-center text-gray-50">
        <h2 className="text-6xl drop-shadow">Higher with us</h2>
        <p className="text-2xl pt-4 drop-shadow">promise you the best experience</p>
      </div>
    </section>
  );
}

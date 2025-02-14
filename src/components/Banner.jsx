import React from "react";

export default function Banner() {
  return (
    <section className="h-48 md:h-96 bg-black relative">
      <div className="w-full h-full bg-cover bg-banner opacity-90"></div>
      <div className="absolute w-full top-1/2 -translate-y-1/2 text-center text-gray-50">
        <h2 className="text-3xl md:text-6xl drop-shadow">Higher with us</h2>
        <p className="text-xl md:text-2xl pt-2 md:pt-4 drop-shadow">
          promise you the best experience
        </p>
      </div>
    </section>
  );
}

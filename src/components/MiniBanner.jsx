import React, { useEffect, useState } from "react";

export default function MiniBanner() {
  const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });
  const imgSrc = "assets/images/icon_korea_team.jpg";
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      setImgDimensions({ width: img.width, height: img.height });
    };
  }, [imgSrc]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const aspectRatio = imgDimensions.width / imgDimensions.height;

  return (
    <div
      className="m-auto my-5 md:my-10"
      style={{
        width: windowWidth < 768 ? `${(11 / 12) * 100}%` : `${(9 / 12) * 100}%`,
        paddingTop: `${100 / aspectRatio}%`,
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}

import React, { useEffect, useState } from "react";

export default function MiniBanner() {
  const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });
  const imgSrc = "assets/images/icon_korea_team.jpg";

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      setImgDimensions({ width: img.width, height: img.height });
    };
  }, [imgSrc]);

  const aspectRatio = imgDimensions.width / imgDimensions.height;

  return (
    <div
      className="m-auto my-10"
      style={{
        width: `${(9 / 12) * 100}%`,
        paddingTop: `${100 / aspectRatio}%`,
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}

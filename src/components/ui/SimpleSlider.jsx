import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1284,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="main__slider">
      <div className="slider__line">
        <div className="slide-t"></div>
        <div className="slide-b"></div>
        <div className="slide-l"></div>
        <div className="slide-r"></div>
      </div>
      <Slider {...settings}>
        <div>
          <img src="assets/images/slide-01.jpg" alt="" />
        </div>
        <div>
          <img src="assets/images/slide-02.jpg" alt="" />
        </div>
        <div>
          <img src="assets/images/slide-03.jpg" alt="" />
        </div>
        <div>
          <img src="assets/images/slide-04.jpg" alt="" />
        </div>
        <div>
          <img src="assets/images/slide-05.jpg" alt="" />
        </div>
        <div>
          <img src="assets/images/slide-06.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
}

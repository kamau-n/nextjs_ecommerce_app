import React from "react";
import Slider from "react-slick";

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="p-6 bg-blue-600">hello there</div>
      <div className="p-6 bg-red-600">hello there</div>
      <div className="p-6 bg-purple-800">hello there</div>
    </Slider>
  );
};

export default Carousel;

import React from "react";
//import * as styles from "./index.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = ({
  children,
  ...props
}) => {
  const settings = props.settings ?? {
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    dots: true,
  };
  return (
    <div className="w-screen">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default ImageCarousel;

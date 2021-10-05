import React from "react";
import {
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image";
import cn from "classnames";

const baseStyle = "rounded-xl";

const RotasizImage = ({
  imgData,
  className,
  ...props
}) => {
  const img = getImage(imgData);
  return (
    <GatsbyImage
      className={cn([baseStyle, className])}
      image={img}
      {...props}
    />
  );
};

export default RotasizImage;

//TODO: GraphiQL fragment and getImage

import React from "react";

import { StaticImage } from "gatsby-plugin-image";

export default function FigureAboutUs({
  className,
}) {
  return (
    <StaticImage
      src="../../images/compass.jpg"
      alt=""
      layout="constrained"
      objectFit="cover"
      objectPosition="center"
      className={className}
    />
  );
}

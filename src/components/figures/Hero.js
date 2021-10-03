import React from "react";

import { StaticImage } from "gatsby-plugin-image";

export default function FigureHero({
  className,
}) {
  return (
    <StaticImage
      src="../../backgrounds/winter-road.jpg"
      alt=""
      layout="constrained"
      objectFit="cover"
      objectPosition="center"
      className={className}
    />
  );
}

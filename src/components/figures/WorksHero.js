import React from "react";

import { StaticImage } from "gatsby-plugin-image";

export default function FigureWorksHero({
  className,
}) {
  return (
    <StaticImage
      src="../../images/heroes/works.jpg"
      alt=""
      layout="constrained"
      objectFit="cover"
      objectPosition="center"
      width={1536}
      placeholder="blurred"
      className={className}
    />
  );
}

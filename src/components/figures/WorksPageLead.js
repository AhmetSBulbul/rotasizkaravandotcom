import React from "react";

import { StaticImage } from "gatsby-plugin-image";

export default function FigureWorks({
  className,
}) {
  return (
    <StaticImage
      src="../../images/rotasizlar.jpg"
      alt=""
      layout="constrained"
      objectFit="cover"
      objectPosition="center"
      className={className}
    />
  );
}

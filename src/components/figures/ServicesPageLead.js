import React from "react";

import { StaticImage } from "gatsby-plugin-image";

export default function FigureServices({
  className,
}) {
  return (
    <StaticImage
      src="../../images/work-process.jpg"
      alt=""
      layout="constrained"
      objectFit="cover"
      objectPosition="center"
      className={className}
    />
  );
}

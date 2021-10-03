import React from "react";

import { StaticImage } from "gatsby-plugin-image";

export default function FigureBlog({
  className,
}) {
  return (
    <StaticImage
      src="../images/map-notepad.jpg"
      alt=""
      layout="constrained"
      objectFit="cover"
      objectPosition="center"
      className={className}
    />
  );
}

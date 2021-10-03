import React from "react";

import { StaticImage } from "gatsby-plugin-image";

export default function FigureGallery({
  className,
}) {
  return (
    <StaticImage
      src="../../images/photo-album.jpg"
      alt=""
      layout="constrained"
      objectFit="cover"
      objectPosition="center"
      className={className}
    />
  );
}

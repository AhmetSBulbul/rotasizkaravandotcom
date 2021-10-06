import React from "react";

import { StaticImage } from "gatsby-plugin-image";

export default function FigureRotasizlar({
  className,
}) {
  return (
    <StaticImage
      src="../../images/rotasizlar.jpg"
      alt="Karavan Fotoğrafı"
      layout="constrained"
      placeholder="none"
      width={400}
      className={className}
    />
  );
}

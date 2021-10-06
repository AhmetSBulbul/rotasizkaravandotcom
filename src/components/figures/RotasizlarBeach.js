import React from "react";

import { StaticImage } from "gatsby-plugin-image";

export default function FigureRotasizlarBeach({
  className,
}) {
  return (
    <StaticImage
      src="../../images/rotasizlar-2.jpg"
      alt="Karavan Fotoğrafı"
      layout="constrained"
      placeholder="none"
      width={400}
      height={400}
      className={className}
    />
  );
}

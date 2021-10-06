import React from "react";

import { StaticImage } from "gatsby-plugin-image";

export default function FigureRotasizlarHarbour({
  className,
}) {
  return (
    <StaticImage
      src="../../images/rotasizlar-3.jpg"
      alt="Karavan Fotoğrafı"
      layout="constrained"
      placeholder="none"
      width={400}
      height={400}
      className={className}
    />
  );
}

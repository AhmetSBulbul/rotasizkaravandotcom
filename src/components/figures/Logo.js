import React from "react";

import { StaticImage } from "gatsby-plugin-image";

export default function FigureLogo({
  className,
}) {
  return (
    <StaticImage
      src="../../images/brand/logo.png"
      alt="rotasiz karavan logo"
      layout="constrained"
      placeholder="none"
      width={200}
      height={55}
      className={className}
    />
  );
}

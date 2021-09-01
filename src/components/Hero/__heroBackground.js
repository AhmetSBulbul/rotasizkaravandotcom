import React from "react";

import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

export default function HeroBackground({
  className,
}) {
  return (
    <StaticImage
      className={cn([className])}
      src="../../images/2012-sprinter.jpg"
      alt="road"
      transformOptions={{ fit: "contain" }}
      layout="constrained"
    />
  );
}

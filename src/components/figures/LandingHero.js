import React from "react";

import { StaticImage } from "gatsby-plugin-image";

export default function FigureLandingHero({
  className,
}) {
  return (
    <StaticImage
      src="../../images/heroes/landing.jpg"
      alt=""
      layout="fullWidth"
      breakpoints={[640, 768, 1024, 1280, 1536]}
      objectFit="cover"
      objectPosition="center"
      placeholder="blurred"
      className={className}
    />
  );
}

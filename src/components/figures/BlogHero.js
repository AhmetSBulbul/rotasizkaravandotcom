import React from "react";

import { StaticImage } from "gatsby-plugin-image";

export default function FigureBlogHero({
  className,
}) {
  return (
    <StaticImage
      src="../../images/heroes/blog.jpg"
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

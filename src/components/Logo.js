import React from "react";

import { StaticImage } from "gatsby-plugin-image";

export default function Logo({ className }) {
  return (
    <StaticImage
      src="../images/rotasiz-white@3x.png"
      alt="rotasiz karavan logo"
      layout="constrained"
      placeholder="none"
      width={275}
      height={75}
      className={className}
      imgClassName="object-contain h-full w-full"
    />
  );
}

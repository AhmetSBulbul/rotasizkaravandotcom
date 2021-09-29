import React from "react";

import { StaticImage } from "gatsby-plugin-image";

export default function Logo({ className }) {
  return (
    <StaticImage
      src="../images/rotasiz-white.png"
      alt="rotasiz karavan logo"
      layout="constrained"
      placeholder="none"
      width={200}
      height={55}
      className={className}
    />
  );
}

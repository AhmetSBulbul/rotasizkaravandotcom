import React from "react";

import { StaticImage } from "gatsby-plugin-image";

export default function Logo({ className }) {
  return (
    <StaticImage
      src="../images/logo-blackless.png"
      alt="rotasiz karavan logo"
      layout="constrained"
      placeholder="none"
      className={className}
      imgClassName="object-contain h-full w-full"
    />
  );
}

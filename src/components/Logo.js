import React from "react";

import { StaticImage } from "gatsby-plugin-image";

export default function Logo() {
  return (
    <StaticImage
      src="../images/logo-blackless.png"
      alt="rotasiz karavan logo"
      height={65}
      placeholder="none"
    />
  );
}

import React from "react";
import cn from "classnames";

import { StaticImage } from "gatsby-plugin-image";

export default function Logo({ className }) {
  return (
    <div className="object-contain my-auto">
      <StaticImage
        src="../images/logo-blackless.png"
        alt="rotasiz karavan logo"
        layout="constrained"
        placeholder="none"
        className={className}
      />
    </div>
  );
}

import React from "react";

import * as styles from "./index.module.css";
import {
  Link,
  StaticQuery,
  graphql,
} from "gatsby";

import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

export default function HeroNew({ children }) {
  return (
    <div className="min-h-screen w-full">
      <div className="w-full relative">
        <StaticImage
          src="../../backgrounds/winter-road.jpg"
          alt="campervan"
        />
        <div className="h-full w-full absolute top-0 z-30 flex flex-col px-4 justify-end bg-gradient-to-b from-black via-transparent">
          <div className="w-full md:w-1/3 py-2 px-4 mx-auto rounded-full font-display font-medium text-black bg-white">
            Size Nasıl Yardımcı Olabiliriz?
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

import * as styles from "./index.module.css";
import {
  Link,
  StaticQuery,
  graphql,
} from "gatsby";

import {
  StaticImage,
  getImage,
  GatsbyImage,
} from "gatsby-plugin-image";
import useSlide from "../../hooks/useSlide";
import cn from "classnames";
import Dropdown from "../Dropdown";

export default function HeroNew({ children }) {
  const [currIndex] = useSlide(6000, 3);
  return (
    <div className={styles.base}>
      <StaticImage
        src="../../backgrounds/beach-wide.jpg"
        alt=""
        layout="constrained"
        objectFit="cover"
        objectPosition="left"
        className={styles.background}
      />

      <div className={styles.foreground}></div>
      <div className={styles.heroFooter}>
        <h1>
          İSTEK VE İHTİYAÇLARINIZA YÖNELİK
          KARAVANLAR ÜRETİYORUZ
        </h1>
      </div>
    </div>
  );
}

import React from "react";

import * as styles from "./index.module.css";

import { StaticImage } from "gatsby-plugin-image";

export default function HeroNew({ children }) {
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

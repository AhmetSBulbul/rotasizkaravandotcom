import React from "react";

import * as styles from "./index.module.css";

import { StaticImage } from "gatsby-plugin-image";

export default function HeroNew({ children }) {
  return (
    <div className="pageLead">
      <StaticImage
        src="../../backgrounds/winter-road.jpg"
        alt=""
        layout="constrained"
        objectFit="cover"
        objectPosition="center"
        className={styles.background}
      />
      <div className={styles.foreground}>
        <h3>Evinizi Özgürleştirin</h3>
        <h2>
          KARAVAN <br /> HAYALİNİZE <br />
          ORTAK OLALIM
        </h2>
      </div>
    </div>
  );
}

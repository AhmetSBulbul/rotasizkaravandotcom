import React from "react";

import * as styles from "./index.module.css";
import { HeroFigure } from "../figures";

export default function HeroNew({ children }) {
  return (
    <div className="pageLead">
      <HeroFigure className={styles.background} />
      <div className={styles.foreground}>
        <h3>Evinizi Özgürleştirin</h3>
        <h2>
          KARAVAN <span>HAYALİNİZE</span>
          <span> ORTAK OLALIM</span>
        </h2>
      </div>
    </div>
  );
}

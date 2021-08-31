import React from "react";
import HeroBackground from "./__heroBackground";
import * as styles from "./index.module.css";
import { Link } from "gatsby";
import cn from "classnames";

export default function Hero({ children }) {
  return (
    <div className={styles.base}>
      <div className={styles.background}>
        <HeroBackground
          className={styles.backgroundImage}
        />
      </div>
      <div className={styles.innerContainer}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.display}>
            İSTEĞİNİZE VE İHTİYAÇLARINIZA ÖZEL
            KARAVANLAR ÜRETİYORUZ.
          </h2>
          <div className="responsive-flex">
            <button className={styles.primaryBtn}>
              İŞLERİMİZİ İNCELEYİN
            </button>
            <Link
              to="/works"
              className={styles.secondaryBtn}
            >
              HAKKIMIZDA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import ParallaxBackground from "./__parallaxBackground";
import * as styles from "./index.module.css";
import cn from "classnames";

export default function Hero({ children }) {
  return (
    <div className={styles.baseWrapper}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div
            className={cn([
              styles.ground,
              styles.background,
            ])}
          >
            <ParallaxBackground className="w-full h-full" />
          </div>
          <div
            className={cn([
              styles.ground,
              styles.hero,
            ])}
          >
            <div className={styles.heroContent}>
              <div className={styles.rotasizSpan}>
                <div className={styles.line} />
                <h2 className="font-body uppercase font-bold">
                  Rotasız Karavan
                </h2>
              </div>
              <h1 className={styles.display}>
                İSTEĞİNİZE VE İHTİYAÇLARINIZA ÖZEL
                KARAVANLAR ÜRETİYORUZ.
              </h1>
              <h4 className="hidden">
                Hayatinizdaki degisimin bir
                parcasi olabilmek icin her gun ilk
                karavanimizin heyecani ile
                calisiyoruz.
              </h4>
              <button
                className="bg-yellow-600 text-white text-link px-4 py-4 rounded-sm"
                style={{
                  backgroundColor: "#DC743D",
                }}
              >
                İŞLERİMİZİ İNCELEYİN
              </button>
              <button className="border-2 border-white px-4 text-white text-link py-2">
                HAKKIMIZDA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

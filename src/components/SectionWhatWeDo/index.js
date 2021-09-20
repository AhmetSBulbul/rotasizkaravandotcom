import React from "react";
import * as styles from "./index.module.css";
import { StaticImage } from "gatsby-plugin-image";
import ContentSafe from "../ContentSafe";

const SectionWhatWeDo = ({
  children,
  title = "",
}) => {
  return (
    <ContentSafe className="px-8">
      <div className={styles.wrapper}>
        <div className={styles.innerContainer}>
          <div className={styles.content}>
            <h5 className={styles.slogan}>
              Evinizi Özgürleştirin
            </h5>
            <h3>
              KARAVAN HAYALİNİZİ GERÇEKLEŞTİRELİM
            </h3>
            <p>
              Hayalinizdeki karavana sahip olma
              sürecinizde size eşlik edelim. İster
              aracınızla gelin isterseniz sizin
              için en uygun aracı birlikte satın
              alalım.
              <br />
              <br />
              Hayalinizdeki karavanı,
              ihtiyaçlarınız ve bütçeniz
              doğrultusunda birlikte planlayalım.
              Alanında tecrübeli ustalarımızla,
              gerçekleştirme ve teslim sonrası
              destek ile yanınızda olalım.
            </p>
            <button className={styles.button}>
              Hakkimizda
            </button>
          </div>
          <div className={styles.decoration}>
            <StaticImage
              src="../../images/yellow-van.jpg"
              alt="karavan kamp"
              placeholder="blurred"
              layout="constrained"
              className={styles.bigImg}
              imgClassName={styles.image}
            />
          </div>
        </div>
      </div>
    </ContentSafe>
  );
};

export default SectionWhatWeDo;

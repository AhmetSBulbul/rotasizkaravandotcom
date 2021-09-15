import React from "react";
import * as styles from "./index.module.css";
import { StaticImage } from "gatsby-plugin-image";

const FreeYourHome = ({
  children,
  title = "",
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.sectionTitle}>
          Evinizi Özgürleştirelim.
        </h3>
        <div className={styles.innerContainer}>
          <div className={styles.content}>
            <p>
              Rotasız Karavan olarak, istek ve
              ihtiyaçlarınıza göre, hep hayalini
              kurduğunuz o karavanı sizin için ve
              size özel olarak gerçekleştirip.
            </p>
          </div>
          <StaticImage
            src="../../images/yellow-van.jpg"
            alt="karavan kamp"
            placeholder="blurred"
            layout="constrained"
            className={styles.imageWrapper}
            imgClassName={styles.image}
          />
          <button className="primaryBtn absolute -bottom-6 -right-2 border-2 border-yellow-700">
            Hakkimizda
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeYourHome;

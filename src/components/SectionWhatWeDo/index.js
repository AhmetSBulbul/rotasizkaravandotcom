import React from "react";
import * as styles from "./index.module.css";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

import { Theme as ButtonTheme } from "../buttons";
import { Pages } from "../../constants";

const SectionWhatWeDo = ({ className }) => {
  return (
    <section className="section-wrap wrap-simple-row section-gray">
      <div className={styles.content}>
        <h5 className="sub-title">Biz Kimiz?</h5>
        <h2 className="big-title">
          İsteğinize ve İhtiyaçlarınıza Yönelik
          Karavanlar Üretiyoruz.
        </h2>
        <p>
          Hayalinizdeki karavana sahip olma
          sürecinizde size eşlik edelim. İster
          aracınızla gelin isterseniz sizin için
          en uygun aracı birlikte satın alalım.
          <br />
          Hayalinizdeki karavanı, ihtiyaçlarınız
          ve bütçeniz doğrultusunda birlikte
          planlayalım. Alanında tecrübeli
          ustalarımızla, gerçekleştirme ve teslim
          sonrası destek ile yanınızda olalım.
        </p>
        <ButtonTheme
          to={Pages.hakkimizda}
          className="place-self-end"
        >
          Hakkimizda
        </ButtonTheme>
      </div>

      <StaticImage
        src="../../images/yellow-van.jpg"
        alt="karavan kamp"
        placeholder="blurred"
        layout="constrained"
        width={1280}
        className={styles.image}
      />
    </section>
  );
};

export default SectionWhatWeDo;

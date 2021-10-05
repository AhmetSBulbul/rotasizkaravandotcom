import React from "react";
import * as styles from "./index.module.css";
import cn from "classnames";

import { Question } from "../icons/solid";
import { Link } from "gatsby";
import { Pages } from "../../constants";

const ServiceCard = ({
  children,
  title,
  ...props
}) => {
  return (
    <Link to={props.to}>
      <div className={styles.card}>
        <h4 className={styles.cardTitle}>
          {title}
        </h4>
      </div>
    </Link>
  );
};

const SectionOurServices = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn([styles.wrapper, className])}
    >
      <div className={styles.innerContainer}>
        <h3 className="sub-title text-center">
          Hizmetlerimiz
        </h3>
        <h2 className="big-title text-center">
          Size Nasıl Yardımcı Olabiliriz?
        </h2>
        <div className={styles.itemsWrapper}>
          <ServiceCard
            title="Karavan Danışmanlığı"
            to={Pages.danisma}
          ></ServiceCard>
          <ServiceCard
            title="Planlama & Tasarım"
            to={Pages.planlama}
          ></ServiceCard>
          <ServiceCard
            title="Karavan İmalatı"
            to={Pages.imalat}
          ></ServiceCard>
          <ServiceCard
            title="Üretim Sonrası Destek"
            to={Pages.destek}
          ></ServiceCard>

          <div className={styles.dropmenu}>
            <Question className="text-2xl" />
            <h5 className={styles.cardTitle}>
              Sık Sorulan Sorular
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOurServices;

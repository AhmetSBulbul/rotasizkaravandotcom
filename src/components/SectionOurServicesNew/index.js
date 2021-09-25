import React from "react";
import * as styles from "./index.module.css";
import cn from "classnames";

import * as Icon from "../icons/colorful-icons";
import { Question } from "../icons/solid-icons";
import { Link } from "gatsby";

const ServiceCard = ({
  children,
  title,
  ...props
}) => {
  return (
    <Link to={props.to}>
      <div className={styles.card}>
        {children}
        <h3 className={styles.cardTitle}>
          {title}
        </h3>
      </div>
    </Link>
  );
};

const SectionOurServicesNew = ({
  children,
  title = "Hizmetlerimiz",
  className,
  ...props
}) => {
  return (
    <div
      className={cn([
        styles.container,
        className,
      ])}
    >
      <div className={styles.innerContainer}>
        <h3 className={styles.sectionTitle}>
          {title}
        </h3>
        <h2 className={styles.slogan}>
          Size Nasıl Yardımcı Olabiliriz?
        </h2>
        <div className={styles.itemsWrapper}>
          <ServiceCard
            title="Karavan Danışmanlığı"
            to="/hizmetlerimiz/karavan-danismanligi"
          >
            <Icon.Brainstorming />
          </ServiceCard>
          <ServiceCard
            title="Planlama & Tasarım"
            to="/hizmetlerimiz/karavan-planlama-tasarim"
          >
            <Icon.Planning />
          </ServiceCard>
          <ServiceCard
            title="Karavan İmalatı"
            to="/hizmetlerimiz/karavan-imalati"
          >
            <Icon.Toolbox />
          </ServiceCard>
          <ServiceCard
            title="Üretim Sonrası Destek"
            to="/hizmetlerimiz/uretim-sonrasi-destek"
          >
            <Icon.Support />
          </ServiceCard>

          <div className={styles.dropmenu}>
            <Question
              fill="#fff"
              className="text-2xl"
            />
            <h3 className={styles.cardTitle}>
              Sık Sorulan Sorular
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOurServicesNew;

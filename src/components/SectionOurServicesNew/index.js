import React from "react";
import * as styles from "./index.module.css";
import cn from "classnames";
import OurServiceCard from "../OurServiceCardNew";
import * as Icon from "../icons/colorful-icons";

const SectionOurServicesNew = ({
  children,
  title = "Hizmetlerimiz",
  ...props
}) => {
  return (
    <div
      className={cn([
        styles.container,
        props.oranj && styles.bgOranj,
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
          <div className={styles.card}>
            <Icon.Brainstorming />
            <h3 className={styles.cardTitle}>
              Karavan Danışmanlığı
            </h3>
          </div>
          <div className={styles.card}>
            <Icon.Planning />
            <h3 className={styles.cardTitle}>
              Planlama & Tasarım
            </h3>
          </div>
          <div className={styles.card}>
            <Icon.Toolbox />
            <h3 className={styles.cardTitle}>
              Karavan İmalatı
            </h3>
          </div>
          <div className={styles.card}>
            <Icon.Support />
            <h3 className={styles.cardTitle}>
              Üretim Sonrası Destek
            </h3>
          </div>
          <div className={styles.dropmenu}>
            Aradığınızı Bulamadınız Mı?
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOurServicesNew;

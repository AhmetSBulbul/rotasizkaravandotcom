import React from "react";
import * as styles from "./index.module.css";
import cn from "classnames";
import OurServiceCard from "../OurServiceCardNew";
import * as Icon from "../icons/colorful-icons";
import { Question } from "../icons/solid-icons";
import { Link } from "gatsby";

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
          <Link to="/hizmetlerimiz">
            <div className={styles.card}>
              <Icon.Brainstorming />
              <h3 className={styles.cardTitle}>
                Karavan Danışmanlığı
              </h3>
            </div>
          </Link>
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

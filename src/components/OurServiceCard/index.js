import React from "react";
import { Link } from "gatsby";
import * as styles from "./index.module.css";
import { GatsbyImage } from "gatsby-plugin-image";
import cn from "classnames";

const OurServiceCard = ({
  children,
  title = "null",
  content = "Lorem Ipsum",
}) => {
  const contentSafe = "content-safe";
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.decorationTop}>
          {children}
        </div>
        <div
          className={cn([
            styles.body,
            contentSafe,
          ])}
        >
          <h2 className={styles.sectionTitle}>
            Hizmetlerimiz
          </h2>
          <h3 className={styles.title}>
            {title}
          </h3>
          <p className={styles.content}>
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServiceCard;

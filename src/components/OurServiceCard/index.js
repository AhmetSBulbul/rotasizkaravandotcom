import React from "react";
import { Link } from "gatsby";
import * as styles from "./index.module.css";
import { GatsbyImage } from "gatsby-plugin-image";

const OurServiceCard = ({
  children,
  title = "null",
}) => (
  <div className={styles.container}>
    <div className={styles.innerContainer}>
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>
      <div className={styles.body}>
        {children}
      </div>
    </div>
  </div>
);

export default OurServiceCard;

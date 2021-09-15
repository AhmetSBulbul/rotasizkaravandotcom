import React from "react";
import * as styles from "./index.module.css";

const SectionContainer = ({
  children,
  title = "",
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h3 className={styles.sectionTitle}>
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;

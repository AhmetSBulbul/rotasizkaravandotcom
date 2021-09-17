import React from "react";
import * as styles from "./index.module.css";
import cn from "classnames";

const SectionContainer = ({
  children,
  title = "",
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
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;

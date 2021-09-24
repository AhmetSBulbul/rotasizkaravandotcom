import React from "react";
import { Link } from "gatsby";
import * as styles from "./index.module.css";
import { GatsbyImage } from "gatsby-plugin-image";
import cn from "classnames";

const OurServicesItem = ({
  children,
  title = "null",
  className,
}) => {
  return (
    <div
      className={cn([styles.wrapper, className])}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{children}</p>
    </div>
  );
};

export default OurServicesItem;

import React from "react";
import * as styles from "./index.module.css";
import cn from "classnames";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import ImageCarousel from "../ImageCarousel";
import {
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image";

export default function Lightbox({
  children,
  ...props
}) {
  return (
    <div className={styles.baseContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          <button
            className={styles.exitBtn}
            onClick={props.onClose}
          >
            X
          </button>
        </div>
        <div className={styles.body}>
          {children}
        </div>
        <div className={styles.footer}>
          Footer
        </div>
      </div>
    </div>
  );
}

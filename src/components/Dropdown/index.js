import React from "react";
import cn from "classnames";
import * as styles from "./index.module.css";

export default function Dropdown({
  children,
  classNames,
  ...props
}) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.btn}>
        Size Nasıl Yardımcı Olabiliriz?
      </button>
      <div className={styles.menu}>
        {children}
      </div>
    </div>
  );
}

import React from "react";
import * as styles from "./index.module.css";

const NavItemCard = ({
  children,
  title = "",
}) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.background}>
        {children}
      </div>
      <div className={styles.foreground}>
        <div className={styles.foregroundContent}>
          {title}
        </div>
      </div>
    </div>
  );
};

export default NavItemCard;

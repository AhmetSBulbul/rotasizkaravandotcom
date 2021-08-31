import React from "react";

import * as styles from "./index.module.css";
import cn from "classnames";

export default function NavigationMenu({
  children,
}) {
  return (
    <div className={styles.menu}>
      <nav
        className={cn([
          styles.navigation,
          styles.navActive,
        ])}
      >
        <a className={cn([styles.navItemCard])}>
          <span className={styles.navItemTitle}>
            Karavan
          </span>
        </a>
        <div className={cn([styles.navItemCard])}>
          <div className={styles.innerContainer}>
            <span className={styles.navItemTitle}>
              Kurumsal
            </span>
          </div>
        </div>
        <a className={cn([styles.navItemCard])}>
          <span className={styles.navItemTitle}>
            Blog
          </span>
        </a>
        <div
          className={styles.navigationFooter}
        ></div>
      </nav>
      <div className="h-10">footer</div>
    </div>
  );
}

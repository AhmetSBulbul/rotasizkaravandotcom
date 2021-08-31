import React from "react";

import * as styles from "./index.module.css";
import useToggle from "../../hooks/useToggle";
import cn from "classnames";

const ExitIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default function Navigation({ children }) {
  const [isMenuActive, setIsMenuActive] =
    useToggle();

  return (
    <div className={styles.navigationWrapper}>
      <button
        onClick={setIsMenuActive}
        className={cn([
          styles.toggleBtn,
          isMenuActive && styles.toggleBtnActive,
        ])}
      >
        <div />
        <div />
        <div />
        <ExitIcon />
      </button>
      <nav
        className={cn([
          styles.navigation,
          isMenuActive && styles.navActive,
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
    </div>
  );
}

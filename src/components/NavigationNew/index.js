import React from "react";

import * as styles from "./index.module.css";

import cn from "classnames";
import { Link } from "gatsby";
import NavItemCard from "../NavItemCard";
import { StaticImage } from "gatsby-plugin-image";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

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

export default function NavigationNew(props) {
  useLockBodyScroll(props.state); //&& window.size.width <= screen md
  return (
    <div className={styles.navigationWrapper}>
      <button
        onClick={props.onCallback}
        className={cn([
          styles.toggleBtn,
          props.state && styles.toggleBtnActive,
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
          props.state && styles.navActive,
        ])}
      >
        <div className={styles.navItemCard}>
          <button className={styles.navItemTitle}>
            Karavan
          </button>
          <nav className={styles.subMenu}>
            <ul>
              <li>
                <Link
                  to="/blog"
                  className={styles.subLink}
                >
                  Tasarim Planlama
                </Link>
              </li>
              <li>
                <Link
                  to="/islerimiz"
                  className={styles.subLink}
                >
                  Tasarim Planlama
                </Link>
              </li>
              <li>
                <Link
                  to="/kurumsal"
                  className={styles.subLink}
                >
                  Tasarim Planlama
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.navItemCard}>
          <button className={styles.navItemTitle}>
            Kurumsal
          </button>
        </div>
        <div className={styles.navItemCard}>
          <button className={styles.navItemTitle}>
            Blog
          </button>
        </div>

        <div className={styles.navigationFooter}>
          Footer
        </div>
      </nav>
    </div>
  );
}

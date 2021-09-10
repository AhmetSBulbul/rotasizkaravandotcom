import React from "react";

import * as styles from "./index.module.css";
import useToggle from "../../hooks/useToggle";
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

export default function Navigation({ children }) {
  const [isMenuActive, setIsMenuActive] =
    useToggle();

  useLockBodyScroll(isMenuActive);
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
        <Link
          to="/islerimiz"
          onClick={setIsMenuActive}
          className={cn([styles.navItemCard])}
        >
          <NavItemCard title="İŞLERİMİZ">
            <StaticImage
              src="../../images/2012-sprinter.jpg"
              alt="yellow campervan"
              transformOptions={{
                fit: "contain",
              }}
              layout="constrained"
            />
          </NavItemCard>
        </Link>
        <Link
          to="/blog"
          onClick={setIsMenuActive}
          className={cn([styles.navItemCard])}
        >
          <NavItemCard title="Blog">
            <StaticImage
              src="../../images/yellow-van.jpg"
              alt="yellow campervan"
              transformOptions={{
                fit: "contain",
              }}
              layout="constrained"
            />
          </NavItemCard>
        </Link>
        <Link
          to="/kurumsal"
          onClick={setIsMenuActive}
          className={cn([styles.navItemCard])}
        >
          <NavItemCard title="Kurumsal">
            <StaticImage
              src="../../images/falez.jpg"
              alt="falez karavan"
              transformOptions={{
                fit: "contain",
              }}
              layout="constrained"
            />
          </NavItemCard>
        </Link>

        <div className={styles.navigationFooter}>
          Footer
        </div>
      </nav>
    </div>
  );
}

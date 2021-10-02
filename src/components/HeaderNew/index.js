import React from "react";
import Logo from "../Logo";
import * as styles from "./index.module.css";
import useToggle from "../../hooks/useToggle";
import cn from "classnames";

import Navigation from "../Navigation";

import { Link } from "gatsby";

export default function HeaderNew() {
  const [isMenuActive, setIsMenuActive] =
    useToggle();
  const sublinkStyle = "sub-link";
  return (
    <header className="relative">
      <div
        className={cn([
          styles.headerTop,
          sublinkStyle,
        ])}
      >
        <div className="ml-4">Kurumsal</div>
        <div className="ml-4">İletişim</div>
        <div className="ml-4">
          Kullanıcı Sözleşmesi
        </div>
        <div className="mx-4">TR</div>
      </div>
      <div className={styles.mainHeader}>
        <Link
          to="/"
          className="z-50"
          onClick={
            isMenuActive && setIsMenuActive
          }
        >
          <Logo />
        </Link>
        <Navigation
          state={isMenuActive}
          onCallback={setIsMenuActive}
        />
      </div>
    </header>
  );
}

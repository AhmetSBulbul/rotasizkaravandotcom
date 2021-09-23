import React from "react";
import Logo from "../Logo";
import * as styles from "./index.module.css";
import useToggle from "../../hooks/useToggle";

import Navigation from "../Navigation";

import { Link } from "gatsby";

export default function HeaderNew() {
  const [isMenuActive, setIsMenuActive] =
    useToggle();
  return (
    <header className="relative">
      <div className={styles.headerTop}>
        <div className="font-display text-sm font-medium">
          +90 (539) 517 38 77
        </div>
        <div className="font-display text-sm font-medium">
          ahmetsafabulbul@gmail.com
        </div>
      </div>
      <div className="absolute top-full w-full flex bg-secondary h-20 flex-row justify-between items-center z-50 text-white px-4 py-4 space-x-4">
        <Link
          to="/"
          className="w-52 z-50"
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

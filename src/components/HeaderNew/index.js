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
  return (
    <header className="relative">
      <div className={cn([styles.headerTop])}>
        <div className="font-display text-sm font-medium my-auto">
          +90 (539) 517 38 77
        </div>
        <div className="font-display text-sm font-medium my-auto">
          ahmetsafabulbul@gmail.com
        </div>
      </div>
      <div className="absolute top-full w-full flex h-20 flex-row justify-between items-center z-50 text-white px-4 py-4 space-x-4">
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

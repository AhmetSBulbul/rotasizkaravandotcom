import React from "react";
import Logo from "../Logo";
import * as styles from "./index.module.css";
import useToggle from "../../hooks/useToggle";

import Navigation from "../Navigation";

import { Link } from "gatsby";

export default function Header() {
  const [isMenuActive, setIsMenuActive] =
    useToggle();
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className="content-safe flex flex-row justify-between">
          <Link
            to="/"
            className="my-auto z-50"
            onClick={
              isMenuActive && setIsMenuActive
            }
          >
            <Logo className="w-52 md:w-64" />
          </Link>
          <Navigation
            state={isMenuActive}
            onCallback={setIsMenuActive}
          />
        </div>
      </div>
    </div>
  );
}

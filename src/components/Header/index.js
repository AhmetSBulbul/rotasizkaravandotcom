import React from "react";
import Logo from "../Logo";
import * as styles from "./index.module.css";

export default function Header() {
  return (
    <div className="absolute top-0 left-0 right-0 z-20 ">
      <div className="container py-4 px-4 container flex flex-row justify-between mx-auto">
        <Logo />
        <button className="px-5 py-1 my-auto hidden">
          <div className={styles.navButton} />
        </button>
      </div>
    </div>
  );
}

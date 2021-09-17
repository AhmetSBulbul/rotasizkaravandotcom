import React from "react";
import Logo from "../Logo";
import * as styles from "./index.module.css";

import Navigation from "../Navigation";

import { Link } from "gatsby";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Link to="/" className="my-auto z-50">
          <Logo className="w-52" />
        </Link>
        <Navigation />
      </div>
    </div>
  );
}

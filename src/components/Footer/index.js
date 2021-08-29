import React from "react";
import * as styles from "./index.module.css";
import Logo from "../Logo";

export default function Footer({ children }) {
  return (
    <section className={styles.footerSection}>
      <div className={styles.container}>
        <div className={styles.copyrighted}>
          Bütün hakları gizlidir.
        </div>
      </div>
    </section>
  );
}

import React from "react";
import * as styles from "./index.module.css";

export default function Footer({ children }) {
  return (
    <section className={styles.footerSection}>
      <div className={styles.container}>
        <div className={styles.footerMenu}>
          <h5>Hizmetlerimiz</h5>
          <ol className={styles.menuList}></ol>
        </div>
        <div className={styles.footerMenu}>
          <h5>Hakkımızda</h5>
          <ol className={styles.menuList}></ol>
        </div>
      </div>
    </section>
  );
}

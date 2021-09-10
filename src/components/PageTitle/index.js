import React from "react";
import * as styles from "./index.module.css";

const PageTitle = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default PageTitle;

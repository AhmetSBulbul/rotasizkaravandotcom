import React from "react";
import * as styles from "./index.module.css";
import cn from "classnames";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

const Lightbox = ({
  children,
  isActive = false,
}) => {
  useLockBodyScroll(isActive);
  return (
    <div
      className={cn([
        styles.container,
        isActive && styles.visible,
      ])}
    >
      {children}
    </div>
  );
};

export default Lightbox;

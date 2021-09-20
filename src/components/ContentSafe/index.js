import React from "react";
import * as styles from "./index.module.css";
import cn from "classnames";

function ContentSafe({
  className,
  children,
  ...props
}) {
  return (
    <div
      className={cn([
        styles.container,
        className,
      ])}
      {...props}
    >
      {children}
    </div>
  );
}

export default ContentSafe;

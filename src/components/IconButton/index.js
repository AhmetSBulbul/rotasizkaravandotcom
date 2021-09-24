import React from "react";
import * as styles from "./index.module.css";
import cn from "classnames";
import BaseButton from "../BaseButton";

function IconButton({
  children,
  className,
  ...props
}) {
  return (
    <BaseButton
      className={cn(styles.iconBtn, className)}
      {...props}
    >
      {children}
    </BaseButton>
  );
}

export default IconButton;

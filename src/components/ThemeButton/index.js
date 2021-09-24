import React from "react";
import * as styles from "./index.module.css";
import cn from "classnames";
import { Link } from "gatsby";
import BaseButton from "../BaseButton";

function ThemeButton({
  stretch = false,
  secondary = false,
  children,
  className,
  ...props
}) {
  return (
    <BaseButton
      className={cn(
        styles.button,
        stretch && styles.fullWidth,
        secondary
          ? styles.secondary
          : styles.primary,
        className
      )}
      {...props}
    >
      {children}
    </BaseButton>
  );
}

export default ThemeButton;

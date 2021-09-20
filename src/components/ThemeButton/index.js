import React from "react";
import * as styles from "./index.module.css";
import cn from "classnames";
import { Link } from "gatsby";

function LinkButton({ to, children, ...props }) {
  return <Link to={to}>{children}</Link>;
}

function BaseButton({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

function ThemeButton({
  stretch = false,
  secondary = false,
  children,
  className,
  ...props
}) {
  const CurrBtn = props.to
    ? LinkButton
    : BaseButton;

  return (
    <CurrBtn
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
    </CurrBtn>
  );
}

export default ThemeButton;

import React from "react";
import cn from "classnames";
import { Link } from "gatsby";
import { baseBtn as style } from "./index.module.css";

function LinkButton({
  to,
  children,

  ...props
}) {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}

function NormalButton({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

export default function ButtonBase({
  children,
  className,
  ...props
}) {
  const CurrentBtn = props.to
    ? LinkButton
    : NormalButton;
  return (
    <CurrentBtn
      className={cn([style, className])}
      {...props}
    >
      {children}
    </CurrentBtn>
  );
}

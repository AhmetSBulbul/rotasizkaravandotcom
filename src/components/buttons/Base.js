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

function ExternalLinkButton({
  href,
  children,
  ...props
}) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}

function NormalButton({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

export default function BaseButton({
  children,
  className,
  ...props
}) {
  const CurrentBtn = props.to
    ? LinkButton
    : props.href
    ? ExternalLinkButton
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

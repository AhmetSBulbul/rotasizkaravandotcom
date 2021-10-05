import React from "react";
import BaseButton from "./Base";
import { withIconBtn as style } from "./index.module.css";
import cn from "classnames";

const ButtonWithIcon = ({
  children,
  className,
  ...props
}) => (
  <BaseButton
    className={cn([style, className])}
    {...props}
  >
    {children}
  </BaseButton>
);

export default ButtonWithIcon;

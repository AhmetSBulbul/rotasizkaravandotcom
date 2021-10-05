import React from "react";
import BaseButton from "./Base";
import { themeBtn as style } from "./index.module.css";
import cn from "classnames";

const ButtonTheme = ({
  children,
  className,
  ...props
}) => (
  <BaseButton
    {...props}
    className={cn([style, className])}
  >
    {children}
  </BaseButton>
);

export default ButtonTheme;

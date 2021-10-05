import React from "react";
import ButtonBase from "./Base";
import { themeBtn as style } from "./index.module.css";
import cn from "classnames";

const ButtonTheme = ({
  children,
  className,
  ...props
}) => (
  <ButtonBase
    {...props}
    className={cn([style, className])}
  >
    {children}
  </ButtonBase>
);

export default ButtonTheme;

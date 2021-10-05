import React from "react";
import ButtonBase from "./Base";
import { withIconBtn as style } from "./index.module.css";
import cn from "classnames";

const ButtonWithIcon = ({
  children,
  className,
  ...props
}) => (
  <ButtonBase
    className={cn([style, className])}
    {...props}
  >
    {children}
  </ButtonBase>
);

export default ButtonWithIcon;

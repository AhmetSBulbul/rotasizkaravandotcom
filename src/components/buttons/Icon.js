import React from "react";
import BaseButton from "../BaseButton";
import cn from "classnames";
import { iconBtn as style } from "./index.module.css";

const ButtonIcon = ({
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

export default ButtonIcon;

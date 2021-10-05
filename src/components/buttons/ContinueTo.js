import React from "react";
import ButtonBase from "./Base";
import { continueToBtn as style } from "./index.module.css";
import { RightArrow } from "../icons/solid";
import cn from "classnames";

const ButtonContinueTo = ({
  children,
  className,
  ...props
}) => (
  <ButtonBase
    className={cn([style, className])}
    {...props}
  >
    {children} <RightArrow />
  </ButtonBase>
);

export default ButtonContinueTo;

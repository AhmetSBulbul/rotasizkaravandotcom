import React from "react";
import BaseButton from "./Base";
import { continueToBtn as style } from "./index.module.css";
import { RightArrow } from "../icons/solid";
import cn from "classnames";

const ButtonContinueTo = ({
  children,
  className,
  ...props
}) => (
  <BaseButton
    className={cn([style, className])}
    {...props}
  >
    {children} <RightArrow />
  </BaseButton>
);

export default ButtonContinueTo;

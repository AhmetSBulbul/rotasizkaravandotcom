import React from "react";
import cn from "classnames";
import { simpleRowWrap as style } from "./index.module.css";

const styleGray = "bg-gray-lightest";

const SimpleRowWrapper = ({
  children,
  isGray = false,
}) => (
  <div className={cn(style, isGray && styleGray)}>
    {children}
  </div>
);

export default SimpleRowWrapper;

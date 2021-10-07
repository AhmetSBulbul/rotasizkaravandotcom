import React from "react";
import cn from "classnames";
import { simpleRowWrap as style } from "./index.module.css";

const SimpleRowWrapper = ({
  children,
  className,
}) => (
  <div className={cn(style, className)}>
    {children}
  </div>
);

export default SimpleRowWrapper;

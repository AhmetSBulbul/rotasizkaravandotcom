import React from "react";
import cn from "classnames";
import Sidebar from "../Sidebar";
import * as styles from "./index.module.css";

const SubPageNavigation = ({
  children,
  className,
}) => (
  <Sidebar
    className={cn(styles.sidebar, className)}
  >
    {children}
  </Sidebar>
);

export default SubPageNavigation;

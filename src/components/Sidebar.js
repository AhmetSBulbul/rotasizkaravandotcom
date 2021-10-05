import React from "react";
import cn from "classnames";

const Sidebar = ({ children, className }) => {
  const sidebarStyle =
    "rounded-md px-mobile py-8 font-display font-bold text-2xl";
  return (
    <div
      className={cn([sidebarStyle, className])}
    >
      {children}
    </div>
  );
};

export default Sidebar;

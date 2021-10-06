import React from "react";
import cn from "classnames";
import { baseCard as style } from "./index.module.css";

const BaseCard = ({ children, className }) => {
  return (
    <div className={cn([style, className])}>
      {children}
    </div>
  );
};

export default BaseCard;

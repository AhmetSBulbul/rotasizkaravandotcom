import React from "react";
import cn from "classnames";
import { contentCard as style } from "./index.module.css";

const ContentCard = ({
  title,
  children,
  className,
}) => {
  return (
    <div className={cn([style, className])}>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default ContentCard;

import React from "react";
import cn from "classnames";

const Card = ({ children, className }) => {
  const cardBaseStyle =
    "rounded-md h-full w-full";
  return (
    <div
      className={cn([cardBaseStyle, className])}
    >
      {children}
    </div>
  );
};

export default Card;

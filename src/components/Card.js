import React from "react";
import cn from "classnames";

const Card = ({ children, className }) => {
  const cardBaseStyle =
    "bg-white shadow-lg rounded-md";
  return (
    <div
      className={cn([cardBaseStyle, className])}
    >
      {children}
    </div>
  );
};

export default Card;

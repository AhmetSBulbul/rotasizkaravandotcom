import React from "react";
import cn from "classnames";
import {
  contentCard,
  contentCardReverse,
} from "./index.module.css";

export default function ContentCard({
  reverse,
  subject = "Subject",
  title = "Title",
  children,
}) {
  return (
    <div
      className={cn([
        contentCard,
        reverse && contentCardReverse,
      ])}
    >
      <h3>{subject}</h3>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

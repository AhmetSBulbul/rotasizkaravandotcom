import React from "react";
import * as styles from "./index.module.css";

const ChatSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 mr-auto"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
    />
  </svg>
);

const FloatContactButton = ({ ...props }) => {
  return (
    <div className={styles.wrapper}>
      <ChatSvg /> Bilgi Talebi
    </div>
  );
};

export default FloatContactButton;

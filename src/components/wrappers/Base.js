import React from "react";

const BaseWrapper = ({ children }) => (
  <div className="px-mobile laptop:px-wrapper">
    {children}
  </div>
);

export default BaseWrapper;

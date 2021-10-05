import React from "react";
import * as styles from "./index.module.css";
import cn from "classnames";

import BaseButton from "../BaseButton";

function FeaturedButton({
  children,
  className,
  ...props
}) {
  return (
    <BaseButton
      className={cn(
        styles.featuredButton,
        className
      )}
      {...props}
    >
      {children}
    </BaseButton>
  );
}

export default FeaturedButton;

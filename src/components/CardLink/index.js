import React from "react";

import * as styles from "./index.module.css";
import cn from "classnames";
import { Link } from "gatsby";
import Card from "../Card";
import { RightArrow } from "../icons/solid";

const CardLink = ({
  children,
  className,
  ...props
}) => {
  return (
    <Link
      to={props.to}
      className={cn([styles.cardWrap, className])}
    >
      <Card className={styles.cardBody}>
        {children}
        <div className={styles.readMore}>
          Devamını Oku{" "}
          <RightArrow className="ml-4" />
        </div>
      </Card>
    </Link>
  );
};

export default CardLink;

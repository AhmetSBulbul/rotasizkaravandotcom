import React from "react";
import * as styles from "./index.module.css";
import cn from "classnames";
import OurServiceCard from "../OurServiceCard";
import { StaticImage } from "gatsby-plugin-image";

const SectionOurServices = ({
  children,
  title = "Hizmetlerimiz",
  ...props
}) => {
  const contentSafe = "content-safe";
  return (
    <div className={cn([styles.container])}>
      <div className={styles.innerContainer}>
        <OurServiceCard
          title="Karavan Danışmanlığı"
          content="Hayalinizdeki karavana sahip olma
          sürecinizde size eşlik edelim. İster
          aracınızla gelin isterseniz sizin için
          en uygun aracı birlikte satın alalım."
        >
          <StaticImage
            src="../../images/2012-sprinter.jpg"
            alt="mercedes sprinter 2012"
            layout="constrained"
            objectFit="cover"
            className={styles.cardImageWrapper}
            imgClassName={styles.cardImage}
          />
        </OurServiceCard>
      </div>
    </div>
  );
};

export default SectionOurServices;

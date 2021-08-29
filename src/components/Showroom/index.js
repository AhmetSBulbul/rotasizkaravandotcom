import React from "react";
import * as styles from "./index.module.css";
import {
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image";
import useSlide from "../../hooks/useSlide";

import cn from "classnames";

const ShowRoom = ({ photos }) => {
  const currentIndex = useSlide(
    3000,
    photos.edges.length
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.gallery}>
        {photos.edges.map(({ node }, index) => {
          const image = getImage(node);
          console.log(
            "photo-" + index.toString()
          );
          return (
            <GatsbyImage
              className={styles.photo}
              key={"photo-" + index.toString()}
              alt={node.name}
              image={image}
            />
          );
        })}
      </div>
      <div className={styles.dotsWrapper}>
        {photos.edges.map(({ node }, i) => {
          return (
            <div
              className={cn([
                styles.dot,
                currentIndex === i
                  ? styles.dotActive
                  : styles.dotEmpty,
              ])}
              key={"dot-" + i.toString()}
            >
              {currentIndex} {i}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowRoom;

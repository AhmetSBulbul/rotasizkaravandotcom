import React from "react";
import cn from "classnames";
import * as styles from "./index.module.css";
import RotasizImage from "../RotasizImage";

function GridGallery({ data, className }) {
  const isEven =
    data.allFile.totalCount % 2 === 0;
  console.log(isEven);

  return (
    <div
      className={cn([
        styles.galleryWrapper,
        className,
      ])}
    >
      {data.allFile.edges.map(
        ({ node }, index) => {
          console.log(index);
          return (
            <RotasizImage
              key={node.key}
              className={cn([
                styles.gridGalleryItem,
                isEven && styles.gridGalleryEven,
              ])}
              alt={node.name}
              imgData={node}
            />
          );
        }
      )}
    </div>
  );
}

export default GridGallery;

//TODO: totalCount value will be passed to css variable for better grid layout

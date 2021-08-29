import React from "react";
import * as styles from "./index.module.css";
import {
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image";

const RotasizGallery = ({ photos }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.gallery}>
        {photos.edges.map(({ node }) => {
          const image = getImage(node);
          return (
            <GatsbyImage
              className={styles.photo}
              key={node.id}
              alt={node.name}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RotasizGallery;

import React from "react";
import {
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image";
import { StaticQuery, graphql } from "gatsby";
import * as styles from "./index.module.css";
import cn from "classnames";
import { Pages } from "../../constants";

import ThemeButton from "../ThemeButton";

function SectionRotasizGallery({ className }) {
  return (
    <div
      className={cn([styles.wrapper, className])}
    >
      <div className={styles.gridContainer}>
        <div className={styles.gridTitle}>
          <h3 className="sub-title">
            Fotoğraf Galerisi
          </h3>
          <h1 className="big-title">
            İşlerimizi İnceleyin
          </h1>
        </div>
        <StaticQuery
          query={graphql`
            query GetShowroomImages {
              allFile(
                filter: {
                  absolutePath: {
                    regex: "//showroom//"
                  }
                }
              ) {
                edges {
                  node {
                    name
                    childImageSharp {
                      gatsbyImageData(
                        layout: CONSTRAINED
                        width: 748
                      )
                    }
                  }
                }
              }
            }
          `}
          render={(data) => (
            <>
              {data.allFile.edges.map(
                ({ node }, index) => {
                  const image = getImage(node);
                  console.log(index);
                  return (
                    <GatsbyImage
                      key={node.key}
                      className={
                        styles.gridGalleryItem
                      }
                      alt={node.name}
                      image={image}
                    />
                  );
                }
              )}
            </>
          )}
        />
        <ThemeButton
          to={Pages.galeri}
          secondary
          className={styles.gridButton}
        >
          Fotoğraf Galerisi
        </ThemeButton>
      </div>
    </div>
  );
}

export default SectionRotasizGallery;

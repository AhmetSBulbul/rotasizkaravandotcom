import React from "react";
import {
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image";
import { StaticQuery, graphql } from "gatsby";
import * as styles from "./index.module.css";
import cn from "classnames";

function SectionRotasizGallery() {
  return (
    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 w-full container px-8">
      <div className={styles.gridContainer}>
        <div className="flex flex-col justify-center col-span-2 row-span-1 md:col-span-3">
          <h3 className="sub-title">
            Fotoğraf Galerisi
          </h3>
          <h1 className="big-title">
            İşlerimizi İnceleyin
          </h1>
        </div>
        <StaticQuery
          query={graphql`
            query {
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
                      className="row-span-1 col-span-1"
                      alt={node.name}
                      image={image}
                    />
                  );
                }
              )}
            </>
          )}
        />
        <button className="col-span-2 row-span-1 font-display bg-secondary font-bold text-white text-2xl">
          Fotoğraf Galerisi
        </button>
      </div>
    </div>
  );
}

export default SectionRotasizGallery;

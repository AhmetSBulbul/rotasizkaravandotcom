import React from "react";

import { graphql } from "gatsby";

import { GalleryFigure } from "../../components/figures";

import {
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image";
import * as styles from "./gallery.module.css";

const PhotoGalleryPage = ({ data }) => {
  return (
    <>
      <div className="pageLead">
        <GalleryFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>Fotoğraf Albümü</h1>
        </div>
      </div>

      <div className={styles.gallery}>
        {data.allFile.edges.map(({ node }) => {
          const image = getImage(node);
          return (
            <GatsbyImage
              className="rounded-xl my-4 block"
              key={node.id}
              alt={node.name}
              image={image}
            />
          );
        })}
      </div>
    </>
  );
};

export const pageQuery = graphql`
  query GalleryPageQuery {
    allFile(
      filter: {
        absolutePath: { regex: "//photos//" }
      }
      limit: 16
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
`;

export default PhotoGalleryPage;

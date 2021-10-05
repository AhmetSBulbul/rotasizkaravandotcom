import React from "react";

import { graphql } from "gatsby";

import { GalleryFigure } from "../../components/figures";

import * as styles from "./gallery.module.css";
import RotasizImage from "../../components/RotasizImage";

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
          return (
            <RotasizImage
              className="my-4 block"
              key={node.id}
              alt={node.name}
              imgData={node}
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

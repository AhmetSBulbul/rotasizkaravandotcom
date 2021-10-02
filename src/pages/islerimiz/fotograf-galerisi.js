import React from "react";

import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import {
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image";
import * as styles from "./gallery.module.css";

const PhotoGalleryPage = ({ data }) => {
  return (
    <>
      <div className="pageLead">
        <StaticImage
          src="../../images/rotasizlar.jpg"
          alt=""
          layout="constrained"
          objectFit="cover"
          objectPosition="center"
          className="pageLeadImg"
        />
        <div className="pageLeadTitleBox w-full">
          <h1>Fotoğraf Galerisi</h1>
        </div>
      </div>

      <div className={styles.gallery}>
        {data.allFile.edges.map(({ node }) => {
          const image = getImage(node);
          return (
            <GatsbyImage
              className="rounded-sm my-2 block"
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
  query {
    allFile(
      filter: {
        absolutePath: { regex: "//photos//" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;

export default PhotoGalleryPage;

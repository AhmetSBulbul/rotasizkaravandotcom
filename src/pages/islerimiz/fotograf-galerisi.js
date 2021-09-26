import React from "react";
import PageTitle from "../../components/PageTitle";
import { graphql } from "gatsby";
import ImageCarousel from "../../components/ImageCarousel";
import {
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image";
import * as styles from "./gallery.module.css";

const PhotoGalleryPage = ({ data }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full bg-white pt-24">
        <h2 className="text-center text-2xl my-4">
          Fotoğraf Galerisi
        </h2>
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

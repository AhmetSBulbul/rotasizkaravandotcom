import React from "react";
import PageTitle from "../components/PageTitle";
import { graphql } from "gatsby";
import ImageCarousel from "../components/ImageCarousel";
import {
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image";

const PhotoGalleryPage = ({ data }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen w-screen bg-white">
        <PageTitle>Fotograf Galerisi</PageTitle>
        <ImageCarousel>
          {data.allFile.edges.map(({ node }) => {
            const image = getImage(node);
            return (
              <GatsbyImage
                className="rounded-sm"
                key={node.id}
                alt={node.name}
                image={image}
              />
            );
          })}
        </ImageCarousel>
      </div>
    </>
  );
};

export const pageQuery = graphql`
  query {
    allFile(
      filter: {
        absolutePath: { regex: "//showroom//" }
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

import React from "react";
import Hero from "../components/Hero";

import AboutUs from "../components/AboutUs";
import { graphql, Link } from "gatsby";
import RotasizGallery from "../components/Gallery";
import RecentPublished from "../components/RecentPublished";
import Spacer from "../components/Spacer";
import SectionContainer from "../components/SectionContainer";
import SectionWhatWeDo from "../components/SectionWhatWeDo";
import ImageCarousel from "../components/ImageCarousel";
import SectionOurServices from "../components/SectionOurServices";
import {
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image";

const IndexPage = ({ data }) => {
  return (
    <>
      <Hero />
      <SectionWhatWeDo />
      <SectionOurServices />
      <div className="flex flex-col items-center w-full container px-8">
        <h1>Foto Galeri</h1>
        <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 gap-3">
          {data.allFile.edges.map(
            ({ node }, index) => {
              const image = getImage(node);
              console.log(index);
              return (
                <GatsbyImage
                  key={node.key}
                  alt={node.name}
                  image={image}
                />
              );
            }
          )}
          <button className="h-full w-full font-display bg-secondary font-bold text-white">
            Bütün görselleri gör.
          </button>
        </div>
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

export default IndexPage;

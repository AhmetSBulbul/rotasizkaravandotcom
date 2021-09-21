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
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 w-full container px-8">
        <div className="grid grid-cols-3 w-full md:grid-cols-5 gap-4">
          <div className="flex flex-col justify-center col-span-2 md:col-span-3">
            <h3 className="sub-title">
              Fotoğraf Galerisi
            </h3>
            <h1 className="big-title">
              İşlerimizi İnceleyin
            </h1>
          </div>
          {data.allFile.edges.map(
            ({ node }, index) => {
              const image = getImage(node);
              console.log(index);
              return (
                <div
                  key={node.key}
                  className="aspect-w-1 aspect-h-1"
                >
                  <GatsbyImage
                    className="w-full h-full"
                    alt={node.name}
                    image={image}
                  />
                </div>
              );
            }
          )}
          <button className="col-span-2 font-display bg-secondary font-bold text-white text-2xl">
            Fotoğraf Galerisi
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

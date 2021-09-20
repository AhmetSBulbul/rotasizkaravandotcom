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

const IndexPage = ({ data }) => {
  return (
    <>
      <Hero />
      <SectionWhatWeDo />
      <SectionOurServices />
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

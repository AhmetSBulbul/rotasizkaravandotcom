import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import { graphql } from "gatsby";
import RotasizGallery from "../components/Gallery";
import Footer from "../components/Footer";
import { Whatsapp } from "../components/icons";

const IndexPage = ({ data }) => {
  return (
    <div className="flex flex-col min-h-screen w-screen overflow-x-hidden">
      <Header />
      <Hero />
      <AboutUs />
      <RotasizGallery photos={data.allFile} />
      <Footer />
      <button className="fixed bottom-14 right-5 h-10 z-50">
        <Whatsapp
          style={{ "font-size": "4rem" }}
        />
      </button>
    </div>
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

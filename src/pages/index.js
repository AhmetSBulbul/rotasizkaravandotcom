import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import { graphql } from "gatsby";
import RotasizGallery from "../components/Gallery";
import Footer from "../components/Footer";
import { Whatsapp } from "../components/icons";
import { Helmet } from "react-helmet";

const IndexPage = ({ data }) => {
  return (
    <>
      <Hero />
      <AboutUs />
      <RotasizGallery photos={data.allFile} />
      <a
        className="fixed bottom-14 right-5 h-10 z-10"
        href="https://wa.me/905058777888?text=Merhabalar%2C+ben+Rotas%C4%B1z+Karavan+Web+Sitesi+%C3%BCzerinden+ula%C5%9F%C4%B1yorum.+%C4%B0stedi%C4%9Fim+karavan+hakk%C4%B1nda+bilgi+almak+istiyorum"
      >
        <Whatsapp
          style={{ "font-size": "4rem" }}
        />
      </a>
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

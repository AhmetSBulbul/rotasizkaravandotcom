import React from "react";
import Hero from "../components/Hero";

import AboutUs from "../components/AboutUs";
import { graphql } from "gatsby";
import RotasizGallery from "../components/Gallery";
import RecentPublished from "../components/RecentPublished";
import Spacer from "../components/Spacer";
import SectionContainer from "../components/SectionContainer";

import { Whatsapp } from "../components/icons";

const IndexPage = ({ data }) => {
  return (
    <>
      <Hero />
      <SectionContainer title="Hakkımızda">
        <p>
          Rotasız Karavan olarak, istek ve
          ihtiyaçlarınıza göre, hep hayalini
          kurduğunuz o karavanı sizin için ve size
          özel olarak gerçekleştirip
          hayallerinizin yerini, ev konforunda
          yaptığınız seyahatler ve onun güzel
          anılarıyla doldurmak için çalışıyor,
          çabalıyoruz.
        </p>
      </SectionContainer>
      <SectionContainer title="HİZMETLERİMİZ">
        <p>
          Rotasız Karavan olarak, istek ve
          ihtiyaçlarınıza göre, hep hayalini
          kurduğunuz o karavanı sizin için ve size
          özel olarak gerçekleştirip
          hayallerinizin yerini, ev konforunda
          yaptığınız seyahatler ve onun güzel
          anılarıyla doldurmak için çalışıyor,
          çabalıyoruz.
        </p>
      </SectionContainer>
      <RotasizGallery photos={data.allFile} />
      <SectionContainer title="Blog">
        <RecentPublished />
      </SectionContainer>

      <a
        className="fixed bottom-14 left-5 h-10 z-10"
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
            gatsbyImageData(
              layout: CONSTRAINED
              aspectRatio: 1
              transformOptions: {
                cropFocus: CENTER
                fit: COVER
              }
            )
          }
        }
      }
    }
  }
`;

export default IndexPage;

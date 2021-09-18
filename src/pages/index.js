import React from "react";
import Hero from "../components/Hero";

import AboutUs from "../components/AboutUs";
import { graphql, Link } from "gatsby";
import RotasizGallery from "../components/Gallery";
import RecentPublished from "../components/RecentPublished";
import Spacer from "../components/Spacer";
import SectionContainer from "../components/SectionContainer";
import FreeYourHome from "../components/FreeYourHome";
import ImageCarousel from "../components/ImageCarousel";
import OurServiceCard from "../components/OurServiceCard";

import { Whatsapp } from "../components/icons";

const IndexPage = ({ data }) => {
  return (
    <>
      <Hero />
      <FreeYourHome />
      <SectionContainer
        title="HİZMETLERİMİZ"
        oranj
      >
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
        <ImageCarousel
          settings={{
            dots: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 4000,
            cssEase: "ease-in-out",
          }}
        >
          <OurServiceCard title="Planlama">
            hayallerinizin yerini, ev konforunda
            yaptığınız seyahatler ve onun güzel
            anılarıyla doldurmak için çalışıyor,
            çabalıyoruz.
          </OurServiceCard>
          <OurServiceCard title="Danışma">
            hayallerinizin yerini, ev konforunda
            yaptığınız seyahatler ve onun güzel
            anılarıyla doldurmak için çalışıyor,
            çabalıyoruz.
          </OurServiceCard>
          <OurServiceCard title="Üretim">
            hayallerinizin yerini, ev konforunda
            yaptığınız seyahatler ve onun güzel
            anılarıyla doldurmak için çalışıyor,
            çabalıyoruz.
          </OurServiceCard>
        </ImageCarousel>
        <Link
          to="kurumsal"
          className="primaryBtn mt-4 border-none text-white font-display font-medium bg-yellow-600 mx-4"
        >
          BİZE ULAŞIN
        </Link>
      </SectionContainer>
      <SectionContainer title="İŞLERİMİZ">
        <p>
          Ürettiğimiz her karavanın geçtiği
          işlemleri aşama aşama
          inceleyebilirsiniz. Aynı zamanda
          işlerimiz arasından metreküp, araba
          marka ve modeline göre filtreleyerek
          geçmiş projelerimizi
          listeleyebilirsiniz.
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

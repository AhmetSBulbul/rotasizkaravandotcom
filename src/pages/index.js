import React from "react";

import SectionWhatWeDo from "../components/SectionWhatWeDo";

import SectionRotasizGallery from "../components/SectionRotasizGallery";
import SectionRecentPublished from "../components/SectionRecentPublished";

import Hero from "../components/Hero";
import SectionOurWorks from "../components/SectionOurWorks";
import {
  CardContent,
  CardReview,
} from "../components/cards";
import { Pages } from "../constants";
import { ContinueTo } from "../components/buttons";
import SEO from "../components/seo";

const rotasizReviewsUrl =
  "https://www.google.com/search?q=rotasiz+karavan&oq=rotasi&aqs=chrome.2.69i60j69i57j69i59j69i60l5.2701j0j1&sourceid=chrome&ie=UTF-8#lrd=0x14c3935b218a63df:0xbbe009d319774f74,1,,,";

const IndexPage = () => {
  return (
    <>
      <SEO title="Rotasız Karavan" />
      <Hero />
      <SectionWhatWeDo />

      <section className="section-wrap flex flex-col justify-center">
        <h3 className="sub-title text-center">
          Hizmetlerimiz
        </h3>
        <h2 className="big-title text-center">
          Size Nasıl Yardımcı Olabiliriz?
        </h2>
        <div className="wrap-simple-row simple-row-4 mt-10">
          <CardContent title="Karavan Danışmanlığı">
            Karavan üretmeyi sevdiğimiz kadar
            üzerine konuşmayı da seviyoruz. Arayın
            ücretsiz danışmanlık hizmetimizle
            sorularınızı cevaplayalım.
          </CardContent>

          <CardContent title="Planlama & Tasarım">
            Aklınızdaki karavanı sizinle birlikte
            somutlaştıralım. İhtiyaçlarınız
            doğrultusunda projeyi planlayalım.
          </CardContent>

          <CardContent title="Karavan İmalatı">
            Hayalinizdeki karavana eksiksiz bir
            şekilde sahip olabilmeniz için bütün
            süreci yöneterek size eşlik edelim.
          </CardContent>

          <CardContent title="Tamir ve Tadilat">
            Karavanınız hakkındaki her problemle
            ilgileniyoruz. Bütün tamir ve
            tadilatlarınızı sizin için halledelim.
          </CardContent>
        </div>
        <ContinueTo
          className="ml-auto"
          to={Pages.hizmetlerimiz}
        >
          Hizmetlerimiz
        </ContinueTo>
      </section>
      <section className="section-wrap section-gray flex flex-col justify-center">
        <h3 className="sub-title text-right">
          Referanslarımız
        </h3>
        <h2 className="big-title text-right">
          Müşterilerimizin Yorumları
        </h2>
        <div className="wrap-simple-row justify-items-center py-12">
          <CardReview
            name="Mete Önder"
            className="laptop:w-2/3"
          >
            Yapim aşamasında bizleri dinliyorlar
            hayallerimin oluşturulmasında adeta
            köprü oldular. Sonrasında ilave
            isteklerimizi geri çevirmediler. Daha
            iyisi ve güzelin peşindeler.
          </CardReview>
          <CardReview
            name="Ali Ataş"
            className="laptop:w-2/3"
          >
            Kaliteli iscilik yapiyorlar tavsiye
            ederim.. karavanimizi teslim aldik
            elinize saglik gorusmek uzere
          </CardReview>
        </div>
        <ContinueTo
          href={rotasizReviewsUrl}
          target="_blank"
          className="ml-auto"
        >
          Bütün Yorumlar
        </ContinueTo>
      </section>

      <SectionOurWorks className="section-wrap" />

      <section className="section-wrap section-gray flex flex-col text-left">
        <h3 className="sub-title">
          Fotoğraf Galerisi
        </h3>
        <h2 className="big-title mb-8">
          Karavan Fotoğrafları
        </h2>
        <SectionRotasizGallery />
      </section>

      <SectionRecentPublished />
    </>
  );
};

export default IndexPage;

//grid grid-flow-row laptop:grid-flow-col laptop:gap-2 py-mobile gap-mobile mt-8
//reviews wrap

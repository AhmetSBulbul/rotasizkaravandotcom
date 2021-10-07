import React from "react";

import SectionWhatWeDo from "../components/SectionWhatWeDo";

import SectionRotasizGallery from "../components/SectionRotasizGallery";
import SectionRecentPublished from "../components/SectionRecentPublished";

import Hero from "../components/Hero";
import SectionOurWorks from "../components/SectionOurWorks";
import {
  CardLink,
  CardContent,
  CardReview,
} from "../components/cards";
import { Pages } from "../constants";
import { ContinueTo } from "../components/buttons";

const IndexPage = () => {
  return (
    <>
      <Hero />
      <SectionWhatWeDo />
      {/*<SectionOurServices />*/}
      <div className="flex flex-col w-full justify-center my-12 px-mobile laptop:px-wrapper">
        <h3 className="sub-title text-center">
          Hizmetlerimiz
        </h3>
        <h2 className="big-title text-center">
          Size Nasıl Yardımcı Olabiliriz?
        </h2>
        <div className="grid grid-flow-row laptop:grid-flow-col laptop:gap-2 py-mobile gap-mobile mt-8">
          <CardLink to={Pages.danisma}>
            <CardContent title="Karavan Danışmanlığı">
              Karavan üretmeyi sevdiğimiz kadar
              üzerine konuşmayı da seviyoruz.
              Arayın ücretsiz danışmanlık
              hizmetimizle sorularınızı
              cevaplayalım.
            </CardContent>
          </CardLink>
          <CardLink to={Pages.planlama}>
            <CardContent title="Planlama & Tasarım">
              Aklınızdaki karavanı sizinle
              birlikte somutlaştıralım.
              İhtiyaçlarınız doğrultusunda projeyi
              planlayalım.
            </CardContent>
          </CardLink>
          <CardLink to={Pages.imalat}>
            <CardContent title="Karavan İmalatı">
              Hayalinizdeki karavana eksiksiz bir
              şekilde sahip olabilmeniz için bütün
              süreci yöneterek size eşlik edelim.
            </CardContent>
          </CardLink>
          <CardLink to={Pages.destek}>
            <CardContent title="Tamir ve Tadilat">
              Karavanınız hakkındaki her problemle
              ilgileniyoruz. Bütün tamir ve
              tadilatlarınızı sizin için
              halledelim.
            </CardContent>
          </CardLink>
        </div>
        <ContinueTo
          className="ml-auto"
          to={Pages.hizmetlerimiz}
        >
          Hizmetlerimiz
        </ContinueTo>
      </div>
      <div className="flex flex-col w-full py-8 justify-center my-12 px-mobile laptop:px-wrapper bg-gray-lightest rounded-md">
        <h3 className="sub-title text-right">
          Referanslarımız
        </h3>
        <h2 className="big-title text-right">
          Müşterilerimizin Yorumları
        </h2>
        <div className="grid grid-flow-row laptop:grid-flow-col laptop:gap-20 laptop:px-32 py-mobile gap-mobile mt-8">
          <CardReview name="Mete Önder">
            Yapim aşamasında bizleri dinliyorlar
            hayallerimin oluşturulmasında adeta
            köprü oldular. Sonrasında ilave
            isteklerimizi geri çevirmediler. Daha
            iyisi ve güzelin peşindeler.
          </CardReview>
          <CardReview name="Ali Ataş">
            Kaliteli iscilik yapiyorlar tavsiye
            ederim.. karavanimizi teslim aldik
            elinize saglik gorusmek uzere
          </CardReview>
        </div>
        <ContinueTo className="ml-auto">
          Bütün Yorumlar
        </ContinueTo>
      </div>
      <SectionOurWorks />

      <div className="flex flex-col px-mobile laptop:px-wrapper text-left mt-12">
        <h3 className="sub-title">
          Fotoğraf Galerisi
        </h3>
        <h2 className="big-title">
          Karavan Fotoğrafları
        </h2>
      </div>

      <SectionRotasizGallery />

      <SectionRecentPublished />
    </>
  );
};

export default IndexPage;

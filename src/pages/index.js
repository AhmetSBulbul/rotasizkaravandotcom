import React from "react";

import SectionWhatWeDo from "../components/SectionWhatWeDo";

import SectionRotasizGallery from "../components/SectionRotasizGallery";
import SectionRecentPublished from "../components/SectionRecentPublished";

import Hero from "../components/Hero";
import SectionOurWorks from "../components/SectionOurWorks";
import CardLink from "../components/CardLink";
import { Pages } from "../constants";
import Card from "../components/Card";
import { ContinueTo } from "../components/buttons";

const IndexPage = () => {
  return (
    <>
      <Hero />
      <SectionWhatWeDo />
      {/*<SectionOurServices />*/}
      <div className="flex flex-col w-full justify-center my-12 laptop:px-wrapper">
        <h3 className="sub-title text-center">
          Hizmetlerimiz
        </h3>
        <h2 className="big-title text-center">
          Size Nasıl Yardımcı Olabiliriz?
        </h2>
        <div className="grid grid-flow-row laptop:grid-flow-col laptop:gap-2 py-mobile gap-mobile mt-8">
          <CardLink to={Pages.danisma}>
            <h3>Karavan Danışmanlığı</h3>
            <p>
              Karavan üretmeyi sevdiğimiz kadar
              üzerine konuşmayı da seviyoruz.
              Arayın ücretsiz danışmanlık
              hizmetimizle sorularınızı
              cevaplayalım.
            </p>
          </CardLink>
          <CardLink to={Pages.planlama}>
            <h3>Planlama & Tasarım</h3>
            <p>
              Aklınızdaki karavanı sizinle
              birlikte somutlaştıralım.
              İhtiyaçlarınız doğrultusunda projeyi
              planlayalım.
            </p>
          </CardLink>
          <CardLink to={Pages.imalat}>
            <h3>Karavan İmalatı</h3>
            <p>
              Hayalinizdeki karavana eksiksiz bir
              şekilde sahip olabilmeniz için bütün
              süreci yöneterek size eşlik edelim.
            </p>
          </CardLink>
          <CardLink to={Pages.destek}>
            <h3>Tamir ve Tadilat</h3>
            <p>
              Karavanınız hakkındaki her problemle
              ilgileniyoruz. Bütün tamir ve
              tadilatlarınızı sizin için
              halledelim.
            </p>
          </CardLink>
        </div>
        <ContinueTo
          className="ml-auto"
          to={Pages.hizmetlerimiz}
        >
          Hizmetlerimiz
        </ContinueTo>
      </div>
      <div className="flex flex-col w-full py-8 justify-center my-12 laptop:px-wrapper bg-gray-lighter">
        <h3 className="sub-title text-right">
          Referanslarımız
        </h3>
        <h2 className="big-title text-right">
          Müşterilerimizin Yorumları
        </h2>
        <div className="grid grid-flow-row laptop:grid-flow-col laptop:gap-20 laptop:px-32 py-mobile gap-mobile mt-8">
          <Card className="bg-white px-mobile py-4">
            <p>
              " Yapim aşamasında bizleri
              dinliyorlar hayallerimin
              oluşturulmasında adeta köprü
              oldular. Sonrasında ilave
              isteklerimizi geri çevirmediler.
              Daha iyisi ve güzelin peşindeler. "
            </p>
            <h3 className="text-right mt-2 pt-2 border-t-2 border-gray-light">
              Mete Önder
            </h3>
          </Card>
          <Card className="bg-white px-mobile py-4 flex flex-col justify-end">
            <p className="my-auto">
              " Kaliteli iscilik yapiyorlar
              tavsiye ederim.. karavanimizi teslim
              aldik elinize saglik gorusmek uzere
              "
            </p>
            <h3 className="text-right mt-2 pt-2 border-t-2 border-gray-light">
              Ali Ataş
            </h3>
          </Card>
        </div>
        <ContinueTo className="ml-auto">
          Bütün Yorumlar
        </ContinueTo>
      </div>
      <SectionOurWorks />

      <SectionRotasizGallery />

      <SectionRecentPublished />
    </>
  );
};

export default IndexPage;

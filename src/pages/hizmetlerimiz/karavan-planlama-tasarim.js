import React from "react";

import { ServicesFigure } from "../../components/figures";
import { ContinueTo } from "../../components/buttons";

import { Pages } from "../../constants";

const ServicePlanDesignPage = () => {
  return (
    <>
      <div className="pageLead">
        <ServicesFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>Karavan Planlama & Tasarım</h1>
        </div>
      </div>
      <section className="section-wrap wrap-simple-row">
        <div className="row-span-2">
          <p className="text-lg">
            Hayalinizdeki karavanı sizinle
            birlikte ihtiyaç ve istekleriniz
            doğrultusunda projelendiriyoruz.
            Konforunuz için her santime birlikte
            karar verip süreci en sağlıklı bir
            şekilde sizin için planlayalım.
            <br />
            <br />
            Fotoğraf galerimizden
            gerçekleştirdiğimiz kendi karavan
            tasarımlarımızı inceleyebilirsiniz.
          </p>
          <ContinueTo className="ml-auto laptop:ml-0 mt-4">
            Rotasız Albüm
          </ContinueTo>
        </div>
      </section>
      <ContinueTo
        className="ml-auto mr-mobile laptop:mr-wrapper"
        to={Pages.imalat}
      >
        Karavan İmalatı
      </ContinueTo>
    </>
  );
};

export default ServicePlanDesignPage;

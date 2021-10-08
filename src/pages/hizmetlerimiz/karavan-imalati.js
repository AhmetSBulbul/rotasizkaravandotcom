import React from "react";

import { ServicesFigure } from "../../components/figures";
import { ContinueTo } from "../../components/buttons";

import { Pages } from "../../constants";

const ServiceProducePage = () => {
  return (
    <>
      <div className="pageLead">
        <ServicesFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>Karavan İmalatı</h1>
        </div>
      </div>
      <section className="section-wrap wrap-simple-row">
        <div className="row-span-2">
          <p className="text-lg">
            İster arabanızı alın gelin, isterseniz
            sizinle birlikte satın alalım. Süreci
            baştan sona yönetelim ve size özel
            olarak karavanınızı üretelim.
            <br />
            <br />
            İşlerimiz sayfasından karavanlarımızın
            üretim süreçlerini inceleyebilir veya
            karavanlar hakkında fikir
            edinebilirsiniz.
          </p>
          <ContinueTo className="ml-auto laptop:ml-0 mt-4">
            İşlerimiz
          </ContinueTo>
        </div>
      </section>
      <ContinueTo
        className="ml-auto mr-mobile laptop:mr-wrapper"
        to={Pages.destek}
      >
        Tamir ve Tadilat
      </ContinueTo>
    </>
  );
};

export default ServiceProducePage;

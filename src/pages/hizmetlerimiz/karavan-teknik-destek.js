import React from "react";

import { ServicesFigure } from "../../components/figures";
import {
  WithIcon,
  Theme as ThemeButton,
  ContinueTo,
} from "../../components/buttons";
import { Call } from "../../components/icons/solid";
import { Pages } from "../../constants";

const ServiceSupportPage = () => {
  return (
    <>
      <div className="pageLead">
        <ServicesFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>
            {" "}
            Karavan Tadilatı ve Üretim Sonrası
            Destek
          </h1>
        </div>
      </div>
      <section className="section-wrap wrap-simple-row">
        <div className="row-span-2">
          <p className="text-lg">
            Karavanınızla ilgili her türlü tadilat
            ve onarım işleri için de hizmet
            sunuyoruz. En küçük işçiliğe kadar,
            karavanınızı getirin sizin için
            ilgilenelim.
          </p>
          <ThemeButton className="ml-auto laptop:ml-0 mt-4">
            Bize Ulaşın
          </ThemeButton>
        </div>
      </section>
      <ContinueTo
        className="ml-auto mr-mobile laptop:mr-wrapper"
        to={Pages.hizmetlerimiz}
      >
        Hizmetlerimiz
      </ContinueTo>
    </>
  );
};

export default ServiceSupportPage;

import React from "react";

import { ServicesFigure } from "../../components/figures";
import {
  WithIcon,
  ContinueTo,
} from "../../components/buttons";
import { Call } from "../../components/icons/solid";
import { Pages } from "../../constants";

const ServiceConsultingPage = () => {
  return (
    <>
      <div className="pageLead">
        <ServicesFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>Ücretsiz Karavan Danışmanlığı</h1>
        </div>
      </div>
      <section className="section-wrap wrap-simple-row">
        <div className="row-span-2">
          <p className="text-lg">
            Karavan üretmeyi sevdiğimiz kadar
            üzerine konuşmayı da seviyoruz.
            Karavan sahibi olmaya karar verdikten
            sonra kafanızda süreç hakkında birçok
            soru belirecektir. Rotasız karavan
            olarak ücretsiz olarak bu sorularınızı
            yanıtlıyoruz. İletişime geçmeniz
            yeterli!
          </p>
          <WithIcon className="ml-auto laptop:ml-0 mt-4">
            <Call className="mr-4" /> İletişim
          </WithIcon>
        </div>
      </section>
      <ContinueTo
        className="ml-auto mr-mobile laptop:mr-wrapper"
        to={Pages.planlama}
      >
        Planlama & Tasarım
      </ContinueTo>
    </>
  );
};

export default ServiceConsultingPage;

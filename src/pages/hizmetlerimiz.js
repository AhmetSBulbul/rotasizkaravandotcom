import React from "react";

import { ServicesFigure } from "../components/figures";
import {
  WithIcon,
  Theme as ThemeButton,
  ContinueTo,
} from "../components/buttons";
import { Call } from "../components/icons/solid";
import SEO from "../components/seo";

const OurServicesPage = () => {
  return (
    <>
      <SEO
        title="Hizmetlerimiz"
        pathname="/hizmetlerimiz"
      />
      <div className="pageLead">
        <ServicesFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>Hizmetlerimiz</h1>
        </div>
      </div>
      <section className="section-wrap wrap-simple-row text-center ">
        <div>
          <h2 className="big-title mb-4">
            Karavan Danışmanlığı
          </h2>
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
          <WithIcon className="mx-auto mt-4">
            <Call className="mr-4" /> İletişim
          </WithIcon>
        </div>
        <div>
          <h2 className="big-title mb-4">
            Planlama & Tasarım
          </h2>
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
          <ContinueTo className="mx-auto mt-4">
            Rotasız Albüm
          </ContinueTo>
        </div>
      </section>
      <section className="section-wrap wrap-simple-row text-center">
        <div className="mb-12 laptop:mb-0">
          <h2 className="big-title mb-4">
            Karavan İmalatı
          </h2>
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
          <ContinueTo className="mx-auto mt-4">
            İşlerimiz
          </ContinueTo>
        </div>
        <div>
          <h2 className="big-title mb-4">
            Karavan Tadilatı ve Üretim Sonrası
            Destek
          </h2>
          <p className="text-lg">
            Karavanınızla ilgili her türlü tadilat
            ve onarım işleri için de hizmet
            sunuyoruz. En küçük işçiliğe kadar,
            karavanınızı getirin sizin için
            ilgilenelim.
          </p>
          <ThemeButton className="mx-auto mt-4">
            Bize Ulaşın
          </ThemeButton>
        </div>
      </section>
    </>
  );
};

export default OurServicesPage;

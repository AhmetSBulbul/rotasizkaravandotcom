import React from "react";
import SEO from "../components/seo";

import { AboutUsFigure } from "../components/figures";
import {
  RotasizlarFigure,
  RotasizlarBeach,
  RotasizlarHarbour,
} from "../components/figures";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <>
      <SEO
        title="Hakkımızda"
        pathname="/hakkimizda"
      />
      <div className="pageLead">
        <AboutUsFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>Hakkımızda</h1>
        </div>
      </div>

      <div className="section-wrap wrap-simple-row">
        <div className="flex flex-col justify-self-center place-self-center text-center">
          <h3 className="big-title mb-8">
            Hayalinizdeki Karavana Bugün Kavuşmak
            İstemez misiniz?
          </h3>
          <p className="text-lg">
            Rotasız Karavan olarak, istek ve
            ihtiyaçlarınıza göre, hep hayalini
            kurduğunuz o karavanı sizin için ve
            size özel olarak gerçekleştirip
            hayallerinizin yerini, ev konforunda
            yaptığınız seyahatler ve onun güzel
            anılarıyla doldurmak için çalışıyor,
            çabalıyoruz.
          </p>
        </div>
        <div className="flex flex-row-reverse laptop:w-4/5 justify-self-center items-center justify-center">
          <div className="flex flex-col-reverse flex-1 items-start px-3">
            <RotasizlarHarbour className="rounded-lg mt-6 w-10/12" />
            <RotasizlarFigure className="rounded-lg" />
          </div>
          <div className="flex flex-col flex-1 px-3 items-end">
            <RotasizlarBeach className="rounded-lg mb-6 w-4/5" />
            <StaticImage
              src="../images/rotasizlar-4.jpg"
              alt=""
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="section-wrap section-gray wrap-simple-row place-items-center">
        <div className="flex flex-col items-center text-center laptop:items-center">
          <h2 className="big-title mb-8">
            Ortak Tutku ve Hayallere Sahibiz!
          </h2>
          <p className="laptop:text-lg">
            Rotasız Karavan, sizler ile ortak
            paylaştığımız hayaller sonucu kurulmuş
            bir işletmedir.
            <br />
            <br />
            Paylaştığımız bu tutku ve hayaller,
            işimizi severek yapmamıza, aynı
            zamanda isteklerinizi ve
            ihtiyaçlarınızı eksiksiz anlamamıza
            yardımcı oluyor.
          </p>
        </div>
        <StaticImage
          src="../images/map-on-road-inside.jpg"
          alt=""
          className="rounded-lg h-96 laptop:order-first"
        />
      </div>
      <div className="section-wrap wrap-simple-row place-items-center">
        <div className="text-center laptop:text-left">
          <h2 className="big-title mb-8">
            Ürettiğimiz Her Karavan, Bizim İçin
            Bir Karavandan Fazlası...
          </h2>

          <p className="text-lg">
            Bizim için sadece birer müşteri değil
            aynı zamanda keşfedebileceğimiz yeni
            bir yer, dinleyebileceğimiz eşşiz anı
            ve hatıralarsınız.
            <br />
            <br />
            Ürettiğimiz her karavan bizleri ilk
            karavanımızmış gibi heyecanlandırıyor.
            Çünkü biliyoruz ki planlama
            aşamasından anahtarı sizlere teslim
            ettiğimiz ana kadar, aracısı olmak
            için sabırsızlandığımız ve gözümüzde
            canlandırdığımız, yaşanacak muhteşem
            anlardan çok daha fazlasını yaşayacak,
            deneyimleyeceksiniz.
            <br />
            <br />
            İşte bu yüzden bizler için teslim
            ettiğimiz her karavan, sadece birer
            araç değil, aynı zamanda dinlemeyi
            sabırsızlıkla beklediğimiz birer
            hikaye...
          </p>
        </div>
        <StaticImage
          src="../images/coffee.jpg"
          alt=""
          objectFit="cover"
          objectPosition="bottom"
          className="rounded-lg h-2/3"
        />
      </div>
    </>
  );
};

export default AboutPage;

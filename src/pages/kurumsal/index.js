import React from "react";

import { AboutUsFigure } from "../../components/figures";
import {
  RotasizlarFigure,
  RotasizlarBeach,
  RotasizlarHarbour,
} from "../../components/figures";

const AboutPage = () => {
  return (
    <>
      <div className="pageLead">
        <AboutUsFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>Hakkımızda</h1>
        </div>
      </div>
      <div className="w-full py-8 px-mobile laptop:px-24">
        <div className="flex flex-col laptop:flex-row justify-center">
          <div className="flex flex-col laptop:flex-1 laptop:mr-48 justify-center text-center laptop:text-left">
            <h3 className="big-title mb-8">
              Hayalinizdeki Karavana Bugün
              Kavuşmak İstemez misiniz?
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
          <div className="flex flex-row-reverse my-16 laptop:my-0 laptop:w-2/5 items-center justify-center laptop:-mx-4">
            <div className="flex flex-col items-end px-3">
              <RotasizlarHarbour className="rounded-lg mb-6" />
              <RotasizlarFigure className="rounded-lg" />
            </div>
            <div className="px-3">
              <RotasizlarBeach className="rounded-lg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col laptop:my-16 items-center text-center laptop:items-center laptop:mx-auto laptop:w-2/3">
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

        <div className="text-center laptop:text-left">
          <RotasizlarHarbour className="rounded-lg w-full my-16 laptop:m-4 laptop:w-auto laptop:float-left" />
          <h2 className="big-title mb-8">
            Ürettiğimiz Her Karavan, Bizim İçin
            Bir Karavandan Fazlası...
          </h2>

          <p className="text-lg laptop:text-left">
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
      </div>
    </>
  );
};

export default AboutPage;

import React from "react";

import { AboutUsFigure } from "../../components/figures";
import { StaticImage } from "gatsby-plugin-image";

const SectionTemplate = ({ children }) => {
  return (
    <div className="grid items-center px-wrapper bg-gray-lightest rounded-md py-8 grid-cols-1 laptop:grid-cols-2 mb-24 gap-y-10 laptop:gap-y-32 gap-x-10 laptop:gap-x-24">
      <div>{children}</div>
      <div className="w-full h-full bg-gray-darkest py-48"></div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <>
      <div className="pageLead">
        <AboutUsFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>Hakkımızda</h1>
        </div>
      </div>
      <div className="w-full py-8">
        <div className="flex flex-col laptop:flex-row px-wrapper justify-center">
          <div className="flex flex-col mx-auto laptop:m-0 laptop:mr-16 laptop:w-1/2 justify-center">
            <h3 className="big-title mb-8">
              Hayalinizdeki Karavana Bugün
              Kavuşmak İstemez misiniz?
            </h3>
            <p>
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
          <div className="flex my-8 laptop:my-0 items-center justify-center laptop:-mx-4 desktop:pl-8">
            <div className="flex flex-col items-end px-3">
              <StaticImage
                src="../../images/map-on-road-inside.jpg"
                alt=""
                layout="constrained"
                objectFit="cover"
                height={500}
                className="rounded-lg mb-3"
              />
              <StaticImage
                src="../../images/rotasizlar.jpg"
                alt=""
                layout="constrained"
                objectFit="cover"
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="px-3">
              <StaticImage
                src="../../images/coffee.jpg"
                alt=""
                layout="constrained"
                objectFit="cover"
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center my-16 text-center">
          <h2 className="big-title mb-8">
            Ortak Tutku ve Hayallere Sahibiz!
          </h2>
          <p className="laptop:mx-qtrVW">
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
        <SectionTemplate>
          <h3>Vizyonumuz</h3>
          <h2>
            Ürettiğimiz Her Karavan, Bizim İçin
            Bir Karavandan Fazlası...
          </h2>
          <p>
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
        </SectionTemplate>
      </div>
    </>
  );
};

export default AboutPage;

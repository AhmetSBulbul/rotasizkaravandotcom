import React from "react";

import { AboutUsFigure } from "../../components/figures";

const SectionTemplate = ({ children }) => {
  return (
    <div className="grid items-center grid-cols-1 laptop:grid-cols-2 mb-24 gap-y-10 laptop:gap-y-32 gap-x-10 laptop:gap-x-24">
      <div>{children}</div>
      <div className="w-full h-full bg-gray-600 py-48"></div>
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
      <div className="w-full px-wrapper py-14 bg-white-dirty">
        <SectionTemplate>
          <h3>Biz Kimiz?</h3>
          <h2>
            Hayalinizdeki Karavana Bugün Kavuşmak
            İstemez misiniz?
          </h2>
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
        </SectionTemplate>
        <SectionTemplate>
          <h3>Neden Biz?</h3>
          <h2>
            Ortak Tutku ve Hayallere Sahibiz!
          </h2>
          <p>
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
        </SectionTemplate>
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

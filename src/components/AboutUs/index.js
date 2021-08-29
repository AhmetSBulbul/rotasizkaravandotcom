import React from "react";
import ContentCard from "./__contentCard";
import * as styles from "./index.module.css";
import cn from "classnames";

export default function AboutUs({ children }) {
  return (
    <section className={styles.aboutUsSection}>
      <div className={styles.container}>
        <ContentCard
          subject="Biz Kimiz?"
          title="Hayalinizdeki Karavana Bugün Kavuşmak İstemez misiniz?"
        >
          Rotasız Karavan olarak, istek ve
          ihtiyaçlarınıza göre, hep hayalini
          kurduğunuz o karavanı sizin için ve size
          özel olarak gerçekleştirip
          hayallerinizin yerini, ev konforunda
          yaptığınız seyahatler ve onun güzel
          anılarıyla doldurmak için çalışıyor,
          çabalıyoruz.
        </ContentCard>
        <ContentCard
          reverse
          subject="Neden Biz?"
          title="Ortak Tutku ve Hayallere Sahibiz!"
        >
          Rotasız Karavan, sizler ile ortak
          paylaştığımız hayaller sonucu kurulmuş
          bir işletmedir.
          <br />
          <br />
          Paylaştığımız bu tutku ve hayaller,
          işimizi severek yapmamıza, aynı zamanda
          isteklerinizi ve ihtiyaçlarınızı
          eksiksiz anlamamıza yardımcı oluyor.
        </ContentCard>
        <ContentCard
          subject="Vizyonumuz"
          title="Ürettiğimiz Her Karavan, Bizim İçin Bir Karavandan Fazlası..."
        >
          Bizim için sadece birer müşteri değil
          aynı zamanda keşfedebileceğimiz yeni bir
          yer, dinleyebileceğimiz eşşiz anı ve
          hatıralarsınız.
          <br />
          <br />
          Ürettiğimiz her karavan bizleri ilk
          karavanımızmış gibi heyecanlandırıyor.
          Çünkü biliyoruz ki planlama aşamasından
          anahtarı sizlere teslim ettiğimiz ana
          kadar, aracısı olmak için
          sabırsızlandığımız ve gözümüzde
          canlandırdığımız, yaşanacak muhteşem
          anlardan çok daha fazlasını yaşayacak,
          deneyimleyeceksiniz.
          <br />
          <br />
          İşte bu yüzden bizler için teslim
          ettiğimiz her karavan, sadece birer araç
          değil, aynı zamanda dinlemeyi
          sabırsızlıkla beklediğimiz birer
          hikaye...
        </ContentCard>
      </div>
    </section>
  );
}

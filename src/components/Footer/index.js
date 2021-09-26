import React from "react";
import * as styles from "./index.module.css";
import { Link } from "gatsby";
import { Pages } from "../../constants";

export default function Footer({ children }) {
  return (
    <section className={styles.footerSection}>
      <div className={styles.container}>
        <iframe
          title="rotasiz-map"
          loading="lazy"
          className="w-full h-96 md:w-3/5"
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ32OKIVuTwxQRdE93GdMJ4Ls&key=AIzaSyD54TSd_7gV50TdlvvnJR12XaFt22RsXL8"
        ></iframe>
        <div className={styles.footerMenu}>
          <h5>Kurumsal</h5>
          <ol className={styles.menuList}>
            <Link
              className={styles.link}
              to={Pages.hakkimizda}
            >
              Hakkımızda
            </Link>
            <Link
              className={styles.link}
              to={Pages.iletisim}
            >
              İletişim
            </Link>
            <Link
              className={styles.link}
              to={Pages.sss}
            >
              S.S.S
            </Link>
          </ol>
        </div>
        <div className={styles.footerMenu}>
          <h5>Hizmetlerimiz</h5>
          <ol className={styles.menuList}>
            <Link
              className={styles.link}
              to={Pages.danisma}
            >
              Karavan Danışmanlığı
            </Link>
            <Link
              className={styles.link}
              to={Pages.planlama}
            >
              Planlama & Tasarım
            </Link>
            <Link
              className={styles.link}
              to={Pages.imalat}
            >
              Karavan İmalatı
            </Link>
            <Link
              className={styles.link}
              to={Pages.destek}
            >
              Karavan Teknik Destek
            </Link>
          </ol>
        </div>
        <div className={styles.footerMenu}>
          <h5>Karavan</h5>
          <ol className={styles.menuList}>
            <Link
              className={styles.link}
              to={Pages.islerimiz}
            >
              İşlerimiz
            </Link>
            <Link
              className={styles.link}
              to={Pages.blog}
            >
              Blog
            </Link>
            <Link
              className={styles.link}
              to={Pages.galeri}
            >
              Fotoğraf Galerisi
            </Link>
          </ol>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import * as styles from "./index.module.css";
import { Link } from "gatsby";
import { Pages } from "../../constants";
import {
  Call,
  Pin,
  Mail,
} from "../icons/solid-icons";

const NavItem = ({ children, ...props }) => {
  return (
    <Link
      to={props.to}
      className="link text-white mr-auto my-1"
    >
      {children}
    </Link>
  );
};

const ContactItem = ({
  children,
  Icon = Call,
}) => {
  return (
    <div className="font-display font-black text-lg text-white my-4">
      <Icon
        fill="#fff"
        className="inline-block mr-4 text-2xl"
      />
      {children}
    </div>
  );
};

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerNav}>
        <NavItem to={Pages.hakkimizda}>
          Hakkımızda
        </NavItem>
        <NavItem to={Pages.islerimiz}>
          İşlerimiz
        </NavItem>

        <NavItem to={Pages.blog}>Blog</NavItem>
        <NavItem to={Pages.galeri}>
          Fotoğraf Galerisi
        </NavItem>
        <NavItem to={Pages.iletisim}>
          İletişim
        </NavItem>
        <NavItem
          className={styles.link}
          to={Pages.sss}
        >
          Sık Sorulan Sorular
        </NavItem>
        <div className={styles.footerMenu}>
          <NavItem to={Pages.hizmetlerimiz}>
            Hizmetlerimiz
          </NavItem>
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
      </div>

      <div className={styles.footerContact}>
        <div className={styles.contact}>
          <h5 className="big-title text-3xl mb-6">
            İletişim
          </h5>
          <ContactItem Icon={Call}>
            +90 (505) 877 78 88
          </ContactItem>
          <ContactItem>
            +90 (534) 554 32 83
          </ContactItem>
          <ContactItem Icon={Mail}>
            rotasizkaravan@gmail.com
          </ContactItem>
          <ContactItem Icon={Pin}>
            Aşağıkaraman, 07070 Konyaaltı/Antalya
          </ContactItem>
        </div>
        <div className={styles.mapAspectRatio}>
          <iframe
            title="rotasiz-map"
            loading="lazy"
            className={styles.map}
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ32OKIVuTwxQRdE93GdMJ4Ls&key=AIzaSyD54TSd_7gV50TdlvvnJR12XaFt22RsXL8"
          />
        </div>
      </div>
    </footer>
  );
}

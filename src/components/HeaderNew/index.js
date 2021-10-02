import React from "react";
import Logo from "../Logo";
import * as styles from "./index.module.css";
import useToggle from "../../hooks/useToggle";
import cn from "classnames";
import { Link } from "gatsby";
import {
  Close,
  Call,
} from "../icons/solid-icons";
import { Pages } from "../../constants";

const MenuBtn = ({ ...props }) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={cn([
        styles.menuBtn,
        props.isActive && styles.menuBtnActive,
      ])}
    >
      <div
        className={cn([
          styles.btnIcon,
          styles.barWrapper,
        ])}
      >
        <div />
        <div />
        <div />
      </div>
      <div
        className={cn([
          styles.btnIcon,
          styles.closeIconWrap,
        ])}
      >
        <Close fill="#fff" />
      </div>
    </button>
  );
};

const styleLink =
  "link text-white text-xl laptop:text-lg";

const NavItem = ({ children, ...props }) => {
  return (
    <Link
      to={props.to}
      className={cn([styleLink, styles.navItem])}
    >
      {children}
    </Link>
  );
};

const NewNavigation = ({ ...props }) => {
  return (
    <nav className={cn([styles.newNavigation])}>
      <NavItem to={Pages.hakkimizda}>
        Hakkımızda
      </NavItem>
      <NavItem to={Pages.hizmetlerimiz}>
        Hizmetlerimiz
      </NavItem>
      <NavItem to={Pages.islerimiz}>
        İşlerimiz
      </NavItem>
      <NavItem to={Pages.galeri}>Galeri</NavItem>
      <NavItem to={Pages.blog}>Blog</NavItem>
    </nav>
  );
};

const styleBtnText =
  "button-text text-white text-lg";

const ContactUsBtn = ({ ...props }) => {
  return (
    <button
      type="button"
      className={cn([
        styleBtnText,
        styles.contactBtn,
      ])}
    >
      <Call
        fill="#fff"
        className="mr-2 inline-block text-lg"
      />
      Bize Ulaşın
    </button>
  );
};

const Menu = ({ ...props }) => {
  return (
    <div
      className={cn([
        styles.menu,
        props.isActive && styles.menuActive,
      ])}
    >
      <NewNavigation />

      <ContactUsBtn />
    </div>
  );
};

export default function HeaderNew() {
  const [isMenuActive, setIsMenuActive] =
    useToggle();
  const sublinkStyle = "sub-link";
  return (
    <header className="relative">
      <div
        className={cn([
          styles.headerTop,
          sublinkStyle,
        ])}
      >
        <div className="ml-4">Kurumsal</div>
        <div className="ml-4">İletişim</div>
        <div className="ml-4">
          Kullanıcı Sözleşmesi
        </div>
        <div className="mx-4">TR</div>
      </div>
      <div className={styles.mainHeader}>
        <Link
          to="/"
          className="z-sky-1"
          onClick={
            isMenuActive && setIsMenuActive
          }
        >
          <Logo />
        </Link>
        <MenuBtn
          onClick={setIsMenuActive}
          isActive={isMenuActive}
        />
        <Menu isActive={isMenuActive} />
      </div>
    </header>
  );
}

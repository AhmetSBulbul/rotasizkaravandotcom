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
import useWindowSize from "../../hooks/useWindowSize";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import * as Figures from "../figures";

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

const NavItem = ({
  children,
  BgImage = Figures.HeroFigure,
  ...props
}) => {
  return (
    <div className={styles.navItemWrap}>
      <div className={styles.navItemBgWrap}>
        <BgImage className={styles.navItemBg} />
      </div>
      <Link
        to={props.to}
        onClick={props.onClick}
        className={cn([
          styleLink,
          styles.navItem,
        ])}
      >
        {children}
      </Link>
    </div>
  );
};

const NewNavigation = ({ ...props }) => {
  return (
    <nav className={cn([styles.newNavigation])}>
      <NavItem
        to={Pages.hakkimizda}
        onClick={props.onClick}
        BgImage={Figures.AboutUsFigure}
      >
        Hakkımızda
      </NavItem>
      <NavItem
        to={Pages.hizmetlerimiz}
        onClick={props.onClick}
        BgImage={Figures.ServicesFigure}
      >
        Hizmetlerimiz
      </NavItem>
      <NavItem
        to={Pages.islerimiz}
        onClick={props.onClick}
        BgImage={Figures.WorksFigure}
      >
        İşlerimiz
      </NavItem>
      <NavItem
        to={Pages.galeri}
        onClick={props.onClick}
        BgImage={Figures.GalleryFigure}
      >
        Galeri
      </NavItem>
      <NavItem
        to={Pages.blog}
        onClick={props.onClick}
        BgImage={Figures.BlogFigure}
      >
        Blog
      </NavItem>
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
      style={{
        "--mobile-inner-height": `${props.height}px`,
      }}
    >
      <NewNavigation onClick={props.onClick} />

      <ContactUsBtn />
    </div>
  );
};

export default function HeaderNew() {
  const [isMenuActive, setIsMenuActive] =
    useToggle();
  const size = useWindowSize();
  const sublinkStyle = "sub-link";
  const isMobile = size.width < 1024;
  const shouldILockBodyScroll =
    isMobile && isMenuActive;

  useLockBodyScroll(shouldILockBodyScroll);
  /*menuActive css sınıfı isMobile sartina da baglanacak  */

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
        <Menu
          isActive={isMenuActive}
          onClick={
            isMenuActive && setIsMenuActive
          }
          height={size.height}
        />
      </div>
    </header>
  );
}

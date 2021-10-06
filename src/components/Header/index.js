import React from "react";
import { LogoFigure } from "../figures";
import * as styles from "./index.module.css";
import useToggle from "../../hooks/useToggle";
import cn from "classnames";
import { Link } from "gatsby";
import { Close, Call } from "../icons/solid";
import { Pages } from "../../constants";
import useWindowSize from "../../hooks/useWindowSize";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import * as Figures from "../figures";
import { WithIcon as WithIconButton } from "../buttons";

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
  "link text-white text-xl antialised laptop:text-lg";

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

const Navigation = ({ ...props }) => {
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

const ContactUsBtn = ({ ...props }) => {
  return (
    <WithIconButton
      className="border-white text-white rounded-lg"
      to={Pages.contactUs}
    >
      <Call className="mr-2" />
      Bize Ulaşın
    </WithIconButton>
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
      <Navigation onClick={props.onClick} />

      <ContactUsBtn />
    </div>
  );
};

const SubLink = ({ children, ...props }) => (
  <Link
    to={props.to}
    className="font-display font-semibold mx-2"
  >
    {children}
  </Link>
);

export default function Header() {
  const [isMenuActive, setIsMenuActive] =
    useToggle();
  const size = useWindowSize();
  const isMobile = size.width < 1024;
  const shouldILockBodyScroll =
    isMobile && isMenuActive;

  useLockBodyScroll(shouldILockBodyScroll);
  /*menuActive css sınıfı isMobile sartina da baglanacak  */

  return (
    <header className="relative">
      <div className={cn([styles.headerTop])}>
        <SubLink to={Pages.iletisim}>
          İletişim
        </SubLink>
        <SubLink to={Pages.sss}>S.S.S</SubLink>

        <h5 className="mr-6 ml-2 text-base">
          TR
        </h5>
      </div>
      <div className={styles.mainHeader}>
        <Link
          to="/"
          className="z-sky-1"
          onClick={
            isMenuActive && setIsMenuActive
          }
        >
          <LogoFigure />
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

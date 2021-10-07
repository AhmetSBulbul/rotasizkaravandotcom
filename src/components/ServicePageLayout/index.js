import React from "react";
import { Link } from "gatsby";
import { Pages } from "../../constants";
import { ServicesFigure } from "../figures";
import * as styles from "./index.module.css";

const SubPageLink = ({ children, ...props }) => (
  <Link
    to={props.to}
    className={styles.subPageLink}
    activeClassName={styles.linkActive}
  >
    {children}
  </Link>
);

const ServicesPageTemplate = ({
  children,
  title,
}) => {
  return (
    <>
      <div className="pageLead">
        <ServicesFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>Hizmetlerimiz</h1>
        </div>
      </div>
      <div className={styles.pageWrap}>
        <div className={styles.links}>
          <SubPageLink to={Pages.danisma}>
            Karavan Danışmanlığı
          </SubPageLink>
          <SubPageLink to={Pages.planlama}>
            Planlama & Tasarım
          </SubPageLink>
          <SubPageLink to={Pages.imalat}>
            Karavan İmalatı
          </SubPageLink>
          <SubPageLink to={Pages.destek}>
            Tamir ve Tadilat
          </SubPageLink>
        </div>
        <div className={styles.pageBody}>
          <h2 className={styles.pageTitle}>
            {title}
          </h2>
          <p className="text-lg">{children}</p>
        </div>
      </div>
    </>
  );
};

export default ServicesPageTemplate;

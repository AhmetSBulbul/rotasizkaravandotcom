import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import * as styles from "./index.module.css";
import FloatContactButton from "../components/FloatContactButton";
import SEO from "../components/seo";

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className={styles.outerContainer}>
        <div className={styles.wrapper}>
          <Header />
          {children}
          <FloatContactButton />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;

//Header whitespace padding top

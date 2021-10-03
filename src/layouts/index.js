import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import * as styles from "./index.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.wrapper}>
        <Helmet title="Rotasız Karavan" />
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

//Header whitespace padding top

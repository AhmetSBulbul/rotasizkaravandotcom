import React from "react";
import HeaderNew from "../components/HeaderNew";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import * as styles from "./index.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <Helmet title="Rotasız Karavan" />
        <HeaderNew />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

//Header whitespace padding top

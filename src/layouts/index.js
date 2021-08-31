import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-screen overflow-x-hidden">
      <Helmet title="Rotasız Karavan" />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

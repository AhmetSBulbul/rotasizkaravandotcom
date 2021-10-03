import React from "react";
import AboutUs from "../../components/AboutUs";
import { StaticImage } from "gatsby-plugin-image";
import { AboutUsFigure } from "../../components/figures";

const AboutPage = () => {
  return (
    <>
      <div className="pageLead">
        <AboutUsFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>Hakkımızda</h1>
        </div>
      </div>

      <AboutUs />
    </>
  );
};

export default AboutPage;

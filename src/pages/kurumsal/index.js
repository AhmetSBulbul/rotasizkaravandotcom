import React from "react";
import AboutUs from "../../components/AboutUs";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <>
      <div className="pageLead">
        <StaticImage
          src="../../images/compass.jpg"
          alt=""
          layout="constrained"
          objectFit="cover"
          objectPosition="center"
          className="pageLeadImg"
        />
        <div className="pageLeadTitleBox w-full">
          <h1>Hakkımızda</h1>
        </div>
      </div>

      <AboutUs />
    </>
  );
};

export default AboutPage;

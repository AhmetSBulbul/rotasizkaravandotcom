import React from "react";
import OldAboutUs from "../../components/OldAboutUs";

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

      <OldAboutUs />
    </>
  );
};

export default AboutPage;

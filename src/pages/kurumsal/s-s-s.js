import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { AboutUsFigure } from "../../components/figures";

const FaqsPage = () => {
  return (
    <>
      <div className="pageLead">
        <AboutUsFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>Sık Sorulan Sorular</h1>
        </div>
      </div>
    </>
  );
};

export default FaqsPage;

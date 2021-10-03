import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { AboutUsFigure } from "../../components/figures";

const ContactPage = () => {
  return (
    <>
      <div className="pageLead">
        <AboutUsFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>İletişim</h1>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

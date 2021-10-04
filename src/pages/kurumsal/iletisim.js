import React from "react";

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
      <div className="my-4 bg-gray-darkest h-96 rounded-xl w-full block" />
    </>
  );
};

export default ContactPage;

import React from "react";

import { AboutUsFigure } from "../../components/figures";
import * as Icon from "../../components/icons/solid";
import * as Button from "../../components/buttons";
import { Pages } from "../../constants";

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

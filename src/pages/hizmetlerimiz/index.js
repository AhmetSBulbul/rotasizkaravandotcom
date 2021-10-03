import React from "react";
import SectionOurServices from "../../components/SectionOurServices";
import { ServicesFigure } from "../../components/figures";

const OurServicesPage = () => {
  return (
    <>
      <div className="pageLead">
        <ServicesFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>Hizmetlerimiz</h1>
        </div>
      </div>

      <SectionOurServices className="my-auto" />
    </>
  );
};

export default OurServicesPage;

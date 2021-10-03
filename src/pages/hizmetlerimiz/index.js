import React from "react";
import SectionOurServicesNew from "../../components/SectionOurServicesNew";
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

      <SectionOurServicesNew className="my-auto" />
    </>
  );
};

export default OurServicesPage;

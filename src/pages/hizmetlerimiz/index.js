import React from "react";
import SectionOurServicesNew from "../../components/SectionOurServicesNew";
import { StaticImage } from "gatsby-plugin-image";

const OurServicesPage = () => {
  return (
    <>
      <div className="pageLead">
        <StaticImage
          src="../../images/work-process.jpg"
          alt=""
          layout="constrained"
          objectFit="cover"
          objectPosition="center"
          className="pageLeadImg"
        />
        <div className="pageLeadTitleBox w-full">
          <h1>Hizmetlerimiz</h1>
        </div>
      </div>

      <SectionOurServicesNew className="my-auto" />
    </>
  );
};

export default OurServicesPage;

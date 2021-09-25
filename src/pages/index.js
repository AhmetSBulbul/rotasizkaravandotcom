import React from "react";

import SectionWhatWeDo from "../components/SectionWhatWeDo";

import SectionRotasizGallery from "../components/SectionRotasizGallery";
import SectionRecentPublished from "../components/SectionRecentPublished";

import HeroNew from "../components/HeroNew";
import SectionOurServicesNew from "../components/SectionOurServicesNew";
import Showroom from "../components/Showroom";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <>
      <HeroNew />
      <SectionWhatWeDo />
      <SectionOurServicesNew className="my-12" />
      <Showroom />
      <StaticImage
        className="my-12"
        src="../images/winter-road.jpg"
        alt=""
        width={2000}
        height={300}
        objectPosition="50% 100%"
      />

      <SectionRotasizGallery />
      <div className="w-full h-24 flex bg-primary my-12" />
      <div className="px-8 flex flex-col space-y-4">
        <div className="flex flex-col">
          <h2 className="sub-title">Blog</h2>
          <h3 className="big-title">
            Son Paylaşılanlar
          </h3>
        </div>
        <SectionRecentPublished />
      </div>
    </>
  );
};

export default IndexPage;

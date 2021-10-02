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
      <SectionOurServicesNew />
      <Showroom />

      <SectionRotasizGallery />

      <SectionRecentPublished />
    </>
  );
};

export default IndexPage;

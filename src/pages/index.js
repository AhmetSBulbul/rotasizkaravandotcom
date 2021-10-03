import React from "react";

import SectionWhatWeDo from "../components/SectionWhatWeDo";

import SectionRotasizGallery from "../components/SectionRotasizGallery";
import SectionRecentPublished from "../components/SectionRecentPublished";

import Hero from "../components/Hero";
import SectionOurServicesNew from "../components/SectionOurServicesNew";
import Showroom from "../components/Showroom";

const IndexPage = () => {
  return (
    <>
      <Hero />
      <SectionWhatWeDo />
      <SectionOurServicesNew />
      <Showroom />

      <SectionRotasizGallery />

      <SectionRecentPublished />
    </>
  );
};

export default IndexPage;

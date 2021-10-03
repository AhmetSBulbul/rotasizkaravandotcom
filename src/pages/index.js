import React from "react";

import SectionWhatWeDo from "../components/SectionWhatWeDo";

import SectionRotasizGallery from "../components/SectionRotasizGallery";
import SectionRecentPublished from "../components/SectionRecentPublished";

import Hero from "../components/Hero";
import SectionOurServices from "../components/SectionOurServices";
import Showroom from "../components/Showroom";

const IndexPage = () => {
  return (
    <>
      <Hero />
      <SectionWhatWeDo />
      <SectionOurServices />
      <Showroom />

      <SectionRotasizGallery />

      <SectionRecentPublished />
    </>
  );
};

export default IndexPage;

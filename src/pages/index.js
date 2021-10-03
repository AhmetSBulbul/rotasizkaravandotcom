import React from "react";

import SectionWhatWeDo from "../components/SectionWhatWeDo";

import SectionRotasizGallery from "../components/SectionRotasizGallery";
import SectionRecentPublished from "../components/SectionRecentPublished";

import Hero from "../components/Hero";
import SectionOurServices from "../components/SectionOurServices";
import SectionOurWorks from "../components/SectionOurWorks";

const IndexPage = () => {
  return (
    <>
      <Hero />
      <SectionWhatWeDo />
      <SectionOurServices />
      <SectionOurWorks />

      <SectionRotasizGallery />

      <SectionRecentPublished />
    </>
  );
};

export default IndexPage;

import React from "react";
import Hero from "../components/Hero";

import SectionWhatWeDo from "../components/SectionWhatWeDo";

import SectionOurServices from "../components/SectionOurServices";

import SectionRotasizGallery from "../components/SectionRotasizGallery";

const IndexPage = () => {
  return (
    <>
      <Hero />
      <SectionWhatWeDo />
      <SectionOurServices />
      <SectionRotasizGallery />
    </>
  );
};

export default IndexPage;

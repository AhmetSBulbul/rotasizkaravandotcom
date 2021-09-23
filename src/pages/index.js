import React from "react";
import Hero from "../components/Hero";

import SectionWhatWeDo from "../components/SectionWhatWeDo";

import SectionOurServices from "../components/SectionOurServices";

import SectionRotasizGallery from "../components/SectionRotasizGallery";
import SectionRecentPublished from "../components/SectionRecentPublished";
import { StaticImage } from "gatsby-plugin-image";
import Logo from "../components/Logo";
import { Link } from "gatsby";
import NavigationNew from "../components/NavigationNew";
import HeaderNew from "../components/HeaderNew";
import HeroNew from "../components/HeroNew";

const IndexPage = () => {
  return (
    <>
      <HeroNew />
      <SectionWhatWeDo className="px-8" />
      <SectionOurServices />
      <SectionRotasizGallery />
      <div className="px-8 flex flex-col space-y-4 mt-24">
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

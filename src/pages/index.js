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

const IndexPage = () => {
  return (
    <>
      {/**<Hero /> */}
      <div className="min-h-screen w-full">
        <div className="w-full relative">
          <StaticImage
            src="../backgrounds/winter-road.jpg"
            alt="campervan"
          />
          <div className="h-full w-full absolute top-0 z-30 flex flex-col px-4 justify-end bg-gradient-to-b from-black via-transparent">
            <div className="w-full md:w-1/3 py-2 px-4 mx-auto rounded-full font-display font-medium text-black bg-white">
              Size Nasıl Yardımcı Olabiliriz?
            </div>
          </div>
        </div>
      </div>
      <SectionWhatWeDo />
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

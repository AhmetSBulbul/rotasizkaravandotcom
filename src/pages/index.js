import React from "react";

import SectionWhatWeDo from "../components/SectionWhatWeDo";

import SectionRotasizGallery from "../components/SectionRotasizGallery";
import SectionRecentPublished from "../components/SectionRecentPublished";

import Hero from "../components/Hero";
import SectionOurWorks from "../components/SectionOurWorks";
import CardLink from "../components/CardLink";
import { Pages } from "../constants";

const IndexPage = () => {
  return (
    <>
      <Hero />
      <SectionWhatWeDo />
      {/*<SectionOurServices />*/}
      <div className="flex flex-col w-full justify-center my-12 laptop:px-wrapper">
        <h3 className="sub-title text-center">
          Hizmetlerimiz
        </h3>
        <h2 className="big-title text-center">
          Size Nasıl Yardımcı Olabiliriz?
        </h2>
        <div className="grid grid-flow-row laptop:grid-flow-col laptop:gap-2 py-mobile gap-mobile mt-8">
          <CardLink to={Pages.danisma}>
            <h3>Karavan Danismanligi</h3>
            <p>
              If any Environment Variables values
              are changed between Deployments,
              deduplication will always be
              bypassed.
            </p>
          </CardLink>
          <CardLink to={Pages.planlama}>
            <h3>Planlama & Tasarim</h3>
            <p>
              If any Environment Variables values
              are changed between Deployments,
              deduplication will always be
              bypassed.
            </p>
          </CardLink>
          <CardLink to={Pages.imalat}>
            <h3>Karavan Imalati</h3>
            <p>
              If any Environment Variables values
              are changed between Deployments,
              deduplication will always be
              bypassed.
            </p>
          </CardLink>
          <CardLink to={Pages.destek}>
            <h3>Karavan Teknik Destek</h3>
            <p>
              If any Environment Variables values
              are changed between Deployments,
              deduplication will always be
              bypassed.
            </p>
          </CardLink>
        </div>
      </div>
      <SectionOurWorks />

      <SectionRotasizGallery />

      <SectionRecentPublished />
    </>
  );
};

export default IndexPage;

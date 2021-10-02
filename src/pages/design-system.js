import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const DesignSystemPage = () => {
  return (
    <>
      <div className="pageLead">
        <StaticImage
          src="../images/compass.jpg"
          alt=""
          layout="constrained"
          objectFit="cover"
          objectPosition="center"
          className="pageLeadImg"
        />
        <div className="pageLeadTitleBox w-full">
          <h1>Rotasız Tasarım Sistemi</h1>
        </div>
      </div>
      <div className="flex flex-col w-full min-h-screen mt-20 px-wrapper space-y-8">
        <div className="flex flex-col w-full px-wrapper">
          <h1 className="big-title border-b-2 border-t-2 border-secondary py-4">
            Tipografi
          </h1>

          <h1>H1 - Rotasiz Karavan</h1>
          <h2>H2 - Rotasiz Karavan</h2>
          <h3>H3 - Rotasiz Karavan</h3>
          <h4>H4 - Rotasiz Karavan</h4>
          <h5>H5 - Rotasiz Karavan</h5>
          <h4 className="sub-title">Sub Title</h4>
          <h3 className="big-title">Big Title</h3>
          <p>
            <span className="bg-black text-white font-bold px-2 py-1">
              P
            </span>{" "}
            - It is a long established fact that a
            reader will be distracted by the
            readable content of a page when
            looking at its layout. The point of
            using Lorem Ipsum is that it has a
            more-or-less normal distribution of
            letters, as opposed to using 'Content
            here, content here', making it look
            like readable English. Many desktop
            publishing packages and web page
            editors now use Lorem Ipsum as their
            default model text, and a search for
            'lorem ipsum' will uncover many web
            sites still in their infancy. Various
            versions have evolved over the years,
            sometimes by accident, sometimes on
            purpose (injected humour and the
            like).
          </p>
          <div className="border-2 border-black px-4 py-4 my-4">
            Body text
          </div>

          <span className="font-display font-bold text-secondary text-xl">
            Link
          </span>
          <span className="font-display font-bold text-primary text-2xl">
            Big Link
          </span>
          <span className="font-display font-medium text-gray-600 text-base">
            Sub Link
          </span>
          <span className="font-display mr-auto font-medium text-secondary text-xl border-2 border-secondary px-6 py-2 my-4">
            Button
          </span>
          <span className="font-display mr-auto font-bold text-white bg-primary text-3xl px-6 py-3 my-4">
            Big Button
          </span>
        </div>
        <div className="flex flex-col w-full px-wrapper space-y-4">
          <h1 className="big-title border-b-2 border-t-2 border-secondary py-4 mb-8">
            Spacing
          </h1>
          <span>wrapper</span>
          <div className="h-wrapper w-wrapper block bg-white-not" />
          <span>mobile</span>
          <div className="h-mobile w-mobile block bg-white-not" />
          <span>outer</span>
          <div className="h-outer w-outer block bg-white-not" />
          <span>inner</span>
          <div className="h-inner w-inner block bg-white-not" />
          <span>width qtr</span>
          <div className="h-wrapper w-qtr block bg-white-not" />
          <span>width half</span>
          <div className="h-wrapper w-half block bg-white-not" />
          <span>qtrVW</span>
          <div className="h-qtrVW w-qtrVW block bg-white-not" />
          <span>halfVW</span>
          <div className="h-halfVW w-halfVW block bg-white-not" />
        </div>
      </div>
    </>
  );
};

export default DesignSystemPage;

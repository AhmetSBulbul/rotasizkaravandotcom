import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const WorksPage = () => {
  return (
    <>
      <div className="pageLead">
        <StaticImage
          src="../../images/rotasizlar.jpg"
          alt=""
          layout="constrained"
          objectFit="cover"
          objectPosition="center"
          className="pageLeadImg"
        />
        <div className="pageLeadTitleBox w-full">
          <h1>İşlerimiz</h1>
        </div>
      </div>
    </>
  );
};

export default WorksPage;

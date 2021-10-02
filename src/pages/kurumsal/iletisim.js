import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ContactPage = () => {
  return (
    <>
      <div className="pageLead">
        <StaticImage
          src="../../images/coffee.jpg"
          alt=""
          layout="constrained"
          objectFit="cover"
          objectPosition="center"
          className="pageLeadImg"
        />
        <div className="pageLeadTitleBox w-full">
          <h1>İletişim</h1>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

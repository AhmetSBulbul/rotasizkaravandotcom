import React from "react";

import { AboutUsFigure } from "../../components/figures";
import * as Icon from "../../components/icons/solid";
import * as Button from "../../components/buttons";
import { Pages } from "../../constants";
import Card from "../../components/Card";
import { StaticImage } from "gatsby-plugin-image";

const ContactPage = () => {
  return (
    <>
      <div className="pageLead">
        <AboutUsFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>İletişim</h1>
        </div>
      </div>
      <div className="flex">
        <div className="p-14 space-y-4 flex flex-col items-baseline bg-gray-lightest mr-2">
          <Button.Theme>Button</Button.Theme>
          <Button.Theme to={Pages.blog}>
            Link
          </Button.Theme>
          <Button.Icon>
            <Icon.Call />
          </Button.Icon>
          <Button.Icon to={Pages.hakkimizda}>
            <Icon.Question />
          </Button.Icon>
          <Button.WithIcon>
            <Icon.Magnifier className="mr-2" />{" "}
            Button with icon
          </Button.WithIcon>
          <Button.WithIcon to={Pages.islerimiz}>
            <Icon.Call className="mr-3" />
            Link with icon
          </Button.WithIcon>
          <Button.ContinueTo to={Pages.contactUs}>
            Link Continue
          </Button.ContinueTo>
          <Button.ContinueTo>
            Button Continue
          </Button.ContinueTo>
        </div>
        <div className="p-14 space-y-4 grid grid-cols-3 items-baseline bg-gray-lightest">
          <Card>
            <StaticImage
              src="../../images/coffee.jpg"
              alt=""
              layout="constrained"
              objectFit="cover"
              height={600}
              width={740}
            />
            <div className="p-mobile w-full h-full flex flex-col">
              <h3>Title</h3>
              <h2>Ufak bir yazi</h2>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

import React from "react";

import { AboutUsFigure } from "../../components/figures";
import {
  Call,
  Pin,
  Mail,
} from "../../components/icons/solid";
import { Whatsapp } from "../../components/icons/colorful";

const ContactItem = ({
  children,
  Icon = Call,
}) => {
  return (
    <div className="font-display font-black text-lg text-black my-4">
      <Icon className="inline-block mr-4 text-2xl" />
      {children}
    </div>
  );
};

const ContactPage = () => {
  return (
    <>
      <div className="pageLead">
        <AboutUsFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>İletişim</h1>
        </div>
      </div>
      <div className="section-wrap wrap-simple-row section-gray">
        <div className="flex flex-col justify-center">
          <ContactItem Icon={Call}>
            +90 (505) 877 78 88
          </ContactItem>
          <ContactItem Icon={Whatsapp}>
            +90 (505) 877 78 88
          </ContactItem>
          <ContactItem>
            +90 (534) 554 32 83
          </ContactItem>
          <ContactItem Icon={Whatsapp}>
            +90 (534) 554 32 83
          </ContactItem>
          <ContactItem Icon={Mail}>
            rotasizkaravan@gmail.com
          </ContactItem>
          <ContactItem Icon={Pin}>
            Aşağıkaraman, 07070 Konyaaltı/Antalya
          </ContactItem>
        </div>
        <div className="mapAspectRatio">
          <iframe
            title="rotasiz-map"
            loading="lazy"
            className="map"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ32OKIVuTwxQRdE93GdMJ4Ls&key=AIzaSyD54TSd_7gV50TdlvvnJR12XaFt22RsXL8"
          />
        </div>
      </div>
    </>
  );
};

export default ContactPage;

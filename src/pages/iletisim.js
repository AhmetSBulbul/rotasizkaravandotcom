import React from "react";
import SEO from "../components/seo";

import { AboutUsFigure } from "../components/figures";
import {
  Call,
  Pin,
  Mail,
} from "../components/icons/solid";
import { Whatsapp } from "../components/icons/colorful";

const ContactItem = ({
  children,
  Icon = Call,
  href,
}) => {
  return (
    <a
      href={href}
      className="font-display font-black text-lg text-black my-4"
    >
      <Icon className="inline-block mr-4 text-2xl" />
      {children}
    </a>
  );
};

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Bize Ulaşın"
        pathname="/iletisim"
      />

      <div className="pageLead">
        <AboutUsFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>Bize Ulaşın</h1>
        </div>
      </div>
      <div className="section-wrap">
        <div className="flex flex-col justify-center mx-auto items-center">
          <ContactItem
            Icon={Call}
            href="tel:05058777888"
          >
            +90 (505) 877 78 88
          </ContactItem>
          <ContactItem
            Icon={Whatsapp}
            href="https://wa.me/905058777888?text=Merhabalar%2C+ben+Rotas%C4%B1z+Karavan+Web+Sitesi+%C3%BCzerinden+ula%C5%9F%C4%B1yorum.+%C4%B0stedi%C4%9Fim+karavan+hakk%C4%B1nda+bilgi+almak+istiyorum"
          >
            +90 (505) 877 78 88
          </ContactItem>
          <ContactItem href="tel:05345543283">
            +90 (534) 554 32 83
          </ContactItem>
          <ContactItem
            Icon={Whatsapp}
            href="https://wa.me/905345543283?text=Merhabalar%2C+ben+Rotas%C4%B1z+Karavan+Web+Sitesi+%C3%BCzerinden+ula%C5%9F%C4%B1yorum.+%C4%B0stedi%C4%9Fim+karavan+hakk%C4%B1nda+bilgi+almak+istiyorum"
          >
            +90 (534) 554 32 83
          </ContactItem>
          <ContactItem
            Icon={Mail}
            href="mailto:rotasizkaravan@gmail.com"
          >
            rotasizkaravan@gmail.com
          </ContactItem>
          <ContactItem Icon={Pin}>
            Aşağıkaraman, 07070 Konyaaltı/Antalya
          </ContactItem>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

import React from "react";
import { Link } from "gatsby";
import { Pages } from "../../constants";
import { StaticImage } from "gatsby-plugin-image";

const ServiceSupportPage = () => {
  return (
    <>
      <div className="pt-24 px-8 flex flex-col">
        <h1 className="text-2xl">
          Üretim Sonrası Destek
        </h1>
        <p>
          Karavanınızla ilgili bir sorun mu var?
          Hemen sizin için ilgilenelim! <br />
          <br />
          Karavanınızla ilgili her türlü tamir ya
          da tadilat için bizimle iletişime
          geçebilirsiniz!
        </p>
        <div className="grid grid-cols-2 grid-rows-2 mt-12 gap-4">
          <Link
            to={Pages.danisma}
            activeClassName="bg-secondary text-white"
            className="w-full h-full p-8 flex font-display font-black text-2xl justify-center items-center bg-white"
          >
            Karavan Danismanligi
          </Link>
          <Link
            to={Pages.planlama}
            activeClassName="bg-secondary text-white"
            className="w-full h-full p-8 flex font-display font-black text-2xl justify-center items-center bg-white"
          >
            Karavan Planlama
          </Link>
          <Link
            to={Pages.imalat}
            activeClassName="bg-secondary text-white"
            className="w-full h-full p-8 flex font-display font-black text-2xl justify-center items-center bg-white"
          >
            Karavan Imalat
          </Link>
          <Link
            to={Pages.destek}
            activeClassName="bg-secondary text-white"
            className="w-full h-full p-8 flex font-display font-black text-2xl justify-center items-center bg-white"
          >
            Karavan Destek
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceSupportPage;

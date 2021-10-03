import React from "react";
import { Link } from "gatsby";
import { Pages } from "../../constants";

import { ServicesFigure } from "../../components/figures";

const ServiceProducePage = () => {
  return (
    <>
      <div className="pageLead">
        <ServicesFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>Hizmetlerimiz</h1>
        </div>
      </div>
      <div className="pt-24 px-8 flex flex-col">
        <h1 className="text-2xl">
          Karavan İmalatı
        </h1>
        <p>
          Hayallerinizi kendi hayaliymiş gibi
          sahiplenen tecrübeli ustalarımız ve
          çalışma arkadaşlarımızla sizin için en
          uygun karavanı üretelim.
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

export default ServiceProducePage;

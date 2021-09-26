import React from "react";
import { Link } from "gatsby";
import { Pages } from "../../constants";

const ServiceConsultingPage = () => {
  return (
    <>
      <div className="pt-24 px-8 flex flex-col">
        <h1 className="text-2xl">
          Karavan Danışmanlığı
        </h1>
        <p>
          Rotasız Karavan olarak araba satın alma,
          bütçe belirleme ve karavan imalatı
          üzerine sorularınızı sorabilirsiniz.
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

export default ServiceConsultingPage;

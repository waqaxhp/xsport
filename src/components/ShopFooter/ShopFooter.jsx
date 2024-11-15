import React from "react";
import AdidasLogo from "./../../assets/brand-01.jpg";
import ConverseLogo from "./../../assets/brand-02.jpg";
import VansLogo from "./../../assets/brand-03.jpg";
import NewBalanceLogo from "./../../assets/brand-04.jpg";
import NikeLogo from "./../../assets/brand-05.jpg";
import PumaLogo from "./../../assets/brand-06.jpg";

export default function ShopFooter() {
  return (
    <div className="flex flex-wrap justify-center gap-4 bg-gray-100 px-4 py-6">
      <img
        src={AdidasLogo}
        alt="Adidas"
        className="h-12 sm:h-16 md:h-20 lg:h-24"
      />
      <img
        src={ConverseLogo}
        alt="Converse"
        className="h-12 sm:h-16 md:h-20 lg:h-24"
      />
      <img src={VansLogo} alt="Vans" className="h-12 sm:h-16 md:h-20 lg:h-24" />
      <img
        src={NewBalanceLogo}
        alt="New Balance"
        className="h-12 sm:h-16 md:h-20 lg:h-24"
      />
      <img src={NikeLogo} alt="Nike" className="h-12 sm:h-16 md:h-20 lg:h-24" />
      <img src={PumaLogo} alt="Puma" className="h-12 sm:h-16 md:h-20 lg:h-24" />
    </div>
  );
}

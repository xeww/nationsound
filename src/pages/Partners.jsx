import "./Partners.css";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Separator from "../components/Separator.jsx";
import PartnerCard from "../components/PartnerCard/PartnerCard.jsx";
import { getPartnersURL } from "../utils/utils.js";
import { useState, useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop.jsx";
import SubTitle from "../components/SubTitle/SubTitle.jsx";
import { BoxIcon } from "../utils/Svgs.jsx";

export default function Partners() {
  const [partnerCards, setPartnerCards] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(getPartnersURL());
      const json = await response.json();
      setPartnerCards(
        json.map((object) => (
          <PartnerCard
            key={object.id}
            logoSource={object.acf.logo_partenaire}
            partnerType={object.acf.type_de_partenaire}
            partnerName={object.acf.nom_du_partenaire}
            partnerWebsite={object.acf.site_web_du_partenaire}
          />
        ))
      );
    })();
  }, []);

  return (
    <>
      <div className="main-wrapper">
        <Header />
        <Separator margin="30" />
        <SubTitle svgIcon={<BoxIcon />} text="Nos partenaires" />
        <div className="partner-cards-container">{partnerCards}</div>
        <Separator margin="30" />
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
}

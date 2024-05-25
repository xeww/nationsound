import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Separator from "../components/Separator.jsx";
import PartnerCard from "../components/PartnerCard/PartnerCard.jsx";
import { getPartnersURL } from "../utils/utils.js";
import { useState, useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop.jsx";

async function fetchPartners() {
  const response = await fetch(getPartnersURL());
  const jsonResponse = await response.json();
  return jsonResponse;
}

export default function Partners() {
  const [partnerCards, setPartnerCards] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await fetchPartners();
      setPartnerCards(
        data.map((object) => (
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
        {partnerCards}
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
}

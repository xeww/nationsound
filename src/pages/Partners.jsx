import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Separator from "../components/Separator.jsx";
import PartnerCard from "../components/PartnerCard/PartnerCard.jsx";

{
  /**
   * temporary
   **/
}
import airbnb from "../assets/airbnb.png";
import ubereats from "../assets/ubereats.png";
import spotify from "../assets/spotify.png";
import ticketmaster from "../assets/ticketmaster.png";

export default function Partners() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <Separator margin="30" />

        <PartnerCard
          logoSource={airbnb}
          partnerType="Hébergement"
          partnerName="AirBNB"
        />

        <PartnerCard
          logoSource={ubereats}
          partnerType="Restauration"
          partnerName="Uber Eats"
        />

        <PartnerCard
          logoSource={spotify}
          partnerType="Technologie"
          partnerName="Spotify"
        />

        <PartnerCard
          logoSource={ticketmaster}
          partnerType="Technologie"
          partnerName="Ticket Master"
        />
      </div>
      <Footer />
    </>
  );
}

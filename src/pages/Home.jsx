import "./Home.css";
import Header from "../components/Header/Header.jsx";
import SubTitle from "../components/SubTitle/SubTitle.jsx";
import ArtistCard from "../components/ArtistCard/ArtistCard.jsx";
import Map from "../components/Map/Map.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Separator from "../components/Separator.jsx";
import { useContext, useEffect, useState } from "react";
import { ConcertsContext } from "../App.jsx";
import { CalendarIcon, MapPinIcon } from "../utils/Svgs.jsx";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop.jsx";
import ConcertCard from "../components/ConcertCard/ConcertCard.jsx";

export default function Home() {
  const concerts = useContext(ConcertsContext);
  const [cards, setCards] = useState(null);

  useEffect(() => {
    if (concerts) {
      const filteredConcerts = concerts.filter((object) => object.acf.a_venir);
      setCards(
        filteredConcerts.map((object) => (
          // <ArtistCard
          //   key={object.id}
          //   artist={object.acf.nom_artiste}
          //   imageSource={object.acf.cover_image}
          // />
          <ConcertCard
            key={object.id}
            imageSource={object.acf.cover_image}
            artistName={object.acf.nom_artiste}
            location={object.acf.lieu}
            date={object.acf.date}
            hour={object.acf.heure}
          />
        ))
      );
    }
  }, [concerts]);

  return (
    <>
      <div className="main-wrapper">
        <Header />
        <Separator margin="15" />
        <SubTitle svgIcon={<CalendarIcon />} text="Concerts à venir" />
        <div className="artist-cards-container">{cards}</div>
        <Separator margin="20" />
        <SubTitle svgIcon={<MapPinIcon />} text="Carte interactive" />
        <Map />
        <Separator margin="30" />
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
}

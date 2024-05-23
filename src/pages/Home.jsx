import Header from "../components/Header/Header.jsx";
import SubTitle from "../components/SubTitle.jsx";
import ArtistCard from "../components/ArtistCard.jsx";
import Map from "../components/Map/Map.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Separator from "../components/Separator.jsx";

import calendarIcon from "../assets/calendar.svg";
import locationIcon from "../assets/location.svg";
import { useContext, useEffect, useState } from "react";
import { ConcertsContext } from "../App.jsx";

export default function Home() {
  const concerts = useContext(ConcertsContext);
  const [cards, setCards] = useState(null);

  useEffect(() => {
    if (concerts) {
      const filteredConcerts = concerts.filter((object) => object.acf.a_venir);
      setCards(
        filteredConcerts.map((object) => (
          <ArtistCard
            key={object.id}
            artist={object.acf.nom_artiste}
            imageSource={object.acf.cover_image}
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
        <SubTitle icon={calendarIcon} text="Concerts à venir" />
        {cards}
        <Separator margin="20" />
        <SubTitle icon={locationIcon} text="Carte interactive" />
        <Map />
        <Separator margin="30" />
      </div>
      <Footer />
    </>
  );
}

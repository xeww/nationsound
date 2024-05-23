import { ConcertsContext } from "../App.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ConcertCard from "../components/ConcertCard/ConcertCard.jsx";
import Separator from "../components/Separator.jsx";
import { useContext, useEffect, useState } from "react";
import Input from "../components/Input/Input.jsx";
import { CalendarIcon, MapPinIcon, MusicIcon } from "../utils/Svgs.jsx";

export default function AllConcerts() {
  const [cards, setCards] = useState(null);
  const concerts = useContext(ConcertsContext);

  useEffect(() => {
    if (concerts) {
      setCards(
        concerts.map((object) => (
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
        <Input svgIcon={<CalendarIcon />} placeholder="Rechercher par date" />
        <Input svgIcon={<MapPinIcon />} placeholder="Rechercher par lieu" />
        <Input svgIcon={<MusicIcon />} placeholder="Rechercher par artiste" />
        <Separator margin="25" />
        {cards}
        <Separator margin="30" />
      </div>
      <Footer />
    </>
  );
}

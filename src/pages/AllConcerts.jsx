import { ConcertsContext } from "../App.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ConcertCard from "../components/ConcertCard/ConcertCard.jsx";
import Separator from "../components/Separator.jsx";
import FilterButton from "../components/FilterButton/FilterButton.jsx";
import { useContext, useEffect, useState } from "react";

import calendarIcon from "../assets/calendar.svg";
import locationIcon from "../assets/location.svg";

export default function AllConcerts() {
  const [concertCards, setConcertCards] = useState(null);
  const concerts = useContext(ConcertsContext);

  useEffect(() => {
    if (concerts) {
      setConcertCards(
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
        <FilterButton icon={calendarIcon} text="Date" clickHandler={() => {}} />
        <FilterButton icon={locationIcon} text="Lieu" clickHandler={() => {}} />
        <Separator margin="25" />
        {concertCards}
        <Separator margin="30" />
      </div>
      <Footer />
    </>
  );
}

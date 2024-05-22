import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ConcertCard from "../components/ConcertCard/ConcertCard.jsx";
import Separator from "../components/Separator.jsx";
import FilterButton from "../components/FilterButton/FilterButton.jsx";
import { getConcertsURL } from "../utils.js";
import { useEffect, useState } from "react";

import calendarIcon from "../assets/calendar.svg";
import locationIcon from "../assets/location.svg";

async function fetchConcerts() {
  const response = await fetch(getConcertsURL());
  const json = await response.json();
  return json;
}

export default function AllConcerts() {
  const [concertCards, setConcertCards] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await fetchConcerts();
      setConcertCards(
        data.map((object) => (
          <ConcertCard
            key={object.id}
            imageSource={object.acf.cover_image}
            artistName={object.acf.nom_artiste}
            location={object.acf.lieu}
            date={object.acf.date}
            hour={object.acf.date}
          />
        ))
      );
    })();
  }, []);

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

import { ConcertsContext } from "../App.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ConcertCard from "../components/ConcertCard/ConcertCard.jsx";
import Separator from "../components/Separator.jsx";
import { useContext, useEffect, useState } from "react";
import { CalendarIcon, MapPinIcon, MusicIcon } from "../utils/Svgs.jsx";
import { containsString } from "../utils/utils.js";
import FilterInput from "../components/FilterInput/FilterInput.jsx";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop.jsx";

export default function AllConcerts() {
  const [cards, setCards] = useState(null);
  const concerts = useContext(ConcertsContext);

  const handleFilters = () => {
    if (concerts) {
      const dateFilterInput = document.getElementById("date-filter");
      const locationFilterInput = document.getElementById("location-filter");
      const artistFilterInput = document.getElementById("artist-filter");

      if (dateFilterInput && locationFilterInput && artistFilterInput) {
        const dateFilter = concerts.filter((object) =>
          containsString(dateFilterInput.value, object.acf.date)
        );

        const locationFilter = concerts.filter((object) =>
          containsString(locationFilterInput.value, object.acf.lieu)
        );

        const artistFilter = concerts.filter((object) =>
          containsString(artistFilterInput.value, object.acf.nom_artiste)
        );

        const filteredConcerts = concerts.filter(
          (concert) =>
            dateFilter.includes(concert) &&
            locationFilter.includes(concert) &&
            artistFilter.includes(concert)
        );

        setCards(
          filteredConcerts.map((object) => (
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
    }
  };

  useEffect(() => {
    handleFilters();
  }, [concerts]);

  return (
    <>
      <div className="main-wrapper">
        <Header />
        <Separator margin="15" />
        <FilterInput
          id="date-filter"
          svgIcon={<CalendarIcon />}
          placeholder="Rechercher par date"
          onChange={handleFilters}
        />
        <FilterInput
          id="location-filter"
          svgIcon={<MapPinIcon />}
          placeholder="Rechercher par lieu"
          onChange={handleFilters}
        />
        <FilterInput
          id="artist-filter"
          svgIcon={<MusicIcon />}
          placeholder="Rechercher par artiste"
          onChange={handleFilters}
        />
        <Separator margin="25" />
        {cards}
        <Separator margin="30" />
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
}

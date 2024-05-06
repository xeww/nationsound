import Header from "../components/Header/Header.jsx";
import SubTitle from "../components/SubTitle.jsx";
import ArtistCard from "../components/ArtistCard.jsx";
import Map from "../components/Map/Map.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Separator from "../components/Separator.jsx";

import calendarIcon from "../assets/calendar.svg";
import locationIcon from "../assets/location.svg";

export default function Home() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <Separator margin="15" />
        <SubTitle icon={calendarIcon} text="Concerts à venir" />
        <ArtistCard artist="Coldplay" />
        <ArtistCard artist="Coldplay" />
        <ArtistCard artist="Coldplay" />
        <Separator margin="20" />
        <SubTitle icon={locationIcon} text="Carte interactive" />
        <Map />
        <Separator margin="30" />
      </div>
      <Footer />
    </>
  );
}

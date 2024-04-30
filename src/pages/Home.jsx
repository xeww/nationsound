import Header from "../components/Header.jsx";
import SubTitle from "../components/SubTitle.jsx";
import ArtistCard from "../components/ArtistCard.jsx";
import Map from "../components/Map.jsx";
import Footer from "../components/Footer.jsx";

import "./Home.css";

import calendarIcon from "../assets/calendar.svg";
import locationIcon from "../assets/location.svg";

export default function Home() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <SubTitle icon={calendarIcon} text="Concerts à venir" />
        <ArtistCard artist="Coldplay" />
        <SubTitle icon={locationIcon} text="Carte interactive" />
      </div>
      <Map />
      <Footer />
    </>
  );
}

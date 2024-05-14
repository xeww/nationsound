import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ConcertCard from "../components/ConcertCard/ConcertCard.jsx";
import Separator from "../components/Separator.jsx";

import gims from "../assets/gims.png";

export default function AllConcerts() {
  return (
    <>
      <div class="main-wrapper">
        <Header />
        <Separator margin="30" />
        <ConcertCard />
      </div>
      <Footer />
    </>
  );
}

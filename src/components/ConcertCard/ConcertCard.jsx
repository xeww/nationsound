import Button1 from "../Button1.jsx";

import "./ConcertCard.css";
import gims from "../../assets/gims.png";

export default function ConcertCard() {
  return (
    <div className="concert-card-container">
      <img src={gims} alt="Photo de Maitre Gims" />
      <div className="concert-card-bottom shadow">
        <div className="concert-card-bottom-left">
          <p className="title-font">Maitre Gims</p>
          <p className="text-body-font">Paris, Parc des Princes</p>
          <Button1 text="Voir" />
        </div>
        <div className="concert-card-bottom-right">
          <p className="title-font">20 Mai</p>
          <div className="concert-card-bottom-right-seperator"></div>
          <p className="text-body-font">20h30</p>
        </div>
      </div>
    </div>
  );
}

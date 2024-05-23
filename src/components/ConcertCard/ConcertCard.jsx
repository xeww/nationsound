import Button1 from "../Button1.jsx";

import "./ConcertCard.css";

export default function ConcertCard({
  imageSource,
  artistName,
  location,
  date,
  hour,
}) {
  return (
    <div className="concert-card-container">
      <img src={imageSource} alt={"Photo de " + artistName} />
      <div className="concert-card-bottom shadow">
        <div className="concert-card-bottom-left">
          <p className="title-font">{artistName}</p>
          <p className="text-body-font">{location}</p>
          <Button1 text="Voir" />
        </div>
        <div className="concert-card-bottom-right">
          <p className="title-font">{date}</p>
          <div className="concert-card-bottom-right-seperator"></div>
          <p className="text-body-font">à {hour}</p>
        </div>
      </div>
    </div>
  );
}

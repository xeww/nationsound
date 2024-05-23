import "./ArtistCard.css";
import Button1 from "../Button1.jsx";
import { Link } from "react-router-dom";

export default function ArtistCard({ artist, imageSource }) {
  return (
    <div className="artist-card">
      <img src={imageSource} alt={"Image de" + artist} />
      <div className="artist-card-bottom shadow">
        <p className="title-font">{artist}</p>
        <Link to="programmation">
          <Button1 text="Voir" />
        </Link>
      </div>
    </div>
  );
}

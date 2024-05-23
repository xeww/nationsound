import { Link } from "react-router-dom";
import { ExternalLinkIcon } from "../../utils/Svgs";
import "./NavMenu.css";

export default function NavMenu() {
  return (
    <div className="nav-menu-container">
      <a
        className="text-body-font nav-menu-item nav-menu-item-with-icon"
        target="_blank"
        href="https://ticketmaster.fr"
      >
        Billetterie
        <ExternalLinkIcon />
      </a>
      <Link to="/programmation">
        <p className="text-body-font nav-menu-item">Programmation</p>
      </Link>
      <Link to="/partenaires">
        <p className="text-body-font nav-menu-item">Partenaires</p>
      </Link>
      <Link to="/faq">
        <p className="text-body-font nav-menu-item">FAQ</p>
      </Link>
    </div>
  );
}

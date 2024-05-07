import { Link } from "react-router-dom";

import "./NavMenu.css";

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      color="white"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}

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
      <Link to="/faq">
        <p className="text-body-font nav-menu-item">FAQ</p>
      </Link>
    </div>
  );
}

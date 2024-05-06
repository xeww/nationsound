import { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function NavMenuButton() {
  const [isToggled, setToggled] = useState(false);
  return (
    <button className="button-reset">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z" />
      </svg>
    </button>
  );
}

function NavMenu() {
  return (
    <div className="nav-menu">
      <p>Billetterie</p>
      <p>Programmation</p>
      <p>FAQ</p>
    </div>
  );
}

export default function Header() {
  return (
    <header>
      <nav>
        <NavMenuButton />
        <Link to="/">
          <h1 className="title-font">LIVE EVENTS</h1>
        </Link>
      </nav>
    </header>
  );
}

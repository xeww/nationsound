import { Link } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu.jsx";

import "./Header.css";
import { MenuIcon } from "../../utils/Svgs.jsx";

function NavMenuButton() {
  const handleClick = () => {
    let menu = document.querySelector(".nav-menu-container");
    if (menu) {
      if (menu.style.opacity === "1") {
        menu.style.opacity = "0";
        menu.style.visibility = "hidden";
        menu.style.pointerEvents = "none";
      } else {
        menu.style.opacity = "1";
        menu.style.visibility = "visible";
        menu.style.pointerEvents = "auto";
      }
    }
  };

  return (
    <button className="button-reset" onClick={handleClick}>
      <MenuIcon />
    </button>
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
      <NavMenu />
    </header>
  );
}

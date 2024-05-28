import "./Header.css";
import logo from "../../assets/logo-white.png";
import { Link } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu.jsx";
import { MenuIcon } from "../../utils/Svgs.jsx";

function NavMenuButton() {
  const handleClick = () => {
    let menu = document.querySelector(".nav-menu-container");
    let svg = document.querySelector("nav svg");
    if (menu && svg) {
      if (menu.style.opacity === "1") {
        menu.style.opacity = "0";
        menu.style.visibility = "hidden";
        menu.style.pointerEvents = "none";
        svg.style.rotate = "0deg";
      } else {
        menu.style.opacity = "1";
        menu.style.visibility = "visible";
        menu.style.pointerEvents = "auto";
        svg.style.rotate = "90deg";
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
          <img src={logo} alt="Logo de Nation Sound" />
        </Link>
      </nav>
      <NavMenu />
    </header>
  );
}

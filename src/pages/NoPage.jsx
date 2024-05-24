import "./NoPage.css";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Separator from "../components/Separator.jsx";
import Button1 from "../components/Button1.jsx";
import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <Separator margin="50" />
        <div className="no-page-things">
          <h1 className="title-font">Aucune page trouvée 😓</h1>
          <Link to="/">
            <Button1 text="Retourner à l'accueil" />
          </Link>
        </div>
        <Separator margin="50" />
      </div>
      <Footer />
    </>
  );
}

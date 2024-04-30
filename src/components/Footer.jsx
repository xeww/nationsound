import "./Footer.css";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import snapchat from "../assets/snapchat.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import linkedin from "../assets/linkedin.svg";

export default function Footer() {
  return (
    <footer>
      <p className="title-font">LIVE EVENTS &copy; 2024</p>

      <div className="socials">
        <a href="https://facebook.com" target="_blank">
          <img src={facebook} className="social-badge" />
        </a>
        <a href="https://instagram.com" target="_blank">
          <img src={instagram} className="social-badge" />
        </a>
        <a href="https://snapchat.com" target="_blank">
          <img src={snapchat} className="social-badge" />
        </a>
        <a href="https://twitter.com" target="_blank">
          <img src={twitter} className="social-badge" />
        </a>
        <a href="https://youtube.com" target="_blank">
          <img src={youtube} className="social-badge" />
        </a>
        <a href="https://linkedin.com" target="_blank">
          <img src={linkedin} className="social-badge" />
        </a>
      </div>

      <div className="footer-links">
        <p className="text-body-font">Mentions légales</p>
        <p className="text-body-font">Contact</p>
      </div>
      <p className="text-body-font">Charte données personnelles</p>
    </footer>
  );
}

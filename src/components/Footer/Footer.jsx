import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  SnapchatIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../utils/Svgs";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p className="title-font">LIVE EVENTS &copy; 2024</p>

      <div className="socials">
        <a href="https://facebook.com" target="_blank">
          <FacebookIcon />
        </a>
        <a href="https://instagram.com" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://snapchat.com" target="_blank">
          <SnapchatIcon />
        </a>
        <a href="https://twitter.com" target="_blank">
          <TwitterIcon />
        </a>
        <a href="https://youtube.com" target="_blank">
          <YoutubeIcon />
        </a>
        <a href="https://linkedin.com" target="_blank">
          <LinkedinIcon />
        </a>
      </div>

      <div className="footer-links">
        <p className="text-body-font footer-link">Mentions légales</p>
        <p className="text-body-font footer-link">Contact</p>
      </div>
      <p className="text-body-font footer-link">Charte données personnelles</p>
    </footer>
  );
}

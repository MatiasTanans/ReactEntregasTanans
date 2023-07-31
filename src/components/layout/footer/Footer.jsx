import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <h2>SEGUINOS EN NUESTRAS REDES SOCIALES</h2>
        <ul className="redesContainer">
          <Link to="https://www.instagram.com/" target="_blank">
            <img
              className="logos"
              src="https://res.cloudinary.com/dunwbzf2f/image/upload/v1690761499/ReactEntregasTanans/others/instagram.png"
              alt="Instagram"
            />
          </Link>
          <Link to="https://www.twitter.com/" target="_blank">
            <img
              className="logos"
              src="https://res.cloudinary.com/dunwbzf2f/image/upload/v1690761499/ReactEntregasTanans/others/twitter.png"
              alt="Twitter"
            />
          </Link>
          <Link to="https://www.facebook.com/" target="_blank">
            <img
              className="logos"
              src="https://res.cloudinary.com/dunwbzf2f/image/upload/v1690761499/ReactEntregasTanans/others/facebook.png"
              alt="Facebook"
            />
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/";
import LogoAnn from "../../../assets/Logo/AnnLogo.svg";
import LogoFooter from "../../../assets/Logo/LogoFooter.svg";
import LogoPzd from "../../../assets/Logo/logo-pzd.png";
import imageDandelion from "../../../assets/Images/FooterImages/dandelion-seeds-2483277_1920.png";
import imageFlower from "../../../assets/Images/FooterImages/rose-732361_1280.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__wrapper">
          <img
            className="footer__image image-rotate"
            src={imageDandelion}
            alt="dandelion"
          />
          <div>
            <Link to={routes.home}>
              <img
                src={LogoFooter}
                className="footer__main-logo"
                alt="main-logo"
              />
            </Link>
            <div className="footer__elements">
              <Link to={routes.contact}>
                <button className="footer__button">Napisz do nas</button>
              </Link>
              <p className="footer__address">
                ul.Piaseczyńska 60,<span>00-765 Warszawa</span>
              </p>
              <a href="http://pzd.pl/" target="_blank" rel="noreferrer">
                <img
                  src={LogoPzd}
                  className="footer__logo-pzd"
                  alt="pzd-logo"
                />
              </a>
            </div>
          </div>
          <img className="footer__image " src={imageFlower} alt="flower" />
        </div>
        <div className="footer__details">
          <p>Created by</p>
          <img src={LogoAnn} className="footer__logo" alt="Ann logo" />
        </div>
      </div>
    </>
  );
};

export default Footer;

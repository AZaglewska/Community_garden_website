import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import LogoAnn from "../../../assets/Logo/AnnLogo.svg";
import LogoFooter from "../../../assets/Logo/LogoFooter.svg";
import LogoPzd from "../../../assets/Logo/logo-pzd.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <Link to="/">
            <img src={LogoFooter} className="footer__main-logo" />
          </Link>
        </div>
        <div className="footer__container">
          <div className="footer__elements">
            <h3 className="footer__title">
              Rodzinny Ogród Działkowy <span>Warszawianka</span>
            </h3>
            <p className="footer__address">
              ul.Piaseczyńska 60,<span>00-765 Warszawa</span>
            </p>
          </div>
          <div className="footer__details">
            Created by
            <a href="https://github.com/AZaglewska" target="_blank">
              <img src={LogoAnn} className="footer__logo" alt="logo" />
            </a>
          </div>
        </div>
        <div>
          <a href="http://pzd.pl/" target="_blank">
            <img src={LogoPzd} className="footer__logo-pzd" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

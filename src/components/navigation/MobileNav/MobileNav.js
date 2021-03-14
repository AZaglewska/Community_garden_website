import React from "react";
import { Link } from "react-router-dom";
import "./MobileNav.scss";
import LogoPzd from "../../../assets/Logo/logo-pzd.png";
import MainLogo from "../../../assets/Logo/MainLogo.svg";

const HamburgerMenu = () => {
  return (
    <>
      <nav className="mobile-nav">
        <Link to="/aktualności" className="mobile-nav__link">
          Aktualności
        </Link>

        <div class="mobile-nav__dropdown">
          <button class="mobile-nav__dropbtn">
            <Link
              to="/galeria"
              className="mobile-nav__link arrow-up arrow-down"
            >
              Galeria
            </Link>
          </button>
          <div class="mobile-nav__dropdown-content">
            <Link to="/galeria2018" className="mobile-nav__content-link">
              Galeria 2018
            </Link>
            <Link to="/galeria2019" className="mobile-nav__content-link">
              Galeria 2019
            </Link>
          </div>
        </div>

        <div class="mobile-nav__dropdown">
          <button class="mobile-nav__dropbtn">
            <Link
              to="/galeria"
              className="mobile-nav__link arrow-up arrow-down"
            >
              Regulamin
            </Link>
          </button>
          <div class="mobile-nav__dropdown-content">
            <Link to="/galeria2018" className="mobile-nav__content-link">
              Regulamin 1
            </Link>
            <Link to="/galeria2019" className="mobile-nav__content-link">
              Regulamin 2
            </Link>
          </div>
        </div>
        <Link to="/kontakt" className="mobile-nav__link">
          Opłaty
        </Link>

        <Link to="/kontakt" className="mobile-nav__link">
          Kontakt
        </Link>

        <div className="mobile-nav__logo-container">
          <a href="http://pzd.pl/" target="_blank">
            <img src={LogoPzd} className="mobile-nav__logo-pzd" />
          </a>
        </div>
      </nav>
    </>
  );
};
export default HamburgerMenu;

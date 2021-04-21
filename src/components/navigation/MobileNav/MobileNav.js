import React, { useContext } from "react";
import CommunityGardenContext from "../../../context/context";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/";
import logoPzd from "../../../assets/Logo/logo-pzd.png";
import "./MobileNav.scss";

const MobileNav = () => {
  const context = useContext(CommunityGardenContext);
  const { closeHamburgerMenu } = context;

  return (
    <>
      <nav className="mobile-nav">
        <Link
          to={routes.articles}
          onClick={closeHamburgerMenu}
          className="mobile-nav__link"
        >
          Aktualności
        </Link>
        <div class="mobile-nav__dropdown">
          <button class="mobile-nav__dropbtn" onClick={closeHamburgerMenu}>
            <Link
              to={routes.gallery}
              className="mobile-nav__link arrow-up arrow-down arrow-up"
            >
              Galeria
            </Link>
          </button>
          <div class="mobile-nav__dropdown-content">
            <Link
              to={routes.galleryFlower}
              onClick={closeHamburgerMenu}
              className="mobile-nav__content-link"
            >
              Kwiaty
            </Link>
            <Link
              to={routes.galleryHarvest}
              onClick={closeHamburgerMenu}
              className="mobile-nav__content-link"
            >
              Zbiory
            </Link>
          </div>
        </div>
        <Link
          to={routes.documentManager}
          onClick={closeHamburgerMenu}
          className="mobile-nav__link"
        >
          Dokumenty
        </Link>
        <div class="mobile-nav__dropdown">
          <button class="mobile-nav__dropbtn" onClick={closeHamburgerMenu}>
            <Link
              to={routes.informationManager}
              onClick={closeHamburgerMenu}
              className="mobile-nav__link arrow-up arrow-down"
            >
              Informacje
            </Link>
          </button>
          <div class="mobile-nav__dropdown-content">
            <Link
              to={routes.statute}
              onClick={closeHamburgerMenu}
              className="mobile-nav__content-link"
            >
              Regulamin i Opłaty
            </Link>
            <Link
              to={routes.organizationManager}
              onClick={closeHamburgerMenu}
              className="mobile-nav__content-link"
            >
              Organizacja Działki
            </Link>
          </div>
        </div>
        <Link
          to={routes.contact}
          onClick={closeHamburgerMenu}
          className="mobile-nav__link"
        >
          Kontakt
        </Link>
        <div className="mobile-nav__logo-container">
          <a href="http://pzd.pl/" rel="noreferrer" target="_blank">
            <img src={logoPzd} alt="PZD" className="mobile-nav__logo-pzd" />
          </a>
        </div>
      </nav>
    </>
  );
};
export default MobileNav;

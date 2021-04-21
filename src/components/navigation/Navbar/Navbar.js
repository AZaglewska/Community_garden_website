import React, { useContext } from "react";
import CommunityGardenContext from "../../../context/context";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/";
import HamburgerMenuIcon from "react-hamburger-menu";
import MobileNav from "../MobileNav/MobileNav";
import DynamicImage from "../../DynamicImage/DynamicImage";
import logo from "../../../assets/Logo/MainLogo.svg";
import "./Navbar.scss";

const Navbar = () => {
  const context = useContext(CommunityGardenContext);

  const { isHamburgerMenuOpen, toggleHamburgerMenu } = context;

  return (
    <>
      {isHamburgerMenuOpen ? <MobileNav /> : ""}
      <header className="navbar">
        <div className="navbar__item">
          <Link to={routes.home}>
            <img src={logo} className="navbar__logo" alt="logo" />
          </Link>
        </div>
        <HamburgerMenuIcon
          isOpen={isHamburgerMenuOpen}
          menuClicked={toggleHamburgerMenu}
          width={28}
          height={28}
          strokeWidth={2}
          rotate={0}
          color="white"
          borderRadius={0}
          animationDuration={0.5}
          className="hamburgerMenuIcon"
        />
        <nav className="nav">
          <div className="nav__dropdown">
            <Link to={routes.articles}>
              <button className="nav__dropbtn">Aktualności</button>
            </Link>
          </div>
          <div className="nav__dropdown">
            <Link to={routes.gallery}>
              <button className="nav__dropbtn nav-arrow-down nav-arrow-up ">
                Galeria
              </button>
            </Link>
            <ul className="nav__content">
              <li>
                <Link to={routes.galleryFlower} className="nav__content-link">
                  Kwiaty
                </Link>
              </li>
              <li>
                <Link to={routes.galleryHarvest} className="nav__content-link">
                  Zbiory
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav__dropdown">
            <Link to={routes.documentManager}>
              <button className="nav__dropbtn">Dokumenty</button>
            </Link>
          </div>
          <div className="nav__dropdown">
            <Link to={routes.informationManager}>
              <button className="nav__dropbtn nav-arrow-down nav-arrow-up ">
                Informacje
              </button>
            </Link>
            <ul className="nav__content">
              <li>
                <Link to={routes.statute} className="nav__content-link">
                  Regulamin i Opłaty
                </Link>
              </li>
              <li>
                <Link
                  to={routes.organizationManager}
                  className="nav__content-link"
                >
                  Organizacja Działki
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav__dropdown">
            <Link to={routes.contact}>
              <button className="nav__dropbtn">Kontakt</button>
            </Link>
          </div>
        </nav>
      </header>
      <DynamicImage />
    </>
  );
};

export default Navbar;

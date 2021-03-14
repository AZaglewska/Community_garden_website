import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/";
import DynamicImage from "../../DynamicImage/DynamicImage";
import "./Navbar.scss";
import HamburgerMenuIcon from "react-hamburger-menu";
import MobileNav from "../MobileNav/MobileNav";
import Logo from "../../../assets/Logo/MainLogo.svg";

const Navbar = () => {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  return (
    <>
      {isHamburgerMenuOpen ? <MobileNav /> : ""}

      <header className="navbar">
        <div className="navbar__item">
          <Link to={routes.home}>
            <img src={Logo} className="navbar__logo" alt="logo" />
          </Link>
        </div>
        <HamburgerMenuIcon
          isOpen={isHamburgerMenuOpen}
          menuClicked={() => setHamburgerMenuOpen(!isHamburgerMenuOpen)}
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
                <Link to={routes.gallery1} className="nav__content-link">
                  Galeria 2018
                </Link>
              </li>
              <li>
                <Link to={routes.gallery2} className="nav__content-link">
                  Galeria 2019
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav__dropdown">
            <Link to={routes.regulations}>
              <button className="nav__dropbtn nav-arrow-down nav-arrow-up ">
                Dokumenty
              </button>
            </Link>
            <ul className="nav__content">
              <li>
                <Link to={routes.regulations} className="nav__content-link">
                  Regulamin
                </Link>
              </li>
              <li>
                <Link to={routes.regulations} className="nav__content-link">
                  Wnioski do pobrania
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav__dropdown">
            <Link to={routes.regulations}>
              <button className="nav__dropbtn nav-arrow-down nav-arrow-up ">
                Informacje
              </button>
            </Link>
            <ul className="nav__content">
              <li>
                <Link to={routes.regulations} className="nav__content-link">
                  Opłaty
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

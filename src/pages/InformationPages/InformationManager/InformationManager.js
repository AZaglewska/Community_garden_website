import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../routes";
import boardIcon from "../../../assets/Icons/bulletin-board.svg";
import emailIcon from "../../../assets/Icons/info-email.svg";
import teamIcon from "../../../assets/Icons/team.svg";
import phoneIcon from "../../../assets/Icons/phone-call.svg";
import smartphoneIcon from "../../../assets/Icons/smartphone.svg";
import "./InformationManager.scss";

const InformationManager = () => {
  return (
    <>
      <div className="information-background" />
      <div className="information">
        <div className="information__container">
          <h1 className="information__title">Informacje</h1>
          <Link to={routes.home} className="information__home-link">
            Powrót do strony głównej
          </Link>
        </div>
        <div className="information__wrapper">
          <div>
            <ul className="information__list">
              <div className="information__elements">
                <img
                  src={teamIcon}
                  className="information__icon"
                  alt="team icon"
                />
                <h3 className="information__subtitle">
                  Skład Zarządu ROD Warszawianka
                </h3>
              </div>
              <li>Prezes - Paweł Kruszewski</li>
              <li>Wiceprezes - Karol Pałuba</li>
              <li>I Wiceprezes - Tomasz Wilk</li>
              <li>Skarbnik - Krzysztof Stojek</li>
            </ul>
            <ul className="information__list">
              <div className="information__elements">
                <img
                  src={phoneIcon}
                  className="information__icon"
                  alt="phone icon"
                />
                <h3 className="information__subtitle">
                  Telefon do Biura Zarządu
                </h3>
              </div>
              <h4 className="information__text">
                (w godz. urzędowania) sobota 11:00 - 13:00
              </h4>
              <li>797-954-990</li>
            </ul>
            <ul className="information__list">
              <ul className="information__list">
                <div className="information__elements">
                  <img
                    src={smartphoneIcon}
                    className="information__icon"
                    alt="phone icon"
                  />
                  <h3 className="information__subtitle ">
                    Telefon do gospodarza ogrodu:
                  </h3>
                </div>
                <li> 510-384-436 </li>
              </ul>
              <ul className="information__list">
                <div className="information__elements">
                  <img
                    src={emailIcon}
                    className="information__icon"
                    alt="email icon"
                  />
                  <h3 className="information__subtitle"> e-mail:</h3>
                </div>
                <li>rodwarszawianka@wp.pl</li>
              </ul>
            </ul>
          </div>
          <ul className="information__list">
            <img
              src={boardIcon}
              className="information__icon"
              alt="board icon"
            />
            <h3 className="information__subtitle">Sprawy organizacyjne:</h3>
            <li>
              <Link className="information__link" to={routes.statute}>
                Regulamin i Opłaty
              </Link>
            </li>
            <li>
              <Link
                className="information__link"
                to={routes.organizationManager}
              >
                Organizacja Działki
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default InformationManager;

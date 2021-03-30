import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes/";
import "./InformationManager.scss";
import boardIcon from "../../assets/Icons/bulletin-board.svg";
import emailIcon from "../../assets/Icons/email (1).svg";
import teamIcon from "../../assets/Icons/team.svg";
import phoneIcon from "../../assets/Icons/phone-call.svg";
import smartphoneIcon from "../../assets/Icons/smartphone.svg";

const InformationManager = () => {
  return (
    <div className="information">
      <h1 className="information__title">Informacje</h1>
      <div className="information__wrapper">
        <div>
          <ul className="information__list">
            <h3 className="information__subtitle">
              Skład Zarządu ROD Warszawianka
            </h3>
            <li>Prezes - Paweł Kruszewski</li>
            <li>Wiceprezes - Karol Pałuba</li>
            <li>I Wiceprezes - Tomasz Wilk</li>
            <li>Skarbnik - Krzysztof Stojek</li>
          </ul>
          <ul className="information__list">
            <h3 className="information__subtitle">Telefon do Biura Zarządu</h3>
            <h4>(w godz. urzędowania) sobota 11.00 - 13.00</h4>
            <li>797 954 990</li>
            <h3 className="information__subtitle">
              Telefon do gospodarza ogrodu:
            </h3>
            <li> 510 384 436 </li>
            <h3 className="information__subtitle"> e-mail:</h3>
            <li>rodwarszawianka@wp.pl</li>
          </ul>
        </div>
        <ul className="information__list">
          <h3 className="information__subtitle">Sprawy organizacyjne:</h3>
          <li>
            <Link className="information__link" to={routes.statute}>
              Regulamin
            </Link>
          </li>
          <li>
            <Link className="information__link" to={routes.organizationManager}>
              Organizacja Działki
            </Link>
          </li>
          <li>
            <Link className="information__link" to={routes.organizationManager}>
              Opłaty
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InformationManager;

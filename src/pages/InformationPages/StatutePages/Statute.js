import React, { useContext } from "react";
import CommunityGardenContext from "../../../context/context";
import { Link } from "react-router-dom";
import { routes } from "../../../routes";
import "./Statute.scss";

const Statute = () => {
  const context = useContext(CommunityGardenContext);

  const { statuteData } = context;

  return (
    <>
      <div className="statute">
        <h1 className="statute__title">Regulamin i Opłaty</h1>
        <Link to={routes.informationManager} className="statute__link">
          Powrót do informacji
        </Link>
        <div className="statute__wrapper">
          <ul className="statute__list">
            {statuteData.map((statuteDataElement) => {
              const {
                id,
                statuteIcon,
                statuteFile,
                statuteName,
              } = statuteDataElement;
              return (
                <li key={id} className="statute__element">
                  <img src={statuteIcon} className="statute__icon" />
                  <h3 className="statute__subtitle">{statuteName}</h3>
                  <a
                    href={statuteFile}
                    target="_blank"
                    className="statute__file"
                    rel="noreferrer"
                  >
                    Regulamin.pdf
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="prices">
            <h4 className="prices__title">Opłaty</h4>
            <ul className="prices__list">
              <li>
                <h4 className="prices__subtitle">
                  Wpłaty można dokonać na konto ogrodu w Banku Zachodnim WBK Nr:
                </h4>
                <p className="prices__text">63 1090 1870 0000 1429 7475</p>
                <h4 className="prices__subtitle">W tytule należy podać :</h4>
              </li>

              <li className="prices__elements">
                opłata ogrodowa za działkę nr [...]
              </li>
              <li className="prices__elements">
                (składka członkowska, opłata za prąd według stanu licznika)
              </li>
            </ul>
            <ul className="prices__list">
              <h4 className="prices__subtitle">
                Obliczenie rocznej opłaty za działkę:
              </h4>
              <li className="prices__elements">
                <span>Opłata ogrodowa:</span> 0,90pln za m<sup>2</sup>
              </li>
              <li className="prices__elements">
                <span>Składka członkowska:</span> 6,0 pln
              </li>
              <li className="prices__elements">
                <span>Energia elektryczna:</span> 0,60 pln x (zużycie w kWh)*
              </li>
              <li className="prices__elements prices__smaller-text">
                *zgodnie ze wskazaniem licznika
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statute;

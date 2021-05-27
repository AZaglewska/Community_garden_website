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
      <div className="statute-background" />
      <div className="statute">
        <div className="statute__elements">
          <h1 className="statute__title">Regulamin i Opłaty</h1>
          <Link to={routes.informationManager} className="statute__link">
            Powrót do informacji
          </Link>
        </div>
        <div className="statute__wrapper">
          <ul className="statute__list">
            {statuteData.map((statuteDataElement) => {
              const { id, statuteIcon, statuteFile, statuteName } =
                statuteDataElement;
              return (
                <li key={id} className="statute__element">
                  <img
                    src={statuteIcon}
                    className="statute__icon"
                    alt="statute"
                  />
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
            <h4 className="prices__title">Opłaty na 2021 rok</h4>
            <div className="prices__list">
              <p>
                Zgodnie z postanowieniami{" "}
                <span>Walnego Zebrania Zarządu ROD</span>w roku 2021 zostały
                uchwalone następujące opłaty ogrodowe:
              </p>
              <ul className="prices__list-elements">
                <li className="prices__elements">
                  <span>Opłata ogrodowa:</span> 0,90 zł/m<sup>2</sup>
                </li>
                <li className="prices__elements">
                  <span>Składka członkowska:</span> 6,00 zł
                </li>
                <li className="prices__elements">
                  <span>Energia elektryczna:</span> 0,60 zł/kWh*
                </li>
                <div className="prices__elements prices__smaller-text">
                  *zgodnie ze wskazaniem licznika
                </div>
                <li className="prices__elements">
                  <span>Opłata energetyczna:</span> 15,00 zł/działka
                </li>
                <li className="prices__elements">
                  <span>Wywóz śmieci:</span> 100,00 zł/działka
                </li>
              </ul>
              <li>
                <h4 className="prices__subtitle">
                  Wpłaty można dokonać na konto ogrodu w Banku Zachodnim WBK Nr:
                </h4>
                <p className="prices__text">63 1090 1870 0000 0001 1429 7475</p>
                <h4 className="prices__subtitle">W tytule należy podać :</h4>
              </li>
              <p className="prices__elements">
                opłata ogrodowa za działkę nr [...] (składka członkowska, opłata
                za prąd według stanu licznika)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statute;

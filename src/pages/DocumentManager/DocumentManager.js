import React, { useContext } from "react";
import CommunityGardenContext from "../../context/context";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import gardenIcon from "../../assets/Icons/sprout.svg";
import "./DocumentManager.scss";

const DocumentManager = () => {
  const context = useContext(CommunityGardenContext);

  const { pdfData } = context;

  return (
    <>
      <div className="document-background" />
      <div className="document">
        <div className="document__elements">
          <h1 className="document__title">Dokumenty</h1>
          <Link to={routes.home} className="document__home-link">
            Powrót do strony głównej
          </Link>
        </div>
        <div className="document__wrapper">
          <div className="document__image-wrapper">
            <img
              className="document__image"
              src={gardenIcon}
              alt="garden icon"
            />
          </div>
          <ul className="document__list">
            {pdfData.map((pdfDataElement) => {
              const { id, pdfName, pdfLink, pdfIcon } = pdfDataElement;
              return (
                <li key={id} className="document__element">
                  <div className="document__element-content">
                    <img
                      src={pdfIcon}
                      className="document__element-icon"
                      alt="pdf icon"
                    />
                    <p className="document__element-name">{pdfName}</p>
                  </div>
                  <a
                    href={pdfLink}
                    target="_blank"
                    className="document__element-link"
                    rel="noreferrer"
                  >
                    .pdf
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DocumentManager;

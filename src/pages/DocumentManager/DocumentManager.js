import React, { useContext } from "react";
import CommunityGardenContext from "../../context/context";
import GardenIcon from "../../assets/Icons/sprout.svg";
import "./DocumentManager.scss";

const DocumentManager = () => {
  const context = useContext(CommunityGardenContext);

  const { pdfData } = context;

  return (
    <div className="document">
      <h1 className="document__title">Dokumenty</h1>
      <div className="document__wrapper">
        <div className="document__image-wrapper">
          <img className="document__image" src={GardenIcon} />
        </div>
        <ul className="document__list">
          {pdfData.map((pdfDataElement) => {
            const { id, pdfName, pdfLink, pdfIcon } = pdfDataElement;
            return (
              <li key={id} className="document__element">
                <div className="document__element-content">
                  <img src={pdfIcon} className="document__element-icon" />
                  <p className="document__element-name">{pdfName}</p>
                </div>
                <a
                  href={pdfLink}
                  target="_blank"
                  className="document__element-link"
                >
                  .pdf
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DocumentManager;

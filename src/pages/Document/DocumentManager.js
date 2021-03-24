import React, { useContext } from "react";
import CommunityGardenContext from "../../context/context";
import { Link } from "react-router-dom";
// import "./OrganizationManager.scss";

const OrganizationManager = () => {
  const context = useContext(CommunityGardenContext);

  const { pdfData } = context;

  return (
    <>
      <h1>Dokumenty</h1>

      <div>
        <div>
          <ul>
            {pdfData.map((pdfDataElement) => {
              const { pdfName, pdfLink } = pdfDataElement;
              return (
                <li>
                  <h3>{pdfName}</h3>
                  <a href={pdfLink} target="_blank">
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

export default OrganizationManager;
